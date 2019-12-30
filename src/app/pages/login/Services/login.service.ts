import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  // url ="https://crmarchiz.herokuapp.com/login";
  // url = "https://crmosum.in/api/login/login"
  url = "https://newcrmapi.herokuapp.com/api/signin"
  tokenVal: any;
  tokenVal2: any;

  constructor(private http: HttpClient) { }

  login_crm(userdata) {
    return this.http.post(this.url, userdata);
  }
}
