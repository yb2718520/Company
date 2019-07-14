import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { OffersService } from '../offers.service';
import { CommunityEntity } from 'src/app/models/community.modal';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  communityDetail: CommunityEntity;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private offersService: OffersService
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      if (!param.has('forumId')) {
        this.navCtrl.navigateBack('/places/tabs/forum');
        return;
      }

      console.log('id: ' + param.get('forumId'));
      this.communityDetail = this.offersService.getInfoById(param.get('forumId'));
    });
  }

}
