import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'choosebase',
    templateUrl: './choosebase.component.html',
    styleUrls: ['./choosebase.component.scss']
})
export class ChoosebaseComponent {
    private showeecs = false
    private btnChanged = false

    public showEecsModal: boolean = false

    constructor(
        private router: Router
    ){}

    private changeBtn(x: number, y: number) {
        let button = document.getElementById("popover-btn")
        
        // button.setAttribute("ngbPopover", "You see, I show up on hover!")
        // button.setAttribute("triggers", "mouseenter:mouseleave")
        // button.setAttribute("popoverTitle", "Pop title")
        // button.style.position = "absolute"
        console.log(x,y)
        button.style.left = x - 10 + 'px'
        button.style.top = y - 10 + 'px'
        button.style.width = "40px"
        button.style.height = "40px"
        // let body = document.getElementById("body")
        // body.appendChild(button)
        
    }

    private whenHover(event: any) {
        if (event.layerX >= 624 && event.layerX <= 812 && event.layerY >= 359 && event.layerY <= 498) {
            this.showeecs = true
            this.changeBtn(event.pageX, event.pageY)
        }
        else {
            this.showeecs = false
        }
    }

    private show(event: any) {
        console.log(event)
        if (event.layerX >= 624 && event.layerX <= 812 && event.layerY >= 359 && event.layerY <= 498) {
            this.showEecsModal = true
        }
        else {
            this.showEecsModal = false
        }
    }

    private goBack() {
        this.router.navigate( [ '' ] )
    }


}