import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { UsersService } from '../../users/users.service';
import { ApiConfromationService } from '../api-confromation.service';

@Component({
  selector: 'app-api-dilog',
  templateUrl: './api-dilog.component.html',
  styleUrls: ['./api-dilog.component.scss']
})
export class ApiDilogComponent implements OnInit {
  public emailForm: FormGroup;
  public csvForm: FormGroup;
  public desprictionform: FormGroup;
  checked = false;
  csv: Boolean = false;
  satege_edit: Boolean = false;
  list: boolean = false;
  datasorce: Boolean = false;
  srcResult: any;
  datasource: any;
  country: any;
  region: any;
  city: any;
  parsedCSV;
  all_stage: any;
  Alluser:any;
  constructor(public fb: FormBuilder, public dialogRef: MatDialogRef<ApiDilogComponent>,
    public router: Router,private usersservice:UsersService,private apiConfromationService:ApiConfromationService,
    @Inject(MAT_DIALOG_DATA) public user: any, ) { }

  ngOnInit() {
    this. get_user()
    this.Despriction_form();
    console.log(this.user)

    // if (this.user.type == "stage") {
    //   this.csv = true;
    //   if (this.user.user == null) {
    //     this.satege_edit = false;
    //   } else {
    //     this.satege_edit = true;
    //     this.emailForm.get("stage_name").patchValue(this.user.user.stage_name);
    //   }
    // } else if (this.user.type == "description") {
    //   this.list = true;
    //   if (this.user.user == null) {
    //     this.satege_edit = false;
    //   } else {
    //     this.satege_edit = true;
    //     this.desprictionform.get("despriction").patchValue(this.user.user.despriction);
    //     this.desprictionform.get("stage").patchValue(this.user.user.stage._id);
    //   }
    // } else if (this.user.type == "datasorce") {
    //   this.datasorce = true;
    // }
  }

  get_user(){
    this.usersservice.get_user().subscribe((res:any) =>{
      this.Alluser = res.data;
      console.log(this.Alluser);
    })
  }

  Despriction_form() {
    this.desprictionform = this.fb.group({
      despriction: [''],
      stage: [''],
    });
  }
  close(): void {
    this.dialogRef.close();
  }


  submit() {
    let obj ={
      intrigation_name : this.desprictionform.value.despriction,
      assing_to : this.desprictionform.value.stage,
    }
    console.log(obj);
    this.apiConfromationService.Create_qr_code(obj).subscribe((res: any) =>{
      if(res){
        this.dialogRef.close(res);
      }
    })
    // if (this.list == false){
    //   this.emailForm.value
    //   let data = {
    //     stage_name: this.emailForm.value.stage_name,
    //   }
      
    // } else {
    //   console.log(this.desprictionform.value);

    // }
  }

  Uplode() {
    if (this.list == false) {
      console.log("emailform")
   
    } else {
      console.log("despriction")
     
    }
  }


}