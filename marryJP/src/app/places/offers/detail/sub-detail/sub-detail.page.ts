import { Comments } from './../commentDto';
import { FormDetailService } from './../form-detail.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { DetailForm } from '../detailFormDto';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sub-detail',
  templateUrl: './sub-detail.page.html',
  styleUrls: ['./sub-detail.page.scss'],
})
export class SubDetailPage implements OnInit {

  subFormId: string;
  subFormDetial: DetailForm;
  newComment: string;
  comments: Array<Comments>;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private service: FormDetailService
    ) { }

  async ngOnInit() {
    await this.route.paramMap.subscribe(param => {
      this.subFormId = param.get('forumDetailId');
    });

    await this.service.getMockFormData().pipe(
      map(resp => {
        // tslint:disable-next-line:no-string-literal
        return resp['forms'];
      })
    ).subscribe((resp: DetailForm[]) => {
      this.subFormDetial = resp.find(item => item.id === Number(this.subFormId));
      this.comments = this.subFormDetial.comments;
    });
  }

  sendMessage() {
    console.log('send message button clicked');
    this.comments.push({
      author: 'user01',
      title: this.newComment
    });
    this.newComment = '';
  }

}
