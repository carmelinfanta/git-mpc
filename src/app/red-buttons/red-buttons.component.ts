import { Component } from '@angular/core';


@Component({
    selector:'red-buttons',
    templateUrl:'./red-buttons.component.html'
})
export class RedButtonsComponent{
    style={'background-color':'pink'};
buttons=[{
    title:"Red",
    style:{'background-color':'red','color':'white'},
    click(){
        console.log('Red Button');
        
    },
    visibility:true
},
{
    title:'Green',
    style:{'background-color':'green','color':'white'},
    click(){
        console.log('Green Button');
    },
    visibility:true
},
{
    title:'Blue',
    style:{'background-color':'blue','color':'white'},
    click(){
        console.log('Blue Button');
    },
    visibility:true
},
{
    title:'Purple',
    style:{'background-color':'purple','color':'white'},
     click(){
        console.log('Purple Button');
    },
    visibility:true
}];
}