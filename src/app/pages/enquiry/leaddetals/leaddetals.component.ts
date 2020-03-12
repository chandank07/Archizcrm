import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LocationService } from '../../locations/location.service';
import { EnquiryServiceService } from '../../enquiry/enquiry_Service/enquiry-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { EnquiryDilogComponent } from '../enquiry-dilog/enquiry-dilog.component';
import { MatDialog } from '@angular/material';
import { SettingService } from '../../seting/setting.service';


@Component({
  selector: 'app-leaddetals',
  templateUrl: './leaddetals.component.html',
  styleUrls: ['./leaddetals.component.scss']
})
export class LeaddetalsComponent implements OnInit {
  public personalForm: FormGroup;
  public form: FormGroup;
  public kycform: FormGroup;
  public workhistoryform:FormGroup;
  public educationform:FormGroup;
  public socialform:FormGroup;
  public trevalform:FormGroup;
  All_region: any;
  all_city: any;
  public commentform: FormGroup;
  id: String;
  data: any;
  dateshow: any;
  comment: any;
  typing: boolean = false;
  newarr:any[] =[];
  stage: any;
  desprioction: any;
  constructor(private formBuilder: FormBuilder, private LocationService: LocationService,
    public enquiryService: EnquiryServiceService, private router: Router, private r: ActivatedRoute,
    public dialog: MatDialog,private settingService:SettingService ) {
    this.insialform();
    this.commentForm();
    this.prasnalForm();
    this.kycForm();
    this.workform();
    this.educationForm();
    this.socialForm();
    this.trevalForm();
  }

  ngOnInit() {
    this.get_region();
    this. get_stage();
    this.id = this.r.snapshot.paramMap.get('id')
    if (this.id) {
      this.get_enqury();
      this.get_comment();
      this.get_timelene();
    }
  }

  get_stage() {
    this.settingService.get_stage().subscribe((res: any) => {
      this.stage = res.data;
    })
  }

  stage_cahange(id){
    console.log(id)
    this.settingService.get_stage_wise_desp(id).subscribe((res:any) =>{
      this.desprioction = res.data;
      console.log(this.desprioction)
    })
  }

  get_timelene() {
    this.enquiryService.get_timeline(this.id).subscribe((res: any) => {
      console.log(res);
      res.data.forEach((element, indexedDB) => {
        // newarr.push(Number(element.create_date))
        if (indexedDB + 1 < res.data.length) {
          let endDate: any = new Date(res.data[indexedDB].create_date);
          let purchaseDate: any = new Date(res.data[indexedDB + 1].create_date);
          let diffMs = (purchaseDate - endDate);
          let diffDays = Math.floor(diffMs / 86400000); //day
          let diffHrs = Math.floor((diffMs % 86400000) / 3600000); //hr
          let diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); //min
          console.log(diffMins)
          this.newarr.push({min:diffMins ,hr:diffHrs ,day:diffDays , date:element.create_date })
        }
      });
      console.log(this.newarr)
    })
  }

  get_enqury() {
    this.enquiryService.get_enquiry_id(this.id).subscribe((res: any) => {
      this.data = res.data[0];
      console.log(res, "====================")
      this.dateshow = res;
      this.setenquiry(this.data)
    })
  }

  get_comment() {
    console.log(this.id)
    this.enquiryService.get_comment(this.id).subscribe((doc: any) => {
      this.comment = doc;
      console.log(this.comment)
    })
  }


  setenquiry(data) {
    this.form.patchValue(data);
    this.form.get('state').patchValue(data.state._id);
  }
  // basic form =========================
  insialform() {
    this.form = this.formBuilder.group({
      enquiry_type: [''],
      customer_type: [''],
      organisation_name: [''],
      source: [''],
      mobile_no: [''],
      fist_name: [''],
      last_name: [''],
      email: [''],
      state: [''],
      city: [''],
      pin_code: [''],
      address: [''],
      requrment_product: [''],
      is_active: true,
      status: [0],
      lead: this.formBuilder.group({
        expected_closer_date: [''],
        conversion_probability: [''],
        lead_stage: [''],
        lead_discripton: [''],
        comment: ['']
        // registrationDate: null,
        // joinedDate: null
      })
    });
  }
  //===================================
  //comment form ==========
  commentForm() {
    this.commentform = this.formBuilder.group({
      stage: [''],
      despriction: [''],
      comment: [''],
    })
  }
  //]==========================
  //====prasnal from====================
  prasnalForm() {
    this.personalForm = this.formBuilder.group({
      DOB: [''],
      material_status: [''],
      last_comunication: [''],
      mode_of_comunication: [''],
      remark: [''],
      mpther_toung: [''],
      outher_language: [''],
      correpondence_address: [''],
      correpondence_address1: [''],
      correpondence_address2: [''],
      correpondence_country: [''],
      correpondence_state: [''],
      correpondence_District: [''],
      correpondence_Pincode: [''],
      correpondence_landmark: [''],
      permanent_address: [''],
      permanent_address1: [''],
      permanent_address2: [''],
      permanent_country: [''],
      permanent_state: [''],
      permanent_District: [''],
      permanent_Pincode: [''],
      permanent_landmark: [''],
    })
  }
