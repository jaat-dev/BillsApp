import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { OutcomeModel } from './models/outcome.models';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OutcomeService {

  constructor(private http: HttpClient) { }

  getAll(year: number, month: number, userId: string): Observable<OutcomeModel[]> {
    return this.http.get<OutcomeModel[]>(`${environment.apiUrl}outcomes`);
  }
}
