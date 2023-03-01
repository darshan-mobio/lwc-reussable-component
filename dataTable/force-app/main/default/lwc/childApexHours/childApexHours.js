import { LightningElement, api } from 'lwc';

export default class ChildApexHours extends LightningElement {
    @api message;

    @api
    childComp(name){
        alert('hii');
        this.message = name;
    }
    handleClick(){
        const event = new CustomEvent('btnclick', {
            detail: { 
                key:'001HSGHSGD',
                value: 'ApexHours'
             }
        });
        this.dispatchEvent(event);
    }
}