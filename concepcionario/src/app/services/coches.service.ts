import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { CocheI } from '../models/coches';

@Injectable({
  providedIn: 'root'
})
export class CochesService {
  api_uri_nodejs = 'http://localhost:4000';
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/coches/`
  constructor(
    private http:HttpClient
  ) { }

  getAllCohce():Observable<{coche:CocheI[]}>{
    return this.http
      .get<{coche:CocheI[]}>(this.base_path)
  }
  getOneCoche(id: number): Observable<{ coche: CocheI[] }> {
    return this.http.get<{ coche: CocheI[] }>(`${this.base_path}${id}`);
  }

  createCoche(data: any):Observable<CocheI>{
    return this.http.post<CocheI>(this.base_path, data)
  }

  updateCcoche(id: number, data: any): Observable<CocheI> {
    console.log(id)
    console.log(`${this.base_path}${id}`)
    return this.http.put<CocheI>(`${this.base_path}${id}`, data);
  }

  deleteCcoche(id: number): Observable<CocheI> {
    return this.http.delete<CocheI>(`${this.base_path}${id}`);
  }
}
