import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CompaingDilogComponent } from '../compaing-dilog/compaing-dilog.component'
import { MatDialog } from '@angular/material';
import { CompaignServiceService } from '../compaign-service.service';


@Component({
  selector: 'app-compaing-list',
  templateUrl: './compaing-list.component.html',
  styleUrls: ['./compaing-list.component.scss']
})
export class CompaingListComponent implements OnInit {
  displayedColumns: string[] = ['company', 'source_name'];
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
  }
  get_datasource(){
    this.CompaignServiceService.get_camp_list().subscribe((data:any) =>{
      console.log(data);
      this.datasource =  data.data
      this.dataSource = new MatTableDataSource(data.data)
      this.dataSource.paginator = this.paginator;
    })
  }
  openSmsDialog(sms){
    let dialogRef = this.dialog.open(CompaingDilogComponent, {
      data: {
        user:sms,
        type:"list"
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