import { Component, OnInit, ViewChild, HostListener, ViewChildren, QueryList , Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { AppSettings } from '../app.settings';
import { Settings } from '../app.settings.model';
import { MenuService } from '../theme/components/menu/menu.service';
import { Location } from '@angular/common';
import { CompaignServiceService } from '../pages/compaign/compaign-service.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  providers: [MenuService]
})
export class PagesComponent implements OnInit {
  @ViewChild('sidenav', { static: false }) sidenav: any;
  @ViewChild('backToTop', { static: true }) backToTop: any;
  inputName = '';
  @Output() buttonClicked = new EventEmitter();
  
  @ViewChildren(PerfectScrollbarDirective) pss: QueryList<PerfectScrollbarDirective>;
  public settings: Settings;
  public searchText: string;
  public menus = ['vertical', 'horizontal'];
  public menuOption: string;
  public menuTypes = ['default', 'compact', 'mini'];
  public menuTypeOption: string;
  public lastScrollTop: number = 0;
  public showBackToTop: boolean = false;
  public toggleSearchBar: boolean = false;
  checked: Boolean = false;
  data4: {}
  parentMessage = "message from parent"
  get_camps: any[] = []
  test_comp:any[] =[];
  private defaultMenu: string; //declared for return default menu when window resized 
  camp_list: any[] = [];
  constructor(public appSettings: AppSettings, public router: Router, private location: Location, private menuService: MenuService,
    private CompaignServiceService: CompaignServiceService, private CookieService: CookieService) {
    this.settings = this.appSettings.settings;
  }


  ngOnInit() {
    this.get_cam();
    if (window.innerWidth <= 768) {
      this.settings.menu = 'vertical';
      this.settings.sidenavIsOpened = false;
      this.settings.sidenavIsPinned = false;
    }
    this.menuOption = this.settings.menu;
    this.menuTypeOption = this.settings.menuType;
    this.defaultMenu = this.settings.menu;
  }

  select_cam(data , i) {
    if(data.active == false){
      this.camp_list[i].active = true
      // this.camp_list[i].active = !this.camp_list[i].active
    }else{
      this.camp_list[i].active = false
    }
    console.warn(this.camp_list)
    this.buttonClicked.emit(this.inputName);
    this.CookieService.set("compain" , JSON.stringify(this.camp_list));
    // console.log(JSON.parse(this.CookieService.get('compain')))
    this.camp_list = JSON.parse(this.CookieService.get('compain'))
    window.location.reload();
  }

  get_cam() {
    let data = this.CookieService.get('compain')
    if(data){
      this.get_camps = JSON.parse(data);
    }else{
      this.get_camps =[]
    }
    
    // this.get_camps = JSON.parse(localStorage.getItem('parmision'))
    this.CompaignServiceService.get_camp_list().subscribe((doc: any) => {
      this.test_comp = doc.data
      this.camp_list.forEach((element, indexedDB) => {
        this.camp_list[indexedDB].active = true;
      });
      this.test_comp.forEach((element, indexedDB) => {
        this.test_comp[indexedDB].active = true;
      });
      if(this.get_camps.length == this.test_comp.length){
        this.camp_list = this.get_camps;
      }else{
        this.camp_list = this.test_comp;
        this.CookieService.set("compain" , JSON.stringify(this.camp_list));
      }

      // if (this.get_camps.length > 0) {

      // } else {
      //   localStorage.setItem('parmision', JSON.stringify(this.camp_list));
      // }

      // console.log(this.get_camps, "++++++++++++++")
    })
  }
  select(event) {
    console.log(event)
  }
  serch() {
    console.log("dgfdfjhj")
    // this.router.navigate(['/Lead/serch', this.searchText])
  }
  // check12(data) {
  //   console.log(data)
  //   this.get_camps.forEach((element, indexedDB) => {
  //     if (element._id == data._id) {
  //       this.get_camps[indexedDB].active = data.active;
  //     }
  //   });
  //   console.log(this.get_camps)
  //   this.CookieService.set('parmision', JSON.stringify(this.get_camps))
  //   console.log(JSON.parse(this.CookieService.get('parmision')))
  // }

  valuechange() {
    console.log(this.searchText)
    // if(!this.searchText){
    //   this.location.back();
    // }else{
    //   this.router.navigate(['/Lead/serch', this.searchText])
    // }
    this.router.navigate(['/Lead/serch', this.searchText])

  }
  ngAfterViewInit() {
    setTimeout(() => { this.settings.loadingSpinner = false }, 300);
    this.backToTop.nativeElement.style.display = 'none';
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (!this.settings.sidenavIsPinned) {
          this.sidenav.close();
        }
        if (window.innerWidth <= 768) {
          this.sidenav.close();
        }
      }
    });
    if (this.settings.menu == "vertical")
      this.menuService.expandActiveSubMenu(this.menuService.getVerticalMenuItems());
  }

  public chooseMenu() {
    this.settings.menu = this.menuOption;
    this.defaultMenu = this.menuOption;
    let url = window.location.href;
    this.router.navigate(['/' + url]);
  }

  public chooseMenuType() {
    this.settings.menuType = this.menuTypeOption;
  }

  public changeTheme(theme) {
    this.settings.theme = theme;
  }

  public toggleSidenav() {
    this.sidenav.toggle();
  }

  public onPsScrollY(event) {
    (event.target.scrollTop > 300) ? this.backToTop.nativeElement.style.display = 'flex' : this.backToTop.nativeElement.style.display = 'none';
    if (this.settings.menu == 'horizontal') {
      if (this.settings.fixedHeader) {
        var currentScrollTop = (event.target.scrollTop > 56) ? event.target.scrollTop : 0;
        if (currentScrollTop > this.lastScrollTop) {
          document.querySelector('#horizontal-menu').classList.add('sticky');
          event.target.classList.add('horizontal-menu-hidden');
        }
        else {
          document.querySelector('#horizontal-menu').classList.remove('sticky');
          event.target.classList.remove('horizontal-menu-hidden');
        }
        this.lastScrollTop = currentScrollTop;
      }
      else {
        if (event.target.scrollTop > 56) {
          document.querySelector('#horizontal-menu').classList.add('sticky');
          event.target.classList.add('horizontal-menu-hidden');
        }
        else {
          document.querySelector('#horizontal-menu').classList.remove('sticky');
          event.target.classList.remove('horizontal-menu-hidden');
        }
      }
    }
  }

  public scrollToTop() {
    this.pss.forEach(ps => {
      if (ps.elementRef.nativeElement.id == 'main' || ps.elementRef.nativeElement.id == 'main-content') {
        ps.scrollToTop(0, 250);
      }
    });
  }


  @HostListener('window:resize')
  public onWindowResize(): void {
    if (window.innerWidth <= 768) {
      this.settings.sidenavIsOpened = false;
      this.settings.sidenavIsPinned = false;
      this.settings.menu = 'vertical'
    }
    else {
      (this.defaultMenu == 'horizontal') ? this.settings.menu = 'horizontal' : this.settings.menu = 'vertical'
      this.settings.sidenavIsOpened = true;
      this.settings.sidenavIsPinned = true;
    }
  }

  public closeSubMenus() {
    let menu = document.querySelector(".sidenav-menu-outer");
    if (menu) {
      for (let i = 0; i < menu.children[0].children.length; i++) {
        let child = menu.children[0].children[i];
        if (child) {
          if (child.children[0].classList.contains('expanded')) {
            child.children[0].classList.remove('expanded');
            child.children[1].classList.remove('show');
          }
        }
      }
    }
  }

}