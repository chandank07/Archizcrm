import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LocationDilogComponent } from '../../locations/location-dilog/location-dilog.component';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { LocationService } from '../location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  displayedColumns: string[] = ['company', 'name','position',"country", 'weight', 'symbol'];
  dataSource: any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(public dialog: MatDialog,
     public locationservice: LocationService , public router: Router,
    ) { }

  ngOnInit() {
    this.locationservice.get_city().subscribe((res: any) => {
      console.log(res.data)
      this.dataSource = new MatTableDataSource(res.data)
      this.dataSource.paginator = this.paginator;
    })
  }
  public openUserDialog(user) {
    let dialogRef = this.dialog.open(LocationDilogComponent, {
      data: {
        user:user,
        type:"city"
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

}


export interface PeriodicElement {
  city_name: string;
  city_id: String;
  region:String;
  is_active: Boolean;
}