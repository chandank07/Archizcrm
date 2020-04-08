import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { EnquiryServiceService } from '../../enquiry/enquiry_Service/enquiry-service.service'
import { SocketService } from '../../../../app/socket.service';
import * as moment from 'moment'; 

@Component({
  selector: 'app-sms-dilog',
  templateUrl: './sms-dilog.component.html',
  styleUrls: ['./sms-dilog.component.scss']
})
export class SmsDilogComponent implements OnInit {
  public form: FormGroup;
  public templateForm: FormGroup;
  public emailForm: FormGroup;
  public sms_send_form: FormGroup;
  public templateEmailForm: FormGroup;
  public email_send_form: FormGroup;
  public remainders: FormGroup;
  emails_tempalte: any;
  intrigation: boolean = false;
  template: boolean = false;
  email: boolean = false;
  template_email: boolean = false;
  send_email: Boolean = false;
  send_sms: Boolean = false;
  remainder:Boolean = false;
  intrigation_email: any;
  sms_tem:any;
  constructor(public dialogRef: MatDialogRef<SmsDilogComponent>, public router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any, public snackBar: MatSnackBar, public fb: FormBuilder,
    public enquiryService: EnquiryServiceService,private srv: SocketService ) {
    this.smsform();
    this.templatesmsform();
    this.templateemailform();
    this.email_form();
    this.email_send();
    this.sms_send();
    this.test_remainder();
  }

  ngOnInit() {
    console.log(moment().toDate())
    if (this.data.type == "intrigation") {
      this.intrigation = true;
      this.set_smsform()
    } else if (this.data.type == "template") {
      this.template = true;
      this.set_temptate_from()
    } else if (this.data.type == "email") {
      this.email = true;
      this.set_emailform()
    } else if (this.data.type == "template_email") {
      this.template_email = true;
      this.set_temptate_emailfrom()
    } else if (this.data.type == "send_email") {
      this.send_email = true;
      console.log(this.data.user)
      this.get_email_template();
      this.get_intrigation_email();
    } else if (this.data.type == "send_sms") {
      this.send_sms = true;
      console.log(this.data.user)
      this.get_sms();
      // this.get_email_template();
      // this.get_intrigation_email();
    }else if (this.data.type == "remainder") {
      console.log(this.data)
      this.remainder = true;
    }

  }
  get_sms(){
    this.enquiryService.gwt_templatesms().subscribe((doc:any) =>{
      this.sms_tem = doc.data
      console.log(this.sms_tem)
    })
  }
  test_remainder() {
    this.remainders = this.fb.group({
      date_time: [''],
      message: [''],
    });
  }
  get_email_template() {
    this.enquiryService.gwt_tempemail().subscribe((res: any) => {
      console.log(res)
      this.emails_tempalte = res.data;
    })
  }
  stage_chnage(mess) {
    this.email_send_form.reset();
    this.email_send_form.get('message').patchValue(mess);
  }
  get_intrigation_email() {
    this.enquiryService.gwt_intemail().subscribe((res: any) => {
      console.log(res)
      this.intrigation_email = res.data;
    })
  }

  set_smsform() {
    if (this.data.user)
      this.form.patchValue(this.data.user)
    else
      console.log("err")
  }
  set_temptate_from() {
    if (this.data.user)
      this.templateForm.patchValue(this.data.user);
    else
      console.log("err")
  }
  set_emailform() {
    if (this.data.user)
      this.emailForm.patchValue(this.data.user)
    else
      console.log("err")
  }
  set_temptate_emailfrom() {
    if (this.data.user)
      this.templateEmailForm.patchValue(this.data.user);
    else
      console.log("err")
  }

  smsform() {
    this.form = this.fb.group({
      api_name: [''],
      api_type: [''],
      http_api: [''],
      kye_message: ['']
    });
  }
  email_send() {
    this.email_send_form = this.fb.group({
      email_template: [''],
      message: ['']
    })
  }
  sms_send() {
    this.sms_send_form = this.fb.group({
      sms_template: [''],
      message: ['']
    })
  }
  templatesmsform() {
    this.templateForm = this.fb.group({
      template_name: [''],
      template_content: [''],
    });
  }
  email_form() {
    this.emailForm = this.fb.group({
      title: [''],
      protocal: [''],
      smtp_host: [''],
      smtp_user: [''],
      smtp_password: [''],
      smtp_port: [''],
    });
  }
  templateemailform() {
    this.templateEmailForm = this.fb.group({
      template_name: [''],
      template_response: [''],
      mail_subject: [''],
      message: ['']
    });
  }

  close(): void {
    this.dialogRef.close();
  }
  submit() {
    // console.log(this.form.value)
    if (this.data.user == null) {
      this.enquiryService.create_sms(this.form.value).subscribe((res: any) => {
        this.dialogRef.close(this.form.value);
      })
    } else {
      this.enquiryService.update_sms(this.data.user._id, this.form.value).subscribe((doc: any) => {
        if (doc.errors) {

        } else {
          this.dialogRef.close(this.form.value);
        }
      })
      console.log("kkk")
    }
  }
  template_Add() {
    if (this.data.user == null) {
      this.enquiryService.create_create_templatesms(this.templateForm.value).subscribe((doc: any) => {
        this.dialogRef.close(this.form.value);
      })
    } else {
      this.enquiryService.update_templatesms(this.data.user._id, this.templateForm.value).subscribe((doc: any) => {
        if (doc.errors) {

        } else {
          this.dialogRef.close(this.templateForm.value);
        }
      })
    }
  }
  email_from() {
    if (this.data.user == null) {
      this.enquiryService.create_create_intemail(this.emailForm.value).subscribe((res: any) => {
        if (res.errors) {

        } else {
          this.dialogRef.close(this.emailForm.value);
        }
      })
    } else {
      this.enquiryService.update_intemail(this.data.user._id, this.emailForm.value).subscribe((res: any) => {
        if (!res.errors) {
          this.dialogRef.close(this.emailForm.value);
        }
      })
    }
  }
  template_email_add() {
    if (this.data.user == null) {
      this.enquiryService.create_create_tememail(this.templateEmailForm.value).subscribe((res: any) => {
        if (res.errors) {

        } else {
          this.dialogRef.close(this.emailForm.value);
        }
      })
    } else {
      this.enquiryService.update_tempemail(this.data.user._id, this.templateEmailForm.value).subscribe((res: any) => {
        if (!res.errors) {
          this.dialogRef.close(this.templateEmailForm.value);
        }
      })
    }
  }
  send_email_add() {
    console.log(this.email_send_form.value)
    let obj = {
      user: this.intrigation_email[0].smtp_user,
      password: this.intrigation_email[0].smtp_password,
      from: this.intrigation_email[0].smtp_user,
      to: this.data.user.email,
      subject: this.intrigation_email[0].title,
      text: this.email_send_form.value.message
    }
    console.info(obj)
    this.enquiryService.send_email(obj).subscribe((doc:any)=>{
      if(doc.errors){

      }else{
        this.dialogRef.close(doc.data);
      }
    })
  }
  set_remainder(){
    this.remainders.value.user_id = this.data.user._id
    this.remainders.value.company_id = this.data.user.company._id
    let remaind_date = moment(this.remainders.value.date_time).subtract(7 ,'hours').add(30 , 'minutes').toDate()
    this.remainders.value.date_time = remaind_date
    console.log(this.remainders.value ,remaind_date)
    this.srv.creat_remainder(this.remainders.value).subscribe((res:any) =>{
      console.log(res)
      if (res) {
        setInterval(a => {
          this.dialogRef.close(res);
        }, 1000, []);
      }
    })
  }
}
