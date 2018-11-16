import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app-routing.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartgameComponent } from './startgame.component';
import { TutorialComponent } from './tutorial.component';
import { ChoosebaseComponent } from './choosebase.component';

@NgModule({
  declarations: [
    AppComponent,
    StartgameComponent,
    TutorialComponent,
    ChoosebaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
