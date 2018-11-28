import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
    selector: 'eecs',
    templateUrl: './eecs.component.html',
    styleUrls: ['./eecs.component.scss']
})
export class EECSComponent {

    @Output()
    closeModal = new EventEmitter();

    private playgame() {
        this.closeModal.emit();
        window.open('https://google.com');
    }

    private openInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
      }
    
}