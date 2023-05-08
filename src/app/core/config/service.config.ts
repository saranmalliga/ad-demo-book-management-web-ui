import { environment } from 'src/app/environments/environment';
import { Injectable } from '@angular/core';
import { EnvService } from 'src/app/core/config/env.service';

@Injectable({
  providedIn: 'root',
})


export class ServiceApiConfig {

    constructor(private env: EnvService) { }

    BOOKSS_LIST = (): string => `${this.env.baseURL}api/book/GetAllBooks`;


}