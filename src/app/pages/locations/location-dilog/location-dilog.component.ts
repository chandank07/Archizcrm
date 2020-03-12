import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { LocationService } from '../location.service';
import { MatSnackBar, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-location-dilog',
  templateUrl: './location-dilog.component.html',
  styleUrls: ['./location-dilog.component.scss']
})
export class LocationDilogComponent implements OnInit {
  public CountryForm: FormGroup;
  public regionForm: FormGroup;
  public cityForm: FormGroup;
  checked = false;
  region: boolean = false;
  country: boolean = false;
  editing: boolean = false;
  city: boolean = false;
  allregion: any;
  allcountry: any;
  constructor(public dialogRef: MatDialogRef<LocationDilogComponent>, public router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any, public snackBar: MatSnackBar,
    public fb: FormBuilder, public locationservice: LocationService, private alertService: AlertService, ) {
    this.initForm();

  }

  ngOnInit() {
    this.get_country();
    this.get_region();
    console.log(this.data)
    if (this.data.type == "country") {
      this.country = true;
      if (this.data.user) {
        this.editing = true;
        this.setvalue(this.data.user)
      } else {
        this.editing = false;
      }
    } else if (this.data.type == "region") {
      this.region = true;
      if (this.data.user) {
        this.editing = true;
        this.setvalueRegion(this.data.user)
      } else {
        this.editing = false;
      }
    } else if (this.data.type == "city") {
      this.city = true;
      if (this.data.user) {
        this.editing = true;
        this.setvalueCity(this.data.user)
      } else {
        this.editing = false;
      }
    }

  }
  get_country() {
    this.locationservice.get_Active_country().subscribe((data: any) => {
      this.allcountry = data.data;
      console.log(this.allcountry);
    })
  }

  get_region() {
    this.locationservice.get_active_region().subscribe((data: any) => {
      this.allregion = data.data;
      console.log(this.allregion);
    })
  }

  initForm() {
    this.CountryForm = this.fb.group({
      country_name: [''],
    });
    this.regionForm = this.fb.group({
      region_name: [''],
      country: [''],
    })
    this.cityForm = this.fb.group({
      city_name: [''],
      region: [''],
    })
  }
  get f() { return this.CountryForm.controls; }

  submit() {
    if (this.editing == true) {
      this.upadet(this.CountryForm.value)
    } else {
      this.add_country(this.CountryForm.value)
    }
  }

  resion_submit() {
    console.log(this.regionForm.value)
    if (this.editing == true) {
      this.upadetregion(this.regionForm.value)
    } else {
      this.add_region(this.regionForm.value)
    }
  }
  city_submit() {
    console.log(this.cityForm.value)
    if (this.editing == true) {
      this.upadetcity(this.cityForm.value)
    } else {
      this.add_city(this.cityForm.value)
    }
  }
  setvalue(data) {
    this.CountryForm.controls['country_name'].setValue(data.country_name)
    this.checked = data.is_active
  }
  setvalueRegion(data) {
    this.regionForm.controls['region_name'].setValue(data.region_name)
    this.regionForm.controls['country'].setValue(data.country._id)
    this.checked = data.is_active
  }
  setvalueCity(data) {
    this.cityForm.controls['city_name'].setValue(data.city_name)
    this.cityForm.controls['region'].setValue(data.region._id)
    this.checked = data.is_active
  }

  close(): void {
    this.dialogRef.close();
  }

  upadet(data) {
    data.is_active = this.checked;
    this.locationservice.update_country(this.data.user._id, data).subscribe((res: any) => {
      console.log(res);
      if (res)
        this.dialogRef.close(this.CountryForm.value);
      else
        console.log("error")
    })

  }
  upadetregion(data) {
    data.is_active = this.checked;
    console.log(data)
    this.locationservice.update_region(this.data.user._id, data).subscribe((res: any) => {
      console.log(res);
      if (res)
        this.dialogRef.close(this.CountryForm.value);
      else
        console.log("error")
    })
  }

  upadetcity(data) {
    data.is_active = this.checked;
    console.log(data)
    this.locationservice.update_city(this.data.user._id, data).subscribe((res: any) => {
      console.log(res);
      if (res){
        this.alertService.success('upadte Successfull.')
      setInterval(a=>{
        this.dialogRef.close(this.CountryForm.value);
      },1000,[]);
    }else
        console.log("error")
    })
  }

  add_country(data) {
    data.is_active = this.checked;
    console.log(this.CountryForm.value, data)
    this.locationservice.Create_country(data).subscribe((res: any) => {
      console.log(res);
      if (res.errors) {
        this.alertService.warning(res.message)
      } else {
        this.alertService.success(res.message)
        setInterval(a=>{
          this.dialogRef.close(res.data);
        },1000,[]);
      }
    })
  }
  add_region(data) {
    data.is_active = this.checked;
    console.log(this.regionForm.value)
    this.locationservice.create_region(data).subscribe((res: any) => {
      console.log(res.data);
      if (res.errors) {
        this.alertService.warning(res.message)
      } else {
        this.alertService.success(res.message)
        setInterval(a=>{
          this.dialogRef.close(res.data);
        },1000,[]);
      }
    })
  }
  add_city(data) {
    data.is_active = this.checked;
    console.log(data)
    this.locationservice.create_city(data).subscribe((res: any) => {
      console.log(res);
      if (res.errors) {
        this.alertService.warning(res.message)
      } else {
        this.alertService.success(res.message)
        setInterval(a=>{
          this.dialogRef.close(res.data);
        },1000,[]);
      }
    })
  }

}
