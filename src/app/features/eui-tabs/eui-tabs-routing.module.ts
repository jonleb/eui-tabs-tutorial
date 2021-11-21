import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialEuiTabsComponent } from './eui-tabs.component';

const routes: Routes = [
    { path: '', component: TutorialEuiTabsComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: TutorialEuiTabsComponent }
        ])
    ],
})
export class TutorialEuiTabsRoutingModule {}
