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
      149.99,
      new Date('2019-01-01'),
      new Date('2019-12-31')
    ),
    new Place(
      'p2',
      'Houston',
      'In the heart of New York City',
      'https://s-ec.bstatic.com/images/hotel/max1024x768/134/134893089.jpg',
      200.99,
      new Date('2019-01-01'),
      new Date('2019-12-31')
    ),
    new Place(
      'p3',
      'LA',
      'In the heart of New York City',
      'https://c8.alamy.com/comp/CC68T2/paris-france-small-business-shops-mercerie-de-la-nation-sewing-store-CC68T2.jpg',
      999.99,
      new Date('2019-01-01'),
      new Date('2019-12-31')
    )
  ];

  get places() {
    return [...this.testPlaces];
  }

  constructor() { }

  getPlace(id: string) {
    return {...this.places.find(p => p.id === id)};
  }
}
