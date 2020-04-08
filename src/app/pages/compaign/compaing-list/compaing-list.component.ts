import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CompaingDilogComponent } from '../compaing-dilog/compaing-dilog.component'
import { MatDialog } from '@angular/material';
import { CompaignServiceService } from '../compaign-service.service';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-compaing-list',
  templateUrl: './compaing-list.component.html',
  styleUrls: ['./compaing-list.component.scss']
})
export class CompaingListComponent implements OnInit {
  displayedColumns: string[] = ['company', 'source_name','action'];
  dataSource :any;
  panelOpenState = false;
  show_form:Boolean= false;
  public form: FormGroup;
  datasource:any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private fb: FormBuilder ,public dialog: MatDialog,
    private CompaignServiceService: CompaignServiceService,private AlertService:AlertService) { }
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
        this.get_datasource()
      }
    })

  }
  data_sorceDelete(id){
    var x = confirm("Are you sure you want to delete?");
    if (x) {
      this.CompaignServiceService.delete_camp(id).subscribe((res:any) =>{
        if(!res.errors){
          this.AlertService.success('Data Source Delete Successfull.!')
          this.get_datasource()
        }
      })
    }else{

    }
  }

}

export interface PeriodicElement {
  source_name: string;
  active: boolean;
  count: number;
  company: string;
}