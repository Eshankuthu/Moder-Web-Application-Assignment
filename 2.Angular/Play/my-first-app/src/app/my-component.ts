import {Component } from '@angular/core';

@Component({
    selector: 'my-component',
    template:`<h1 *ngIf="first">This is first {{msg}}.</h1>
                <h1 *ngIf="!first">This is the other {{msg}}.</h1>`
})

export class MyFirstComponent{
    first = true;
    msg='HEllo World';
}