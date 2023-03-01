import { LightningElement, api } from 'lwc';

export default class ParentApexHours extends LightningElement {
     //message = "i am from parent component";
    message;
     handleClick(){
        
        this.message = 'Message changed';
        this.tamplate.querySelector('c-child-apex-hours').childComp(this.message);
     }
     handleEvent(event){
        let key = event.detail.key;
        let value = event.detail.value;
        this.message = key +' '+value;
        window.console.log(' ', this.message);
     }
}