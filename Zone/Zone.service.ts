import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Zone } from './Zone';
import { FormBuilder} from '@angular/forms';
import {Ville} from "../Ville/Ville";



@Injectable({
  providedIn: 'root'
})
export class ZoneService {
  private baseURL3 = "http://localhost:8080/zones";
  private baseURL = "http://localhost:8080/zones/all";
  private baseURL2 = "http://localhost:8080/Electricite/allCond";
  private baseURL1 = "http://localhost:8080/User/getUser";
  private baseURL4 = "http://localhost:8080/Elect/bills";
  private baseURL5 = "http://localhost:8080/Elect/bills";
  private baseURL6 = "http://localhost:8080/zones/addzone";

  constructor(private httpClient: HttpClient,private builder: FormBuilder) { }

  getData(): Observable<Ville[]>{
    return this.httpClient.get<Ville[]>(`${this.baseURL1}`);
  }
  getZoneListEtat(): Observable<Zone[]>{
    return this.httpClient.get<Zone[]>(`${this.baseURL2}`);
  }
  getZoneList(): Observable<Zone[]>{
    return this.httpClient.get<Zone[]>(`${this.baseURL}`);
  }

  createZone(zone: Zone): Observable<Object>{
    return this.httpClient.post(`${this.baseURL6}`, zone);
  }

  getZoneById(id: number): Observable<Zone>{
    return this.httpClient.get<Zone>(`${this.baseURL5}/${id}`);
  }

  updateZone(id: number, zone: Zone): Observable<Object>{
    return this.httpClient.put(`${this.baseURL4}/${id}`, zone);
  }

  deleteZone(numcontrat: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL3}/${numcontrat}`);
  }

}
