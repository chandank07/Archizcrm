import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LocationService } from '../../locations/location.service';
import { EnquiryServiceService } from '../../enquiry/enquiry_Service/enquiry-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { EnquiryDilogComponent } from '../enquiry-dilog/enquiry-dilog.component';
import { MatDialog } from '@angular/material';
import { TaskDilogComponent } from '../task-dilog/task-dilog.component';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { SettingService } from '../../seting/setting.service';
import { SmsDilogComponent } from '../sms-dilog/sms-dilog.component';
import { AlertService } from 'ngx-alerts';
import { UsersService } from '../../users/users.service';


const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.scss']
})
export class EnquiryFormComponent implements OnInit {

  public personalForm: FormGroup;
  public form: FormGroup;
  public commentform: FormGroup;
  All_region: any;
  all_city: any;
  read: Boolean = false;
  enableEdit = false;
  enableEditIndex = null;
  editing: Boolean = false;
  desprioction: any;
  stage: any;
  id: String;
  data: any;
  dateshow: any;
  comment: any;
  newarr: any[] = [];
  enquiry_type: any;
  customer_type: any;
  user_id: any;
  source: any;
  product: any;
  actions: CalendarEventAction[] = [{
    label: '<i class="material-icons icon-sm white">edit</i>',
    onClick: ({ event }: { event: CalendarEvent }): void => {
      this.openScheduleDialog(event);
      console.log(event)
    }
  }, {
    label: '<i class="material-icons icon-sm white">close</i>',
    onClick: ({ event }: { event: CalendarEvent }): void => {
      console.log(this.events, "delete data")
      this.events = this.events.filter(iEvent => iEvent !== event);
      this.snackBar.open('Event deleted successfully!', null, {
        duration: 1500
      });
    }
  }];
  events: CalendarEvent[] = [];
  snackBar: any;
  constructor(private formBuilder: FormBuilder, private LocationService: LocationService,
    public enquiryService: EnquiryServiceService, private router: Router, private r: ActivatedRoute,
    public dialog: MatDialog, private settingService: SettingService, private AlertService: AlertService,
    private UsersService: UsersService) {
    this.insialform();
    this.commentForm();
  }

  ngOnInit() {
    this.get_me()
    this.get_region();
    this.get_stage();
    this.get_active_equiry_type();
    this.get_active_customer_type();
    this.get_source()
    this.get_product();
    this.id = this.r.snapshot.paramMap.get('id')
    if (this.id) {
      this.get_enqury()
      this.get_comment();
      this.get_timelene();
    }
    // this.personalForm = this.formBuilder.group({
    //   'salutation': [''],
    //   'firstname': ['', Validators.required],
    //   'lastname': ['', Validators.required],
    //   'gender': [''],
    //   'email': ['', Validators.compose([Validators.required, emailValidator])],
    //   'phone': ['', Validators.required],
    //   'zipcode': ['', Validators.required],
    //   'country': ['', Validators.required],
    //   'state' : [''],
    //   'address' : ['']
    // });

  }
  get_product() {
    this.settingService.get_prduct().subscribe((doc: any) => {
      this.product = doc.data;
    })
  }
  get_me() {
    this.UsersService.get_me().subscribe((doc: any) => {
      this.user_id = doc.data
    })
  }
  get_active_equiry_type() {
    this.settingService.get_enquiry_type().subscribe((doc: any) => {
      this.enquiry_type = doc.data;
    })
  }
  get_active_customer_type() {
    this.settingService.Active_customer_type().subscribe((doc: any) => {
      this.customer_type = doc.data;
    })
  }

