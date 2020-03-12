import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { User, UserProfile, UserWork, UserContacts, UserSocial, UserSettings } from '../../users/user.model';
import { EnquiryServiceService } from '../../enquiry/enquiry_Service/enquiry-service.service';
import { EnquiryDilogComponent } from '../enquiry-dilog/enquiry-dilog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss']
})
export class EnquiryComponent implements OnInit {

  public users: any[];
  selected: false;
  checked: any;
  public searchText: Boolean;
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
  All_enquiry:any;
  select_enq = false;
  enquiry_id: any[] = []
  constructor(public appSettings: AppSettings,
    public dialog: MatDialog, private router: Router,
    public enquiryService: EnquiryServiceService, private alertService: AlertService) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    // this.alertService.info('this is an info alert');
    this.get_enquiry();
    this.get_todayenquiry();
    this.today_update_enquiry();
    this.get_all_drop_enquiry1();
    this.get_active_enquiry();
    // // this.get_source()
    // this.enquiryService.get_componay_wise_enquiry().subscribe((res: any) => {
    //   this.users = res.data
    //   console.log(this.users)
    //   // this.enquiry_field = res.data;
    // })
  }

  get_active_enquiry() {
    this.enquiryService.get_active_enq().subscribe((doc: any) => {
      if (doc.data != null) {
        this.users = doc.data
        this.acgive_enquiry_length = doc.data.length;
        this.select_status();
        this.alertService.info(this.acgive_enquiry_length  + ' Active Enquiry found!');
      } else {
        this.acgive_enquiry_length = 0;
      }
    })
  }

  get_all_drop_enquiry1() {
    this.enquiryService.get_all_drop_enquiry().subscribe((doc: any) => {
      console.log(doc);
      if (doc.data != null) {
        this.all_drop_enquiry = doc.data;
        this.all_drop_enquiry_length = doc.data.length;
      } else {
        this.all_drop_enquiry_length = 0;
      }
    })
  }

  get_enquiry() {
    this.enquiryService.get_componay_wise_enquiry().subscribe((res: any) => {
      this.All_enquiry = res.data;
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
    this.get_enquiry()
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
    this.get_active_enquiry()
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
        user: user,
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
          this.get_enquiry();
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
