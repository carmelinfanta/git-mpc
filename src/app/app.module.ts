import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { RedButtonComponent} from './red-button/red-button.component';
import { RedButtonsComponent } from './red-buttons/red-buttons.component';
import {ViewChildComponent} from './view-child/view-child.component';
import {PositionComponent} from './position/position.component';
import { PrabaComponent } from './praba/praba.component';




@NgModule({
  declarations: [
    AppComponent,
    RedButtonComponent,
    RedButtonsComponent,
    ViewChildComponent,
    PositionComponent,
    PrabaComponent,
  
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
