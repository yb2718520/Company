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
      '会社員',
      '1000',
      'sleep, walking, gym',
      'this is test',
      'your info test',
      true,
      new Date()
    ),
    new MarryInfo(
      '003',
      'チン　こうはく',
      'male',
      'JAPAN',
      'test@test.com',
      '会社員',
      '1000',
      'sleep, walking, gym',
      'this is test',
      'your info test',
      true,
      new Date()
    ),
    new MarryInfo(
      '004',
      'テスト０１',
      'female',
      'JAPAN',
      'test@test.com',
      '会社員',
      '1000',
      'sleep, walking, gym',
      'this is test',
      'your info test',
      true,
      new Date()
    ),
    new MarryInfo(
      '005',
      'テスト０２',
      'female',
      'SOUTH KOREA',
      'test@test.com',
      '会社員',
      '1000',
      'sleep, walking, gym',
      'this is test',
      'your info test',
      true,
      new Date()
    )
  ];

  constructor() { }

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

  /**
   * get info by id.
   */
  getInfo(id: string) {
    return {...this.mockMarryInfo.find(p => p.id === id)};
  }
}
