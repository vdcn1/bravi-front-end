import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as dotenv from 'dotenv';
import { Observable } from 'rxjs';
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
}
