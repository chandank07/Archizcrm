import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { SettingService } from '../setting.service';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-seting-dilog',
  templateUrl: './seting-dilog.component.html',
  styleUrls: ['./seting-dilog.component.scss']
})
export class SetingDilogComponent implements OnInit {
  public emailForm: FormGroup;
  public csvForm: FormGroup;
  public lead_Probility: FormGroup;
  public desprictionform: FormGroup;
  public Drop_reasons:FormGroup;
  public enquiry_type_form:FormGroup;
  public enquiry_source_form: FormGroup;
  checked:Boolean = false;
  // checked = false;
  csv: Boolean = false;
  satege_edit: Boolean = false;
  list: boolean = false;
  datasorce: Boolean = false;
  lead_probility: Boolean = false;
  drop_reason:Boolean = false;
  enquiry_type:Boolean = false;
  active:Boolean=false;
  srcResult: any;
  datasource: any;
  country: any;
  region: any;
  city: any;
  parsedCSV;
  all_stage: any;
  product: Boolean = false;
  enquiry_source:Boolean = false;
  constructor(public fb: FormBuilder, public dialogRef: MatDialogRef<SetingDilogComponent>,
    public router: Router, private settingService: SettingService, private AlertService:AlertService,
    @Inject(MAT_DIALOG_DATA) public user: any, ) { }

  ngOnInit() {
    this.get_stage();
    this.email_form();
    this.Despriction_form();
    this.lead_probility_form();
    this.Drop_reason();
    this.enquiry_types();
    this.enquiry_sources();
    console.log(this.user)

    if (this.user.type == "stage") {
      this.csv = true;
      if (this.user.user == null) {
        this.satege_edit = false;
      } else {
        this.satege_edit = true;
        this.emailForm.get("stage_name").patchValue(this.user.user.stage_name);
        this.checked = this.user.user.isActive
      }
    } else if (this.user.type == "description") {
      this.list = true;
      if (this.user.user == null) {
        this.satege_edit = false;
      } else {
        this.satege_edit = true;
        this.desprictionform.get("despriction").patchValue(this.user.user.despriction);
        this.desprictionform.get("stage").patchValue(this.user.user.stage._id);
        this.checked = this.user.user.isActive
      }
    } else if (this.user.type == "datasorce") {
      this.datasorce = true;
    } else if (this.user.type == "product") {
      this.product = true;
    } else if (this.user.type == "lead_probility") {
      this.lead_probility = true;
      if (this.user.user == null) {
        this.satege_edit = false;
      } else {
        this.satege_edit = true;
        this.lead_Probility.get("Lead_probility_name").patchValue(this.user.user.Lead_probility_name);
        this.lead_Probility.get("probility").patchValue(this.user.user.probility);
        this.checked = this.user.user.isActive
      }
    }  else if (this.user.type == "drop_reason") {
      this.drop_reason = true;
      if (this.user.user == null) {
        this.satege_edit = false;
      } else {
        this.satege_edit = true;
        this.Drop_reasons.get("reason").patchValue(this.user.user.reason);
        this.checked = this.user.user.isActive
      }
    } else if (this.user.type == "enquiry_type") {
      this.enquiry_type = true;
      if (this.user.user == null) {
        this.satege_edit = false;
      } else {
        this.satege_edit = true;
        this.enquiry_type_form.get("enquiry_type").patchValue(this.user.user.enquiry_type);
        this.checked = this.user.user.active;
      }
    } else if (this.user.type == "enquiry_source") {
      this.enquiry_source = true;
      if (this.user.user == null) {
        this.satege_edit = false;
      } else {
        this.satege_edit = true;
        this.enquiry_source_form.get("source").patchValue(this.user.user.source);
        this.checked = this.user.user.isActive
      }
    }
  }

  email_form() {
    this.emailForm = this.fb.group({
      stage_name: [''],
    });
  }
  Despriction_form() {
    this.desprictionform = this.fb.group({
      despriction: [''],
      stage: [''],
    });
  }
  lead_probility_form() {
    this.lead_Probility = this.fb.group({
      Lead_probility_name: [''],
      probility: [''],
    });
  }
  Drop_reason() {
    this.Drop_reasons = this.fb.group({
      reason: [''],
    });
  }
  enquiry_types(){
    this.enquiry_type_form = this.fb.group({
      enquiry_type: [''],
    });
  }
  enquiry_sources(){
    this.enquiry_source_form = this.fb.group({
      source: [''],
    });
  }
  close(): void {
    this.dialogRef.close();
  }

  get_stage() {
    this.settingService.get_active_stage().subscribe((res: any) => {
      this.all_stage = res.data;
    })
  }


