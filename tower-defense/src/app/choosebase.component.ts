import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'choosebase',
    templateUrl: './choosebase.component.html',
    styleUrls: ['./choosebase.component.scss']
})
export class ChoosebaseComponent {
    private showeecs: boolean = false
    private showggbrown: boolean = false
    private showduder: boolean = false
    private showbbb: boolean = false
    private showpierpont: boolean = false
    private showdow: boolean = false
    private showchresler: boolean = false
    private showstamps: boolean = false

    private btnChanged: boolean = false

    public buildingInfo: any = {}

    public showModal: boolean = false

    constructor(
        private router: Router
    ){}

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
            this.buildingInfo = {
                'title': 'Electrical Engineering And Computer Science Bld',
                'address': 'Address: 1301 Beal Ave',
                'zip': 'ZIP: 48109',
                'property': 'Base Property: Bonus HP',
                'image': '/assets/img/eecs 2.jpg',
                'isEECS': true,
                'rooms': ['1013', '1325', '1327']
            }
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
            this.buildingInfo = {
                'title': 'G.G. Brown Building',
                'address': 'Address: 2350 Hayward St',
                'zip': 'ZIP: 48109',
                'property': 'Base Property: moster speed slow down',
                'image': '/assets/img/ggbrown.jpg',
                'isEECS': false
            }
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
            this.buildingInfo = {
                'title': 'Dow Herbert H. Building',
                'address': 'Address: 2300 Hayward St',
                'zip': 'ZIP: 48109',
                'property': 'Base Property: Bonus attack',
                'image': '/assets/img/dow.jpg',
                'isEECS': false
            }
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
            this.buildingInfo = {
                'title': 'Bob and Betty Beyster Building',
                'address': 'Address: 2260 Hayward St',
                'zip': 'ZIP: 48109',
                'property': 'Base Property: Special attack',
                'image': '/assets/img/bbb.jpg',
                'isEECS': false
            }
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
            this.buildingInfo = {
                'title': 'Stamps Auditorium',
                'address': 'Address: 1226 Murfin Ave',
                'zip': 'ZIP: 48109',
                'property': 'Base Property: Less wave of monster',
                'image': '/assets/img/stamps.jpg',
                'isEECS': false
            }
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
            this.buildingInfo = {
                'title': 'Chrysler Center',
                'address': 'Address: 2121 Bonisteel Blvd',
                'zip': 'ZIP: 48109',
                'property': 'Base Property: Cheaper tower',
                'image': '/assets/img/chrysler.jpg',
                'isEECS': false
            }
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
            this.buildingInfo = {
                'title': 'Duderstadt James And Anne Center',
                'address': 'Address: 2281 Bonisteel Blvd',
                'zip': 'ZIP: 48109',
                'property': 'Base Property: Additional tower',
                'image': '/assets/img/duder.jpg',
                'isEECS': false
            }
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
            this.buildingInfo = {
                'title': 'Wilbur K Pierpont Commons',
                'address': 'Address: 2101 Bonisteel Blvd',
                'zip': 'ZIP: 48109',
                'property': 'Base Property: Weeker monster',
                'image': '/assets/img/pierpont.jpg',
                'isEECS': false
            }
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
        if ((event.layerX >= 624 && event.layerX <= 812 && event.layerY >= 359 && event.layerY <= 498) ||
            (event.layerX >= 621 && event.layerX <= 938 && event.layerY >= 174 && event.layerY <= 319) ||
            (event.layerX >= 444 && event.layerX <= 558 && event.layerY >= 234 && event.layerY <= 374) ||
            (event.layerX >= 298 && event.layerX <= 439 && event.layerY >= 227 && event.layerY <= 380) ||
            (event.layerX >= 44 && event.layerX <= 273 && event.layerY >= 523 && event.layerY <= 602) ||
            (event.layerX >= 236 && event.layerX <= 326 && event.layerY >= 758 && event.layerY <= 876) ||
            (event.layerX >= 336 && event.layerX <= 551 && event.layerY >= 646 && event.layerY <= 829) ||
            (event.layerX >= 78 && event.layerX <= 214 && event.layerY >= 643 && event.layerY <= 825)) {
            this.showModal = true
        }
        else {
            this.showModal = false
        }
    }

    private goBack() {
        this.router.navigate( [ '' ] )
    }


}