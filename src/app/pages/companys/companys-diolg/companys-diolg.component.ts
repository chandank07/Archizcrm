import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder , FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CompanyService } from '../company.service';
import { UsersService } from '../../.../../users/users.service';

@Component({
  selector: 'app-companys-diolg',
  templateUrl: './companys-diolg.component.html',
  styleUrls: ['./companys-diolg.component.scss']
})
export class CompanysDiolgComponent implements OnInit {
  public company: FormGroup;
  toppings = new FormControl();
  editing:Boolean= false;
  company_option:Boolean = true;
  me:any
  data = ['user','user_role','user_activity','enquiry' ,'lead' ,'client','task','country','region','city','team_management']
  constructor(public fb: FormBuilder, public dialogRef: MatDialogRef<CompanysDiolgComponent>,
    @Inject(MAT_DIALOG_DATA) public user: any, private CompanyService: CompanyService ,private UsersService:UsersService) { }


  ngOnInit() {
    this.list_form();
    this.get_me();
    if(this.user.user){
      this.editing = true;
      this.company.get('company_name').patchValue(this.user.user.company_name);
      this.company.controls['permission'].setValue(this.user.user.permission)
    }
  }
  
  get_me(){
    this.UsersService.get_me().subscribe((doc:any) =>{
      this.me = doc.data;
      if(this.me.company){
        this.company_option = true;
      }else{
        this.company_option = false;
      }
    })
  }

  list_form() {
    this.company = this.fb.group({
      company_name: [''],
      permission: [''],
    });
  }
  close(): void {
    this.dialogRef.close();
  }
  Uplode(){
    console.log(this.company.value , this.user.user._id);
    this.CompanyService.update_compony(this.user.user._id , this.company.value).subscribe((res:any) =>{
      console.log(res);
      this.dialogRef.close(res);
    })
  }
  submit() {
    console.log(this.company.value)
    this.CompanyService.Create_company(this.company.value).subscribe((res:any) =>{
      console.log(res)
      this.dialogRef.close(res);
    })
  }
}