  submit() {
    if (this.csv == true) {
      this.emailForm.value
      let data = {
        stage_name: this.emailForm.value.stage_name,
        isActive:this.checked
      }
      this.settingService.Create_stage(data).subscribe((res: any) => {
        console.log(res);
        if (res.errors == false) {
          this.AlertService.success("Stage Add Successfull.")
          setInterval(a=>{
            this.dialogRef.close(data);
          },1000,[]);
        } else {
          this.AlertService.warning("Error")
        }
      })
    } else if (this.list == true) {
      console.log(this.desprictionform.value);
      this.desprictionform.value.isActive = this.checked
      this.settingService.Create_desp(this.desprictionform.value).subscribe((res: any) => {
        if (res.errors == false) {
          this.AlertService.success("Description Add Successfull.")
          setInterval(a=>{
            this.dialogRef.close(res.data);
          },1000,[]);
        }else{
          this.AlertService.warning("Error")
        }
      })
    } else if (this.lead_probility == true) {
      console.log(this.lead_Probility.value)
      this.lead_Probility.value.isActive = this.checked
      this.settingService.Create_lead_probility(this.lead_Probility.value).subscribe((doc: any) => {
        console.log(doc);
        if(doc){
          this.AlertService.success("Lead Probability Add Successfull.")
          setInterval(a=>{
            this.dialogRef.close(doc);
          },1000,[]);
        }else{
          this.AlertService.warning("Error")
        }
      })
    } else if (this.drop_reason == true) {
      this.Drop_reasons.value.isActive = this.checked
      this.settingService.Create_drop_reason(this.Drop_reasons.value).subscribe((doc: any) => {
        console.log(doc);
        if(doc){
          this.AlertService.success("Drop Reasion Add Successfull.")
          setInterval(a=>{
            this.dialogRef.close(doc);
          },1000,[]);
        }else{
          this.AlertService.warning("Error")
        }
      })
    } else if (this.enquiry_type == true) {
      let obj ={
        enquiry_type : this.enquiry_type_form.value.enquiry_type,
        active: this.checked
      }
      console.info(obj)
      this.settingService.Create_enquiry_type(obj).subscribe((doc: any) => {
        console.log(doc);
        if(doc){
          this.AlertService.success("Enquiry Type Add Successfull.")
          setInterval(a=>{
            this.dialogRef.close(doc);
          },1000,[]);
        }else{
          this.AlertService.warning("Error")
        }
      })
    } else if (this.enquiry_source == true) {
      this.enquiry_source_form.value.isActive = this.checked
      this.settingService.Create_enquiry_source(this.enquiry_source_form.value).subscribe((doc: any) => {
        if(doc){
          this.AlertService.success("Enquiry Source Add Successfull.")
          setInterval(a=>{
            this.dialogRef.close(doc);
          },1000,[]);
        }else{
          this.AlertService.warning("Error")
        }
      })
    }
  }

  Uplode() {
    if (this.csv == true) {
      console.log("emailform")
      this.emailForm.value.isActive = this.checked
      this.settingService.update_stage(this.user.user._id, this.emailForm.value).subscribe((res: any) => {
        console.log(res)
        if (res.errors == false) {
          this.AlertService.success("Stage update Successfull.")
          setInterval(a=>{
            this.dialogRef.close(res.data);
          },1000,[]);
        }else{
          this.AlertService.warning("Error")
        }
      })
    } else if (this.list == true) {
      console.log("despriction")
      this.desprictionform.value.isActive = this.checked
      this.settingService.update_desp(this.user.user._id, this.desprictionform.value).subscribe((res: any) => {
        console.log(res)
        if (res.errors == false) {
          this.AlertService.success("Description update Successfull.")
          setInterval(a=>{
            this.dialogRef.close(res.data);
          },1000,[]);
        }else{
          this.AlertService.success("Error")
        }
      })
    } else if (this.lead_probility == true) {
      this.lead_Probility.value.isActive = this.checked
      this.settingService.update_lead_probility(this.user.user._id, this.lead_Probility.value).subscribe((res: any) => {
        console.log(res)
        if (res.errors == false) {
          this.AlertService.success("lead Probability update Successfull.")
          setInterval(a=>{
            this.dialogRef.close(res.data);
          },1000,[]);

        }
      })
    } else if (this.drop_reason == true) {
      console.log(this.lead_Probility.value)
      this.Drop_reasons.value.isActive = this.checked;
      this.settingService.update_drop_reason(this.user.user._id,this.Drop_reasons.value).subscribe((doc: any) => {
        console.log(doc);
        if(doc.errors){
          this.AlertService.warning("Drop Reasion not Update")
        }else{
          this.AlertService.success("Drop reasion update Successfull.")
          setInterval(a=>{
            this.dialogRef.close(doc.data);
          },1000,[]);
        }
      })
    } else if (this.enquiry_type == true) {
      let obj ={
        enquiry_type : this.enquiry_type_form.value.enquiry_type,
        active: this.checked
      }
      this.settingService.update_enquiry_type(this.user.user._id,obj).subscribe((doc: any) => {
        console.log(doc);
        if(doc){
          this.AlertService.success("Enquiry Type update Successfull.")
          setInterval(a=>{
            this.dialogRef.close(doc.data);
          },1000,[]);
        }else{
          this.AlertService.warning("Error")
        }
      })
    } else if (this.enquiry_source == true) {
      this.enquiry_source_form.value.isActive = this.checked;
      this.settingService.update_enquiry_source(this.user.user._id,this.enquiry_source_form.value).subscribe((doc: any) => {
        if(doc){
          this.AlertService.success("Enquiry Source update Successfull.")
          setInterval(a=>{
            this.dialogRef.close(doc.data);
          },1000,[]);
        }else{
          this.AlertService.warning("Error")
        }
      })
    }
  }


}