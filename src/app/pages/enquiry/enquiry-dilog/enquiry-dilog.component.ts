import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { User, UserProfile, UserWork, UserContacts, UserSocial, UserSettings } from '../enquiry.model';
import { EnquiryServiceService } from '../../enquiry/enquiry_Service/enquiry-service.service'
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enquiry-dilog',
  templateUrl: './enquiry-dilog.component.html',
  styleUrls: ['./enquiry-dilog.component.scss']
})
export class EnquiryDilogComponent implements OnInit {
  public form: FormGroup;
  public passwordHide: boolean = true;
  form_field: boolean = false;
  source: any;
  received: any = [];
  target: [] = [];
  users: any;
  data: any[] = [];
  title: any[] = ['text', 'number', 'password', 'email', 'date'];
  user2: Object = { value: '' };
  orderForm: FormGroup;
  enquiry_field: any[] = [];
  constructor(public dialogRef: MatDialogRef<EnquiryDilogComponent>, public router: Router,
    @Inject(MAT_DIALOG_DATA) public user: User, public snackBar: MatSnackBar,
    public fb: FormBuilder, public enquiryService: EnquiryServiceService) {


    // this.form = this.fb.group({
    //   enquiry_type: [''],
    //   customer_type: [''],
    //   organisation_name: [''],
    //   source: [''],
    //   mobile_no: [''],
    //   fist_name: [''],
    //   last_name: [''],
    //   email: [''],
    //   state: [''],
    //   city: [''],
    //   pin_code: [''],
    //   address: [''],
    //   requrment_product: ['']
    // });

    this.orderForm = this.fb.group({
      company: ['5df381c37bbfd1117c7bc355'],
      country: ['5df381907bbfd1117c7bc354'],
      // value: [''],
      received: this.fb.array([this.createItem()])
    });
  }

  ngOnInit() {

    console.log(this.user)
    if (!this.user) {
      this.enquiryService.get_enquiry_form().subscribe((res: any) => {
        this.enquiry_field = res.data[0].received;
        this.setFormValue(this.enquiry_field)
      })
    } else {
      this.data.push(this.user)
      this.enquiry_field = this.data[0].received;
      this.setFormValue(this.enquiry_field)
    }
  }

  get_enquiry_form() {
    let data = this.orderForm.value;
    console.log(data)
    this.enquiryService.get_enquiry_form().subscribe((res: any) => {
      this.enquiry_field = res.data;
      console.log(this.enquiry_field)
      if (this.enquiry_field.length > 0) {
        console.log("djsfghdsgfh")
        this.enquiryService.update_enquiry_form(data).subscribe((res: any) => {
          console.log(res)
        })
      } else {
        this.enquiryService.create_enquiry_form(data).subscribe((res: any) => {
          console.log(res)
        })
      }
    })
  }


  createItem(): FormGroup {
    return this.fb.group({
      field_name: [''],
      field_type: [''],
      value: ['']
    });
  }
  // get formArr() {
  //   return this.customerForm.get('distributor') as FormArray;
  // }

  get formarr() {
    return this.orderForm.get('received') as FormArray;
  }
  addItem(): void {
    this.formarr.push(this.createItem());
  }
  removePeriod(i) {
    this.formarr.removeAt(i);
  }

  get_source() {
    this.enquiryService.Enquiry_sourc().subscribe((res: any) => {
      this.source = res.source
      console.log(this.source)
    })
  }

  changeuserRole() {
    const user_role = this.form.get('source').value;
    console.log(user_role)
  }
  close(): void {
    this.dialogRef.close();
  }
  submit() {
    if (this.orderForm.invalid) {
      return;
    }
    // let data = this.form.value;
    let data = this.orderForm.value;
    // data.user = this.enquiry_field[0].user;
    console.log(data)
    this.enquiryService.create_enquiry(data).subscribe((res: any) => {
      this.users = res.data;
      if (res.status == 200 && res.error == false) {
        this.dialogRef.close(this.orderForm.value);
        let message = "Enquiry Create Successfully.";
        let action = "OK"
        this.snackBar.open(message, action, {
          duration: 2000,
        });
      } else {

      }
      console.log("enquiry created", res)
    })
  }
  add_form() {
    console.log("dkjdjgh")
    if (this.form_field == false) {
      // while (this.formarr.length !== 0) { this.formarr.removeAt(0); }
      this.form_field = true;

    } else {
      this.form_field = false;
    }
  }
  setFormValue(data) {
    console.log(data, this.orderForm.get('received').value)

    // for (let index2 = 0; index2 <  data[0].received.length; index2++) {
    //   delete data[0].received[index2]._id
    // }
    for (let index = 0; index < data.length - 1; index++) {
      // console.log(data[index].field_name , index)
      delete data[index]._id
      // this.orderForm.controls['received'].get('field_name').setValue(data[0].received[index].field_name);
      this.formarr.push(this.createItem());
    }

    this.orderForm.get('received').setValue(data);

  }
  create_form() {
    this.get_enquiry_form()
  }
}
