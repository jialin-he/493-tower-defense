import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartgameComponent } from './startgame.component';
import { ChoosebaseComponent } from './choosebase.component';
import { TutorialComponent } from './tutorial.component';

export const ROUTES: Routes = [
  { path: '', component: StartgameComponent },
  { path: 'tutorial', component: TutorialComponent },
  { path: 'choosebase', component: ChoosebaseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
