import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EnquiryServiceService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': "Bearer " + localStorage.getItem('Token')
  });
  url = "https://crmosum.in/api/enquiry"
  url2 = "https://newcrmapi.herokuapp.com/api"

  constructor(private http: HttpClient) { }


  Create_enquiry(userdata){
    return this.http.post(this.url + '/create' ,userdata);
  }
  Enquiry_sourc(){
    return this.http.post(this.url + '/source' , {headers:this.headers});
  }
  create_enquiry_form(data){
    console.log(this.headers)
    return this.http.post(this.url2 + "/enquiryForm/create" , data , {headers:this.headers})
  }
  create_enquiry(data){
    console.log(this.headers)
    return this.http.post(this.url2 + "/enquiry/create" , data , {headers:this.headers})
  }
  update_enquiry_form(data){
    console.log(this.headers)
    return this.http.put(this.url2 + "/enquiryForm" , data , {headers:this.headers})
  }
  // Create_enquiry(userdata){
  //   return this.http.post(this.url + '/' ,userdata);
  // }
  get_enquiry_form(){
    return this.http.get(this.url2 + "/enquiryForm" , {headers :this.headers})
  }
  get_enquiry(){
    return this.http.get(this.url2 + "/enquiry" , {headers :this.headers})
  }
  me(){
    return this.http.get(this.url2 + "/user" , {headers :this.headers})
  }
}
