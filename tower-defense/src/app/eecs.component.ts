import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
    selector: 'eecs',
    templateUrl: './eecs.component.html',
    styleUrls: ['./eecs.component.scss']
})
export class EECSComponent {

    @Output()
    closeModal = new EventEmitter();
    
}