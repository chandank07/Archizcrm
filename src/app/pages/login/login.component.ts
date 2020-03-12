import { Component ,Inject} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from '../../theme/utils/app-validators';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { LoginService } from './Services/login.service';
import { MatSnackBar } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent {
  public animal: string;
  public name: string;
  show_password:Boolean = false;
  public users: any;
  public Wating_button : boolean = false;
  public form: FormGroup;
  passwod_type = 'password'
  public settings: Settings;
  constructor(public appSettings: AppSettings,public snackBar: MatSnackBar,
     private loginservice: LoginService, public fb: FormBuilder, private alertService:AlertService,
     public dialog: MatDialog,
      public router: Router) {
    this.settings = this.appSettings.settings;
    this.form = this.fb.group({
      'email': [null, Validators.compose([Validators.required, emailValidator])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }


  show_pasword(){
    if(!this.show_password){
    this.show_password = true;
    this.passwod_type = "text"
    }else{
    this.show_password = false;
    this.passwod_type = "password"
    }
  }

  public onSubmit(values: Object): void {
    this.Wating_button = true;
    if (this.form.valid) {
      let userdata = ({
        username: this.form.value.email,
        password: this.form.value.password,
      })
      // const formData = new FormData();
      // formData.append('email', this.form.value.email);
      // formData.append('password', this.form.value.password);
      this.loginservice.login_crm(userdata).subscribe((res: any) => {
        this.users = res;
        console.log(this.users)
        if (!this.users.errors) {
          localStorage.setItem('Token', this.users.data.token);
          if (this.users.status == 200 && this.users.errors == false) {
            // let message = "Login Successfull.!";
            // let action ="OK"
            // this.snackBar.open(message, action, {
            //   duration: 2000,
            // });
            this.router.navigate(['/dashboard'],{ skipLocationChange: true });
            this.Wating_button = false;
            this.alertService.success("User Login Successfull.")
          }else{
            this.alertService.danger(this.users.message)
            this.Wating_button = false;
          }
        } else {
          this.Wating_button = false;
          this.alertService.danger(this.users.message)
        }
      })
    }
  }

  ngAfterViewInit() {
    this.settings.loadingSpinner = false;
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
    // this.Wating_button = false;
  }

}