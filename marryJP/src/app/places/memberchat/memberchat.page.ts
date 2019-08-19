import { Component, OnInit } from '@angular/core';
import { Comment } from './class/comment';
import { User } from './class/user';

const CURRENT_USER: User = new User(1, '五十川 洋平');
const ANOTHER_USER: User = new User(2, '竹井 賢治');

const COMMENTS: Comment[] = [
  new Comment(ANOTHER_USER, 'お疲れ様です！'),
  new Comment(ANOTHER_USER, 'この間の件ですが、どうなりましたか？'),
  new Comment(CURRENT_USER, 'お疲れ様です！'),
  new Comment(CURRENT_USER, 'クライアントからOKが出ました！'),
];

@Component({
  selector: 'app-memberchat',
  templateUrl: './memberchat.page.html',
  styleUrls: ['./memberchat.page.scss'],
})
export class MemberchatPage implements OnInit {

  comments = COMMENTS;
  currentUser = CURRENT_USER;
  content = '';


  addComment(comment: string): void {
    if (comment) {
      this.comments.push(new Comment(this.currentUser, comment));
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
