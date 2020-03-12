import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  // url ="https://crmarchiz.herokuapp.com/login";
  // url = "https://crmosum.in/api/login/login"
  url = "http://localhost:5000/api/auth/login";
  user_activity = "http://localhost:5000/api/user_activity/update_user/"
  // url = "https://newcrmapi.herokuapp.com/api/signin"
  // url="http://localhost:5000/api/auth/login"
  tokenVal: any;
  tokenVal2: any;

  constructor(private http: HttpClient) { }

  login_crm(userdata) {
    console.log(userdata)
    return this.http.post(this.url, userdata, {headers:this.headers});
  }
  user_activ(data){
    return this.http.post(this.user_activity, data, {headers:this.headers});
  }
}
