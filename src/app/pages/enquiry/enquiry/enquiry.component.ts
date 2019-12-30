import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { User, UserProfile, UserWork, UserContacts, UserSocial, UserSettings } from '../../users/user.model';
import { EnquiryServiceService } from '../../enquiry/enquiry_Service/enquiry-service.service'
import { EnquiryDilogComponent } from '../enquiry-dilog/enquiry-dilog.component'
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss']
})
export class EnquiryComponent implements OnInit {

  public users: User[];
  public searchText: string;
  public page: any;
  source: any;
  public settings: Settings;
  constructor(public appSettings: AppSettings,
    public dialog: MatDialog,
    public enquiryService: EnquiryServiceService) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    // this.get_source()
    this.enquiryService.get_enquiry().subscribe((res: any) => {
      this.users = res.data

      // this.enquiry_field = res.data;
    })
    this.enquiryService.me().subscribe((data: any) => {
      console.log(data)
    })
  }

  public openUserDialog(user) {
    let dialogRef = this.dialog.open(EnquiryDilogComponent, {
      data: user
    });
    dialogRef.afterClosed().subscribe((data: any) => {
      if (data.length > 0) {
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

}
