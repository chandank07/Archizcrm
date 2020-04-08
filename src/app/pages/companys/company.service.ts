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
  // url = "https://newmeanstrakapi.herokuapp.com/api/company"
  url="https://newmeanstrakapi.herokuapp.com/api/company"
  url1="https://newmeanstrakapi.herokuapp.com/api/user/get_user_company/"
  enq_field = "https://newmeanstrakapi.herokuapp.com/api/enquiry_form"


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
  get_company_userwise(){
    return this.http.get(this.url1 , { headers: this.headers })
  }
  //===============enquiry form fiend ===============

  creat_en_from_feld(data){
    return this.http.post(this.enq_field + '/create_EF/' , data , { headers: this.headers })
  }
  get_enquiry(){
    return this.http.get(this.enq_field + "/get_EF" ,{ headers: this.headers })
  }
}
