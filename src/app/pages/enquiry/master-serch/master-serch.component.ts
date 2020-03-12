import { Component, OnInit,OnDestroy  } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { User, UserProfile, UserWork, UserContacts, UserSocial, UserSettings } from '../../users/user.model';
import { EnquiryServiceService } from '../../enquiry/enquiry_Service/enquiry-service.service';
import { EnquiryDilogComponent } from '../enquiry-dilog/enquiry-dilog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-master-serch',
  templateUrl: './master-serch.component.html',
  styleUrls: ['./master-serch.component.scss']
})
export class MasterSerchComponent implements OnInit, OnDestroy {

  public users: User[];
  public searchText: string;
  public page: any;
  source: any;
  enquiry_data: any;
  public settings: Settings;
  enquiry_langth: Number;
  all_enquiry_length: Number;
  today_update_enquiry_data: any;
  today_update_length: Number;
  all_drop_enquiry_length: Number;
  all_drop_enquiry: any;
  paramsSub: any
  constructor(public appSettings: AppSettings,
    public dialog: MatDialog, private router: Router,
    private r: ActivatedRoute,
    public enquiryService: EnquiryServiceService, private alertService: AlertService) {
    this.settings = this.appSettings.settings;
    var id = this.r.snapshot.paramMap.get('id')
    this.paramsSub = r.params.subscribe(params => {
      this.searchText = params.id;
      // do stuff with params['id']...
      // this.myData = someDataWithNewId;
    });
  }

  ngOnInit() {
    // var id = this.r.snapshot.paramMap.get('id')
    // console.log(id)
    // this.alertService.info('this is an info alert');
    this.get_enquiry();
    this.get_todayenquiry();
    this.today_update_enquiry();
    this.get_all_drop_enquiry1();
    // // this.get_source()
    // this.enquiryService.get_componay_wise_enquiry().subscribe((res: any) => {
    //   this.users = res.data
    //   console.log(this.users)
    //   // this.enquiry_field = res.data;
    // })
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
  initializeView(id: number) {
    // Make HTTP call and reset this.myData
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
    this.enquiryService.get_all_data().subscribe((res: any) => {
      this.users = res.data
      this.all_enquiry_length = this.users.length;
      console.log(this.users)
    })
  }
  all_enquiry() {
    if (this.users)
      this.users.length = 0;
    this.get_enquiry()
    this.users = this.users;
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
    let dialogRef = this.dialog.open(EnquiryDilogComponent, {
      data: {
        user: user,
        type: "lead"
      }
    });
    dialogRef.afterClosed().subscribe((data: any) => {
      if (data != null) {
        this.alertService.success('Enquiry to Lead Convert Successfull.!');
        this.ngOnInit();
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
    this.router.navigate(['/Lead/enquiryadd', user._id])
  }
  editlead(user) {
    this.router.navigate(['/Lead/leaddetals', user._id])
  }

}

