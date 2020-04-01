import { Component, OnInit } from '@angular/core';
import {UserAccountService} from '../../../../services/user-accout.service';
import {ToastrService} from 'ngx-toastr';
import {UserAccount} from '../../../../models/user-account.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: UserAccount[] = [];

  constructor(private userAccountService: UserAccountService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.userAccountService.getUsers().subscribe(
      resp => {
        this.users = resp;
      },
      error => {
        this.toastr.error('Failed to retrieve users');
      }
    );
  }

}
