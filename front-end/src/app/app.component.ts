import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-end';

  constructor(private httpClient: HttpClient) {
  }

  onClickMe() {
    console.log(`I've been clicked!!`);
    const apiBaseAddress = 'http://localhost:3000';
    const url = `${apiBaseAddress}/names`;

    this.httpClient
      .get(url)
      .subscribe(resp => {
        console.log(resp);
      });
  }
}
