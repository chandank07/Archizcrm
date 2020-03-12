import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LocationDilogComponent } from '../../locations/location-dilog/location-dilog.component';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { LocationService } from '../location.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {
  displayedColumns: string[] = ['company','name', 'position', "country", 'weight', 'symbol'];
  dataSource: any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(public dialog: MatDialog,
    public locationservice: LocationService, public router: Router,
  ) { }

  ngOnInit() {

    this.locationservice.get_region().subscribe((res: any) => {
      console.log(res.data)
      this.dataSource = new MatTableDataSource(res.data)
      this.dataSource.paginator = this.paginator;
    })
  }
  public openUserDialog(user) {
    let dialogRef = this.dialog.open(LocationDilogComponent, {
      data: {
        user: user,
        type: "region"
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
      this.locationservice.delete_region(id).subscribe((res: any) => {
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
  region_name: string;
  region_id: String;
  country: String;
  is_active: Boolean;
}