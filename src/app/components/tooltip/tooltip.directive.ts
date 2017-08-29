import {Directive, ElementRef, Input, OnInit} from '@angular/core';
declare var jQuery:any;

@Directive({
  selector: '[tooltip]'
})

export class TooltipDirective implements OnInit {


    private element : ElementRef;

    constructor (el : ElementRef) {
        this.element = el;
    }

    // Initialise
    public ngOnInit():any {
        this.build();
    }

    private build() : any {
        jQuery(this.element.nativeElement).tooltip();
    }
}
