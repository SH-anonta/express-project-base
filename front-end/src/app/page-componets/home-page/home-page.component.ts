import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private toastr: ToastrService, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  doStuffClick() {
    this.toastr.success(`I'm doing stuff`);
    this.httpClient
      .get('http://localhost:3000/names')
      .subscribe(resp => {
        console.log(resp);
      });
  }
}
