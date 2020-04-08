import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { MenuService } from '../menu/menu.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ MenuService ]
})
export class SidenavComponent implements OnInit {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Token': localStorage.getItem('Token')
  });
  public userImage= '../assets/img/users/user.jpg';
  public menuItems:Array<any>;
  public settings: Settings;
  company:any;
  show_nav:any;
  user:any;
  constructor(public appSettings:AppSettings, public menuService:MenuService ,private http: HttpClient){
      this.settings = this.appSettings.settings; 
  }

  ngOnInit() {
    this.menuItems = this.menuService.getVerticalMenuItems();
    this.pramision();
  }
  pramision(){
    this.http.get('https://newmeanstrakapi.herokuapp.com/api/user/me',{ headers: this.headers }).subscribe((res:any) =>{
      this.user = res.data;
      console.log(this.user)
      this.company = res.data.position.privileges
      if(this.company){
        this.show_nav =  true;
      }
    })
  }
  logout(){
    localStorage.removeItem('Token');
    // this.r.navigate(['/login'])
    window.open('http://growthhack360.com/#/login', '_self');
  }
  public closeSubMenus(){
    let menu = document.getElementById("vertical-menu");
    if(menu){
      for (let i = 0; i < menu.children[0].children.length; i++) {
        let child = menu.children[0].children[i];
        if(child){
          if(child.children[0].classList.contains('expanded')){
              child.children[0].classList.remove('expanded');
              child.children[1].classList.remove('show');
          }
        }
      }
    }
  }

}
