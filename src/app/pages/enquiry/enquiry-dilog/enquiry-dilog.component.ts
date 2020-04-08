
import { Component, OnInit, Inject , Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { User, UserProfile, UserWork, UserContacts, UserSocial, UserSettings } from '../enquiry.model';
import { EnquiryServiceService } from '../../enquiry/enquiry_Service/enquiry-service.service'
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { LocationService } from '../../locations/location.service';
import { SettingService } from '../../seting/setting.service';
import { CompaignServiceService } from '../../../pages/compaign/compaign-service.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-enquiry-dilog',
  templateUrl: './enquiry-dilog.component.html',
  styleUrls: ['./enquiry-dilog.component.scss']
})
export class EnquiryDilogComponent implements OnInit {
  @Input() childmessage;
  @Input() childMessage: string;
  public form: FormGroup;
  public commentform: FormGroup;
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
  All_region: any;
  all_city: any;
  enquiry: boolean = false;
  comment: boolean = false;
  enquiry_type: any;
  probility: any;
  stage: any;
  discription: any;
  enquiry_source: any;
  active_customer_type: any;
  product: any;
  remark: any;
  constructor(public dialogRef: MatDialogRef<EnquiryDilogComponent>, public router: Router,
    @Inject(MAT_DIALOG_DATA) public user: any, public snackBar: MatSnackBar,
    public fb: FormBuilder, public enquiryService: EnquiryServiceService, private CompaignServiceService: CompaignServiceService,
    private LocationService: LocationService, private SettingService: SettingService ,private CookieService:CookieService) {
    this.commentForm();

    this.form = this.fb.group({
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
      product: [''],
      remark: [''],
      lead: this.fb.group({
        expected_closer_date: [''],
        conversion_probability: [''],
        lead_stage: [''],
        lead_discripton: [''],
        comment: ['']
        // registrationDate: null,
        // joinedDate: null
      })
    });

    // this.orderForm = this.fb.group({
    //   company: ['5df381c37bbfd1117c7bc355'],
    //   country: ['5df381907bbfd1117c7bc354'],
    //   // value: [''],
    //   received: this.fb.array([this.createItem()])
    // });
  }

  ngOnInit() {
    this.get_active_customer_type();
    this.get_region()
    this.get_enquiry_type();
    this.get_stage();
    this.get_probility()
    this.get_source();
    this.get_camp();
    console.log(this.user)
    switch (this.user.type) {
      case "enquiry":
        console.log("enquiry")
        this.enquiry = true;
        this.get_product();
        if (this.user.user == null) {
          console.log("add")
        } else {
          console.log("edit")
          this.setenquiry()
        }
        break;
      case "lead":
        this.enquiry = false;
        this.comment = false;
        console.log("lead");
        break;
      case "comment":
        this.comment = true;
        this.enquiry = false;
        console.log("comment");
    }


  }
  get_camp() {
    this.CompaignServiceService.get_camp_list().subscribe((doc: any) => {
      console.log(doc, "}}}}}}}}}}}")
    })
  }
  get_product() {
    this.SettingService.get_prduct().subscribe((doc: any) => {
      this.product = doc.data
    })
  }
  get_active_customer_type(): void {
    this.SettingService.Active_customer_type().subscribe((doc: any) => {
      this.active_customer_type = doc.data;
      console.warn(this.active_customer_type)
    })
  }
  get_region() {
    this.LocationService.get_active_region().subscribe((res: any) => {
      console.log(res)
      this.All_region = res.data
    })
  }
  get_enquiry_type() {
    this.SettingService.get_enquiry_type().subscribe((doc: any) => {
      this.enquiry_type = doc.data
    })
  }
  get_stage() {
    this.SettingService.get_active_stage().subscribe((doc: any) => {
      console.log(doc)
      this.stage = doc.data
      // this.enquiry_type = doc.data
    })
  }
  get_description() {
    this.SettingService.get_desp().subscribe((doc: any) => {
      console.log(doc)
      // this.enquiry_type = doc.data
    })
  }
  get_probility() {
    this.SettingService.get_lead_probility().subscribe((doc: any) => {
      console.log(doc)
      this.probility = doc.data
    })
  }
  get_source() {
    this.SettingService.get_enquiry_source().subscribe((doc: any) => {
      console.log(doc);
      this.enquiry_source = doc.data
    })
  }
  stage_chnage(id) {
    console.warn(id)
    this.SettingService.get_stage_wise_desp(id).subscribe((doc: any) => {
      console.info(doc)
      this.discription = doc.data
    })
  }
  commentForm() {
    this.commentform = this.fb.group({
      // date: [''],
      comment: [''],
    })
  }
  comment_add() {
    let data = {
      enquiry_id: this.user.user._id,
      comment: this.commentform.value.comment
    }
    console.log(data)
    this.enquiryService.post_commment(data).subscribe((res: any) => {
      console.log(res)
      if (res) {
        this.dialogRef.close(res);
      }
    })
  }
  // get_enquiry_form() {
  //   let data = this.orderForm.value;
  //   console.log(data)
  //   this.enquiryService.get_enquiry_form().subscribe((res: any) => {
  //     this.enquiry_field = res.data;
  //     console.log(this.enquiry_field)
  //     if (this.enquiry_field.length > 0) {
  //       console.log("djsfghdsgfh")
  //       this.enquiryService.update_enquiry_form(data).subscribe((res: any) => {
  //         console.log(res)
  //       })
  //     } else {
  //       this.enquiryService.create_enquiry_form(data).subscribe((res: any) => {
  //         console.log(res)
  //       })
  //     }
  //   })
  // }