  get_stage() {
    this.settingService.get_active_stage().subscribe((res: any) => {
      this.stage = res.data;
    })
  }
  get_source() {
    this.settingService.get_enquiry_source().subscribe((doc: any) => {
      this.source = doc.data
    })
  }
  stage_cahange(id) {
    console.log(id)
    this.settingService.get_stage_wise_desp(id).subscribe((res: any) => {
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
          this.newarr.push({ min: diffMins, hr: diffHrs, day: diffDays, date: element.create_date })
        }
      });
      console.log(this.newarr)
    })
  }
  get_enqury() {
    this.enquiryService.get_enquiry_id(this.id).subscribe((res: any) => {
      this.data = res.data[0];
      console.log(res, "====================");
      this.dateshow = res;
      this.setenquiry(this.data)
      this.onBookChange(this.data.state._id)
    })
  }

  get_comment() {
    console.log(this.id)
    this.enquiryService.get_comment(this.id).subscribe((doc: any) => {
      this.comment = doc;
      console.log(this.comment)
      for (let index = 0; index < this.comment.length; index++) {
        // const element = array[index];
        this.comment[index].isEditable = false;

      }
    })
  }

  setenquiry(data) {
    console.log(data)
    this.form.patchValue(data);
    this.form.get('state').patchValue(data.state._id);
    this.form.get('city').patchValue(data.city._id)
  }
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
      product: [''],
      remark: [''],
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
  get_region() {
    this.LocationService.get_region().subscribe((res: any) => {
      this.All_region = res.data
    })
  }
  public onSubmit(values: Object): void {
    if (this.personalForm.valid) {
      // this.router.navigate(['pages/dashboard']);
    }
  }
  save() {
    console.log(this.form.value)
    let data = this.form.value;
    this.enquiryService.update_enquiry(this.data._id, data).subscribe((doc: any) => {
      if (doc.errors == false) {
        this.AlertService.success('Update Enqury successfull')
        let obj = {
          status: 0
        }
        this.enquiryService.update_status(this.data._id, obj).subscribe((res: any) => {
          this.router.navigate(['/Lead/enquiry'])
        })
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
        type: "lead"
      }
    });
    dialogRef.afterClosed().subscribe((data: any) => {
      console.log(data)
      if (data != null) {
        this.router.navigate(['/Lead/lead'])
      }
    })
  }
  remainder(sms) {
    let dialogRef = this.dialog.open(SmsDilogComponent, {
      data: {
        user: this.user_id,
        type: "remainder"

      }
    });
    dialogRef.afterClosed().subscribe((data: any) => {
      console.log(data)
      if (data != null) {
      }
    })
  }
  openSmsDialog(sms) {
    let dialogRef = this.dialog.open(SmsDilogComponent, {
      data: {
        user: this.data,
        type: "send_email"
      }
    });
    dialogRef.afterClosed().subscribe((data: any) => {
      console.log(data)
      if (data != null) {
      }
    })

  }
  comment_delete(i) {
    if (this.comment[i].user_id._id == this.user_id._id) {
      var r = confirm("Are you sure you want to Delete thie Chat.?");
      if (r == true) {
        this.enquiryService.delete_comment(this.comment[i]._id).subscribe((doc:any) =>{
          if(doc){
            this.AlertService.success("This comment is Delete Successfull.!")
            this.get_comment();
          }
        })
      } else {
      }
    } else {
      alert("this message not delete")
    }
  }
  openemailDialog() {
    let dialogRef = this.dialog.open(SmsDilogComponent, {
      data: {
        user: this.data,
        type: "send_sms"
      }
    });
    dialogRef.afterClosed().subscribe((data: any) => {
      console.log(data)
      if (data != null) {
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
  //comment form ==========
  commentForm() {
    this.commentform = this.formBuilder.group({
      stage: [''],
      despriction: [''],
      comment: [''],
    })
  }

  //]==========================
  commentAdd() {
    if (this.commentform.value.comment == "") {
      return console.log("field fill")
    } else {
      this.commentform.value.enquiry_id = this.id;
      console.log(this.commentform.value);
      this.enquiryService.post_commment(this.commentform.value).subscribe((doc: any) => {
        if (doc.errors) {
        } else {
          this.AlertService.success('Comment Add Successfull.')
          this.get_comment();
          this.commentform.reset()
        }
      })
    }
  }
  read_more(i, com) {
    this.editing = true;
    this.comment[i].isEditable = !this.comment[i].isEditable;
  }
  //opent task form ===========
  openScheduleDialog(event) {
    let dialogRef = this.dialog.open(TaskDilogComponent, {
      data: event
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (!result.isEdit) {
          console.log(result, "++++++++++++++++++++++")
          result.color = colors.blue;
          result.actions = this.actions;
          this.enquiryService.task_create(result).subscribe((res: any) => {
          })
          // result.color = colors.blue;
          // result.actions = this.actions;
          // this.events.push(result);
          // this.refresh.next();
        } else {
          //implement edit here
        }
      }
    });
  }
}

export function emailValidator(control: FormControl): { [key: string]: any } {
  var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
  if (control.value && !emailRegexp.test(control.value)) {
    return { invalidEmail: true };
  }
}
