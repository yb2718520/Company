import { Place } from './place.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private testPlaces: Place[] = [

    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City',
      'https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      149.99
    ),
    new Place(
      'p2',
      'Houston',
      'In the heart of New York City',
      'image url',
      200.99
    ),
    new Place(
      'p3',
      'LA',
      'In the heart of New York City',
      'image url',
      999.99
    )
  ];

  get places() {
    return [...this.testPlaces];
  }

  constructor() { }
}
