import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
    getUserState,
    UserState,
} from '@eui/core';
import { Observable, Subscription } from 'rxjs';
import { AppStarterService } from './app-starter.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
    userInfos: UserState;
    // Observe state changes
    userState: Observable<UserState>;
    // an array to keep all subscriptions and easily unsubscribe
    subs: Subscription[] = [];

    sidebarItems = [
        { label: 'Home', url: 'screen/home', iconClass: 'eui-icon-home' },
        { label: 'eUI Tabs', url: 'tutorials/eui-tabs', iconClass: 'eui-icon-work' },
    ];

    constructor(
        private store: Store<any>,
        private appStarterService: AppStarterService,
    ) {
        this.appStarterService.start().subscribe(() => {
            this.userState = <any>this.store.select(getUserState);
            this.subs.push(this.userState.subscribe((user: UserState) => {
                this.userInfos = { ...user };
                console.log(user);
            }));
        });
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.subs.forEach((s: Subscription) => s.unsubscribe());
    }
}
