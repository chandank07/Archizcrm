import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { MatDialog } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { TaskDilogComponent } from '../task-dilog/task-dilog.component';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { Subject } from 'rxjs';
import { blockTransition } from '../../../theme/utils/app-animation';
import { EnquiryServiceService } from '../enquiry_Service/enquiry-service.service';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  animations: [blockTransition],
  host: {
    '[@blockTransition]': ''
  }
})
export class TaskComponent implements OnInit {
  task:any;
  view: string = 'month';
  viewDate: Date = new Date();
  activeDayIsOpen: boolean = true;
  actions: CalendarEventAction[] = [{
    label: '<i class="material-icons icon-sm white">edit</i>',
    onClick: ({ event }: { event: CalendarEvent }): void => {
      this.openScheduleDialog(event);
      console.log(event)
    }
  }, {
    label: '<i class="material-icons icon-sm white">close</i>',
    onClick: ({ event }: { event: CalendarEvent }): void => {
      console.log(this.events,"delete data")
      this.events = this.events.filter(iEvent => iEvent !== event);
      this.snackBar.open('Event deleted successfully!', null, {
        duration: 1500
      });
    }
  }];
  events: CalendarEvent[] = [];
  // events: CalendarEvent[] = [{
  //   start: subDays(startOfDay(new Date()), 1),
  //   end: addDays(new Date(), 1),
  //   title: 'A 3 day event',
  //   color: colors.red,
  //   actions: this.actions
  // }, {
  //   start: startOfDay(new Date()),
  //   title: 'An event with no end date',
  //   color: colors.yellow,
  //   actions: this.actions
  // }, {
  //   start: subDays(endOfMonth(new Date()), 3),
  //   end: addDays(endOfMonth(new Date()), 3),
  //   title: 'A long event that spans 2 months',
  //   color: colors.blue
  // }, {
  //   start: addHours(startOfDay(new Date()), 2),
  //   end: new Date(),
  //   title: 'A draggable and resizable event',
  //   color: colors.yellow,
  //   actions: this.actions,
  //   resizable: {
  //     beforeStart: true,
  //     afterEnd: true
  //   },
  //   draggable: true
  // }];
  refresh: Subject<any> = new Subject();


  public settings: Settings;
  constructor(public appSettings: AppSettings,
    public dialog: MatDialog,
    public snackBar: MatSnackBar, public enquiryService: EnquiryServiceService, ) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    console.log(this.events)
    this.get_task();
  }

  get_task() {
    this.enquiryService.get_task().subscribe((doc: any) => {
      doc.data.forEach(element => {
        element.start = new Date(element.start);
        element.end = new Date(element.end);
        element.actions[0].onClick =  ({ event }: { event: CalendarEvent }): void => {
          this.openScheduleDialog(event);
          this.task = event;
        }
        element.actions[1].onClick =  ({ event }: { event: CalendarEvent }): void => {
          this.task = event;
          this.delete_task(this.task._id)
          this.events = this.events.filter(iEvent => iEvent !== event);
          this.snackBar.open('Event deleted successfully!', null, {
            duration: 1500
          });
        }
      });
      this.events = doc.data;
    })
  }

  delete_task(id){
    this.enquiryService.delete_task(id).subscribe((res:any)=>{
      console.log(res)
      this.get_task();
    })
  }

  dayClicked({ date, events }: { date: Date, events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if ((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  openScheduleDialog(event) {
    let dialogRef = this.dialog.open(TaskDilogComponent, {
      data: event
    });

    dialogRef.afterClosed().subscribe(result => {
     
      if (result) {
        if (!result.isEdit) {
          result.color = colors.blue;
          result.actions = this.actions;
          this.enquiryService.task_create(result).subscribe((res: any) => {
          })
          this.events.push(result);
          this.refresh.next();
        } else {
          result.color = colors.yellow;
          this.enquiryService.update_task(this.task._id , result).subscribe((res:any)=>{
            this.get_task();
          })
          // this.events.push(result);
          this.refresh.next();
        }
      }
    });
  }

}
