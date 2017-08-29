import { Directive, ElementRef } from '@angular/core';
declare var jQuery:any;

@Directive({
  selector: 'input[icheck]'
})

export class ICheckDirective {
  constructor (el : ElementRef) {
      jQuery(el.nativeElement).iCheck({
          checkboxClass: 'icheckbox_square-green',
          radioClass: 'iradio_square-green'
      });
      jQuery(el.nativeElement).parent().css('position', 'relative');
  }
}
