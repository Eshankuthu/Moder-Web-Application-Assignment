import {Directive, ElementRef,Input} from '@angular/core';


@Directive({selector:'[myHighlight]' })


export class HighLightDirective{

    @Input() highlightColor: string;

        constructor(e1: ElementRef){
            e1.nativeElement.style.backgroundColor="highlightColor";
        }

}