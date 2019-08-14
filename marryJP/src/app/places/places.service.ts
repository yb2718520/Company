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
      '日本',
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
      '中国',
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
      '日本',
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
      '日本',
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
      '韓国',
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
  // use id for search
  getId(id: string) {
    // return this.mockMarryInfo.filter(p => p.id === id);
    return this.mockMarryInfo.filter(p => p.id.toLowerCase().indexOf(id.toLowerCase())>-1);  
  }

  // use name for search
  getName(name: string) {
    // return this.mockMarryInfo.filter(p => p.name === name);
    return this.mockMarryInfo.filter(p => p.name.toLowerCase().indexOf(name.toLowerCase())>-1);  


  }
}
