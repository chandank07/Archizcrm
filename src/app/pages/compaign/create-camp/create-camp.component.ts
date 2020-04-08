import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CompaingDilogComponent } from '../compaing-dilog/compaing-dilog.component'
import { MatDialog } from '@angular/material';
import { CompaignServiceService } from '../compaign-service.service';

@Component({
  selector: 'app-create-camp',
  templateUrl: './create-camp.component.html',
  styleUrls: ['./create-camp.component.scss']
})
export class CreateCampComponent implements OnInit {
  displayedColumns: string[] = ['company','Count', 'source_name','memeber' ,'camp_list'];
  dataSource: any;
  panelOpenState = false;
  show_form: Boolean = false;
  addform: Boolean = true;
  assing_comp:any;
  public listForm: FormGroup;
  datasource: any;
  data_source: any;
  team: any;
  camp_list:any;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private fb: FormBuilder, public dialog: MatDialog,
    private CompaignServiceService: CompaignServiceService, ) { }
  ngOnInit() {
    this.get_datasource()
    this.list_form();
    this.get_data_source();
    this.get_team();
    this.get_assing();
  }
  get_data_source() {
    this.CompaignServiceService.get_data_source().subscribe((res: any) => {
      this.data_source = res.data;
    })
  }
  get_team() {
    this.CompaignServiceService.get_team().subscribe((res: any) => {
      this.team = res.data;
    })
  }

  get_datasource() {
    this.CompaignServiceService.get_camp_list().subscribe((data: any) => {
      console.log(data);
      this.camp_list = data.data;
      // this.datasource = data.data
      // this.dataSource = new MatTableDataSource(data.data)
      // this.dataSource.paginator = this.paginator;
    })
  }
  get_assing() {
    this.CompaignServiceService.get_assing_camp().subscribe((res: any) => {
      this.assing_comp = res.data;
      this.datasource = res.data
      this.dataSource = new MatTableDataSource(res.data)
      this.dataSource.paginator = this.paginator;
      console.log(this.assing_comp)
    })
  }

  list_form() {
    this.listForm = this.fb.group({
      team_mangement: [''],
      data_source: [''],
      camp_list: [''],
      // caompaing_name: [''],
    });
  }
  openSmsDialog(sms) {
    if (this.addform == true) {
      this.addform = false
    } else {
      this.addform = true
    }
    // let dialogRef = this.dialog.open(CompaingDilogComponent, {
    //   data: {
    //     user:sms,
    //     type:"list"
    //   }
    // });
    // dialogRef.afterClosed().subscribe((data: any) => {
    //   console.log(data)
    //   if (data != null) {
    //   }
    // })

  }
  submit() {
    console.log(this.listForm.value);
    this.CompaignServiceService.create_assing_camp(this.listForm.value).subscribe((res: any) => {
      console.log(res);
      if(res){
        this.get_assing()
        this.addform = true
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