//KYC================
kycForm() {
  this.kycform = this.formBuilder.group({
    document_name: [''],
    document_No: [''],
    valid_up_to: [''],
  })
}
//===========
//workform=====
workform(){
this.workhistoryform = this.formBuilder.group({
  company_name: [''],
  desigination: [''],
  start_date: [''],
  end_date: [''],
  current_ctc: [''],
})
}
//===========
//=====education==============
educationForm() {
  this.educationform = this.formBuilder.group({
    title_education: [''],
    university_name: [''],
    passing_year: [''],
  })
}
//=============
//=====social=============
socialForm() {
  this.socialform = this.formBuilder.group({
    social_name: [''],
    social_url: [''],
  })
}
//=================
//travel history==========
trevalForm() {
  this.trevalform = this.formBuilder.group({
    country: [''],
    treval_date: [''],
    visa_type: [''],
    from_date: [''],
    to_date: [''],
    is_rejected: [''],
    rejected_remark: [''],
  })
}
//===========
  get_region() {
    this.LocationService.get_region().subscribe((res: any) => {
      this.All_region = res.data
    })
  }
  // public onSubmit(values: Object): void {
  //   if (this.personalForm.valid) {
  //     // this.router.navigate(['pages/dashboard']);
  //   }
  // }
  commentAdd() {
    if (this.commentform.value.comment == "") {
      return console.log("field fill")
    } else {
      this.commentform.value.enquiry_id = this.id;
      console.log(this.commentform.value);
      this.enquiryService.post_commment(this.commentform.value).subscribe((doc: any) => {
        if (doc.errors) {

        } else {
          this.typing = false;
          this.get_comment();
          this.commentform.reset()
        }
      })
    }
  }
///////////add persnal form================

add_persnolform(data){
  data.enquiry_id = this.id;
  console.log(data)
}

//add kyc form==========

add_kycform(data){

}
Add_workhistoryform(data){

}

//add Work from============



  tuch() {
    console.log("sfdsghfdhfgdhgfhdsfh")

    if (this.typing == true) {
      this.typing = false;
    } else {
      this.typing = true;
    }
  }
  save() {
    console.log(this.form.value)
    let data = this.form.value;
    this.enquiryService.add_enquiry(data).subscribe((doc: any) => {
      if (doc.errors == false) {
        this.router.navigate(['/Lead/enquiry'])
      }
    })
  }
  onBookChange(id) {
    this.LocationService.get_region_wise_city(id).subscribe((res: any) => {
      this.all_city = res.data;
    })
  }
  public openUserDialog1() {
    let user = {
      _id: this.id
    }
    let dialogRef = this.dialog.open(EnquiryDilogComponent, {
      data: {
        user: user,
        type: "comment"
      }
    });
    dialogRef.afterClosed().subscribe((data: any) => {
      console.log(data)
      if (data != null) {
        this.get_comment();
        // this.router.navigate([ '/Lead/lead' ])
      }
    })
  }
  Drop() {
    this.enquiryService.drop_enquiry(this.id).subscribe((res: any) => {
      if (res.errors) {

      } else {
        this.router.navigate(['/Lead/lead'])
      }
    })
  }
  Add_educationform(){

  }
  Add_socialform(){
    
  }
}

export function emailValidator(control: FormControl): { [key: string]: any } {
  var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
  if (control.value && !emailRegexp.test(control.value)) {
    return { invalidEmail: true };
  }
}