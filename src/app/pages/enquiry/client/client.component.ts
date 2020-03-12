import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { User, UserProfile, UserWork, UserContacts, UserSocial, UserSettings } from '../../users/user.model';
import { EnquiryServiceService } from '../../enquiry/enquiry_Service/enquiry-service.service'
import { EnquiryDilogComponent } from '../enquiry-dilog/enquiry-dilog.component'
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  public users: any[];
  selected: false;
  public searchText: string;
  public page: any;
  source: any;
  public settings: Settings;
  client_length: Number;
  enquiry_id:any[]=[];
  constructor(public appSettings: AppSettings,
    public dialog: MatDialog,
    public enquiryService: EnquiryServiceService, private router: Router, ) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    this.get_client()
  }

  get_client() {
    this.enquiryService.get_client().subscribe((res: any) => {
      this.users = res.data
      console.log(this.users)
      this.client_length = res.data.length;
      this.select_status()
      // this.enquiry_field = res.data;
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
  select_status() {
    this.users.forEach(item => item.selected = false);
    console.log(this.users)
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
  delete_all_client() {
    if (this.enquiry_id.length > 0) {
      let r = confirm("you want to delete Enquiry.")
      if (r == true) {
        let obj = {
          id: this.enquiry_id,
        }
        this.enquiryService.bulk_delete_enquiry(obj).subscribe((res: any) => {
          if (res.errors == false) {
            alert("delect Successfull")
          } else {
            alert("not delete")
          }
        })
      } else {

      }
    } else {
      alert('Select Enquiry!');
    }
  }
}
