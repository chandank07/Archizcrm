import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CompanyService } from '../company.service';
import { UsersService } from '../../.../../users/users.service';
import { AlertService } from 'ngx-alerts';
import { SocketService } from '../../../../app/socket.service';


@Component({
  selector: 'app-companys-diolg',
  templateUrl: './companys-diolg.component.html',
  styleUrls: ['./companys-diolg.component.scss']
})
export class CompanysDiolgComponent implements OnInit {
  public company: FormGroup;
  public remainders: FormGroup;
  orderForm: FormGroup;
  orderForm1: FormGroup;
  items: FormArray;
  items1: FormArray;
  toppings = new FormControl();
  editing: Boolean = false;
  company_option: Boolean = true;
  me: any
  remainder: Boolean = false;
  enquiry_Form: Boolean = false;
  enquiry_Form1: Boolean = false;
  company_option1: Boolean = false;
  activ_check: Boolean = false
  forms: any;
  select_option:Boolean = false;
  data = ['user', 'user_role', 'user_activity', 'enquiry', 'lead', 'client', 'task', 'country', 'region', 'city', 'team_management' ,'data_source']
  constructor(public fb: FormBuilder, public dialogRef: MatDialogRef<CompanysDiolgComponent>,
    @Inject(MAT_DIALOG_DATA) public user: any, private CompanyService: CompanyService, private UsersService: UsersService,
    private AlertService: AlertService, private srv: SocketService) { }


  ngOnInit() {
    this.list_form();
    this.get_me();
    this.test_remainder()
    this.dynamicform()
    this.dynamicform1()
    console.log(this.user.type)
    if (this.user.user && this.user.type == "company") {
      this.editing = true;
      this.company.get('company_name').patchValue(this.user.user.company_name);
      this.company.controls['permission'].setValue(this.user.user.permission)
    }
    if (this.user.type == "company") {
      this.remainder = true;
      this.company_option1 = true;
    }
    if (this.user.type == "enquiry_form") {
      this.enquiry_Form = true;
      console.log(this.user)
    }
    if (this.user.type == "enquiry_form1") {
      this.enquiry_Form1 = true;
      console.log(this.user.user.length)
      this.forms = this.user.user
      for (let index = 0; index < this.user.user.length - 1; index++) {
        this.items = this.orderForm.get('items') as FormArray;
        this.items.push(this.createItem())
        this.orderForm.get('items').patchValue(this.user.user)
      }
    }
  }
  test_remainder() {
    this.remainders = this.fb.group({
      date_time: [''],
      message: [''],
    });
  }

  dynamicform() {
    this.orderForm = this.fb.group({
      company_id: '',
      items: this.fb.array([this.createItem()])
    });
  }
  dynamicform1() {
    this.orderForm1 = this.fb.group({
      company_id: '',
      name: '',
      placeholder: '',
      type: '',
      active: this.activ_check,
      value:'',
      items1: this.fb.array([this.createItem1()])
    });
  }
  createItem(): FormGroup {
    return this.fb.group({
      name: '',
      placeholder: '',
      type: '',
      active: this.activ_check,
      value: ''
    });
  }
  createItem1(): FormGroup {
    return this.fb.group({
      value1: '',
    });
  }
  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }
  addItem1(): void {
    this.items1 = this.orderForm1.get('items1') as FormArray;
    this.items1.push(this.createItem1());
  }
  get_me() {
    this.UsersService.get_me().subscribe((doc: any) => {
      this.me = doc.data;
      if (this.me.company) {
        this.company_option = true;
      } else {
        this.company_option = false;
      }
    })
  }

  list_form() {
    this.company = this.fb.group({
      company_name: [''],
      // permission: [''],
    });
  }
  close(): void {
    this.dialogRef.close();
  }
  Uplode() {
    console.log(this.company.value, this.user.user._id);
    this.company.value.company_id = this.user.user.company_id;
    this.CompanyService.update_compony(this.user.user._id, this.company.value).subscribe((res: any) => {
      console.log(res);
      if (res) {
        this.AlertService.success('upadte Successfull.')
        setInterval(a => {
          this.dialogRef.close(res);
        }, 1000, []);
      }
    })
  }

  someMethod(event) {
    console.log(event.target.value , "jsdhfjsdhj")
    if(event.target.value == "select"){
      this.select_option =  true
    }
  }

  submit() {
    if (this.enquiry_Form) {
      this.orderForm.value.company_id = this.user.user

      console.log(this.orderForm.value)
      this.CompanyService.creat_en_from_feld(this.orderForm.value).subscribe((res: any) => {
        console.log(res)
      })
    } else if (this.company_option1) {
      console.log(this.company.value)
      this.CompanyService.Create_company(this.company.value).subscribe((res: any) => {
        if (res) {
          this.AlertService.success('Company Add Successfull.')
          setInterval(a => {
            this.dialogRef.close(res);
          }, 1000, []);
        }
      })
    }
    if (this.enquiry_Form1) {
      this.orderForm.value.items.forEach(element => {
        delete element.placeholder
        delete element.type
        delete element.active
      });
      console.log(this.orderForm.value)
    }
    if(this.select_option){
      console.log(this.orderForm1.value)
    }
  }
}
