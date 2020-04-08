import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../../users/users.service';
import { SocketService } from '../../../socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @ViewChild('sidenav', { static: true }) sidenav: any;

  public userImage = 'assets/img/users/user.jpg';
  users: any;
  public talks: any[] = [];
  public sidenavOpen: boolean = true;
  public currentChat: any;
  me: any;
  mess: any;
  newMessage: any;
  id: any;
  constructor(private UsersService: UsersService, private soc: SocketService) { }

  ngOnInit() {
    this.get_user()
    this.get_me();
  }
  get_me() {
    this.UsersService.get_me().subscribe((res: any) => {
      this.me = res.data
      console.log(this.me)
    })
  }
  get_user() {
    this.UsersService.get_user().subscribe((res: any) => {
      console.log(res)
      this.users = res.data;
      // this.sidenavOpen = false;
    })
  }
  public getChat(obj) {
    this.currentChat = obj.profile.name + " " + obj.profile.surname,
      this.id = obj._id
    let objs = {
      from: this.me._id,
      to: this.id,
    }
    this.soc.listen2(objs).subscribe((res: any) => {

      this.talks = res;
      this.talks.forEach((element, indexedDB) => {
        if (element.from == this.me._id) {
          this.talks[indexedDB].my = true
          this.talks[indexedDB].me = 'me'
        } else {
          this.talks[indexedDB].my = false
          this.talks[indexedDB].you = this.currentChat
        }

      });
    })
  }
  doubleClick(data) {
    console.log(data.date_time)
    if (data.from == this.me._id) {
      let obj = {
        _id: data._id,
        from: data.from,
        to: data.to
      }
      var r = confirm("Are you sure you want to Delete thie Chat.?");
      if (r == true) {
        this.soc.delete(obj).subscribe((res: any) => {
          console.log(res)
        })
      } else {

      }
    } else {
      alert("this message not delete")
    }

  }
  sendMessage() {
    let objs = {
      from: this.me._id,
      to: this.id,
      company_id: this.me.company._id,
      message: this.newMessage
    }
    console.log(objs)
    this.soc.message_send(objs).subscribe((res: any) => {
      console.log(res)
      this.newMessage = ''
    })
  }

}
