import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LocationDilogComponent } from '../../locations/location-dilog/location-dilog.component';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { LocationService } from '../location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  displayedColumns: string[] = ['company','position', 'name', 'weight', 'symbol'];
  dataSource: any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(public dialog: MatDialog,
    public locationservice: LocationService, public router: Router,
  ) { }

  ngOnInit() {
    this.locationservice.get_country().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource(res.data)
      this.dataSource.paginator = this.paginator;
      console.log(res.data)
    })
    // console.log(this.data ,"//////////////////")
  }
  public openUserDialog(user) {
    let dialogRef = this.dialog.open(LocationDilogComponent, {
      data: {
        user:user,
        type:"country"
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
    if (x){
      this.locationservice.delete_countery(id).subscribe((res:any) =>{
        if(res.errors == false){
          console.log(res.message)
          this.ngOnInit()
        }else{
          alert(res.message);
          console.log(res.message)
        }
      })
    }else{
      return false;
    }
    
    // this.locationservice.delete_countery(id).subscribe((res:any) =>{
    //   console.log("hhhhh")
    // })
  }
  setFormValue(data) {

  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}


export interface PeriodicElement {
  country_id: String;
  countery_name: string;
  is_active: Boolean;

}
// const ELEMENT_DATA: PeriodicElement[] = [
//   {countery_name: '1', is_active: true, createdAt: 'kkkk', },
//   {countery_name: '2', is_active: true, createdAt: 'lll', },
// ];
