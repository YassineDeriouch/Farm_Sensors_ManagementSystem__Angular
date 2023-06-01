import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Farm } from "./Farm";

@Injectable({
  providedIn: 'root'
})

export class FarmService {
  private baseURL = "http://localhost:8080/Farms/get/all";

  constructor(private httpClient: HttpClient) {}

  getAllFarms(): Observable<Farm[]> {
    return this.httpClient.get<Farm[]>(this.baseURL);
  }
}
