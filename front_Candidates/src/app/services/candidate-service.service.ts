import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidateServiceService {

  private CandidateSubject = new BehaviorSubject<any[]>([]);
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

  getEmpleadosObservable(): Observable<any[]> {
    return this.CandidateSubject.asObservable();
  }


  updateCandidate() {
    this.getCandidates().subscribe((data) => {
      this.CandidateSubject.next(data);
    });
  }

}
