import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class RestaurantServiceService {
  constructor(private http: HttpClient) {}

  
  fetchRestaurants(skip: number, take: number) {
    return this.http.get(`http://localhost:5000/api/restaurant/getRestaurants/${skip}/${take}`)
  }
}
