import { Component } from '@angular/core';

@Component({
    selector: 'choosebase',
    templateUrl: './choosebase.component.html',
    styleUrls: ['./choosebase.component.scss']
})
export class ChoosebaseComponent {
    private showeecs = false

    public showEecsModal: boolean = false

    private whenHover(event: any) {
        if (event.layerX >= 624 && event.layerX <= 812 && event.layerY >= 359 && event.layerY <= 498) {
            this.showeecs = true
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


}