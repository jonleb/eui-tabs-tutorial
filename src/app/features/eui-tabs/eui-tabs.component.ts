import { ViewChild,  Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { EuiTabsComponent, EuiTabComponent } from '@eui/components-next';
import { Observable, of } from 'rxjs';

@Component({
    selector: 'tutorialTabs',
    templateUrl: './eui-tabs.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TutorialEuiTabsComponent {

    public userTabs = [];
    public tabsLength = 2;

    @ViewChild('euiTabs') euiTabs: EuiTabsComponent;

    constructor(){}

    public addTab(){
        console.log("Number of tabs before updating array: " + this.euiTabs.tabs.length);
        this.userTabs.push(
            {
                tabLabel: 'User Tab '+ (this.userTabs.length),
                tabContent: 'User Tab content ' + (this.userTabs.length),
                isDisabled: false,
                isClosable: true,
            });
        this.euiTabs.activeTabIndex = this.euiTabs.tabs.length;

        /**
         * I did a try with this.euiTabs.changeTab(this.euiTabs.tabs.length)
         * but it seems to have an issue with the sync
         */
    }

}
