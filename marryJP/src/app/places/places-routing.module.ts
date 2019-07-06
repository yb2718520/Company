import { PlacesPage } from './places.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'tabs',
        component: PlacesPage,
        children: [
            {
                path: 'discover',
                children: [
                    {
                        path: '',
                        loadChildren: './discover/discover.module#DiscoverPageModule' // lazy load component
                    },
                    {
                        path: ':placeId',
                        loadChildren: './place-detail/place-detail.module#PlaceDetailPageModule' // lazy load component
                    }
                ]
            },
            {
                path: 'report',
                loadChildren: './report/report.module#ReportPageModule'
            },
            {
                path: 'offers',
                children: [
                    {
                        path: '',
                        loadChildren: './offers/offers.module#OffersPageModule'
                    },
                    {
                        path: 'new',
                        loadChildren: './offers/new-offer/new-offer.module#NewOfferPageModule'
                    },
                    {
                        path: 'edit/:placeId',
                        loadChildren: './offers/edit/edit.module#EditPageModule'
                    },
                    // {
                    //     path: ':placeId',
                    //     loadChildren: './offers/offer-bookings/offer-bookings.module#OfferBookingPageModule'
                    // },
                    {
                        path: '',
                        redirectTo: '/places/tabs/discover',
                        pathMatch: 'full'
                    }
                ]
            }
        ]
    },
    {
        path: '',
        redirectTo: '/places/tabs/discover',
        pathMatch: 'full'
    },
  { path: 'report', loadChildren: './report/report.module#ReportPageModule' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlacesRoutingModule {}

