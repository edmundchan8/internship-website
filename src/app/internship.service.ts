import { Injectable } from '@angular/core';
import { Internship } from './internship'
import { INTERNSHIPS } from './mock-internships'
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class InternshipService {

  constructor() { }

  getInternships(): Observable<Internship[]> {
    return of(INTERNSHIPS)
  }

  getIntern(id: number): Observable<Internship>{
    return of(INTERNSHIPS.find(intern => intern.id === id))
  }
}
