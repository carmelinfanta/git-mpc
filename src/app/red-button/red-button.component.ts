import { Component, Input, AfterViewInit,OnInit, ViewChild} from '@angular/core';

@Component({
    selector:'red-button',
    templateUrl:'./red-button.component.html'

})

export class RedButtonComponent implements OnInit,AfterViewInit  {
    @ViewChild('fo')
    hello

    ngOnInit() {
      console.log('Child Init');
    }
  
    ngAfterViewInit() {
      console.log(this.hello.nativeElement.focus)
    }

    


}