import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User, UserProfile, UserWork, UserContacts, UserSocial, UserSettings } from '../user.model';
import { UsersService } from '../users.service';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {
  public form: FormGroup;
  public roleForm: FormGroup;
  can_access_user_list: boolean = false;
  can_access_role: boolean = false;
  can_access_enquiry: boolean = false;
  can_access_lead: boolean = false;
  can_access_client: boolean = false;
  can_access_task: boolean = false;
  can_access_country: boolean = false;
  can_access_region: boolean = false;
  can_access_city: boolean = false;
  editing: boolean = true;
  panelOpenState = false;
  public passwordHide: boolean = true;
  role: boolean = false;
  user_active: Boolean = false;
  enquiry: Boolean = false;
  userRole: any;
  all_comapny: any;
  id: any;
  file: any;
  filename: any;
  keyProfileImage: any;
  urlProfileImage: any;
  //   data =[{id:true,name:"User"},{id:true,name:"User Role"},{id:true,name:"Enquiry"},
  //   {id:true,name:"Lead"},{id:true,name:"Client"},{id:true,name:"Task"},{id:true,name:"Country"},{id:true,name:"region"},
  //   {id:true,name:"City"},{id:true,name:"team Manegmant"},{id:true,name:"data Source"} ,{id:true,name:"Compaing List"},{id:true,name:"Assing Compaing"}
  // ,{id:true,name:"Stage"},{id:true,name:"Discription"},{id:true,name:"Taregt"},{id:true,name:"Forcast"},
  // {id:true,name:"Lead Problity"},{id:true,name:"Drop Reasion"}]
  constructor(public dialogRef: MatDialogRef<UserDialogComponent>, private UsersService: UsersService,
    private AlertService: AlertService,
    @Inject(MAT_DIALOG_DATA) public user: any,
    public fb: FormBuilder) {
    this.form = this.fb.group({
      username: [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      password: [''],
      // password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      position: [''],
      company: [''],
      designation: [''],
      profile: this.fb.group({
        name: null,
        surname: null,
        birthday: null,
        gender: null,
        image: null
      }),
      // work: this.fb.group({
      //   company: null,
      //   position: null,
      //   salary: null
      // }),
      contacts: this.fb.group({
        email: null,
        phone: null,
        address: null
      }),
      social: this.fb.group({
        facebook: null,
        twitter: null,
        google: null
      }),
      settings: this.fb.group({
        isActive: null,
        isDeleted: null,
        // registrationDate: null,
        // joinedDate: null
      })
    });
    this.initForm();
  }

  ngOnInit() {
    this.get_comany();
    this.get_role();
    console.log(this.user)
    if (this.user.type == "role") {
      this.role = true;
      if (this.user.user) {
        this.editing = true;
        this.userRole_setvalue(this.user.user)
      } else {
        this.editing = false;
      }
    } else if (this.user.type == "user") {
      this.role = false;
      if (this.user.user) {
        this.editing = true;
        this.id = this.user.user._id
        // delete this.user.user._id
        this.form.patchValue(this.user.user);
        this.form.get('company').patchValue(this.user.user.company._id)
        this.form.get('position').patchValue(this.user.user.position._id)
      } else {
        this.editing = false;
        this.user = new User();
        this.user.profile = new UserProfile();
        this.user.work = new UserWork();
        this.user.contacts = new UserContacts();
        this.user.social = new UserSocial();
        this.user.settings = new UserSettings();
      }
    }
  }
  get_role() {
    this.UsersService.get_role().subscribe((res: any) => {
      console.log(res)
      this.userRole = res;
    })
  }
  handleFileInput(event: any) {
    var image = event.target.value
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      this.file = event.target.files[0];
      // reader.onload = (event) => { // called once readAsDataURL is completed
      //   this.filename = event.target.result;
      // }
      // console.log(this.file ,event.target ,image);
    }
  }
  get_comany() {
    this.UsersService.get_company().subscribe((res: any) => {
      this.all_comapny = res;
      console.log(this.all_comapny, "//////////////////////")
      // res[0].permission.forEach(element => {
      //   if (element == 'user')
      //     this.user_active = true;
      //   else if (element == "enquiry")
      //     this.enquiry = true;
      // });
    })
  }

  initForm() {
    this.roleForm = this.fb.group({
      user_role: [''],
      parent_id: [''],
      function: [''],
      // parmisions:['']
    })
  }

  close(): void {
    this.dialogRef.close();
  }

  user_role() {
    if (this.editing) {
      this.upadate(this.roleForm.value)
    } else {
      this.add_userrole(this.roleForm.value)
    }
  }

  user_list() {
    if (this.editing == false) {
      if (this.file) {
        this.UsersService.getUrl().subscribe((res: any) => {
          this.keyProfileImage = res.data.key;
          this.urlProfileImage = res.data.url;
          if (this.urlProfileImage) {
            this.UsersService.sendUrl(this.urlProfileImage, this.file).then(resp => {
              if (resp.status === 200) {
                this.form.value.profile.image = this.keyProfileImage;
                this.add_user()
              }
            }).catch(err => {
            })
          }
        });
      } else {
        this.add_user();
      }
    } else {
      delete this.form.value.password
      console.log(this.form.value);
      if (this.file) {
        this.UsersService.getUrl().subscribe((res: any) => {
          this.keyProfileImage = res.data.key;
          this.urlProfileImage = res.data.url;
          if (this.urlProfileImage) {
            this.UsersService.sendUrl(this.urlProfileImage, this.file).then(resp => {
              if (resp.status === 200) {
                this.form.value.profile.image = this.keyProfileImage;
                this.update_user()
              }
            }).catch(err => {
            })
          }
        });
      } else {
        this.update_user()
      }
    }
  }
  add_user() {
    this.UsersService.create_user(this.form.value).subscribe((res: any) => {
      console.log(res)
      if (!res.errors) {
        this.UsersService.user_activity({ routes: "/users", activity: "Add User" }).subscribe(res => {
          this.dialogRef.close(res);
        })
      }
    })
  }
  update_user() {
    this.UsersService.update_user(this.id, this.form.value).subscribe((doc: any) => {
      if (!doc.errors)
        this.AlertService.success("User Update successfull")
      setInterval(a => {
        this.dialogRef.close(doc);
      }, 1000, []);
    })
  }

  add_userrole(data) {
    let privileges = ({
      can_access_user_list: this.can_access_user_list,
      can_access_role: this.can_access_role,
      can_access_enquiry: this.can_access_enquiry,
      can_access_lead: this.can_access_lead,
      can_access_client: this.can_access_client,
      can_access_task: this.can_access_task,
      can_access_country: this.can_access_country,
      can_access_region: this.can_access_region,
      can_access_city: this.can_access_city
    })
    data.privileges = privileges;
    if (data.parent_id == "") {
      delete data.parent_id;
    }
    console.log(data)
    this.UsersService.Create_role(data).subscribe((res: any) => {
      console.log(res)
      this.UsersService.user_activity({ routes: "/users/role", activity: "Add User Role" }).subscribe(res => {
        console.log(res)
      })
    })
  }

  upadate(data) {
    let privileges = ({
      can_access_user_list: this.can_access_user_list,
      can_access_role: this.can_access_role,
      can_access_enquiry: this.can_access_enquiry,
      can_access_lead: this.can_access_lead,
      can_access_client: this.can_access_client,
      can_access_task: this.can_access_task,
      can_access_country: this.can_access_country,
      can_access_region: this.can_access_region,
      can_access_city: this.can_access_city
    })
    data.privileges = privileges;
    if (data.parent_id == "") {
      delete data.parent_id;
    }
    console.log(data)
    this.UsersService.update_role(this.user.user._id, data).subscribe((res: any) => {
      console.log(res)
      this.UsersService.user_activity({ routes: "/users/role", activity: "Edit User role" }).subscribe(res => {
      })
    })
  }

  userRole_setvalue(data) {
    this.roleForm.controls["user_role"].setValue(data.user_role)
    this.roleForm.controls["function"].setValue(data.function)
    if (data.parent_id) {
      this.roleForm.controls["parent_id"].setValue(data.parent_id._id)
    }
    this.can_access_user_list = data.privileges.can_access_user_list
    this.can_access_role = data.privileges.can_access_role
    this.can_access_enquiry = data.privileges.can_access_enquiry
    this.can_access_lead = data.privileges.can_access_lead
    this.can_access_client = data.privileges.can_access_client
    this.can_access_task = data.privileges.can_access_task
    this.can_access_country = data.privileges.can_access_country
    this.can_access_region = data.privileges.can_access_region
    this.can_access_city = data.privileges.can_access_city
  }
}
