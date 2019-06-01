import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ActionSheetController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingController: LoadingController) { }

  ngOnInit() {
  }

  onLogin() {
    // this.isLoading = true;
    this.loadingController.create({
      keyboardClose: true,
      message: 'Logging in...'
    }).then(lodingEl => {
      lodingEl.present();
      this.authService.login();
      setTimeout(() => {
        // this.isLoading = false;
        this.loadingController.dismiss();
        this.router.navigateByUrl('/places/tabs/discover');
      }, 1500);
    });
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

}
