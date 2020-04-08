import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { EnquiryServiceService } from '../../enquiry/enquiry_Service/enquiry-service.service';
import { SetingDilogComponent } from '../seting-dilog/seting-dilog.component';
import { MatDialog } from '@angular/material';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
import { SettingService } from '../setting.service';
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
  row: FormGroup
  displayColumns = ['Product', 'rate', 'qty', 'total', 'dis', 'gst', 'net', 'action'];
  // displayedColumns: string[] = ['position', 'name', 'weight','toatal','dis', 'symbol'];
  dataSource = new BehaviorSubject<AbstractControl[]>([]);
  arr: any[] = [];
  data2: any[] = [{ Product: '', rate: '', qty: '', total: '', dis: '', gst: '', net: '' }];
  rows: FormArray = this.formbuilder.array([]);
  form: FormGroup = this.formbuilder.group({ 'dates': this.rows });
  products: any;
  constructor(private formbuilder: FormBuilder, private enqService: EnquiryServiceService,
    public dialog: MatDialog, private SettingService: SettingService) {
    // this.invoice_for();
  }
  ngOnInit() {
    this.data2.forEach((d: any) => this.addRow(d));
    this.updateView();
    this.get_product();
    // this.dataSource = [{}];
    // this.formArr1.patchValue(this.dataSource)
  }
  product_change(data, i) {
    console.log(data, i)
    this.products.forEach(element => {

      if (element._id == data) {
        console.log(element, element.rate)
        this.row.patchValue(element);
        this.row.get('total').patchValue(element.rate * 1);
        this.row.get('qty').patchValue(1)
        this.row.get('net').patchValue(element.rate * 1)
        this.updateView()
      }
    });

  }
 
  get_product() {
    this.SettingService.get_prduct().subscribe((doc: any) => {
      this.products = doc.data
    })
  }
  Qty(data2) {
    console.log(data2.value.qty , "dfhgjfdhgjf")
    let toatal =0
    let rate = this.row.get('total').value
    this.row.get('total').patchValue((rate * data2.value.qty))
    this.row.get('net').patchValue((rate * data2.value.qty))
    // this.updateView()
  }
  Discount(data2){
    let rate = this.row.get('total').value
    this.row.get('net').patchValue(rate - data2.value.dis)
  }
  GST(data2){
    let rate = this.row.get('total').value
    this.row.get('net').patchValue(rate + data2.value.gst)
  }
  row_functiuon(d?: any, noUpdate?: boolean) {
    this.row = this.formbuilder.group({
      'Product': [d && d.Product ? d.Product : 0, []],
      'rate': [d && d.rate ? d.rate : 0, []],
      'qty': [d && d.qty ? d.qty : 0, []],
      'total': [d && d.total ? d.total : 0, []],
      'dis': [d && d.dis ? d.dis : 0, []],
      'gst': [d && d.gst ? d.gst : 0, []],
      'net': [d && d.net ? d.net : 0, []],
    });
  }
  addRow(d?: any, noUpdate?: boolean) {
    this.row_functiuon()
    this.rows.push(this.row);
    console.log(this.rows.value)
    if (!noUpdate) { this.updateView(); }
  }
  emptyTable() {
    while (this.rows.length !== 0) {
      this.rows.removeAt(0);
    }
  }
  updateView() {
    this.dataSource.next(this.rows.controls);
  }
  save() {
    console.log(this.form.value)
  }
  removePeriod(i) {
    this.rows.removeAt(i);
    this.updateView()
  }
  // invoice_for() {
  //   this.invoiceForm = this.formbuilder.group({
  //     start_date: [''],
  //     due_date: [''],
  //     starge: [' '],
  //     enquiry: [''],
  //     product: this.formbuilder.array([this.initItemRowsPeriod()]),
  //   })
  // }
  // initItemRowsPeriod() {
  //   return this.product = this.formbuilder.group({
  //     product_name: [''],
  //     price: [''],
  //     qut: [''],
  //     total: ['']
  //   });
  // }
  // get formArr1() {
  //   return this.invoiceForm.get('product') as FormArray;
  // }
  // addPeriod(data) {
  //   this.formArr1.push(this.initItemRowsPeriod());
  //   this.data = this.formArr1.value;
  //   console.log(this.data, this.invoiceForm.get('product').value, data,)
  //   this.dataSource = this.data;
  // }
  // removePeriod(i) {
  //   this.formArr1.removeAt(i);
  //   this.dataSource = this.formArr1.value;
  // }
  // onWriterChange() {
  //   this.enqService.get_type_of_enquiry({ status: this.invoiceForm.get("starge").value }).subscribe((res: any) => {
  //     this.list_user = res.data;
  //     console.log(this.list_user);
  //   })
  // }
  // onWriterChange1(qun ,i) {
  //   let total = 0

  //   console.log(qun ,i ,this.dataSource[i].total);
  //   total = this.dataSource[i].total + qun;
  //   this.dataSource[i].total = total
  //   console.log(this.dataSource[i].total ,total)

  // }
  // openSmsDialog(sms) {
  //   let dialogRef = this.dialog.open(SetingDilogComponent, {
  //     data: {
  //       user: sms,
  //       type: "product"
  //     }
  //   });
  //   dialogRef.afterClosed().subscribe((data: any) => {
  //     console.log(data)
  //     if (data != null) {
  //     }
  //   })

  // }
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
