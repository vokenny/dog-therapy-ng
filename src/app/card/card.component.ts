import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BreedDataInterface, DogApiService, DogDataInterface } from '../services/dog-api.service';
import { SpinnerService } from '../services/spinner.service';

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

  constructor(public spinnerService: SpinnerService, private dogApiService: DogApiService) { }

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
    if (!this.breedQuery || this.breedQuery === 'Any breed') {
      return this.dogApiService
      .getRandomDog()
      .subscribe({
        error: (_) => this.displayWarning(_),
        next: (_: DogDataInterface) => this.displayDog(_)
      });  
    } else {
      return this.dogApiService.getRandomDogByBreed(this.breedQuery).subscribe({
        error: (_) => this.displayWarning(_),
        next: (_: DogDataInterface) => this.displayDog(_)
      });  
    }
  }

  private saveListOfBreeds = (breedsObj: object): void => {
    Object.keys(breedsObj).forEach(breed => {
      this.dogBreeds.push(breed);
    });

    this.dogBreeds.unshift('Any breed');
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
