import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

import {ICheckDirective} from "../components/icheck/icheck.directive";
import {DatePickerDirective} from "../components/datepicker/datepicker.directive";
//import {SummernoteDirective} from "../components/summernote/summernote.directive";
import {TouchspinDirective} from "../components/touchspin/touchspin.directive";
import {TagsinputDirective} from "../components/tagsinput/tagsinput.directive";

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap/popover';

@NgModule({
    declarations: [ICheckDirective, DatePickerDirective, TouchspinDirective, TagsinputDirective],
    imports: [CommonModule, FormsModule, TooltipModule.forRoot(), ModalModule.forRoot(), PopoverModule.forRoot()],
    exports : [CommonModule, FormsModule, TooltipModule, ModalModule, PopoverModule, ICheckDirective, DatePickerDirective, TouchspinDirective, TagsinputDirective]
})

export class SharedModule { }