import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule} from "@angular/forms";
import {TextMaskModule} from 'angular2-text-mask';

import {BasicFormComponent} from "./basic_form.component"
import {ExtendFormComponent} from "./extend_form.component"
import {TextEditorComponent} from "./text_editor.component"
import {ValidationComponent} from "./validation.component"

import {SharedModule} from "../../shared/shared.module";
import {IboxtoolsModule} from '../../components/iboxtools/iboxtools.module';

@NgModule({
    declarations: [BasicFormComponent, ExtendFormComponent, TextEditorComponent, ValidationComponent],
    imports     : [ReactiveFormsModule, SharedModule, BrowserModule, IboxtoolsModule, TextMaskModule],
    exports     : [BasicFormComponent, ExtendFormComponent, TextEditorComponent, ValidationComponent]
})

export class FormModule {}
