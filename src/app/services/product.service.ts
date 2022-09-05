import { Injectable } from '@angular/core';
import { Floor } from 'interfaces/floor.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Materials } from 'interfaces/material.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private readonly httpClient : HttpClient) { }

  url:string = "https://informationpageapi.onrender.com/v1/datasheet/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getFloor(code:string):Observable<Floor>{
    return this.httpClient.get<Floor>(this.url + 'getFloor/' + code);
  }

  getMaterials(material:Materials, id:string):Observable<Materials>{
    let params = JSON.stringify(material);
    return this.httpClient.post<Materials>(this.url + 'getMaterials/' + id, params, this.httpOptions);
  }
}
