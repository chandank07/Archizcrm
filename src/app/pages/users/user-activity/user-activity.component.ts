import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-user-activity',
  templateUrl: './user-activity.component.html',
  styleUrls: ['./user-activity.component.scss']
})
export class UserActivityComponent implements OnInit {
  displayedColumns: string[] = ['index','source_name','Position','active'];
  dataSource :any;
  panelOpenState = false;
  show_form:Boolean= false;
  public form: FormGroup;
  datasource:any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  constructor(private fb: FormBuilder ,public dialog: MatDialog,
     private UsersService:UsersService) { }


  ngOnInit() {
    this.get_stage();
    // this.dataSource.paginator = this.paginator;
  }


  get_stage(){
    this.UsersService.get_activity().subscribe((res:any) =>{
      console.log(res);
      this.datasource =  res.data[0].activitys
      this.dataSource = new MatTableDataSource(res.data[0].activitys)
      this.dataSource.paginator = this.paginator;
    })
  }

}

export interface PeriodicElement {
  source_name: string;
  active: boolean;
  count: number;
  company: string;
}

