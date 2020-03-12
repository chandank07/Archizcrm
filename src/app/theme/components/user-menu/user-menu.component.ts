import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserMenuComponent implements OnInit {
  public userImage = '../assets/img/users/user.jpg';
  constructor(private r : Router) { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('Token');
    // this.r.navigate(['/login'])
    window.open('/login', '_self');
  }
}
