import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { User, UserProfile, UserWork, UserContacts, UserSocial, UserSettings } from '../../users/user.model';
import { EnquiryServiceService } from '../../enquiry/enquiry_Service/enquiry-service.service';
import { EnquiryDilogComponent } from '../enquiry-dilog/enquiry-dilog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';
import { SettingService } from '../../seting/setting.service';
import { LocationService } from '../../locations/location.service';
import { CompaignServiceService } from '../../../pages/compaign/compaign-service.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss']
})
export class EnquiryComponent implements OnInit {
  @Input() bindName:String;

  public users: any[];
  selected: false;
  checked: any;
  public searchText: Boolean;
  searchText1: any;
  public page: any;
  source: any;
  enquiry_data: any;
  public settings: Settings;
  enquiry_langth: Number;
  all_enquiry_length: Number;
  today_update_enquiry_data: any;
  today_update_length: Number;
  all_drop_enquiry_length: Number;
  acgive_enquiry_length: Number;
  acgive_enquiry: any;
  all_drop_enquiry: any;
  All_enquiry: any;
  isValid: Boolean = false;
  enq_type = false;
  cus_type = false;
  source1 = false;
  state = false;
  city1 = false;
  mob_no = false;
  select_enq = false;
  enquiry_id: any[] = []
  enquiry_type: any;
  customer_type: any;
  enquiry_source: any;
  state_data: any;
  city_data: any;
  comp:any;
  buttonshow:Boolean = false;
  selected_comp:any;
  all_selct_camp:any[] =[]
  constructor(public appSettings: AppSettings,
    public dialog: MatDialog, private router: Router,
    public enquiryService: EnquiryServiceService, private alertService: AlertService,
    private SettingService: SettingService, private loc: LocationService, private CompaignServiceService: CompaignServiceService,
    private CookieService:CookieService) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    console.log(this.bindName)
    this.get_assing();
    // this.alertService.info('this is an info alert');
    // this.get_enquiry();
    this.get_todayenquiry();
    this.today_update_enquiry();
    this.get_all_drop_enquiry1();
    // this.get_active_enquiry();
    this.get_active_enquiry_type();
    // // this.get_source()
    // this.enquiryService.get_componay_wise_enquiry().subscribe((res: any) => {
    //   this.users = res.data
    //   console.log(this.users)
    //   // this.enquiry_field = res.data;
    // })
  }
  get_assing() {
    this.all_selct_camp.length = 0;
    this.comp = JSON.parse(this.CookieService.get('compain'))
    console.log(this.comp);
    this.comp.forEach(element => {
      if(element.active == true){
        this.all_selct_camp.push(element._id);
      }
    });
    this.get_enquiry(this.all_selct_camp);
    this.get_enq(this.all_selct_camp)
    console.log(this.all_selct_camp,"active arrr")
    if(this.all_selct_camp.length > 1 || this.all_selct_camp.length == 0){
      this.buttonshow = false;
    }else{
      this.buttonshow = true;
      this.selected_comp = this.all_selct_camp;
    }
    
    // this.CompaignServiceService.get_assing_comp().subscribe((doc:any) =>{
    //   this.comp =doc.data;
    // })
  }
  get_enq(data){
    this.enquiryService.get_team_wise_activ_enquiry(data).subscribe((doc:any) =>{
      if (doc.data != null) {
        this.users = doc.data
        console.log(this.users)
        this.acgive_enquiry_length = doc.data.length;
        this.select_status();
        // this.alertService.info(this.acgive_enquiry_length  + ' Active Enquiry found!');
      } else {
        this.acgive_enquiry_length = 0;
      }
    })
  }
  someMethod(data){
    console.log(data)
    if(data.length > 1 || data.length == 0){
      this.buttonshow = false;
    }else{
      this.buttonshow = true;
      this.selected_comp = data;
    }
  }
  get_active_enquiry_type() {
    this.SettingService.get_enquiry_type().subscribe((res: any) => {
      this.enquiry_type = res.data;
    })
    this.SettingService.get_customer_type().subscribe((doc: any) => {
      this.customer_type = doc.data
    })
    this.SettingService.get_enquiry_source().subscribe((doc: any) => {
      this.enquiry_source = doc.data
    })
    this.loc.get_active_region().subscribe((doc: any) => {
      this.state_data = doc.data
    })
    this.loc.get_active_city().subscribe((doc: any) => {
      this.city_data = doc.data
    })
  }
  enqu(id) {
    if (id && this.users) {
      this.users.length = 0;
      let obj = {
        status: 0,
        enquiry_type: id
      }
      this.enquiryService.get_enq_type(obj).subscribe((res: any) => {
        this.users = res.data
      })
    } else {
      let obj = {
        status: 0,
        enquiry_type: id
      }
      this.enquiryService.get_enq_type(obj).subscribe((res: any) => {
        this.users = res.data
      })
    }
  }
  cust(id) {
    if (id && this.users) {
      this.users.length = 0;
      let obj = {
        status: 0,
        customer_type: id
      }
      this.enquiryService.get_cust_type(obj).subscribe((res: any) => {
        this.users = res.data
      })
    } else {
      let obj = {
        status: 0,
        customer_type: id
      }
      this.enquiryService.get_cust_type(obj).subscribe((res: any) => {
        this.users = res.data
      })
    }
  }
  sour(id) {
    if (id && this.users) {
      this.users.length = 0;
      let obj = {
        status: 0,
        source: id
      }
      this.enquiryService.get_sorce_wise(obj).subscribe((res: any) => {
        this.users = res.data
      })
    } else {
      let obj = {
        status: 0,
        source: id
      }
      this.enquiryService.get_sorce_wise(obj).subscribe((res: any) => {
        this.users = res.data
      })
    }
  }
  state_select(id) {
    if (id && this.users) {
      this.users.length = 0;
      let obj = {
        status: 0,
        state: id
      }
      this.enquiryService.get_state_wise(obj).subscribe((res: any) => {
        this.users = res.data
      })
    } else {
      let obj = {
        status: 0,
        state: id
      }
      this.enquiryService.get_state_wise(obj).subscribe((res: any) => {
        this.users = res.data
      })
    }
  }
  city_select(id) {
    if (id && this.users.length) {
      this.users.length = 0;
      let obj = {
        status: 0,
        city: id
      }
      this.enquiryService.get_city_wise(obj).subscribe((res: any) => {
        this.users = res.data
      })
    } else {
      let obj = {
        status: 0,
        city: id
      }
      this.enquiryService.get_city_wise(obj).subscribe((res: any) => {
        this.users = res.data
      })
    }
  }
  show1() {
    this.cus_type = false;
    this.source1 = false;
    this.state = false;
    this.city1 = false;
    this.mob_no = false;
    this.enq_type = true;
  }
  show2() {
    this.cus_type = true;
    this.source1 = false;
    this.state = false;
    this.city1 = false;
    this.mob_no = false;
    this.enq_type = false;
  }
  show3() {
    this.cus_type = false;
    this.source1 = true;
    this.state = false;
    this.city1 = false;
    this.mob_no = false;
    this.enq_type = false;
  }
  show4() {
    this.cus_type = false;
    this.source1 = false;
    this.state = true;
    this.city1 = false;
    this.mob_no = false;
    this.enq_type = false;
  }
  show5() {
    this.cus_type = false;
    this.source1 = false;
    this.state = false;
    this.city1 = true;
    this.mob_no = false;
    this.enq_type = false;
  }
  show6() {
    this.cus_type = false;
    this.source1 = false;
    this.state = false;
    this.city1 = false;
    this.mob_no = true;
    this.enq_type = false;
  }

  // get_active_enquiry() {
  //   this.enquiryService.get_role_besd_active_enq(this.all_selct_camp).subscribe((doc: any) => {
  //     console.log(doc.data, "Active")
  //     if (doc.data != null) {
  //       this.users = doc.data
  //       this.acgive_enquiry_length = doc.data.length;
  //       this.select_status();
  //       // this.alertService.info(this.acgive_enquiry_length  + ' Active Enquiry found!');
  //     } else {
  //       this.acgive_enquiry_length = 0;
  //     }
  //   })
  // }

  get_all_drop_enquiry1() {
    this.enquiryService.get_all_drop_enquiry(this.all_selct_camp).subscribe((doc: any) => {
      console.log(doc);
      if (doc.data != null) {
        this.all_drop_enquiry = doc.data;
        this.all_drop_enquiry_length = doc.data.length;
      } else {
        this.all_drop_enquiry_length = 0;
      }
    })
  }
  mobile_data() {
    console.info(this.searchText1)
    if (this.searchText1) {
      this.users.length = 0;
      let obj = {
        status: 0,
        mobile: this.searchText1
      }
      this.enquiryService.get_mobile_wise(obj).subscribe((doc: any) => {
        // console.warn (doc.data ,"||||||||||||||")
        this.users = doc.data;
      })
    } else {
      alert("enter number")
    }
  }
  get_enquiry(data) {
    this.enquiryService.get_team_wise_enquiry(data).subscribe((res: any) => {
      this.All_enquiry = res.data;
      console.log(this.All_enquiry)
      this.all_enquiry_length = this.All_enquiry.length
    })
  }

  select_status() {
    this.users.forEach(item => item.selected = false);
    console.log(this.users)
  }

  all_enquiry() {
    if (this.users)
      this.users.length = 0;
    this.get_enquiry(this.all_selct_camp)
    this.users = this.All_enquiry;
  }
  get_todayenquiry() {
    this.enquiryService.get_today_add_enquiry().subscribe((res: any) => {
      console.log(res.data);
      if (res.data != null) {
        this.enquiry_data = res.data
        this.enquiry_langth = res.data.length;
      } else {
        this.enquiry_langth = 0;
      }
    })
  }
  T_U_E_D() {
    if (this.users)
      this.users.length = 0;
    this.today_update_enquiry()
    this.users = this.today_update_enquiry_data;
  }
  T_D_E_D() {
    if (this.users)
      this.users.length = 0;
    this.get_all_drop_enquiry1()
    this.users = this.all_drop_enquiry;
  }
  today_enquiry() {
    if (this.users)
      this.users.length = 0;
    this.get_todayenquiry()
    this.users = this.enquiry_data;
  }
  active_enquiry() {
    if (this.users)
      this.users.length = 0;
    this.get_enq(this.all_selct_camp)
    this.users = this.acgive_enquiry;
  }
  onChange(data) {
    if (data.is_active == false) {
      data.is_active = true;
      this.alertService.info('Enquiry Unblocked Successfull!');
    } else {
      data.is_active = false;
      this.alertService.warning('Enquiry blocked Successfull!');
    }
    let obj = {
      active: data.is_active
    }
    // console.log(data._id, data.is_active)
    this.enquiryService.block_enquiry(data._id, obj).subscribe((res: any) => {
      console.log(res);
      this.get_all_drop_enquiry1();
      // this.alertService.warning('Enquiry Drop Successfull!');
    })

  }

  today_update_enquiry() {
    this.enquiryService.get_today_update_enquiry().subscribe((data: any) => {
      if (data.data != null) {
        this.today_update_enquiry_data = data.data;
        this.today_update_length = data.data.length;
      } else {
        this.today_update_length = 0;
      }
    })
  }



  public openUserDialog(user) {
    let dialogRef = this.dialog.open(EnquiryDilogComponent, {
      data: {
        user: this.selected_comp,
        type: "enquiry"
      }
    });
    dialogRef.afterClosed().subscribe((data: any) => {
      if (data != null) {
        this.alertService.success('Enquiry Add Successfull.!');
        this.ngOnInit();
      }
    })
  }

  public openUserDialog1(user) {
    if (this.enquiry_id.length > 0 || user != undefined) {
      let dialogRef = this.dialog.open(EnquiryDilogComponent, {
        data: {
          user: user,
          enqiry: this.enquiry_id,
          type: "lead"
        }
      });
      dialogRef.afterClosed().subscribe((data: any) => {
        console.log(data);
        if (data != null) {
          this.alertService.success('Enquiry to Lead Convert Successfull.!');
          this.ngOnInit();
        }
      })
    } else {
      this.alertService.danger('Select Enquiry!');
    }
  }
  select_all() {
    this.users.forEach(item => {
      if (item.selected == true) {
        item.selected = false;
        this.enquiry_id.length = 0;
      } else {
        item.selected = true;
        this.enquiry_id.push(item._id);
      }
    });
    console.log(this.enquiry_id);
  }

  onselect(i, id) {
    if (this.users[i].selected == true) {
      this.users[i].selected = true;
      this.enquiry_id.push(id)
    } else {
      this.enquiry_id.forEach((element, indexedDB) => {
        if (element == id) {
          console.log(indexedDB)
          this.enquiry_id.splice(indexedDB, 1);
        }
      });
      //  this.enquiry_id.push(this.enquiry_id[i])
      // if(this.enquiry_id)
    }

    console.log(this.enquiry_id)
  }

  public onPageChanged(event) {
    this.page = event;
    this.ngOnInit();
    if (this.settings.fixedHeader) {
      document.getElementById('main-content').scrollTop = 0;
    }
    else {
      document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
    }
  }
  editenquiry(user) {
    this.router.navigate(['/Lead/enquiryadd', user._id])
  }
  drop_all_enquiry() {
    if (this.enquiry_id.length > 0) {
      let obj = {
        id: this.enquiry_id,
      }
      this.enquiryService.bulk_drop_enquiry(obj).subscribe((res: any) => {
        if (res.errors == false) {
          this.get_enquiry(this.all_selct_camp);
          this.alertService.warning('Enquiry Drop Successfull!');
        } else {
          this.alertService.danger('Error.! , Enquiry Not Drop !');
        }
      })
    } else {
      this.alertService.danger('Select Enquiry!');
    }

  }
  delete_all_enquiry() {
    if (this.enquiry_id.length > 0) {
      let r = confirm("you want to delete Enquiry.")
      if (r == true) {
        let obj = {
          id: this.enquiry_id,
        }
        this.enquiryService.bulk_delete_enquiry(obj).subscribe((res: any) => {
          if (res.errors == false) {
            this.alertService.success("Enqury delete successfull.!")
          } else {
            this.alertService.danger("Enqury Not delete successfull.!")
          }
        })
      } else {

      }
    } else {
      this.alertService.danger('Select Enquiry!');
    }
  }
}
