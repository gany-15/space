import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IAstronaut } from "./models/astronauts.model";
import { IIss } from "./models/iss.model";

@Injectable({
  providedIn: "root",
})
export class AllApiService {
  constructor(private http: HttpClient) {}

  getAstronauts(): Observable<IAstronaut> {
    let url = "http://api.open-notify.org/astros.json";
    return this.http.get<IAstronaut>(url);
  }

  getIssPosition(): Observable<IIss> {
    let url = "http://api.open-notify.org/iss-now.json";
    return this.http.get<IIss>(url);
  }
}
