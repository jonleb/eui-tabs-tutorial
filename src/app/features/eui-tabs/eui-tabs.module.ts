import { NgModule } from '@angular/core';
import { EuiTabsRoutingModule } from './eui-tabs-routing.module';
import { EuiTabsComponent } from './eui-tabs.component';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        EuiTabsRoutingModule,
    ],
    declarations: [
        EuiTabsComponent,
    ],
})
export class Module {
}
