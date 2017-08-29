import { Component } from '@angular/core';

//declare var jQuery:any;

@Component({
  selector: 'extend-form',
  template: require('./extend_form.template.html')
})

export class ExtendFormComponent {

    ngAfterViewInit() {
      //jQuery('.summernote').summernote();

    }

    public spinOption1 : any = {
        min: 0,
        max: 100,
        step: 0.1,
        decimals: 2,
        boostat: 5,
        maxboostedstep: 10,
    };

    public spinOption2 : any = {
        verticalbuttons: true
    };

    public spinOption3 : any = {
        postfix: '%'
    };

    public spinOption4 : any = {
        postfix: "a button",
        postfix_extraclass: "btn btn-success"
    };
}
