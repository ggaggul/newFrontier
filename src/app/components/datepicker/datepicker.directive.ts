import {Directive, ElementRef, Input, OnInit} from '@angular/core';
declare var jQuery:any;

@Directive({
  selector: 'input[date-picker]'
})

export class DatePickerDirective implements OnInit{
    @Input() private startView : number;
    private element : ElementRef;

    constructor (el : ElementRef) {
        this.element = el;
    }

    // Initialise
    public ngOnInit():any {
        if(!this.startView){
            this.startView = 0;
        }
        this.build();
    }

    private build() : any {
        jQuery(this.element.nativeElement).datepicker({
            autoclose : true,
            format : 'yyyy/mm/dd',
            todayHighlight: true,
            startView : this.startView
        });
    }
}
