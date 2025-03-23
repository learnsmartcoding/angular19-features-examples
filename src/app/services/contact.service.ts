import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  private readonly API_URL = 
  //'http://localhost:7205/api/movies?'
  
  'https://rxjs-lsc.azurewebsites.net/api/movies?code=T37X7m8JyhlhxBPwlvazAaRYiuQiQNGAH31f0MmdVolqAzFuJBTJcg%3D%3D&';

  constructor(private http: HttpClient) {}

  searchMovies(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}search=${query}`).pipe(
      catchError((error) => {
        console.error('Error occurred while fetching movies:', error);
        return throwError(() => new Error('Unable to fetch movies. Please try again later.'));
      })
    );
  }

  
  sendMessage(contactData: any): Observable<any> {
    return this.http.post(`${this.API_URL}/contact`, contactData);
  }
}
