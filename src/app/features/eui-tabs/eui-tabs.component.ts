import { Component, ChangeDetectionStrategy } from '@angular/core';
import { EuiTabComponent } from '@eui/components-next';

@Component({
    selector: 'tutorialTabs',
    templateUrl: './eui-tabs.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,    
})

export class EuiTabsComponent {
    public userTabs = [];
    
    public activeTab = 1; 
    

    constructor(){
    };
    
    public addTab(){
        // Do your logic here
        this.userTabs.push(
            {
                tabLabel: 'User Tab', 
                tabContent: 'User Tab content',
                isDisabled: Math.random() >= 0.5,
                isClosable: Math.random() >= 0.5 
            });

    }

    public changeTab(number){
        console.log(number);   
    }
}
