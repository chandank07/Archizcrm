import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users/users.service';
import { MatTableDataSource } from '@angular/material';
import { SettingService } from '../setting.service';
@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.scss']
})
export class TargetComponent implements OnInit {
  displayedColumns: string[] = ['position', 'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'july', 'aug', 'sep', 'oct', 'nov', 'dec', 'edit'];
  dataSource: any;
  isEditable: Boolean = true;
  constructor(private UsersService: UsersService, private settingService: SettingService) {
    this.isEditable = false;
  }

  ngOnInit() {
    this.settingService.get_target().subscribe((res: any) => {
      console.log(res.data)
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
        target:data.target
      }
      this.settingService.update_target(data._id, obj).subscribe((res:any) =>{
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

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];