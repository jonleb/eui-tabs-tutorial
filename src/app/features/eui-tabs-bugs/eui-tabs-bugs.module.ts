import { NgModule } from '@angular/core';
import { TutorialEuiTabsBugsRoutingModule } from './eui-tabs-bugs-routing.module';
import { TutorialEuiTabsBugsComponent } from './eui-tabs-bugs.component';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        TutorialEuiTabsBugsRoutingModule,
    ],
    declarations: [
        TutorialEuiTabsBugsComponent,
    ],
})
export class Module {
}
