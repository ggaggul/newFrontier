import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AlertComponent} from "./alert.component";
import {NotificationsComponent} from "./notifications.component";
import {ModalComponent} from "./modal.component";
/*
import {TreeComponent} from "./tree.component";
import {TypographyComponent} from "./typography.component";
import {ButtonsComponent} from "./buttons.component";
import {PanelsComponent} from "./panels.component";
import {HelperCssComponent} from "./helper_css.component";
*/

import {SharedModule} from "../../shared/shared.module";
import {IboxtoolsModule} from '../../components/iboxtools/iboxtools.module';

@NgModule({
    declarations: [AlertComponent, NotificationsComponent, ModalComponent],
    imports     : [SharedModule, BrowserModule, IboxtoolsModule],
    exports     : [AlertComponent, NotificationsComponent, ModalComponent]
})

export class InterfaceModule{}
