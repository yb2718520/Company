import { FormDetailService } from './form-detail.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { OffersService } from '../offers.service';
import { CommunityEntity } from 'src/app/models/community.modal';
import { NewComponent } from 'src/app/modal/forum/new/new.component';
import { DetailForm } from './detailFormDto';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  formId: string;
  commnets: Array<DetailForm>;
  communityDetail: CommunityEntity;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private offersService: OffersService,
    private modalCtrl: ModalController,
    private service: FormDetailService
    ) { }

  ngOnInit() {

    this.route.paramMap.subscribe(param => {
      if (!param.has('forumId')) {
        this.navCtrl.navigateBack('/places/tabs/forum');
        return;
      }

      this.formId = param.get('forumId');
      this.communityDetail = this.offersService.getInfoById(param.get('forumId'));
    });

    // get comments
    this.service.getMockFormData().pipe(
      map(resp => {
      // tslint:disable-next-line:no-string-literal
      return resp['forms'];
    })
    ).subscribe((resp: DetailForm[]) => {
      // tslint:disable-next-line:no-string-literal
      this.commnets = resp;
    });
  }

  /**
   * create new activity.
   */
  createNewActivity() {
    console.log('create new forum');

    // modal control
    this.modalCtrl.create({
      component: NewComponent,
      componentProps: {
        selectedForum: this.communityDetail
      }
    }).then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    }).then(resultDate => {
      console.log(resultDate.data);
    });
  }
}
