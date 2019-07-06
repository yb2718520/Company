import { MarryInfo } from './../models/marryinfos.modal';
import { Place } from './place.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  /**
   * Mock Marry Info for test.
   */
  private mockMarryInfo: MarryInfo[] = [
    new MarryInfo(
      '001',
      '高橋　太郎',
      'male',
      'Japan',
      'test@test.com',
      'engineer',
      '1000',
      'sleep, walking, gym',
      'Show Self PR',
      'your info test',
      true,
      new Date()
    ),
    new MarryInfo(
      '002',
      '田中　太郎',
      'male',
      'CHINA',
      'test@test.com',
      'engineer',
      '1000',
      'sleep, walking, gym',
      'this is test',
      'your info test',
      true,
      new Date()
    ),
    new MarryInfo(
      '001',
      'チン　こうはく',
      'male',
      'JAPAN',
      'test@test.com',
      'engineer',
      '1000',
      'sleep, walking, gym',
      'this is test',
      'your info test',
      true,
      new Date()
    ),
    new MarryInfo(
      '001',
      'テスト０１',
      'female',
      'JAPAN',
      'test@test.com',
      'engineer',
      '1000',
      'sleep, walking, gym',
      'this is test',
      'your info test',
      true,
      new Date()
    ),
    new MarryInfo(
      '001',
      'テスト０２',
      'female',
      'SOUTH KOREA',
      'test@test.com',
      'engineer',
      '1000',
      'sleep, walking, gym',
      'this is test',
      'your info test',
      true,
      new Date()
    )
  ];


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

  constructor() { }

  get places() {
    return [...this.testPlaces];
  }

  /**
   * return mock marry info.
   */
  get marryInfoList() {
    return [...this.mockMarryInfo];
  }

  /**
   * return active info.
   */
  get marryInfoListByflag() {
    return this.mockMarryInfo.filter(p => p.isactive === true);
  }

  /**
   * return male & active info.
   */
  get marryInfoIfMale() {
    return this.mockMarryInfo.filter(p => p.isactive === true && p.sex === 'male');
  }

  /**
   * return female & active info.
   */
  get marryInfoIfFemale() {
    return this.mockMarryInfo.filter(p => p.isactive === true && p.sex === 'female');
  }

  getPlace(id: string) {
    return {...this.places.find(p => p.id === id)};
  }
}
