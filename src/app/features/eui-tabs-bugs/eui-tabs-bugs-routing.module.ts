import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialEuiTabsBugsComponent } from './eui-tabs-bugs.component';

const routes: Routes = [
    { path: '', component: TutorialEuiTabsBugsComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: TutorialEuiTabsBugsComponent }
        ])
    ],
})
export class TutorialEuiTabsBugsRoutingModule {}