  setenquiry() {
    this.onBookChange(this.user.user.state)
    delete this.user.user._id
    // delete this.user.user.is_active
    delete this.user.user.company
    delete this.user.user.enquiry_id
    delete this.user.user.createdAt

    console.log("============...........", this.user.user, this.user.user.city)

    this.form.patchValue(this.user.user)

  }

  // createItem(): FormGroup {
  //   return this.fb.group({
  //     field_name: [''],
  //     field_type: [''],
  //     value: ['']
  //   });
  // }
  // get formArr() {
  //   return this.customerForm.get('distributor') as FormArray;
  // }

  // get formarr() {
  //   return this.orderForm.get('received') as FormArray;
  // }
  // addItem(): void {
  //   this.formarr.push(this.createItem());
  // }
  // removePeriod(i) {
  //   this.formarr.removeAt(i);
  // }

  // get_source() {
  //   this.enquiryService.Enquiry_sourc().subscribe((res: any) => {
  //     this.source = res.source
  //     console.log(this.source)
  //   })
  // }
  close(): void {
    this.dialogRef.close();
  }

  changeuserRole() {
    const user_role = this.form.get('source').value;
    console.log(user_role)
  }
  submit() {
    if (this.form.invalid) {
      return;
    } else {
      this.form.value.camp_list = this.user.user[0]._id;
      let data = this.form.value;
      console.log(data)
      this.enquiryService.add_enquiry(data).subscribe((doc: any) => {
        console.log(doc.data)
        if (doc.data) {
          this.dialogRef.close(this.form.value);
          let obj = {
            enquiry_id: doc.data._id,
            status: doc.data.status,
          }
          this.enquiryService.create_status(obj).subscribe((res: any) => {
            console.log(res)
          })
        }
      })
    }

    /////////////==============================================================================
    // if (this.orderForm.invalid) {
    //   return;
    // }
    // let data = this.form.value;
    // let data = this.orderForm.value;
    // data.user = this.enquiry_field[0].user;
    // console.log(data)
    // this.enquiryService.create_enquiry(data).subscribe((res: any) => {
    //   this.users = res.data;
    //   if (res.status == 200 && res.error == false) {
    //     this.dialogRef.close(this.orderForm.value);
    //     let message = "Enquiry Create Successfully.";
    //     let action = "OK"
    //     this.snackBar.open(message, action, {
    //       duration: 2000,
    //     });
    //   } else {

    //   }
    //   console.log("enquiry created", res)
    // })
  }

  Lead_conv() {
    if (this.user.enqiry.length > 0) {
      let data = {
        id: this.user.enqiry,
        lead: this.form.value.lead,
      }
      this.enquiryService.bulk_lead_update(data).subscribe((res: any) => {
        this.user.enqiry.forEach(element => {
          let obj = {
            status: 1,
            enquiry_id: element
          }
          console.log(obj);
          this.enquiryService.create_status(obj).subscribe((res: any) => {
            console.log(res);
            this.dialogRef.close(res);
          })
        });
      })
    } else {
      let id = this.user.user._id;
      let data = this.form.value.lead;
      this.enquiryService.converter_lead(id, data).subscribe((doc: any) => {
        console.log(doc)
        if (doc.errors == false) {
          this.dialogRef.close(doc);
          let obj = {
            status: 1,
            enquiry_id: id
          }
          this.enquiryService.create_status(obj).subscribe((res: any) => {
            console.log(res);
          })
        }
        // this.ngOnInit();
        // this.dialogRef.close();
      })
    }
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
  // setFormValue(data) {
  //   console.log(data, this.orderForm.get('received').value)

  //   // for (let index2 = 0; index2 <  data[0].received.length; index2++) {
  //   //   delete data[0].received[index2]._id
  //   // }
  //   for (let index = 0; index < data.length - 1; index++) {
  //     // console.log(data[index].field_name , index)
  //     delete data[index]._id
  //     // this.orderForm.controls['received'].get('field_name').setValue(data[0].received[index].field_name);
  //     this.formarr.push(this.createItem());
  //   }

  //   this.orderForm.get('received').setValue(data);

  // }
  // create_form() {
  //   this.get_enquiry_form()
  // }
  onBookChange(id) {
    console.log(id)
    this.LocationService.get_region_wise_city(id).subscribe((res: any) => {
      console.log(res)
      this.all_city = res.data;
    })
  }
}