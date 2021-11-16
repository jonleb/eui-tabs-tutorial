import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EuiTabsComponent } from './eui-tabs.component';

const routes: Routes = [
    { path: '', component: EuiTabsComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: EuiTabsComponent }
        ])
    ],
})
export class EuiTabsRoutingModule {}
