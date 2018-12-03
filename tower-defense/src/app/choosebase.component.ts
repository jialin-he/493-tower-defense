import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'choosebase',
    templateUrl: './choosebase.component.html',
    styleUrls: ['./choosebase.component.scss']
})
export class ChoosebaseComponent {
    private showeecs = false
    private showggbrown = false
    private showduder = false
    private showbbb = false
    private showpierpont = false
    private showdow = false
    private showchresler = false
    private showstamps = false

    private btnChanged = false

    public showEecsModal: boolean = false

    constructor(
        private router: Router
    ){}

    // private changeBtn(x: number, y: number) {
    //     let button = document.getElementById("popover-btn")
        
    //     // button.setAttribute("ngbPopover", "You see, I show up on hover!")
    //     // button.setAttribute("triggers", "mouseenter:mouseleave")
    //     // button.setAttribute("popoverTitle", "Pop title")
    //     // button.style.position = "absolute"
    //     button.style.left = x - 10 + 'px'
    //     button.style.top = y - 10 + 'px'
    //     button.style.width = "40px"
    //     button.style.height = "40px"
    //     // let body = document.getElementById("body")
    //     // body.appendChild(button)
        
    // }

    private whenHover(event: any) {
        if (event.layerX >= 624 && event.layerX <= 812 && event.layerY >= 359 && event.layerY <= 498) {
            this.showeecs = true
            this.showggbrown = false
            this.showduder = false
            this.showbbb = false
            this.showpierpont = false
            this.showdow = false
            this.showchresler = false
            this.showstamps = false
            // this.changeBtn(event.pageX, event.pageY)
        }
        else if (event.layerX >= 621 && event.layerX <= 938 && event.layerY >= 174 && event.layerY <= 319) {
            this.showeecs = false
            this.showggbrown = true
            this.showduder = false
            this.showbbb = false
            this.showpierpont = false
            this.showdow = false
            this.showchresler = false
            this.showstamps = false
        }
        else if (event.layerX >= 444 && event.layerX <= 558 && event.layerY >= 234 && event.layerY <= 374) {
            this.showeecs = false
            this.showggbrown = false
            this.showduder = false
            this.showbbb = false
            this.showpierpont = false
            this.showdow = true
            this.showchresler = false
            this.showstamps = false
        }
        else if (event.layerX >= 298 && event.layerX <= 439 && event.layerY >= 227 && event.layerY <= 380) {
            this.showeecs = false
            this.showggbrown = false
            this.showduder = false
            this.showbbb = true
            this.showpierpont = false
            this.showdow = false
            this.showchresler = false
            this.showstamps = false
        }
        else if (event.layerX >= 44 && event.layerX <= 273 && event.layerY >= 523 && event.layerY <= 602) {
            this.showeecs = false
            this.showggbrown = false
            this.showduder = false
            this.showbbb = false
            this.showpierpont = false
            this.showdow = false
            this.showchresler = false
            this.showstamps = true
        }
        else if (event.layerX >= 236 && event.layerX <= 326 && event.layerY >= 758 && event.layerY <= 876) {
            this.showeecs = false
            this.showggbrown = false
            this.showduder = false
            this.showbbb = false
            this.showpierpont = false
            this.showdow = false
            this.showchresler = true
            this.showstamps = false
        }
        else if (event.layerX >= 336 && event.layerX <= 551 && event.layerY >= 646 && event.layerY <= 829) {
            this.showeecs = false
            this.showggbrown = false
            this.showduder = true
            this.showbbb = false
            this.showpierpont = false
            this.showdow = false
            this.showchresler = false
            this.showstamps = false
        }
        else if (event.layerX >= 78 && event.layerX <= 214 && event.layerY >= 643 && event.layerY <= 825) {
            this.showeecs = false
            this.showggbrown = false
            this.showduder = false
            this.showbbb = false
            this.showpierpont = true
            this.showdow = false
            this.showchresler = false
            this.showstamps = false
        }
        else {
            this.showeecs = false
            this.showggbrown = false
            this.showduder = false
            this.showbbb = false
            this.showpierpont = false
            this.showdow = false
            this.showchresler = false
            this.showstamps = false
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