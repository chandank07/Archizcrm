import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const TOKEN_KEY = 'Token';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  // url ="https://crmarchiz.herokuapp.com/login";
  // url = "https://crmosum.in/api/login/login"
  url = "https://newmeanstrakapi.herokuapp.com/api/auth/login";
  user_activity = "https://newmeanstrakapi.herokuapp.com/api/user_activity/update_user/"
  me = "https://newmeanstrakapi.herokuapp.com/api/company/get_all"
  // url = "https://newcrmapi.herokuapp.com/api/signin"
  // url="http://localhost:5000/api/auth/login"
  tokenVal: any;
  tokenVal2: any;

  constructor(private http: HttpClient) { }

  login_crm(userdata) {
    console.log(userdata)
    return this.http.post(this.url, userdata, { headers: this.headers });
  }
  user_activ(data) {
    return this.http.post(this.user_activity, data, { headers: this.headers });
  }
  get_me() {
    return this.http.get(this.me, { headers: this.headers })
  }

  public saveToken(Token: string) {
    if (!Token) return;
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, Token);
  }

  public getToken(): string {
    return localStorage.getItem(TOKEN_KEY);
  }

}
