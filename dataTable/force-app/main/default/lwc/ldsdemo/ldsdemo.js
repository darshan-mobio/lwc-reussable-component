import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
export default class Ldsdemo extends NavigationMixin(LightningElement) {
    handleError(){
        alert('Error occured');
    }
    handleSuccess(){
        alert('Record Created');
    }
    handleSubmit(){
        alert('Form Submitted');
    }
    navigateToObjectPage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                actionName: "home",
                objectApiName: "Account"
            }
        });
    }
    creataNewRecord(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                actionName: "new",
                objectApiName: "Account "
            }
        });
    }
}