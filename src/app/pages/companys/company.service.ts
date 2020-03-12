import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Token': localStorage.getItem('Token')
  });
  // url = "http://localhost:5000/api/company"
  url="http://localhost:5000/api/company"
  constructor(private http: HttpClient) { }
  
  Create_company(data) {
    return this.http.post(this.url + '/', data, { headers: this.headers });
  }
  get_company(){
    return this.http.get(this.url + "/get_all", { headers: this.headers });
  }
  update_compony(id , data){
    return this.http.put(this.url + "/" + id , data ,{ headers: this.headers })
  }
  delete_company(id){
    return this.http.delete(this.url + "/" + id ,{ headers: this.headers })
  }
}
