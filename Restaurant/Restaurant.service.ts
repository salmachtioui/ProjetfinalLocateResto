import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Restaurant } from './Restaurant';
import { FormBuilder} from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private baseURL3 = "http://localhost:8080/restaurant";
  private baseURL2 = "http://localhost:8080/restaurant/allE";
  private baseURL = "http://localhost:8080/restaurant/all";
  private baseURL1 = "http://localhost:8080/restaurant/add";
  private baseURL4 = "http://localhost:8080/restaurant/allV";
  private baseURL5 = "http://localhost:8080/restaurant/allstat";
  private baseURL6 = "http://localhost:8080/restaurant/allstatV";
 
 

  
  constructor(private httpClient: HttpClient,private builder: FormBuilder) { }

  getRestaurantValidList(): Observable<Restaurant[]>{
    return this.httpClient.get<Restaurant[]>(`${this.baseURL4}`);
  }
  getRestaurantList(): Observable<Restaurant[]>{
    return this.httpClient.get<Restaurant[]>(`${this.baseURL2}`);
  }
  createRestaurant(restaurant: Restaurant): Observable<Object>{
    return this.httpClient.post(`${this.baseURL1}`, restaurant);
  }

  getRestaurantById(id: number): Observable<Restaurant>{
    return this.httpClient.get<Restaurant>(`${this.baseURL3}/${id}`);
  }

  updateRestaurant(id: number, restaurant: Restaurant): Observable<Object>{
    return this.httpClient.put(`${this.baseURL3}/${id}`, restaurant);
  }

  deleteRestaurant(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL3}/${id}`);
  }
  getRestaurantV(): Observable<Object[]>{
    return this.httpClient.get<Object[]>(`${this.baseURL6}`);
  }
  getRestaurantZ(): Observable<Object[]>{
    return this.httpClient.get<Object[]>(`${this.baseURL5}`);
  }

}
