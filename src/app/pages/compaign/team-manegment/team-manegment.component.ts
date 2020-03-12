import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { UsersService } from '../../../pages/users/users.service';
import { CompaignServiceService } from '../compaign-service.service';

@Component({
  selector: 'app-team-manegment',
  templateUrl: './team-manegment.component.html',
  styleUrls: ['./team-manegment.component.scss']
})
export class TeamManegmentComponent implements OnInit {
  public form: FormGroup;
  items = [];

  basket = [];
  user: any;
  constructor(private fb: FormBuilder, private usersService: UsersService,
    private CompaignServiceService: CompaignServiceService) { }
  ngOnInit() {
    this.team_managment_form();
    this.usersService.get_user().subscribe((res: any) => {
      console.log(res.data)
      this.user = res.data;
      this.user.forEach(element => {
        this.items.push({ name: element.profile.name + " " + element.profile.surname, id: element._id });
      });
    })
  }
  team_managment_form() {
    this.form = this.fb.group({
      ceo: [''],
      ctm: [''],
      pd: [''],
      team_name: ['']
    });
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      console.log(event.container.data, event.previousIndex, event.currentIndex)
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  save() {
    let newarr =[]
    this.basket.forEach(element => {
      newarr.push({id:element.id})
    });
    let data ={
      ceo: this.form.value.ceo,
      ctm: this.form.value.ctm,
      pd: this.form.value.pd,
      team_name: this.form.value.team_name,
      selectd_member :newarr
    }
    console.log(data)
    this.CompaignServiceService.create_team_mangemet(data).subscribe((res:any) =>{
      console.log(res)
    })
  }
  cencel(){
    this.form.reset();
  }
}
