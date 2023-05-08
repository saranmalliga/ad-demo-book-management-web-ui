import { Injectable } from '@angular/core';
import { ServiceApiConfig } from 'src/app/core/config/service.config';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  
  constructor(
    private http: HttpClient,
    private api: ServiceApiConfig) { }

  getusers(filterBy: string, filterValue:string): Observable<any>{
    return this.http.get<any>(this.api.BOOKSS_LIST()+'?filterBy='+filterBy+'&filterValue=' + filterValue);
  }
}
