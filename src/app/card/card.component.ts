import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BreedDataInterface, DogApiService, DogDataInterface } from '../dog-api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  noMatchFound: boolean = false;
  dogBreeds: string[] = [];
  randomDog: string = '';
  breedQuery: string = '';

  constructor(public dogApiService: DogApiService) { }

  ngOnInit(): void {
    this.getListOfBreeds();
    this.getRandomDog();
  }

  getListOfBreeds(): Subscription {
    return this.dogApiService.getListOfBreeds().subscribe({
      error: (_) => console.log('Error fetching list of dog breeds', _),
      next: (data: BreedDataInterface) => this.saveListOfBreeds(data.message)
    });
  }

  getRandomDog(): Subscription {    
    if (this.breedQuery) {
      return this.dogApiService.getRandomDogByBreed(this.breedQuery).subscribe({
        error: (_) => this.displayWarning(_),
        next: (_: DogDataInterface) => this.displayDog(_)
      });  
    } else {
      return this.dogApiService
        .getRandomDog()
        .subscribe({
          error: (_) => this.displayWarning(_),
          next: (_: DogDataInterface) => this.displayDog(_)
        });  
    }
  }

  private saveListOfBreeds = (breedsObj: object): void => {
    Object.keys(breedsObj).forEach(breed => {
      this.dogBreeds.push(breed);
    });
  }

  private displayDog = (dogData: DogDataInterface): void => {
    this.randomDog = dogData.message;
    this.noMatchFound = false;          
  }

  private displayWarning = (error: any): void => {
    console.log('Error fetching random dog', error);
    this.noMatchFound = true;
  }
}
