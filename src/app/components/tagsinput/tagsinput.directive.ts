import {Directive, ElementRef, Input, OnInit} from '@angular/core';
declare var jQuery:any;

@Directive({
  selector: 'input[tags-input]'
})

export class TagsinputDirective implements OnInit {

    //@Input() private  options:any;

    private element : ElementRef;

    constructor (el : ElementRef) {
        this.element = el;
    }

    // Initialise
    public ngOnInit():any {
        this.build();
    }

    private build() : any {
        jQuery(this.element.nativeElement).tagsinput('items');
    }
}
