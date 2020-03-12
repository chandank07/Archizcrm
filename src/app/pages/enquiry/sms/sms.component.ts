import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { LocationService } from '../../locations/location.service';
import { Router } from '@angular/router';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { SmsDilogComponent } from '../sms-dilog/sms-dilog.component';
import { EnquiryServiceService } from '../../enquiry/enquiry_Service/enquiry-service.service'

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.scss']
})
export class SmsComponent implements OnInit {
  displayedColumns: string[] = [ 'company','api_name','http_api','symbol'];
  displayedColumns1: string[] = ['template_name','template_content' ,'symbol'];
  dataSource: any;
  dataSource1: any;
  templatesms:any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator; paginator1: MatPaginator;
  constructor(private location: Location,public locationservice: LocationService,
    public enquiryService: EnquiryServiceService,
    public dialog: MatDialog,) { }

  
  ngOnInit() {
    this.get_templatesms();
    this.get_intrigation();
   
    // console.log(this.data ,"//////////////////")
  }
  get_intrigation(){
    this.enquiryService.gwt_sms().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource(res.data)
      this.dataSource.paginator = this.paginator;
      console.log(res.data)
    })
  }
  get_templatesms(){
    this.enquiryService.gwt_templatesms().subscribe((doc:any)=>{
      console.log(doc , "////////////////////================================")
      this.templatesms = doc.data;
      this.dataSource1 = new MatTableDataSource(doc.data)
      this.dataSource1.paginator1 = this.paginator1;
    })
  }
  back_page() {
    this.location.back(); // <-- go back to previous location on cancel
  }
  openSmsDialog(sms){
    let dialogRef = this.dialog.open(SmsDilogComponent, {
      data: {
        user:sms,
        type:"intrigation"
      }
    });
    dialogRef.afterClosed().subscribe((data: any) => {
      console.log(data)
      if (data != null) {
        this.get_intrigation();
      }
    })

  }
  openSmsDialog1(sms){
    let dialogRef = this.dialog.open(SmsDilogComponent, {
      data: {
        user:sms,
        type:"template"
      }
    });
    dialogRef.afterClosed().subscribe((data: any) => {
      console.log(data)
      if (data != null) {
        this.get_templatesms();
      }
    })
  }
  templateDelete(id){
    this.enquiryService.delete_templatesms(id).subscribe((res:any) =>{
      console.log(res)
      if(res.errors){

      }else{
        this.get_templatesms();
      }
    })
  }
  smsDelete(id){
    this.enquiryService.delete_sms(id).subscribe((res:any) =>{
      console.log(res)
      if(res.errors){

      }else{
        this.get_intrigation();
      }
    })
  }
}

export interface PeriodicElement {
  country_id: String;
  countery_name: string;
  is_active: Boolean;

}