import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { CompanyService } from '../company.service';
import { CompanysDiolgComponent } from '../companys-diolg/companys-diolg.component';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  public users: any[];
  selected: false;
  public searchText: string;
  public page: any;
  source: any;
  public settings: Settings;
  client_length: Number;
  enquiry_id: any[] = [];
  constructor(public appSettings: AppSettings,
    public dialog: MatDialog, private CompanyService: CompanyService) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    this.get_company()
  }
  get_company() {
    this.CompanyService.get_company().subscribe((doc: any) => {
      this.users = doc
      console.log(doc)
    })
  }

  delete_company(id) {
    console.log(id)
    this.CompanyService.delete_company(id).subscribe((res: any) => {
      if (!res.errors)
        console.log(res);
      this.get_company();
    })
  }

  openSmsDialog(sms) {
    let dialogRef = this.dialog.open(CompanysDiolgComponent, {
      data: {
        user: sms,
        type: "company"
      }
    });
    dialogRef.afterClosed().subscribe((data: any) => {
      console.log(data)
      if (data != null) {
        this.get_company()
      }
    })

  }

  // get_client() {
  //   this.enquiryService.get_client().subscribe((res: any) => {
  //     this.users = res.data
  //     console.log(this.users)
  //     this.client_length = res.data.length;
  //     this.select_status()
  //     // this.enquiry_field = res.data;
  //   })
  // }

}
