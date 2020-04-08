import { Component, OnInit, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AppSettings } from '../../../../app.settings';
import { Settings } from '../../../../app.settings.model';
import { MenuService } from '../menu.service';
import { MatMenuTrigger } from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-horizontal-menu',
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [MenuService]
})
export class HorizontalMenuComponent implements OnInit {

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Token': localStorage.getItem('Token')
  });
  @Input('menuParentId') menuParentId;
  public menuItems: Array<any>;
  public settings: Settings;
  company:any;
  users:Boolean = false;
  user_role:Boolean = false;
  user_activity:Boolean = false;
  enquiry:Boolean = false;
  lead:Boolean = false;
  client:Boolean = false;
  task:Boolean = false;
  country:Boolean = false;
  region:Boolean = false;
  city:Boolean = false;
  team_management:Boolean = false;
  data_source:Boolean = false;
  com_list:Boolean = false;
  assing_comp:Boolean = false;
  satge:Boolean = false;
  disc:Boolean = false;
  target:Boolean = false;
  forcast:Boolean = false;
  lead_pro:Boolean = false;
  drop_res:Boolean = false;
  enq_typ:Boolean = false;
  enq_sorc:Boolean = false;
  custom_type:Boolean = false;
  qr_code :Boolean = false;
  email :Boolean = false;
  SMS :Boolean = false;
  report:Boolean = false;
  show_nav:Boolean = false;
  @ViewChild(MatMenuTrigger, { static: false }) trigger: MatMenuTrigger;
  constructor(public appSettings: AppSettings, public menuService: MenuService, public router: Router,
    private http: HttpClient) {
    this.settings = this.appSettings.settings;
  }
  
  ngOnInit() {
    this.pramision();
    this.menuItems = this.menuService.getHorizontalMenuItems();
    this.menuItems = this.menuItems.filter(item => item.parentId == this.menuParentId);
  }
  
  pramision(){
    this.http.get('https://newmeanstrakapi.herokuapp.com/api/user/me',{ headers: this.headers }).subscribe((res:any) =>{
      this.company = res.data.position.privileges
      console.log(this.company)
      if(this.company){
        this.show_nav =  true;
      }
    })

    
  //    this.http.get('http://localhost:5000/api/company/get_all', { headers: this.headers }).subscribe((doc: any) => {
  //     this.company =  doc[0].permission;
  //     console.log(this.company)
 
  //   this.company.forEach(element => {
  //     if(element == "user"){
  //       this.users = true;
  //     }else if(element == "user_role"){
  //       this.user_role = true;
  //     }else if(element == "user_activity"){
  //       this.user_activity = true;
  //     }else if(element == "enquiry"){
  //       this.enquiry = true;
  //     }else if(element == "lead"){
  //       this.lead = true;
  //     }else if(element == "client"){
  //       this.client = true;
  //     }else if(element == "task"){
  //       this.task = true;
  //     }else if(element == "country"){
  //       this.country = true;
  //     }else if(element == "region"){
  //       this.region = true;
  //     }else if(element == "city"){
  //       this.city = true;
  //     }else if(element == "team_management"){
  //       this.team_management = true;
  //     }else if(element == "data_source"){
  //       this.data_source = true;
  //     }else if(element == "com_list"){
  //       this.com_list = true;
  //     }else if(element == "assing_comp"){
  //       this.assing_comp = true;
  //     }else if(element == "satge"){
  //       this.satge = true;
  //     }else if(element == "disc"){
  //       this.disc = true;
  //     }else if(element == "target"){
  //       this.target = true;
  //     }else if(element == "forcast"){
  //       this.forcast = true;
  //     }else if(element == "lead_pro"){
  //       this.lead_pro = true;
  //     }else if(element == "drop_res"){
  //       this.drop_res = true;
  //     }else if(element == "enq_typ"){
  //       this.enq_typ = true;
  //     }else if(element == "enq_sorc"){
  //       this.enq_sorc = true;
  //     }else if(element == "custom_type"){
  //       this.custom_type = true;
  //     }else if(element == "qr_code"){
  //       this.qr_code = true;
  //     }else if(element == "email"){
  //       this.email = true;
  //     }else if(element == "SMS"){
  //       this.SMS = true;
  //     }else if(element == "report"){
  //       this.report = true;
  //     }
  //   });
  //   console.log(this.users)
  // })
  }

  ngAfterViewInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (this.settings.fixedHeader) {
          let mainContent = document.getElementById('main-content');
          if (mainContent) {
            mainContent.scrollTop = 0;
          }
        }
        else {
          document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
        }
      }
    });
  }

}