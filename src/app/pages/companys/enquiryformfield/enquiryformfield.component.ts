import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { CompanysDiolgComponent } from '../companys-diolg/companys-diolg.component';
import { MatDialog } from '@angular/material';
import { CompanyService } from '../company.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-enquiryformfield',
  templateUrl: './enquiryformfield.component.html',
  styleUrls: ['./enquiryformfield.component.scss']
})
export class EnquiryformfieldComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource:any;
  id:any;
  en_fiend:any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private dialog:MatDialog ,private r : ActivatedRoute , private CompanyService:CompanyService){}

  ngOnInit() {
    this.id = this.r.snapshot.paramMap.get('id')
    this.CompanyService.get_enquiry().subscribe((res:any) =>{
      console.log(res.data[0].items)
      this.en_fiend =res.data[0].items
      this.dataSource = new MatTableDataSource(res.data[0].items)
      this.dataSource.paginator = this.paginator;
    })
  }
  openSmsDialog(sms) {
    let dialogRef = this.dialog.open(CompanysDiolgComponent, {
      data: {
        user: this.id,
        type: "enquiry_form"
      }
    });
    dialogRef.afterClosed().subscribe((data: any) => {
      console.log(data)
      if (data != null) {
        // this.get_company()
      }
    })

  }
  openSmsDialog1(sms) {
    let dialogRef = this.dialog.open(CompanysDiolgComponent, {
      data: {
        user: this.en_fiend,
        type: "enquiry_form1"
      }
    });
    dialogRef.afterClosed().subscribe((data: any) => {
      console.log(data)
      if (data != null) {
        // this.get_company()
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
