import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EnquiryServiceService {
  // headers = new HttpHeaders({
  //   'Content-Type': 'application/json',
  //   'Authorization': "Bearer " + localStorage.getItem('Token')
  // });
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Token': localStorage.getItem('Token')
  });
  headers1 = new HttpHeaders({
    // 'Content-Type': 'application/json',
    'Token': localStorage.getItem('Token')
  });
  // url = "https://crmosum.in/api/enquiry"
  // url2 = "https://newcrmapi.herokuapp.com/api"
  url3 = "http://localhost:8000/api/enquiryForm/create"
  url4 = "http://localhost:8000/api/enquiryForm"
  newurl = "https://newmeanstrakapi.herokuapp.com/api/enquiry"
  comment_url = "https://newmeanstrakapi.herokuapp.com/api/comment";
  sms_url = "https://newmeanstrakapi.herokuapp.com/api/sms";
  templatesms_url = "https://newmeanstrakapi.herokuapp.com/api/templatesms";
  intEmail_url = "https://newmeanstrakapi.herokuapp.com/api/interigation_email";
  tempEmail_url = "https://newmeanstrakapi.herokuapp.com/api/template_email";
  status_url = "https://newmeanstrakapi.herokuapp.com/api/statuse_check";
  check ="https://newmeanstrakapi.herokuapp.com/api/enquiry";
  check1 ="https://newmeanstrakapi.herokuapp.com/api/task"
  public User_activity = "http://localhost:5000/api/user_activity"

  constructor(private http: HttpClient) { }


  // Create_enquiry(userdata){
  //   return this.http.post(this.url + '/create' ,userdata);
  // }
  // Enquiry_sourc(){
  //   return this.http.post(this.url + '/source' , {headers:this.headers});
  // }
  // create_enquiry_form(data){
  //   console.log(this.headers)
  //   return this.http.post(this.url2 + "/enquiryForm/create" , data , {headers:this.headers})
  // }
  // create_enquiry(data){
  //   console.log(this.headers)
  //   return this.http.post(this.url2 + "/enquiry/create" , data , {headers:this.headers})
  // }
  // update_enquiry_form(data){
  //   console.log(this.headers)
  //   return this.http.put(this.url2 + "/enquiryForm" , data , {headers:this.headers})
  // }
  // Create_enquiry(userdata){
  //   return this.http.post(this.url + '/' ,userdata);
  // }
  // get_enquiry_form(){
  //   return this.http.get(this.url2 + "/enquiryForm" , {headers :this.headers})
  // }
  // get_enquiry(){
  //   return this.http.get(this.url2 + "/enquiry" , {headers :this.headers})
  // }
  // me(){
  //   return this.http.get(this.url2 + "/user" , {headers :this.headers})
  // }
  criate_enq_form(data){
    return this.http.post(this.url3,data ,{headers :this.headers})
  }
  get_field(){
    return this.http.get(this.url4,{headers :this.headers})
  }

  add_enquiry(data){
    return this.http.post(this.newurl + "/create_enquiry" , data , {headers :this.headers})
  }
  get_componay_wise_enquiry(){
    return this.http.get(this.newurl +"/get_all" , {headers :this.headers})
  }
  converter_lead(id , data){
    return this.http.put(this.newurl + "/enquiry_to_lead/" + id , data ,{headers :this.headers})
  }
  get_lead(){
    return this.http.get(this.newurl +"/get_all/lead" , {headers :this.headers})
  }
  convert_to_client(id){
    return this.http.put(this.newurl + "/lead_to_client/" + id , '' ,{headers :this.headers})
  }
  get_client(){
    return this.http.get(this.newurl +"/get_all/client" , {headers :this.headers})
  }
  get_enquiry_id(id){
  return this.http.get(this.newurl + "/get_enquiry/" + id, {headers :this.headers})
  }
  drop_enquiry(id){
    return this.http.put(this.newurl + "/enquiry_drop/" + id , '' ,{headers :this.headers})
  }
  block_enquiry(id, data){
     return this.http.put(this.newurl + "/enquiry_block/" + id , data , {headers :this.headers1})
  }


  post_commment(data){
    return this.http.post(this.comment_url + "/" , data , {headers :this.headers})
  }
  get_comment(id){
    return this.http.get(this.comment_url + "/get_all/" +id , {headers :this.headers})
  }

  //====================sms===============service===============
  create_sms(data){
    return this.http.post(this.sms_url + "/create_sms/" , data ,{headers :this.headers})
  }
  gwt_sms(){
    return this.http.get(this.sms_url +"/get_all/" , {headers :this.headers})
  }
  update_sms(id ,data){
    return this.http.put(this.sms_url +"/" +id,data, {headers :this.headers})
  }
  delete_sms(id){
    return this.http.delete(this.sms_url +"/delete/" +id, {headers :this.headers})
  }
  //============================================================
  create_create_templatesms(data){
    return this.http.post(this.templatesms_url + "/create_templatesms/",data ,{headers :this.headers})
  }
  gwt_templatesms(){
    return this.http.get(this.templatesms_url +"/get_all/" , {headers :this.headers})
  }
  update_templatesms(id ,data){
    return this.http.put(this.templatesms_url +"/" +id,data, {headers :this.headers})
  }
  delete_templatesms(id){
    return this.http.delete(this.templatesms_url +"/delete/" +id, {headers :this.headers})
  }
   //======================email======================================
   create_create_intemail(data){
    return this.http.post(this.intEmail_url + "/create_intemail/",data ,{headers :this.headers})
  }
  gwt_intemail(){
    return this.http.get(this.intEmail_url +"/get_all/" , {headers :this.headers})
  }
  update_intemail(id ,data){
    return this.http.put(this.intEmail_url +"/" +id,data, {headers :this.headers})
  }
  delete_intemail(id){
    return this.http.delete(this.intEmail_url +"/delete/" +id, {headers :this.headers})
  }
   //======================templateemail======================================
   create_create_tememail(data){
    return this.http.post(this.tempEmail_url + "/create_templateemail/",data ,{headers :this.headers})
  }
  gwt_tempemail(){
    return this.http.get(this.tempEmail_url +"/get_all/" , {headers :this.headers})
  }
  update_tempemail(id ,data){
    return this.http.put(this.tempEmail_url +"/" +id,data, {headers :this.headers})
  }
  delete_tempemail(id){
    return this.http.delete(this.tempEmail_url +"/delete/" +id, {headers :this.headers})
  }

  //=========stattus check========================================
  create_status(data){
    return this.http.post(this.status_url + "/create_status_check/" , data , {headers :this.headers})
  }
  update_status(id,data){
    return this.http.post(this.status_url + "/" + id ,data , {headers :this.headers})
  }
  get_today_add_enquiry(){
    return this.http.get(this.status_url + "/get_add_today_enquiry" , {headers :this.headers})
  }
  get_today_update_enquiry(){
    return this.http.get(this.status_url + "/get_update_today_enquiry" , {headers :this.headers})
  }
  get_all_drop_enquiry(){
    return this.http.get(this.newurl + "/get_drop_enquiry", {headers :this.headers})
  }
  // lead=====================================
  get_today_add_lead(){
    return this.http.get(this.status_url + "/get_add_today_lead" ,{headers :this.headers})
  }
  get_today_update_lead(){
    return this.http.get(this.status_url + "/get_update_today_lead" ,{headers :this.headers})
  }
  // time line==================

  get_timeline(id){
    return this.http.get(this.status_url + "/time_line/" + id , {headers :this.headers})
  }

  get_all_data(){
    return this.http.get(this.newurl + "/get_all/data/" , {headers :this.headers})
  }
  bulk_lead_update(data){
    return this.http.post(this.check + "/bulk_lead_uplode",data,{headers :this.headers})
  }
  bulk_drop_enquiry(data){
    return this.http.post(this.check + "/bulk_lead_drop" , data ,{headers :this.headers} )
  }
  bulk_delete_enquiry(data){
    return this.http.post(this.check + "/delete_bulk_enquiry/" , data, {headers :this.headers} )
  }
  get_active_enq(){
    return this.http.get(this.check +"/get_active", {headers :this.headers})
  }
  
  bulk_client_convert(data){
    return this.http.post(this.check + "/bulk_client_uplode" , data ,{headers :this.headers})
  }
  task_create(data){
    return this.http.post(this.check1 + "/create_task/", data, {headers :this.headers})
  }
  get_task(){
    return this.http.get(this.check1 + "/get_task", {headers :this.headers});
  }
  update_task(id ,data){
    return this.http.put(this.check1 +"/" +id, data, {headers :this.headers})
  }
  delete_task(id){
    return this.http.delete(this.check1 + "/delete/" + id , {headers :this.headers})
  }

  //====get type of enquiry ======
  get_type_of_enquiry(data){
    return this.http.post(this.newurl + "/get_type_enquiry" ,data,{headers :this.headers})
  }

  //email send =====================
  send_email(data){
    return this.http.post(this.intEmail_url + /send_email/ , data , {headers :this.headers})
  }
}
