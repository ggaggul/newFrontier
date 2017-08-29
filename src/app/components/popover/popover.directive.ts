import {Directive, ElementRef, Input, OnInit} from '@angular/core';
declare var jQuery:any;

@Directive({
  selector: '[pop-over]'
})

export class PopoverDirective implements OnInit {

    //@Input() private  options:any;
    private options : any = {};

    private element : ElementRef;

    constructor (el : ElementRef) {
        this.element = el;
    }

    // Initialise
    public ngOnInit():any {
        this.build();
    }

    private build() : any {
        jQuery(this.element.nativeElement).popover(this.options);
    }
}
