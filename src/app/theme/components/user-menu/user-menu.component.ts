import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../../../app/pages/users/users.service';
@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserMenuComponent implements OnInit {
  public userImage = '../assets/img/users/user.jpg';
  me:any;
  constructor(private r : Router , private UsersService:UsersService) { }

  ngOnInit() {
    this.get_me()
  }
  get_me(){
    this.UsersService.get_me().subscribe((res:any) =>{
      this.me =res.data;
      console.info(this.me)
    })
  }
  logout(){
    localStorage.removeItem('Token');
    // this.r.navigate(['/login'])
    window.open('http://growthhack360.com/#/login', '_self');
  }
}
