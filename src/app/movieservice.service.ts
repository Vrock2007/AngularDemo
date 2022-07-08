import { Movie } from './movie';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieserviceService {
  url: string = 'https://localhost:3000/movies';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    }),
  };

  Display(name: string): string {
    return 'Hello ' + name;
  }
  constructor(private httpClient: HttpClient) {}
  getmovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.url);
  }
}
