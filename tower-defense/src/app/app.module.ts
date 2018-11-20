import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ROUTES } from './app-routing.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartgameComponent } from './startgame.component';
import { TutorialComponent } from './tutorial.component';
import { ChoosebaseComponent } from './choosebase.component';
import { EECSComponent } from './eecs.component';
import { PlayGameComponent } from './play-game/play-game.component';

@NgModule({
  declarations: [
    AppComponent,
    StartgameComponent,
    TutorialComponent,
    ChoosebaseComponent,
    EECSComponent,
    PlayGameComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
