import { ViewChild,  Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { EuiTabsComponent, EuiTabComponent } from '@eui/components-next';

@Component({
    selector: 'tutorialTabsBugs',
    templateUrl: './eui-tabs-bugs.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TutorialEuiTabsBugsComponent {

    public userTabs = [];

    @ViewChild('euiTabs') euiTabs: EuiTabsComponent;

    constructor(){}

    public addTabByActiveTabIndex(): void{
        console.log("Number of tabs before updating array: " + this.euiTabs.tabs.length);
        this.userTabs.push(
            {
                tabLabel: 'User Tab '+ (this.userTabs.length),
                tabContent: 'User Tab content ' + (this.userTabs.length),
                isDisabled: false,
                isClosable: true,
                isVisible: true
            });
        this.euiTabs.activeTabIndex = this.euiTabs.tabs.length;
    }

    public addTabByChangeTab(): void{
        console.log("Number of tabs before updating array: " + this.euiTabs.tabs.length);
        this.userTabs.push(
            {
                tabLabel: 'User Tab '+ (this.userTabs.length),
                tabContent: 'User Tab content ' + (this.userTabs.length),
                isDisabled: false,
                isClosable: true,
                isVisible: true
            });
        this.euiTabs.changeTab(this.euiTabs.tabs.length)
    }

    public lockTabChangeTab(): void{
        //let shown = this.euiTabs.activeTabIndex
        let toLock = this.euiTabs.activeTabIndex;
        if (this.euiTabs.tabs[toLock].isClosable){
            this.euiTabs.tabs[toLock].isDisabled = true;
        }
        this.euiTabs.changeTab(0);
    }

    public lockTabByActiveTabIndex(): void{
        //let shown = this.euiTabs.activeTabIndex
        let toLock = this.euiTabs.activeTabIndex;
        if (this.euiTabs.tabs[toLock].isClosable){
            this.euiTabs.tabs[toLock].isDisabled = true;
        }
        //this.euiTabs.changeTab(0);
        this.euiTabs.activeTabIndex = 0 ;
    }


}
