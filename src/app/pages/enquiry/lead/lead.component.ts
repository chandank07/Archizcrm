import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { User, UserProfile, UserWork, UserContacts, UserSocial, UserSettings } from '../../users/user.model';
import { EnquiryServiceService } from '../../enquiry/enquiry_Service/enquiry-service.service'
import { EnquiryDilogComponent } from '../enquiry-dilog/enquiry-dilog.component'
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.scss']
})
export class LeadComponent implements OnInit {

  public users: any[];
  selected: false;
  public searchText: string;
  public page: any;
  source: any;
  public settings: Settings;
  enquiry_data: any;
  enquiry_langth: Number;
  all_lead_length: Number;
  update_lead_langth: Number;
  update_lead: any;
  enquiry_id: any[] = [];
  constructor(public appSettings: AppSettings,
    public dialog: MatDialog, private router: Router,
    public enquiryService: EnquiryServiceService, public alertService: AlertService) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    this.get_all_lead();
    this.get_todaylead();
    this.get_today_update_lead();
  }
  get_all_lead() {
    this.enquiryService.get_lead().subscribe((res: any) => {
      this.users = res.data
      this.all_lead_length = this.users.length
      console.log(this.users)
      this.select_status()
    })
  }
  get_todaylead() {
    this.enquiryService.get_today_add_lead().subscribe((res: any) => {
      if (res.data == null) {
        this.enquiry_langth = 0;
      } else {
        this.enquiry_data = res.data
        this.enquiry_langth = res.data.length;
      }
    })
  }
  get_today_update_lead() {
    this.enquiryService.get_today_update_lead().subscribe((res: any) => {
      console.log(res.data)
      if (res.data == null) {
        this.update_lead_langth = 0;
      } else {
        this.update_lead = res.data
        this.update_lead_langth = res.data.length;
      }
    })
  }
  all_enquiry() {
    if (this.users)
      this.users.length = 0;
    this.get_all_lead()
    this.users = this.users;
  }
  today_enquiry() {
    if (this.users)
      this.users.length = 0;
    this.get_todaylead()
    this.users = this.enquiry_data;
  }
  today_update() {
    if (this.users)
      this.users.length = 0;
    this.get_today_update_lead()
    this.users = this.update_lead;
  }
  select_status() {
    this.users.forEach(item => item.selected = false);
    console.log(this.users)
  }

  public openUserDialog(user) {
    let dialogRef = this.dialog.open(EnquiryDilogComponent, {
      data: {
        user: user,
        type: "enquiry"
      }
    });
    dialogRef.afterClosed().subscribe((data: any) => {
      if (data.length > 0) {
        this.ngOnInit();
      }
    })
  }

  public openUserDialog1(user) {
    let dialogRef = this.dialog.open(EnquiryDilogComponent, {
      data: {
        user: user,
        type: "lead"
      }
    });
    dialogRef.afterClosed().subscribe((data: any) => {
      if (data.length > 0) {
        this.ngOnInit();
      }
    })
  }
  Client(user) {
    console.log(user._id)
    this.enquiryService.convert_to_client(user._id).subscribe((res: any) => {
      console.log(res)
      if (res.errors == false) {
        this.ngOnInit();
        let obj = {
          enquiry_id: user._id,
          status: 2,
        }
        this.enquiryService.create_status(obj).subscribe((res: any) => {
          console.log(res)
        })
      }

    })
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
    this.router.navigate(['/Lead/leaddetals', user._id])
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
          this.enquiry_id.splice(indexedDB, 1);
        }
      });
    }
  }
  convert_client() {
    if (this.enquiry_id.length > 0) {
      let obj = {
        id: this.enquiry_id
      }
      this.enquiryService.bulk_client_convert(obj).subscribe((res: any) => {
        if (res.errors == false) {
          this.get_all_lead();
          this.enquiry_id.forEach(element => {
            let obj = {
              enquiry_id: element,
              status: 2,
            }
            this.enquiryService.create_status(obj).subscribe((res: any) => {
              console.log(res);
            })
          });
        }
      })
    } else {
      alert("select Lead")
      console.log("sfhdgfhsgfhsh" ,this.enquiry_id)
    }
  }
  
}