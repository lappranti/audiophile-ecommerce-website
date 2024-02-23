import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'earphones',
    loadChildren: () =>
      import('./earphones/earphones.module').then((m) => m.EarphonesModule),
  },

  {
    path: 'headphones',
    loadChildren: () =>
      import('./headphones/headphones.module').then((m) => m.HeadphonesModule),
  },
  {
    path: 'speaker',
    loadChildren: () =>
      import('./speakers/speakers.module').then((m) => m.SpeakersModule),
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('./checkout/checkout.module').then((m) => m.CheckoutModule),
  },
  {
    path: '**',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
