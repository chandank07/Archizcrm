import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { SettingService } from '../setting.service';
import { SetingDilogComponent } from '../seting-dilog/seting-dilog.component';

@Component({
  selector: 'app-enquiry-type',
  templateUrl: './enquiry-type.component.html',
  styleUrls: ['./enquiry-type.component.scss']
})
export class EnquiryTypeComponent implements OnInit {
  displayedColumns: string[] = ['index','source_name','Position','active'];
  dataSource :any;
  panelOpenState = false;
  show_form:Boolean= false;
  public form: FormGroup;
  datasource:any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  constructor(private fb: FormBuilder ,public dialog: MatDialog,
     private settingService:SettingService) { }


  ngOnInit() {
    this.get_stage();
    // this.dataSource.paginator = this.paginator;
  }


  get_stage(){
    this.settingService.get_enquiry_type().subscribe((res:any) =>{
      console.log(res);
      this.datasource =  res.data
      this.dataSource = new MatTableDataSource(res.data)
      this.dataSource.paginator = this.paginator;
    })
  }

  
  openSmsDialog(sms){
    let dialogRef = this.dialog.open(SetingDilogComponent, {
      data: {
        user:sms,
        type:"enquiry_type"
      }
    });
    dialogRef.afterClosed().subscribe((data: any) => {
      console.log(data)
      if (data != null) {
        this.get_stage()
      }
    })

  }
  delete(id){
    let r = confirm("you want to delete Stage.")
    if (r == true) {
      this.settingService.delete_enquiry_type(id).subscribe((res:any) =>{
        console.log(res)
        if(res.errors == false){
          this.get_stage();
        }
      })
    }
  }
}

export interface PeriodicElement {
  source_name: string;
  active: boolean;
  count: number;
  company: string;
}

