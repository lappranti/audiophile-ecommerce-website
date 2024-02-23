import { NgModule } from '@angular/core';
import { EarphonesComponent } from './earphones.component';
import { RouterModule, Routes } from '@angular/router';
import { EarphoneDetailComponent } from './components/earphone-detail/earphone-detail.component';
import { EarphoneListComponent } from './components/earphone-list/earphone-list.component';

const routes: Routes = [
  {
    path: '',
    component: EarphonesComponent,
    children: [
      {
        path: '',
        component: EarphoneListComponent,
      },
      {
        path: ':productId',
        component: EarphoneDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EarphonesRoutingModule {}
