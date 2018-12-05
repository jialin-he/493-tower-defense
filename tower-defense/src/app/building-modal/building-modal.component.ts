import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-building-modal',
  templateUrl: './building-modal.component.html',
  styleUrls: ['./building-modal.component.scss']
})
export class BuildingModalComponent implements OnInit {

  @Input()
  private info: any = {}

  @Output()
  closeModal = new EventEmitter();

  private disableBtn: boolean = false

  private selectedRoom: string = ''
  private roomSelected: boolean = false

  constructor() { 
  }

  ngOnInit() {
    this.disableBtn = !this.info.isEECS
  }

  private onClick() {
    if (this.info) {
      this.closeModal.emit();
      this.openInNewTab('http://www-personal.umich.edu/~qiyueyao/index.html');
    }
  }


  private playgame() {
      this.closeModal.emit();
      window.open('https://google.com');
  }

  private openInNewTab(url) {
      var win = window.open(url, '_blank');
      win.focus();
  }

  private selectRoom(room: any) {
    this.selectedRoom = room;
    this.roomSelected = true;
  }

}
