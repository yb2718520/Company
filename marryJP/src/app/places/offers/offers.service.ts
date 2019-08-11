import { CommonModule } from '@angular/common';
import { Injectable } from '@angular/core';
import { CommunityEntity } from 'src/app/models/community.modal';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  private mockCommunity: CommunityEntity[] = [
    new CommunityEntity(
      '001',
      'GYM',
      'JOIN US AND BUILD BODY GET HEALTH',
      'https://images.squarespace-cdn.com/content/v1/5cc64dc7b2cf79907e2890db/1556607725559-B68HRHU3MWHUHIZ4P07Z/ke17ZwdGBToddI8pDm48kJxLRMli3nGQUfALFRPNRnd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luj0xCD0oh5KMc0gpox0u9KLlQXx7eqCfd8jnybXvWqgNF8uu4mgxD-C41qFr7Gng/AO2Q0049-Edit.jpg?format=2500w',
      2,
      4,
      'THIS IS AWSOME GYM',
      'https://cdn3.iconfinder.com/data/icons/hotel-and-restaurant-17/64/128-512.png',
      new Date(),
      true
    ),
    new CommunityEntity(
      '002',
      'JAPAN',
      '日本へようこそ',
      'image',
      2,
      4,
      '日本文化が好きなコミュニティです〜',
      'icon',
      new Date(),
      false
    ),
    new CommunityEntity(
      '003',
      'JAPAN',
      '日本へようこそ',
      'https://theasiacollective.com/wp-content/uploads/2018/06/Feature-Photo-1-e1530688449976.png',
      1,
      7,
      '本文化が好きなコミュニティです〜',
      'https://img.icons8.com/bubbles/2x/beach.png',
      new Date(),
      true
    ),
    new CommunityEntity(
      '004',
      'IT TECH',
      'Share Your IT Information With Us',
      'https://www.livermoreschools.org/cms/lib/CA50000061/Centricity/Domain/72/Tech%20Graphic%20Blue%20and%20Gold.png',
      5,
      9,
      'NEW TRAND OF IT INFORMATION',
      'https://image.flaticon.com/icons/png/512/22/22819.png',
      new Date(),
      true
    ),
  ];

  constructor() {}

  /**
   * return mock community info.
   */
  get CommunityEntityList() {
    return [...this.mockCommunity];
  }

  /**
   * get active info.
   */
  get CommunityEntityByFlag() {
    return this.mockCommunity.filter(p => p.isactive === true);
  }

  /**
   * get info by id.
   */
  getInfoById(id: string) {
    return {...this.mockCommunity.find(p => p.id === id)};
  }
}
