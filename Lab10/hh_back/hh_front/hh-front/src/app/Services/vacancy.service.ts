import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { Vacancy } from '../Models/vacancy';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  getCompanyVacancies(companyId: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.baseUrl}/companies/${companyId}/vacancies/`)
      .pipe(
        map(response => {
          // Handle empty QuerySet from Django (will be an empty array)
          if (!response || response.length === 0) {
            return [];
          }
          return response;
        }),
        catchError(error => {
          console.error('API Error:', error);
          return [];
        })
      );
  }
}