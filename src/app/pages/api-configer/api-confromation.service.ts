import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiConfromationService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Token': localStorage.getItem('Token')
  });
  url = "http://localhost:5000/api/qr_code"
  // url2 ="https://newmeanstrakapi.herokuapp.com/api/despriction"

  constructor(private http: HttpClient) { }
  
  Create_qr_code(data) {
    return this.http.post(this.url + '/create_qr_code/', data, { headers: this.headers });
  }
  get_qr_code(){
    return this.http.get(this.url + "/get_all/", { headers: this.headers });
  }
}
