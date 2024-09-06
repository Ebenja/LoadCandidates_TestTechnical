import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidateServiceService {

  constructor(private http: HttpClient) { }

  postCandidate(candidate: any): Observable<any>
  {
    
    return this.http.post<any>('http://localhost:3000/candidates', candidate);
  }

  postCandidate2(candidate: any, file:any): Observable<any>
  {
    
    return this.http.post<any>('http://localhost:3000/candidates', candidate, file);
  }

  getCandidates(): Observable<any>{
    return this.http.get<any>('http://localhost:3000/candidates');
  }

}
