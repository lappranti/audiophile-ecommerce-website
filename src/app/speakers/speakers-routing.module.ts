import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SpeakersComponent } from './speakers.component';
import { SpeakerDetailComponent } from './components/speaker-detail/speaker-detail.component';
import { SpeakersListComponent } from './components/speakers-list/speakers-list.component';

const routes: Routes = [
  {
    path: '',
    component: SpeakersComponent,
    children: [
      {
        path: '',
        component: SpeakersListComponent,
      },
      {
        path: ':productId',
        component: SpeakerDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpeakersRoutingModule {}
