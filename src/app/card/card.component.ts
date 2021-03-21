import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { DogApiService, DogDataInterface } from '../dog-api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  noMatchFound: boolean = false;
  randomDog: string = '';
  breedQuery: string = '';

  constructor(public dogApiService: DogApiService) { }

  ngOnInit(): void {
    this.getRandomDog()
  }

  getRandomDog() {    
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

  private displayDog = (dogData: DogDataInterface) => {
    this.randomDog = dogData.message;
    this.ableToFindDog();          
  }

  private displayWarning = (error: any) => {
    console.log('Error fetching random dog', error);
    this.unableToFindDog();
  }

  private ableToFindDog = () => {
    this.noMatchFound = false;
  }

  private unableToFindDog = () => {
    this.noMatchFound = true;
  }

}
