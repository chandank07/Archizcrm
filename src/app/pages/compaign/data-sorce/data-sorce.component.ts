import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CompaingDilogComponent } from '../compaing-dilog/compaing-dilog.component'
import { MatDialog } from '@angular/material';
import { CompaignServiceService } from '../compaign-service.service';

@Component({
  selector: 'app-data-sorce',
  templateUrl: './data-sorce.component.html',
  styleUrls: ['./data-sorce.component.scss']
})
export class DataSorceComponent implements OnInit {
  displayedColumns: string[] = ['company', 'source_name', 'count', 'active'];
  dataSource :any;
  panelOpenState = false;
  show_form:Boolean= false;
  public form: FormGroup;
  datasource:any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private fb: FormBuilder ,public dialog: MatDialog,
    private CompaignServiceService: CompaignServiceService,) { }
  ngOnInit() {
    this.get_datasource()
    this.team_managment_form()
    // this.dataSource.paginator = this.paginator;
  }
  get_datasource(){
    this.CompaignServiceService.get_data_source().subscribe((data:any) =>{
      console.log(data);
      this.datasource =  data.data
      this.dataSource = new MatTableDataSource(data.data)
      this.dataSource.paginator = this.paginator;
    })
  }
  team_managment_form() {
    this.form = this.fb.group({
      data_source_name: [''],
    });
  }
  openSmsDialog(sms){
    let dialogRef = this.dialog.open(CompaingDilogComponent, {
      data: {
        user:sms,
        type:"datasorce"
      }
    });
    dialogRef.afterClosed().subscribe((data: any) => {
      console.log(data)
      if (data != null) {
      }
    })

  }
  openSmsDialog1(sms){
    let dialogRef = this.dialog.open(CompaingDilogComponent, {
      data: {
        user:sms,
        type:"csv"
      }
    });
    dialogRef.afterClosed().subscribe((data: any) => {
      console.log(data)
      if (data != null) {
      }
    })

  }
}

export interface PeriodicElement {
  source_name: string;
  active: boolean;
  count: number;
  company: string;
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
