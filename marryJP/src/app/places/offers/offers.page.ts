import { Component, OnInit } from '@angular/core';
import { OffersService } from './offers.service';
import { CommunityEntity } from 'src/app/models/community.modal';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  communityInfoList: CommunityEntity[];

  constructor(private communityService: OffersService) { }

  ngOnInit() {
    this.communityInfoList = this.communityService.CommunityEntityByFlag;
  }

}
