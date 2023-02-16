import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';

const baseUrl = 'https://angular-backend.vercel.app/api/tutorials';

const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('Access-Control-Allow-Headers', 'Content-Type')
  .set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');

@Injectable({
  providedIn: 'root'
})

export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(baseUrl, { 'headers': headers });
  }

  get(id: any): Observable<Tutorial> {
    return this.http.get<Tutorial>(`${baseUrl}/${id}`, { 'headers': headers });
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data, { 'headers': headers });
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data, { 'headers': headers });
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`, { 'headers': headers });
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl, { 'headers': headers });
  }

  findByTitle(title: any): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${baseUrl}?title=${title}`, { 'headers': headers });
  }
}