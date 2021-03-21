import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface DogDataInterface {
  message: string
  status: string
}

@Injectable({
  providedIn: 'root'
})
export class DogApiService {

  // https://dog.ceo/dog-api/documentation
  baseUrl: string = 'https://dog.ceo/api';

  constructor(private http: HttpClient) { }

  getRandomDog(): Observable<DogDataInterface> {
    return this.http.get<DogDataInterface>(this.baseUrl + '/breeds/image/random');
  }

  getRandomDogByBreed(breed: string): Observable<DogDataInterface> {
    return this.http.get<DogDataInterface>(this.baseUrl + `/breed/${breed}/images/random`);
  }
}