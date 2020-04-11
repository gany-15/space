import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAstronaut } from './astronauts.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllApiService {

  constructor(private http: HttpClient) { }

  getAstronauts(): Observable<IAstronaut> {
    let url = 'http://api.open-notify.org/astros.json';
    return this.http.get<IAstronaut>(url);
  }
}
