import { Component, OnInit } from '@angular/core';
import { DogApiService } from '../dog-api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(public dogApiService: DogApiService) { }

  ngOnInit(): void {
    this.getRandomDog()
  }

  randomDog: string = '';

  getRandomDog() {
    return this.dogApiService.getRandomDog().subscribe({
      error: (error) => { console.log('Error fetching random dog', error) },
      next: (dogData) => { this.randomDog = dogData.message }
    });
  }

}
