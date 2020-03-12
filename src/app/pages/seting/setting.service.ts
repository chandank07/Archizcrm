import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Token': localStorage.getItem('Token')
  });
  url = "http://localhost:5000/api/stage"
  url2 = "http://localhost:5000/api/despriction";
  taregt = "https://newmeanstrakapi.herokuapp.com/api/target";
  forcast = "https://newmeanstrakapi.herokuapp.com/api/forcast";
  lead_probility ="http://localhost:5000/api/lead_probility";
  drop_reason ="http://localhost:5000/api/drop_reason";
  enquiry_type ="http://localhost:5000/api/enquiry_type";
  enquiry_source ="http://localhost:5000/api/enquiry_source";
  // url="https://newmeanstrakapi.herokuapp.com/api/company"
  constructor(private http: HttpClient) { }

  Create_stage(data) {
    return this.http.post(this.url + '/create_stage', data, { headers: this.headers });
  }
  get_stage() {
    return this.http.get(this.url + "/get_stage/", { headers: this.headers });
  }
  update_stage(id, data) {
    return this.http.put(this.url + "/update_stage/" + id, data, { headers: this.headers })
  }
  delete_stage(id) {
    return this.http.delete(this.url + "/delete/" + id, { headers: this.headers })
  }
  get_active_stage(){
    return this.http.get(this.url + "/get_active_stage" ,{ headers: this.headers })
  }
  // ===========despriction=================
  Create_desp(data) {
    return this.http.post(this.url2 + '/create_desp', data, { headers: this.headers });
  }
  get_desp() {
    return this.http.get(this.url2 + "/get_desp/", { headers: this.headers });
  }
  update_desp(id, data) {
    return this.http.put(this.url2 + "/update_desp/" + id, data, { headers: this.headers })
  }
  delete_desp(id) {
    return this.http.delete(this.url2 + "/delete/" + id, { headers: this.headers })
  }
  get_stage_wise_desp(id) {
    return this.http.get(this.url2 + "/get_desp/" + id, { headers: this.headers });
  }
  //=====================taget==============================================
  set_target(data) {
    return this.http.post(this.taregt + "/create_target/", data , { headers: this.headers })
  }
  get_target(){
    return this.http.get(this.taregt + "/get_target/" , { headers: this.headers })
  }
  update_target(id, data){
    return this.http.put(this.taregt + "/update_target/" + id ,data, { headers: this.headers })
  }
  //
  get_forcast(){
    return this.http.get(this.forcast + "/get_forcast_target/", { headers: this.headers });
  }
  update_forcast(id, data){
    return this.http.put(this.forcast + "/update_forcast/" + id ,data, { headers: this.headers })
  }
  //=================lead_probility==============================
  Create_lead_probility(data) {
    return this.http.post(this.lead_probility + '/create_lead_probility', data, { headers: this.headers });
  }
  get_lead_probility(){
    return this.http.get(this.lead_probility + "/get_lead_probility/" , { headers: this.headers })
  }
  delete_lead_probility(id) {
    return this.http.delete(this.lead_probility + "/delete/" + id, { headers: this.headers })
  }  
  update_lead_probility(id, data){
    return this.http.put(this.lead_probility + "/update_lead_probility/" + id ,data, { headers: this.headers })
  }
  /// drop reason====================================
  Create_drop_reason(data) {
    return this.http.post(this.drop_reason + '/create_drop_reason', data, { headers: this.headers });
  }
  get_drop_reason(){
    return this.http.get(this.drop_reason + "/get_drop_reason/" , { headers: this.headers })
  }
  delete_drop_reason(id) {
    return this.http.delete(this.drop_reason + "/delete/" + id, { headers: this.headers })
  }  
  update_drop_reason(id, data){
    return this.http.put(this.drop_reason + "/update_drop_reason/" + id ,data, { headers: this.headers })
  }
    /// drop reason====================================
    Create_enquiry_type(data) {
      return this.http.post(this.enquiry_type + '/create_enquiry_type', data, { headers: this.headers });
    }
    get_enquiry_type(){
      return this.http.get(this.enquiry_type + "/get_enquiry_type/" , { headers: this.headers })
    }
    delete_enquiry_type(id) {
      return this.http.delete(this.enquiry_type + "/delete/" + id, { headers: this.headers })
    }  
    update_enquiry_type(id, data){
      return this.http.put(this.enquiry_type + "/update_enquiry_type/" + id ,data, { headers: this.headers })
    }
      /// enquiry source====================================
      Create_enquiry_source(data) {
        return this.http.post(this.enquiry_source + '/create_enquiry_source', data, { headers: this.headers });
      }
      get_enquiry_source(){
        return this.http.get(this.enquiry_source + "/get_enquiry_source/" , { headers: this.headers })
      }
      delete_enquiry_source(id) {
        return this.http.delete(this.enquiry_source + "/delete/" + id, { headers: this.headers })
      }  
      update_enquiry_source(id, data){
        return this.http.put(this.enquiry_source + "/update_enquiry_source/" + id ,data, { headers: this.headers })
      }

}
