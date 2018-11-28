import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'tutorial',
    templateUrl: './tutorial.component.html',
    styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent {

    constructor(
        private router: Router
    ){}

    private goBack() {
        this.router.navigate( [ '' ] )
    }

}