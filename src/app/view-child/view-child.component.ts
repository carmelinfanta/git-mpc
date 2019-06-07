import {Component,ViewChild, Output,EventEmitter, Input} from '@angular/core';

@Component( {
    selector : 'view-child',
    templateUrl :'./view-child.component.html'
})
export class ViewChildComponent {
    
    @Input()
    text="malar"
    @Output()
    clicked:EventEmitter<any>=new EventEmitter<any>();

onClick(){
    this.clicked.emit(this.text)
}
}