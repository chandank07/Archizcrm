import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { id } from '@swimlane/ngx-charts/release/utils';

@Injectable()
export class UsersService {

    headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Token': localStorage.getItem('Token')
      });
      
    public url = "api/users";
    public url1 = "http://localhost:5000/api/userrole";
    public url2 = "http://localhost:5000/api/user";
    public url3 = "https://newmeanstrakapi.herokuapp.com/api/company";
   public User_activity = "http://localhost:5000/api/user_activity"

    constructor(public http:HttpClient) { }
    
    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.url);
    }

    addUser(user:User){	    
        return this.http.post(this.url, user);
    }

    updateUser(user:User){
        return this.http.put(this.url, user);
    }

    deleteUser(id: number) {
        return this.http.delete(this.url + "/" + id);
    } 
    Create_role(data){
        console.log(data)
        return this.http.post(this.url1 + '/create_role/' ,data ,{headers:this.headers});
      }
      get_role(){
          return this.http.get(this.url1 + "/get_all" , {headers:this.headers})
      }
      update_role(id , data){
          return this.http.put(this.url1 + "/upadte/" + id ,data, {headers:this.headers})
      }
      delete_role(id){
        return this.http.delete(this.url1 + "/delete/" + id , {headers:this.headers})
    }
    create_user(data){
        return this.http.post(this.url2 + "/user_add/" , data, {headers:this.headers})
    }
    get_user(){
        return this.http.get(this.url2 + "/get_all/" , {headers:this.headers})
    }
    delete_user(id){
        return this.http.delete(this.url2 + "/delete/" + id , {headers:this.headers})
    }
    get_company(){
        return this.http.get(this.url3 + "/get_all", {headers:this.headers})
    }
    get_role_wise_user(id){
        return this.http.get(this.url2 + "/get_role/"+ id ,{headers:this.headers})
    }
    get(data){
        return this.http.post(this.url2 + "/user/" , data ,{headers:this.headers})
    }
    ctreat_activity(data){
        return this.http.post(this.user_activity + "/creat_user_activity/" , data , {headers:this.headers})
    }

    user_activity(data){
        return this.http.post(this.User_activity + "/update_user/" ,data ,{headers:this.headers})
    }
    get_activity(){
        return this.http.get(this.User_activity + "/get_activity/" , {headers:this.headers})
    }
    get_me(){
        return this.http.get(this.url2 + "/me/" , {headers:this.headers})
    }
} 