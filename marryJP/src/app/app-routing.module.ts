import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // DEFAULT PAGE
  { path: '', redirectTo: 'places', pathMatch: 'full' },
  // { path: 'home', loadChildren: './places/places.module#PlacesPageModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },

  // TAB PAGE
  {
    path: 'places',
    loadChildren: './places/places.module#PlacesPageModule',
    canLoad: [AuthGuard]
  },
  // SETTING PAGE
  { path: 'setting',
    loadChildren: './setting/setting.module#SettingPageModule',
    canLoad: [AuthGuard]
  },
  // CHAT PAGE
  { path: 'chat',
    loadChildren: './chat/chat.module#ChatPageModule',
    canLoad: [AuthGuard]
  }
  //
  // {
  //   path: '',
  //   loadChildren: './bookings/bookings.module#BookingsPageModule',
  //   canLoad: [AuthGuard]
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
