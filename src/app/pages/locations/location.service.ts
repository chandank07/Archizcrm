import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Token': localStorage.getItem('Token')
  });

  url = "http://localhost:5000/api/country"
  url2 = "https://newmeanstrakapi.herokuapp.com/api/enquiryForm"
  url3 = "http://localhost:5000/api/region"
  url4 = "http://localhost:5000/api/city"

  constructor(private http: HttpClient) { }


  Create_country(data) {
    console.log(data)
    return this.http.post(this.url + '/create_country', data, { headers: this.headers });
  }
  get_country() {
    return this.http.get(this.url + '/get_country', { headers: this.headers });
  }
  update_country(id, data) {
    return this.http.put(this.url + "/update_country/" + id, data, { headers: this.headers })
  }
  delete_countery(id) {
    return this.http.delete(this.url + "/delete/" + id, { headers: this.headers })
  }
  get_Active_country(){
    return this.http.get(this.url + "/get_Active_country",{ headers: this.headers })
  }


  create_region(data) {
    return this.http.post(this.url3 + "/create_region", data, { headers: this.headers })
  }
  get_region() {
    return this.http.get(this.url3 + '/get_region', { headers: this.headers });
  }
  update_region(id, data) {
    return this.http.put(this.url3 + "/upadte_region/" + id, data, { headers: this.headers })
  }
  delete_region(id) {
    return this.http.delete(this.url3 + "/delete/" + id, { headers: this.headers })
  }
  get_region_country(id){
    return this.http.get(this.url3 + "/region_country/" + id , { headers: this.headers })
  }
  get_active_region(){
    return this.http.get(this.url3 + "/get_active_region" , { headers: this.headers })
  }


  create_city(data) {
    return this.http.post(this.url4 + "/create_city/", data, { headers: this.headers })
  }
  get_city() {
    return this.http.get(this.url4 + '/get_city', { headers: this.headers });
  }
  update_city(id, data) {
    return this.http.put(this.url4 + "/upadte_city/" + id, data, { headers: this.headers })
  }
  delete_city(id) {
    return this.http.delete(this.url4 + "/delete/" + id, { headers: this.headers })
  }
  get_region_wise_city(id) {
    return this.http.get(this.url4 + "/region_wise/" + id, { headers: this.headers })
  }
  get_active_city(){
    return this.http.get(this.url4 + "/get_active_city", { headers: this.headers })
  }

}
