import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { EnquiryServiceService } from '../../enquiry/enquiry_Service/enquiry-service.service';
import { SetingDilogComponent } from '../seting-dilog/seting-dilog.component';
import { MatDialog } from '@angular/material';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  public invoiceForm: FormGroup;
  public product: FormGroup;
  list_user: any;
  data: any;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: any
  arr: any[] = [];
  constructor(private formbuilder: FormBuilder, private enqService: EnquiryServiceService,
    public dialog: MatDialog) { }
  ngOnInit() {
    this.invoice_for();
    this.dataSource = [{ product_name: "", price: "34", qut: "", total: "" }];
  }

  invoice_for() {
    this.invoiceForm = this.formbuilder.group({
      start_date: [''],
      due_date: [''],
      starge: [' '],
      enquiry: [''],
      product1: this.formbuilder.array([this.initItemRowsPeriod()]),
    })
  }
  initItemRowsPeriod() {
    return this.product = this.formbuilder.group({
      product_name: [''],
      price: [''],
      qut: [''],
      total: ['']
    });
  }
  get formArr1() {
    return this.invoiceForm.get('product1') as FormArray;
  }
  addPeriod(data) {
    this.formArr1.push(this.initItemRowsPeriod());
    this.data = this.formArr1.value;
    this.dataSource = this.data;
    console.log(this.data, this.invoiceForm.get('product1').value, data, this.arr)
  }
  removePeriod(i) {
    this.formArr1.removeAt(i);
    this.dataSource = this.formArr1.value;
  }
  onWriterChange() {
    this.enqService.get_type_of_enquiry({ status: this.invoiceForm.get("starge").value }).subscribe((res: any) => {
      this.list_user = res.data;
      console.log(this.list_user);
    })
  }
  onWriterChange1(qun ,i) {
    console.log(qun ,i);
  }
  openSmsDialog(sms) {
    let dialogRef = this.dialog.open(SetingDilogComponent, {
      data: {
        user: sms,
        type: "product"
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
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
];
