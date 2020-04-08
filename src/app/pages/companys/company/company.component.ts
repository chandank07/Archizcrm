import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { CompanyService } from '../company.service';
import { CompanysDiolgComponent } from '../companys-diolg/companys-diolg.component';
import { UsersService } from '../../.../../users/users.service';
import { Router } from '@angular/router';

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
  me:any;
  user_lists:any[]=[];
  company_option:Boolean = false;
  show_tree:Boolean = false;
  constructor(public appSettings: AppSettings,
    public dialog: MatDialog, private CompanyService: CompanyService ,private UsersService:UsersService,
    private router :Router) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    // this.get_company()
    this.get_me()
    this.get_comapny();
  }
  // get_company() {
  //   this.CompanyService.get_company().subscribe((doc: any) => {
  //     this.users = doc
  //     console.log(doc)
  //   })
  // }
  get_me(){
    this.UsersService.get_me().subscribe((doc:any) =>{
      this.me = doc.data;
      console.log(this.me)
      if(this.me.company){
        this.company_option = true;
      }else{
        this.company_option = false;
      }
    })
  }
  get_comapny(){
    this.CompanyService.get_company_userwise().subscribe((res:any) =>{
      console.log(res);
      this.users = res;
    })
  }

  delete_company(id) {
    console.log(id)
    this.CompanyService.delete_company(id).subscribe((res: any) => {
      if (!res.errors)
        console.log(res);
      // this.get_company();
    })
  }
  editenquiry(i) {
    this.user_lists.length =0;
    if(this.users[i]){
      this.user_lists.push(this.users[i])
    }
    if(this.show_tree == true)
    this.show_tree = false;
    else
    this.show_tree = true;
    // this.router.navigate(['/Company/enquiryform', user._id])
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
        // this.get_company()
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
