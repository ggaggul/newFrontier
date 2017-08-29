import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';

// App modules/components
import {LayoutsModule} from "./components/common/layouts/layouts.module";

// App views
import {DashboardsModule} from "./views/dashboards/dashboards.module";
import {FormModule} from "./views/forms/forms.module";
import {AppviewsModule} from "./views/appviews/appviews.module";
import {TablesModule} from "./views/tables/tables.module";
import {InterfaceModule} from "./views/interface/interface.module";
import {TemplatesModule} from "./views/templates/templates.module";
import {GuideModule} from "./views/guide/guide.module";


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        //Angular Common
        BrowserModule,
        FormsModule,
        HttpModule,

        //Views
        DashboardsModule,
        LayoutsModule,
        AppviewsModule,
        FormModule,
        TablesModule,
        InterfaceModule,
        TemplatesModule,
        GuideModule,

        //Route
        RouterModule.forRoot(ROUTES)
    ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [AppComponent]
})
export class AppModule { }