import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { User, UserProfile, UserWork, UserContacts, UserSocial, UserSettings } from './user.model';
import { UsersService } from './users.service';
import { UserDialogComponent } from './user-dialog/user-dialog.component';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [UsersService]
})
export class UsersComponent implements OnInit {
    public users: User[];
    public searchText: string;
    public page: any;
    public settings: Settings;
    constructor(public appSettings: AppSettings,
        public dialog: MatDialog,
        public usersService: UsersService) {
        this.settings = this.appSettings.settings;
    }

    ngOnInit() {
        this.getUsers();
    }

    public getUsers(): void {
        this.users = null; //for show spinner each time
        // this.usersService.getUsers().subscribe(users => this.users = users);    
        this.usersService.get_user().subscribe((res: any) => {
            console.log(res.data)
            this.users = res.data;
            this.usersService.user_activity({routes:"/user" , activity:"get_user"}).subscribe(res =>{
                console.log(res)
            })
        })
    }
    // public addUser(user:User){
    //     this.usersService.addUser(user).subscribe(user => this.getUsers());
    // }
    // public updateUser(user:User){
    //     this.usersService.updateUser(user).subscribe(user => this.getUsers());
    // }
    public deleteUser(user: any) {
        console.log(user._id)
        this.usersService.delete_user(user._id).subscribe((user: any) => {
            console.log(user)
            if (user.errors)
                console.log(user)
            else
            this.usersService.user_activity({routes:"/user" , activity:"Delete User"}).subscribe(res =>{
                console.log(res)
            })
                this.getUsers()
        });
    }


    public onPageChanged(event){
        this.page = event;
        this.getUsers();
        if(this.settings.fixedHeader){      
            document.getElementById('main-content').scrollTop = 0;
        }
        else{
            document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
        }
    }

    public openUserDialog(user) {
        let dialogRef = this.dialog.open(UserDialogComponent, {
            data: {
                user: user,
                type: "user"
            }
        });

        dialogRef.afterClosed().subscribe(user => {
            if (user) {
                this.ngOnInit()
                // (user.id) ? this.updateUser(user) : this.addUser(user);
            }
        });
    }

}