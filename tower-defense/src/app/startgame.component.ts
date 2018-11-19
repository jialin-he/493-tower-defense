import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'startgame',
    templateUrl: './startgame.component.html',
    styleUrls: ['./startgame.component.scss']
})
export class StartgameComponent {

    constructor(
        private router: Router
    ){}

    private toggleTutorial() {
        if (document.getElementById('startgame-tutorialBtn').getAttribute("src") === '/assets/img/tutorialBtn0.PNG') {
            (<HTMLImageElement>(document.getElementById('startgame-tutorialBtn'))).src='/assets/img/tutorialBtn1.PNG'
        }
        else
            (<HTMLImageElement>(document.getElementById('startgame-tutorialBtn'))).src='/assets/img/tutorialBtn0.PNG'
    }

    private toggleStart() {
        if (document.getElementById('startgame-startBtn').getAttribute("src") === '/assets/img/startBtn0.PNG')
            (<HTMLImageElement>(document.getElementById('startgame-startBtn'))).src='/assets/img/startBtn1.PNG'
        else 
            (<HTMLImageElement>(document.getElementById('startgame-startBtn'))).src='/assets/img/startBtn0.PNG'
    }

    private gotoTutorial() {
        this.toggleTutorial()
        this.router.navigate( [ '/tutorial' ] )
    }

    private gotoStart() {
        this.toggleStart()
        this.router.navigate( [ '/choosebase' ] )
    }

}