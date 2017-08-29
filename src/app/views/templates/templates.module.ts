/**
 * Created by 1003836 on 2017. 7. 14..
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule} from "@angular/forms";

import { ProductListComponent } from "./product_list/product_list.component";
import { ProductDetailComponent } from "./product_detail/product_detail.component";

import {SharedModule} from "../../shared/shared.module";

//Vendor Modules
import { AgGridModule } from "ag-grid-angular/main";
import {IboxtoolsModule} from '../../components/iboxtools/iboxtools.module';

import {TemplatesService} from "../../services/templates/templates.service"

@NgModule({
    declarations : [ProductListComponent, ProductDetailComponent],
    exports : [ProductListComponent, ProductDetailComponent],
    imports : [SharedModule, BrowserModule, AgGridModule.withComponents([]), IboxtoolsModule, ReactiveFormsModule],
    providers : [TemplatesService]
})
export class TemplatesModule {}