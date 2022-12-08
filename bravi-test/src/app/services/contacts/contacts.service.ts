import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as dotenv from 'dotenv';
import { Observable } from 'rxjs';
import User from 'src/app/models/user.model';
import { ResponseModel } from '../../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  
  constructor(private http: HttpClient) {
    // dotenv.config();
  }

  // private url = process.env['API_URL'];
  private url = "http://localhost:3000"
  public getUser(userEmail: string) : Observable<ResponseModel>{
    return this.http.get<ResponseModel>(this.url + '/user/' + userEmail);
  }

  public updateUser(user: User) : Observable<ResponseModel>{
    return this.http.put<ResponseModel>(this.url + '/user', user);
  }
}
