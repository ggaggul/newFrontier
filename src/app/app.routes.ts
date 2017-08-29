import {Routes} from "@angular/router";

import {Dashboard1Component} from "./views/dashboards/dashboard1.component";
import {Dashboard2Component} from "./views/dashboards/dashboard2.component";
import {Dashboard3Component} from "./views/dashboards/dashboard3.component";
import {Dashboard4Component} from "./views/dashboards/dashboard4.component";
import {Dashboard41Component} from "./views/dashboards/dashboard41.component";
import {Dashboard5Component} from "./views/dashboards/dashboard5.component";

// Forms
import {BasicFormComponent} from "./views/forms/basic_form.component";
import {ExtendFormComponent} from "./views/forms/extend_form.component";
import {TextEditorComponent} from "./views/forms/text_editor.component";
import {ValidationComponent} from "./views/forms/validation.component";

// Tables
import {TableComponent} from "./views/tables/table.component";
import {GridComponent} from "./views/tables/grid.component";

// Templates
import {ProductListComponent} from "./views/templates/product_list/product_list.component";
import {ProductDetailComponent} from "./views/templates/product_detail/product_detail.component";

// Interface
import {AlertComponent} from "./views/interface/alert.component";
import {NotificationsComponent} from "./views/interface/notifications.component";
import {ModalComponent} from "./views/interface/modal.component";
/*
import {TreeComponent} from "./views/interface/tree.component";
import {TypographyComponent} from "./views/interface/typography.component";
import {ButtonsComponent} from "./views/interface/buttons.component";
import {PanelsComponent} from "./views/interface/panels.component";
import {HelperCssComponent} from "./views/interface/helper_css.component";
*/

// Guide
import {DevelopmentGuideComponent} from "./views/guide/development_guide.component";
import {HtmlCodingComponent} from "./views/guide/html_coding.component";
import {CssCodingComponent} from "./views/guide/css_coding.component";
import {JavascriptCodingComponent} from "./views/guide/javascript_coding.component";
import {ViewArchitectureComponent} from "./views/guide/view_architecture.component";
import {UiChecklistComponent} from "./views/guide/ui_checklist.component";

import {StarterViewComponent} from "./views/appviews/starterview.component";
import {LoginComponent} from "./views/appviews/login.component";

// Base
import {BlankLayoutComponent} from "./components/common/layouts/blankLayout.component";
import {BasicLayoutComponent} from "./components/common/layouts/basicLayout.component";
import {TopNavigationLayoutComponent} from "./components/common/layouts/topNavigationlayout.component";

export const ROUTES:Routes = [
    // Main redirect
    {path: '', redirectTo: 'forms/basic_form', pathMatch: 'full'},

    // App views
    {
        path: 'dashboards', component: BasicLayoutComponent,
        children: [
            {path: 'dashboard1', component: Dashboard1Component},
            {path: 'dashboard2', component: Dashboard2Component},
            {path: 'dashboard3', component: Dashboard3Component},
            {path: 'dashboard4', component: Dashboard4Component},
            {path: 'dashboard5', component: Dashboard5Component}
        ]
    },
    {
        path: 'forms', component: BasicLayoutComponent,
        children: [
            {path: 'basic_form', component: BasicFormComponent},
            {path: 'extension_form', component: ExtendFormComponent},
            {path: 'text_editor', component: TextEditorComponent},
            {path: 'validation', component: ValidationComponent}
        ]
    },
    {
        path: 'tables', component: BasicLayoutComponent,
        children: [
            {path: 'table', component: TableComponent},
            {path: 'grid', component: GridComponent}
        ]
    },
    {
        path: 'guide', component: BasicLayoutComponent,
        children: [
            {path: 'development_guide', component: DevelopmentGuideComponent},
            {path: 'html_coding', component: HtmlCodingComponent},
            {path: 'css_coding', component: CssCodingComponent},
            {path: 'javascript_coding', component: JavascriptCodingComponent},
            {path: 'view_architecture', component: ViewArchitectureComponent},
            {path: 'ui_checklist', component: UiChecklistComponent}
        ]
    },
    {
        path: 'interface', component: BasicLayoutComponent,
        children: [
            {path: 'alert', component: AlertComponent},
            {path: 'notifications', component: NotificationsComponent},
            {path: 'modal', component: ModalComponent},
            /*{path: 'tree', component: TreeComponent},
            {path: 'typography', component: TypographyComponent},
            {path: 'buttons', component: ButtonsComponent},
            {path: 'panels', component: PanelsComponent},
            {path: 'helper_css', component: HelperCssComponent}*/
        ]
    },
    {
        path: 'templates', component: BasicLayoutComponent,
        children: [
            {path: 'product_list', component: ProductListComponent},
            {path: 'product_detail', component: ProductDetailComponent}
        ]
    },
    {
        path: '', component: BasicLayoutComponent,
        children: [
            {path: 'starterview', component: StarterViewComponent}
        ]
    },
    {
        path: '', component: BlankLayoutComponent,
        children: [
            { path: 'login', component: LoginComponent },
        ]
    },

    // Handle all other routes
    {path: '**',  redirectTo: 'forms/basic_form'}
];
