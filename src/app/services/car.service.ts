import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {ICar} from "../interfaces/car.interface";
import {Observable} from "rxjs";
import {urls} from "../constants/urls";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient:HttpClient) { }

  create(car:ICar): Observable<ICar> {
    return this.httpClient.post<ICar>(urls.cars, car);
  }
  getAll(): Observable<ICar[]> {
    return this.httpClient.get<ICar[]>(urls.cars);
  }
  getById(id:number): Observable<ICar> {
    return this.httpClient.get<ICar>(`${urls.cars}/${id}`);
  }
  deleteById(id:number): Observable<void> {
    return this.httpClient.delete<void>(`${urls.cars}/${id}`);
  }
  update(id:number, carForUpdate:Partial<ICar>): Observable<ICar> {
    return this.httpClient.put<ICar>(`${urls.cars}/${id}`, carForUpdate);
  }
}
