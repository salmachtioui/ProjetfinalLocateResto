import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Serie } from './Serie';
import { FormBuilder} from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class SerieService {
  private baseURL3 = "http://localhost:8080/series";
  private baseURL = "http://localhost:8080/series/all";
  private baseURL1 = "http://localhost:8080/series/addSerie";




  constructor(private httpClient: HttpClient,private builder: FormBuilder) { }

  getSerieList(): Observable<Serie[]>{
    return this.httpClient.get<Serie[]>(`${this.baseURL}`);
  }

  createSerie(serie: Serie): Observable<Object>{
    return this.httpClient.post(`${this.baseURL1}`, serie);
  }

  getSerieById(id: number): Observable<Serie>{
    return this.httpClient.get<Serie>(`${this.baseURL3}/${id}`);
  }

  updateSerie(id: number, serie: Serie): Observable<Object>{
    return this.httpClient.put(`${this.baseURL3}/${id}`, serie);
  }

  deleteSerie(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL3}/${id}`);
  }

}
