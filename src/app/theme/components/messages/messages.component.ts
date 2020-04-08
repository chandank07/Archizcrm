import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import { MessagesService } from './messages.service';
import { SocketService } from '../../../socket.service';
import { UsersService } from '../../../../app/pages/users/users.service';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [MessagesService]
})
export class MessagesComponent implements OnInit {
  user: any;
  newarr: any[] = [];
  messages1: any[] = [];
  data12: any;
  user_id: any;
  company: any;
  newarry2: any[] = [];
  user_name: any;
  @ViewChild(MatMenuTrigger, { static: true }) trigger: MatMenuTrigger;
  public selectedTab: number = 1;
  public messages: Array<Object>;
  public files: Array<Object>;
  public meetings: Array<Object>;

  constructor(private messagesService: MessagesService, private soc: SocketService, private UsersService: UsersService) {
    this.messages = messagesService.getMessages();
    this.files = messagesService.getFiles();
    this.meetings = messagesService.getMeetings();
  }

  ngOnInit() {
    this.get_me();
    this.get_remainder();
  }
  get_me() {
    this.UsersService.get_me().subscribe((doc: any) => {
      this.user_id = doc.data._id
      this.company = doc.data.company._id
      this.user_name = doc.data.username
      console.log(this.user_id, this.company);
      this.get_user();
    })
  }
  get_remainder() {
    this.soc.listen1('dataUpdate').subscribe((res: any) => {
      console.log(res ,"__________________","ffhgjfdhgjfdjfdjhfj")
      this.data12 = res;
      this.set_timer();
    })
  }
  set_timer() {
    this.data12.forEach(element => {
      if (this.user_id == element.user_id) {
        this.newarry2.push(element)
      }
    });
    // console.log(this.newarry2)

  }

  get_user() {
    this.UsersService.get_user().subscribe((res: any) => {
      this.user = res.data;
      if (res.errors) {

      } else {
        let id = this.user[0].company._id
        this.get_message(id);
      }
    })
  }
  get_message(id) {
    // this.messages1.length = 0;
    this.soc.listen3({ data: id }).subscribe((res: any) => {
      this.messages1 = res;
      this.show_message();
      // console.log(this.messages1)
    })
  }
  show_message() {
    let nearr = []
    nearr.length = 0;
    this.newarr.length = 0;
    this.user.forEach((element1, indexedDB) => {
      this.messages1.forEach((element, indexedDB) => {
        if (element.from == element1._id) {
          this.messages1[indexedDB].name = element1.profile.name
          nearr.push(element);
        }
      });
    });
    nearr.forEach(element => {
      if (this.user_id == element.to) {
        this.newarr.push(element);
      }
    });
    console.log(this.newarr);
  }
  openMessagesMenu() {
    this.trigger.openMenu();
    this.selectedTab = 0;
  }

  onMouseLeave() {
    this.trigger.closeMenu();
  }

  stopClickPropagate(event: any) {
    event.stopPropagation();
    event.preventDefault();
  }

}
