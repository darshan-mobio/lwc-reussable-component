import { LightningElement } from 'lwc';

export default class NavigationApexHours extends LightningElement {
    navigateToObjectPage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attribute: {
                actionName:"contact",
                objectApiName: "Account",
            }
        });
        
    }
    
}