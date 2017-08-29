/**
 * Created by 1003836 on 2017. 7. 14..
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";

import {SharedModule} from "../../shared/shared.module";

//Vendor Modules
import {IboxtoolsModule} from '../../components/iboxtools/iboxtools.module';

import {HtmlCodingComponent} from "./html_coding.component"
import {CssCodingComponent} from "./css_coding.component"
import {DevelopmentGuideComponent} from "./development_guide.component";
import {JavascriptCodingComponent} from "./javascript_coding.component";
import {ViewArchitectureComponent} from "./view_architecture.component";
import {UiChecklistComponent} from "./ui_checklist.component";

@NgModule({
    declarations : [HtmlCodingComponent, CssCodingComponent, DevelopmentGuideComponent, JavascriptCodingComponent, ViewArchitectureComponent, UiChecklistComponent],
    exports : [HtmlCodingComponent, CssCodingComponent, DevelopmentGuideComponent, JavascriptCodingComponent, ViewArchitectureComponent, UiChecklistComponent],
    imports : [SharedModule, BrowserModule, IboxtoolsModule],
    providers : []
})
export class GuideModule {}