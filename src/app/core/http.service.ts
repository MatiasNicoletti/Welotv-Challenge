import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseObject } from '../models/ResponseObject';
import { URL } from '../utils/URL';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  getPeople(searchAmount:number = 16):Observable<ResponseObject>{
   return this.http.get<ResponseObject>(URL.PEOPLE + searchAmount)
  }
}
