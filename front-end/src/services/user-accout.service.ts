import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_BASE_URL} from '../constants/di-tokens';
import {UserAccount} from '../models/user-account.model';

@Injectable({providedIn: 'root'})
export class UserAccountService {
  readonly baseUrl: string;

  constructor(private httpClient: HttpClient,
              @Inject(API_BASE_URL) apiBaseUrl: string) {
    this.baseUrl = apiBaseUrl + '/api/users';
  }

  getUsers(): Observable<UserAccount[]> {
    return this.httpClient.get<UserAccount[]>(this.baseUrl);
  }
}
