import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import {UserRoutingModule} from './user-routing.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';



@NgModule({
  declarations: [UserListComponent, CreateUserComponent, EditUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [
    UserRoutingModule
  ]
})
export class UserModule { }
