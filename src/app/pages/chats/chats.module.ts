import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SharedModule } from '../../shared/shared.module';
import { UsersService } from '../users/users.service';
import { SocketService } from '../../socket.service';

export const routes = [
  { path: '', redirectTo: 'ChatComponent', pathMatch: 'full'},
  { path: 'chat', component: ChatComponent, data: { breadcrumb: 'Chat' } },
]
@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PerfectScrollbarModule,
    SharedModule

  ],
  providers:[UsersService ,SocketService]
})
export class ChatsModule { }
