import { Component, OnInit, Input, Output, ViewEncapsulation, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AppSettings } from '../../../../app.settings';
import { Settings } from '../../../../app.settings.model';
import { MenuService } from '../menu.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-vertical-menu',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [MenuService]
})
export class VerticalMenuComponent implements OnInit {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Token': localStorage.getItem('Token')
  });
  @Input('menuItems') menuItems;
  @Input('menuParentId') menuParentId;
  @Output() onClickMenuItem: EventEmitter<any> = new EventEmitter<any>();
  parentMenu: Array<any>;
  public settings: Settings;
  user_clciks: Boolean = false;
  enquiry_clciks: Boolean = false;
  location_clciks: Boolean = false;
  setting_clciks: Boolean = false;
  compaing_clciks: Boolean = false;
  Api_clciks: Boolean = false;
  reports_clciks: Boolean = false;
  company: any;
  show_nav: Boolean = false;
  constructor(public appSettings: AppSettings, public menuService: MenuService, public router: Router,
    private http: HttpClient) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    this.parentMenu = this.menuItems.filter(item => item.parentId == this.menuParentId);
    this.pramision();
  }
  pramision() {
    this.http.get('https://newmeanstrakapi.herokuapp.com/api/user/me', { headers: this.headers }).subscribe((res: any) => {
      this.company = res.data.position.privileges
      console.log(this.company)
      if (this.company) {
        this.show_nav = true;
      }
    })
  }
  user_click() {
    if (this.user_clciks == true) {
      this.user_clciks = false;
    } else {
      this.enquiry_clciks = false;
      this.user_clciks = true;
      this.location_clciks = false;
      this.setting_clciks = false;
      this.compaing_clciks= false;
      this.Api_clciks = false;
      this.reports_clciks = false;
    }
  }
  enquiry_click() {
    if (this.enquiry_clciks == true) {
      this.enquiry_clciks = false;
    } else {
      this.enquiry_clciks = true;
      this.user_clciks = false;
      this.location_clciks = false;
      this.setting_clciks = false;
      this.compaing_clciks= false;
      this.Api_clciks = false;
      this.reports_clciks = false;
    }
  }
  location_click() {
    if (this.location_clciks == true) {
      this.location_clciks = false;
    } else {
      this.enquiry_clciks = false;
      this.user_clciks = false;
      this.location_clciks = true;
      this.setting_clciks = false;
      this.compaing_clciks= false;
      this.Api_clciks = false;
      this.reports_clciks = false;
    }
  }
  setting_click() {
    if (this.setting_clciks == true) {
      this.setting_clciks = false;
    } else {
      this.enquiry_clciks = false;
      this.user_clciks = false;
      this.location_clciks = false;
      this.setting_clciks = true;
      this.compaing_clciks= false;
      this.Api_clciks = false;
      this.reports_clciks = false;
    }
  }
  compaing_click() {
    if (this.compaing_clciks == true) {
      this.compaing_clciks = false;
    } else {
      this.enquiry_clciks = false;
      this.user_clciks = false;
      this.location_clciks = false;
      this.setting_clciks = false;
      this.compaing_clciks= true;
      this.Api_clciks = false;
      this.reports_clciks = false;
    }
  }
  Aip_click() {
    if (this.Api_clciks == true) {
      this.Api_clciks = false;
    } else {
      this.enquiry_clciks = false;
      this.user_clciks = false;
      this.location_clciks = false;
      this.setting_clciks = false;
      this.compaing_clciks= false;
      this.Api_clciks = true;
      this.reports_clciks = false;
    }
  }
  reports_click() {
    if (this.reports_clciks == true) {
      this.reports_clciks = false;
    } else {
      this.enquiry_clciks = false;
      this.user_clciks = false;
      this.location_clciks = false;
      this.setting_clciks = false;
      this.compaing_clciks= false;
      this.Api_clciks = false;
      this.reports_clciks = true;
    }
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

  onClick(menuId) {
    this.menuService.toggleMenuItem(menuId);
    this.menuService.closeOtherSubMenus(this.menuItems, menuId);
    this.onClickMenuItem.emit(menuId);
  }

}
