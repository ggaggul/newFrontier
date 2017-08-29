import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {TableComponent} from "./table.component";
import {GridComponent} from "./grid.component";

import {SharedModule} from "../../shared/shared.module";

import {AgGridModule} from "ag-grid-angular";

import {IboxtoolsModule} from '../../components/iboxtools/iboxtools.module';

import {PartialMatchFilterComponent} from "../../components/grid/partial_match_filter.component"

@NgModule({
    declarations: [TableComponent, GridComponent, PartialMatchFilterComponent],
    imports     : [SharedModule, BrowserModule, AgGridModule.withComponents([PartialMatchFilterComponent]), IboxtoolsModule],
    exports     : [TableComponent, GridComponent]
})

export class TablesModule {}
