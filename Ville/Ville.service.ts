import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Ville } from './Ville';
import { FormBuilder} from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class VilleService {
  private baseURL3 = "http://localhost:8080/villes";
  private baseURL = "http://localhost:8080/villes/all";
  private baseURL2 = "http://localhost:8080/Electricite/allCond";
  private baseURL1 = "http://localhost:8080/User/getUser";
  private baseURL4 = "http://localhost:8080/villes";
  private baseURL5 = "http://localhost:8080/Elect/bills";
  private baseURL6 = "http://localhost:8080/villes/addVille";

  constructor(private httpClient: HttpClient,private builder: FormBuilder) { }


  getVilleListEtat(): Observable<Ville[]>{
    return this.httpClient.get<Ville[]>(`${this.baseURL2}`);
  }
  getVilleList(): Observable<Ville[]>{
    return this.httpClient.get<Ville[]>(`${this.baseURL}`);
  }

  createVille(ville: Ville): Observable<Object>{
    return this.httpClient.post(`${this.baseURL6}`, ville);
  }

  getVilleById(id: number): Observable<Ville>{
    return this.httpClient.get<Ville>(`${this.baseURL}/${id}`);
  }

  updateVille(id: number, ville: Ville): Observable<Object>{
    return this.httpClient.put(`${this.baseURL3}/${id}`, ville);
  }

  deleteVille(numcontrat: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL3}/${numcontrat}`);
  }

}
