import { NgModule } from '@angular/core';
import { TutorialEuiTabsRoutingModule } from './eui-tabs-routing.module';
import { TutorialEuiTabsComponent } from './eui-tabs.component';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        TutorialEuiTabsRoutingModule,
    ],
    declarations: [
        TutorialEuiTabsComponent,
    ],
})
export class Module {
}
