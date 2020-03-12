import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompaignServiceService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Token': localStorage.getItem('Token')
  });
  headers1 = new HttpHeaders({
    'Token': localStorage.getItem('Token')
  });
  url = "https://newmeanstrakapi.herokuapp.com/api/company"     
  url1 = "https://newmeanstrakapi.herokuapp.com/api/team_management"
  url2 = "https://newmeanstrakapi.herokuapp.com/api/data_source"
  url3 = "https://newmeanstrakapi.herokuapp.com/api/data_sourcecsv"
  url4 = "https://newmeanstrakapi.herokuapp.com/api/camp_list"
  url5 = "https://newmeanstrakapi.herokuapp.com/api/assing_camp"
  constructor(private http: HttpClient) { }
  
  Create_company(data) {
    return this.http.post(this.url + '/', data, { headers: this.headers });
  }
  get_company(){
    return this.http.get(this.url + "/get_all", { headers: this.headers });
  }
  create_team_mangemet(data){
    return this.http.post(this.url1 + "/create_Team_Management/", data ,{ headers: this.headers });
  }
  get_team(){
    return this.http.get(this.url1 + "/get_all/" , { headers: this.headers });
  }

  //=============data sorce====================
  create_data_source(data){
    return this.http.post(this.url2 + "/create_Data_Source/", data ,{ headers: this.headers });
  }
   get_data_source(){
    return this.http.get(this.url2 + "/get_all", { headers: this.headers });
  }
  uplode_data_source(data){
    return this.http.post(this.url2 + "/file", data, { headers: this.headers1 });
  }
  //=====================csamp list================
  create_camp_list(data){
    return this.http.post(this.url4 + "/create_Camp_list/" ,data ,{ headers: this.headers })
  }
  get_camp_list(){ 
    return this.http.get(this.url4 + "/get_camp_list" ,{ headers: this.headers })
  }
  //assing camp=================================
  create_assing_camp(data){
    return this.http.post(this.url5 + "/create_assing_camp/" ,data ,{ headers: this.headers })
  }
  get_assing_camp(){ 
    return this.http.get(this.url5 + "/get_assing_camp" ,{ headers: this.headers })
  }
}
