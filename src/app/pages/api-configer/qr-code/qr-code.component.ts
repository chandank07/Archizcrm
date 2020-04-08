import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiDilogComponent } from '../api-dilog/api-dilog.component';
import { MatDialog } from '@angular/material';
import { ApiConfromationService } from '../api-confromation.service';
import { removeSummaryDuplicates } from '@angular/compiler';
import { Router } from '@angular/router';
@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss']
})
export class QrCodeComponent implements OnInit {
  all_qr: any;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(public dialog: MatDialog, private apiConfromationService: ApiConfromationService,
    private router: Router, ) { }

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
    this.get_qr_code()
  }

  get_qr_code() {
    this.apiConfromationService.get_qr_code().subscribe((res: any) => {
      this.all_qr = res.data;
      this.all_qr.forEach(element => {
        console.log(element);
        element.qu_code = "https://api.qrserver.com/v1/create-qr-code/?data=" + "https://growthhack360.com/register/qurcode/" + element.assing_to._id
      });
      console.log(this.all_qr);
      this.dataSource = new MatTableDataSource(this.all_qr)
      this.dataSource.paginator = this.paginator;
    })
  }
  print(data) {
    window.document.write('<img src= " '+ data+ ' " />');
    window.print(); 
    window.close();
    return true;
  }
  open_qr_form(data){
    console.log(data)
    // window.open("http://localhost:4200/register/qurcode/" + data , '_blank');
    this.router.navigate(['/register/qurcode/', data])
  }
  openSmsDialog(sms) {
    let dialogRef = this.dialog.open(ApiDilogComponent, {
      data: {
        user: sms,
        type: "list"
      }
    });
    dialogRef.afterClosed().subscribe((data: any) => {
      console.log(data)
      if (data != null) {
        this.get_qr_code();
      }
    })

  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
//   {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
//   {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
//   {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
//   {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
//   {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
//   {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
//   {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
//   {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
//   {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
// ];