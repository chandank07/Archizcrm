import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LocationDilogComponent } from '../../locations/location-dilog/location-dilog.component';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { LocationService } from '../../locations/location.service';
import { Router } from '@angular/router';
import { EnquiryServiceService } from '../../enquiry/enquiry_Service/enquiry-service.service';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  displayedColumns: string[] = ['company', 'name', 'position', 'weight', 'symbol', "country",];
  dataSource: any;
  dataSource1: any;
  roomsFilter = { From: '', to: '' }
  enq: any;
  date_filter: Boolean = false;
  select_enquiry = ""
  date_filter1: Boolean = false;
  eunqr: any;
  selet_enq: any[] = [];
  status: Number = 0;
  type_name = 'Enquiry Name';
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(public dialog: MatDialog, public locationservice: LocationService, public router: Router,
    private enqury_service: EnquiryServiceService
  ) { }

  ngOnInit() {
    this.get_enquiry(this.status)
    this.get_activenq(this.status);
    // this.locationservice.get_city().subscribe((res: any) => {
    //   console.log(res.data)
    //   this.dataSource = new MatTableDataSource(res.data)
    //   this.dataSource.paginator = this.paginator;
    // })
  }
  get_activenq(type) {
    if (type == 0) {
      this.selet_enq.length = 0
      this.type_name = 'Enquiry Name'
      this.enqury_service.get_active_enq().subscribe((res: any) => {
        this.selet_enq = res.data;
      })
    } else if (type == 1) {
      this.selet_enq.length = 0
      this.type_name = 'Lead Name'
      this.enqury_service.get_lead().subscribe((res: any) => {
        this.selet_enq = res.data
      })
    } else if (type == 2) {
      this.selet_enq.length = 0
      this.type_name = 'Client Name'
      this.enqury_service.get_client().subscribe((res: any) => {
        this.selet_enq = res.data;
      })
    }

  }

  get_enquiry(type) {
    if (type == 0) {
      this.enqury_service.get_active_enq().subscribe((res: any) => {
        this.enq = res.data;
        this.dataSource = new MatTableDataSource(res.data)
        this.dataSource.paginator = this.paginator;
      })
    } else if (type == 1) {
      this.enqury_service.get_lead().subscribe((res: any) => {
        this.enq = res.data;
        this.dataSource = new MatTableDataSource(res.data)
        this.dataSource.paginator = this.paginator;
      })
    } else if (type == 2) {
      this.enqury_service.get_client().subscribe((res: any) => {
        this.enq = res.data;
        this.dataSource = new MatTableDataSource(res.data)
        this.dataSource.paginator = this.paginator;
      })
    }
  }

  select_type(data) {
    console.log(data)
    this.status = data;
    this.get_activenq(this.status);
    this.get_enquiry(this.status);
  }


  public openUserDialog(user) {
    let dialogRef = this.dialog.open(LocationDilogComponent, {
      data: {
        user: user,
        type: "city"
      }
    });
    dialogRef.afterClosed().subscribe((data: any) => {
      console.log(data)
      if (data != null) {
        this.ngOnInit();
      }
    })

  }
  redirectToDelete(id) {
    var x = confirm("Are you sure you want to delete?");
    if (x) {
      this.locationservice.delete_city(id).subscribe((res: any) => {
        if (res.errors == false) {
          console.log(res.message)
          this.ngOnInit()
        } else {
          console.log(res.message)
        }
      })
    } else {
      return false;
    }
  }
  setFormValue(data) {

  }
  EndDateChange(event) {
    this.date_filter = true;
    this.enq.length = 0
    let obj = {
      From: this.roomsFilter.From,
      to: this.roomsFilter.to,
      status: this.status
    }
    this.enqury_service.get_date_wise(obj).subscribe((res: any) => {
      console.log(res)
      this.enq = res.data;
      this.dataSource = new MatTableDataSource(res.data)
      this.dataSource.paginator = this.paginator;
    })
  }

  enquiry_name_cahange(id) {
    this.date_filter1 = true;
    console.log(id)
    let obj = {
      From: this.roomsFilter.From,
      to: this.roomsFilter.to,
      id: id,
      status: this.status
    }
    this.enq.length = 0
    this.enqury_service.get_date_and_wise(obj).subscribe((res: any) => {
      this.enq = res.data;
      this.dataSource = new MatTableDataSource(res.data)
      this.dataSource.paginator = this.paginator;
    })
  }

}


export interface PeriodicElement {
  city_name: string;
  city_id: String;
  region: String;
  is_active: Boolean;
};