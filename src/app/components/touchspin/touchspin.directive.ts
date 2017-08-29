import {Directive, ElementRef, Input, OnInit} from '@angular/core';
declare var jQuery:any;

@Directive({
  selector: 'input[touch-spin]'
})

export class TouchspinDirective implements OnInit {

    @Input() private  options:any;

    private element : ElementRef;

    constructor (el : ElementRef) {
        this.element = el;
    }

    // Initialise
    public ngOnInit():any {
        if (this.options) {
            this.build();
        }
    }

    private build() : any {
        jQuery(this.element.nativeElement).TouchSpin(this.options);
    }
}
