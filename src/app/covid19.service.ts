import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {observable, Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

  constructor(public http: HttpClient) { }

  getData():Observable<any>{
   return this.http.get("https://api.covid19api.com/summary");

  }

  getcountries():Observable<any>{
    return this.http.get("https://api.covid19api.com/countries");
  }

  getBasedOnCounter(name):Observable<any>{
    return this.http.get("https://api.covid19api.com/country/"+name)
  }
}
