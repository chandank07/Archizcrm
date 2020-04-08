import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable, Subscriber } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket :any;

    constructor(public http:HttpClient) {
        this.socket = io('https://remainderscrm.herokuapp.com/')
    }
    listen1(Eventname : string){
      // this.socket.emit('join', {email: data});
        return new Observable((subscriber)=>{
            this.socket.on(Eventname,(data)=>{
                subscriber.next(data);
            })
        })
    }
    listen2(data){
      this.socket.emit('join', {email: data});
        return new Observable((subscriber)=>{
            this.socket.on('join',(data)=>{
              subscriber.remove(data);
                subscriber.next(data);
            })
        })
    }
    listen3(data){
      this.socket.emit('join1', {data: data});
        return new Observable((subscriber)=>{
            this.socket.on('join1',(data)=>{
              subscriber.remove(data);
                subscriber.next(data);
            })
        })
    }
    creat_remainder(data){
      return this.http.post("https://remainderscrm.herokuapp.com/notification/create" , data)
    }
    on_socet(data){
      return this.http.post("http://localhost:3000/on_socet/" , data)
    }
    message_send(data){
      return this.http.post('https://remainderscrm.herokuapp.com/message/send',data)
    }
    delete(data){
      return this.http.post('https://remainderscrm.herokuapp.com/delete',data)
    }
}
