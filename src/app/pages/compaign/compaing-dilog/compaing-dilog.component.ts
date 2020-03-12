import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EnquiryDilogComponent } from '../../enquiry/enquiry-dilog/enquiry-dilog.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { CompaignServiceService } from '../compaign-service.service';
import { LocationService } from '../../locations/location.service';

@Component({
  selector: 'app-compaing-dilog',
  templateUrl: './compaing-dilog.component.html',
  styleUrls: ['./compaing-dilog.component.scss']
})
export class CompaingDilogComponent implements OnInit {
  public emailForm: FormGroup;
  public csvForm: FormGroup;
  public listForm:FormGroup;
  checked = false;
  csv: Boolean = false;
  list:boolean = false;
  datasorce:Boolean= false;
  srcResult: any;
  datasource:any;
  country:any;
  region:any;
  city:any;
  parsedCSV;
  constructor(public fb: FormBuilder, public dialogRef: MatDialogRef<EnquiryDilogComponent>,
    public router: Router,private CompaignServiceService: CompaignServiceService,
    @Inject(MAT_DIALOG_DATA) public user: any,public locationservice: LocationService , ) { }

  ngOnInit() {
    this.email_form();
    this.list_form();
    this.csvform();
    this.get_country();
    console.log(this.user)
    if (this.user.type == "csv") {
      this.csv = true;
      this.get_datasource()
    }else if(this.user.type == "list"){
      this.list = true;
    }else if(this.user.type == "datasorce"){
      this.datasorce = true;
    }
  }

  get_country(){
    this.locationservice.get_country().subscribe((res:any) =>{
      this.country = res.data
      console.log(res)
    })
  }
  country_cahange(event){
    this.locationservice.get_region_country(event).subscribe((doc:any) =>{
      this.region = doc.data;
    })
  }
  region_cahange(id){
    this.locationservice.get_region_wise_city(id).subscribe((res:any) =>{
      this.city = res.data;
    })
  }

  get_datasource(){
    this.CompaignServiceService.get_data_source().subscribe((data:any) =>{
      console.log(data);
      this.datasource =  data.data
    })
  }
  email_form() {
    this.emailForm = this.fb.group({
      source_name: [''],
      // http_api: [''],
    });
  }
  csvform() {
    this.csvForm = this.fb.group({
      source_name: [''],
      // http_api: [''],
    });
  }
  list_form() {
    this.listForm = this.fb.group({
      country: [''],
      state: [''],
      city: [''],
      caompaing_name: [''],
    });
  }
  onFileSelected() {
    const inputNode: any = document.querySelector('#file');

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
      };
      console.log(this.srcResult)
      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }
  close(): void {
    this.dialogRef.close();
  }

  submit() {
    this.emailForm.value
    let data = {
      source_name: this.emailForm.value.source_name,
      active: this.checked,
      count:0
    }
    console.log(data)
    this.CompaignServiceService.create_data_source(data).subscribe((res:any) =>{
      console.log(res)
    })
  }
  uploadCSV(fileInput: any) {
    this.parsedCSV = fileInput.target.files[0];
    console.log(this.parsedCSV)
  }
  Uplode(){
    const formData = new FormData();
    formData.append('source_name', this.csvForm.value.source_name);
    formData.append('myFile', this.parsedCSV);
    this.CompaignServiceService.uplode_data_source(formData).subscribe((doc:any) =>{
      this.dialogRef.close(doc);
    })
  }
  list_add(){
    console.log(this.listForm.value)
    this.CompaignServiceService.create_camp_list(this.listForm.value).subscribe((data:any) =>{
      this.dialogRef.close(data);
    })
  }
}
