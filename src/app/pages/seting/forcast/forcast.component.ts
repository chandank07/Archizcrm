import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users/users.service';
import { MatTableDataSource } from '@angular/material';
import { SettingService } from '../setting.service';

@Component({
  selector: 'app-forcast',
  templateUrl: './forcast.component.html',
  styleUrls: ['./forcast.component.scss']
})
export class ForcastComponent implements OnInit {
  displayedColumns: string[] = ['position', 'jan', 'feb', 'mar', 'apr', 'edit'];
  dataSource: any;
  isEditable: Boolean = true;
  curent_month:Number;
  constructor(private UsersService: UsersService, private settingService: SettingService) {
    this.isEditable = false;
  }

  ngOnInit() {
    var d = new Date();
    var n = d.getMonth();
    this.curent_month = n;
    this.settingService.get_forcast().subscribe((res: any) => {
      console.log(res.data,n)
      this.dataSource = new MatTableDataSource(res.data)
      res.data.forEach(element => {
        element.isEditable = false;
      });
      // this.dataSource.paginator = this.paginator;
    })
  }
  edit(data, i) {
    console.log(data);
    this.dataSource.filteredData[i].isEditable = !this.dataSource.filteredData[i].isEditable;
  }
  save(data, i) {
    this.dataSource.filteredData[i].isEditable = !this.dataSource.filteredData[i].isEditable;
      let obj ={
        forcast:data.forcast
      }
      this.settingService.update_forcast(data._id, obj).subscribe((res:any) =>{
        console.log(res ,"target>>>>>>>>>>>>>>>>>>>>");
      })
  }
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}