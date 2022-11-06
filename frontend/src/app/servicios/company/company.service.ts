import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {Client} from 'src/app/models/client-model'
@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  getElementById(id: number){
    return this.http.get<any>(`${environment.apiUrl}/company/${id}/`)
    .pipe(catchError((e) => throwError(e)));
  }

  editClient(id: number, client: Client){
    return this.http.put<any>(`${environment.apiUrl}/company/${id}/`,client)
    .pipe(catchError((e) => throwError(e)));
  }
}
