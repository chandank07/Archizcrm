import { Component } from '@angular/core';
import { AppSettings } from './app.settings';
import { Settings } from './app.settings.model';
import { SocketService } from './socket.service';
import { UsersService } from './pages/users/users.service';
import { from } from 'rxjs';
declare var swal: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public settings: Settings;
  data12: any;
  company: any;
  user_id: any;
  user_name: any;
  
  constructor(public appSettings: AppSettings, private srv: SocketService, private UsersService: UsersService) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    this.get_me();
    this.srv.listen1('dataUpdate').subscribe((res: any) => {
      console.log(res)
      this.data12 = res;
      this.set_timer();
    })
  }
  get_me() {
    this.UsersService.get_me().subscribe((doc: any) => {
      this.user_id = doc.data._id
      this.company = doc.data.company._id
      this.user_name = doc.data.username
      console.log(this.user_id, this.company);
    })
  }
  set_timer() {
    if (this.user_id && this.company) {
      window.setInterval(() => {
        var dt = new Date();
        dt.setHours(dt.getHours() - 7);
        dt.setMinutes(dt.getMinutes() + 31);
        this.data12.forEach(element => {
          // console.log(new Date(element.date_time).getUTCMinutes(), dt.getUTCMinutes(), dt.toDateString(), new Date(element.date_time).toDateString())
          if (dt.toDateString() == new Date(element.date_time).toDateString() && new Date(element.date_time).getUTCMinutes() == dt.getUTCMinutes() && this.user_id == element.user_id && this.company == element.company_id) {
            console.info(element.date_time + "==" + dt.toISOString())
            swal.fire({
              title: this.user_name,
              text: element.message,
              imageUrl: 'https://i.pinimg.com/originals/ef/30/98/ef30980ca9bb487bfa3f5901145ee175.gif',
              imageWidth: 160,
              imageHeight: 150,
              imageAlt: 'Custom image',
            })
          } else {
          }
        });
      }, 58000);
    }
  }
}