import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadphonesComponent } from './headphones.component';
import { HeadphoneDetailComponent } from './components/headphone-detail/headphone-detail.component';
import { HeadphoneListComponent } from './components/headphone-list/headphone-list.component';

const routes: Routes = [
  {
    path: '',
    component: HeadphonesComponent,
    children: [
      {
        path: '',
        component: HeadphoneListComponent,
      },
      {
        path: ':productId',
        component: HeadphoneDetailComponent,
      },
    ],
  },
  // {
  //   path: ':productId',
  //   component: HeadphoneDetailComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeadphonesRoutingModule {}
