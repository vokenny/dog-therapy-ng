import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface BreedDataInterface {
  message: Object
  status: string
}

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

  private sanitiseInput(input: string): string {
    return input.trim().toLowerCase()
  }

  getListOfBreeds(): Observable<BreedDataInterface> {
    return this.http.get<BreedDataInterface>(this.baseUrl + `/breeds/list/all`);
  }

  getRandomDog(): Observable<DogDataInterface> {
    return this.http.get<DogDataInterface>(this.baseUrl + '/breeds/image/random');
  }

  getRandomDogByBreed(breed: string): Observable<DogDataInterface> {  
    const breedParam: string = this.sanitiseInput(breed);  
    return this.http.get<DogDataInterface>(this.baseUrl + `/breed/${breedParam}/images/random`);
  }
}