import { LightningElement, api, wire } from 'lwc';
import getContactList from '@salesforce/apex/ApexHoursDemoClass.getContactList';
import getAccountDetails from '@salesforce/apex/ApexHoursDemoClass.getAccountDetails';
export default class Callback extends LightningElement {
    greeting = "Welcome to Apex Hours";
    inputText = '';
    @api message = 'Insert message using API';
    result;
    error;

    @wire(getContactList)
    wireData({error,data}){
        if(data){
            this.result = data;
            this.error = undefined;
            window.console.log('Contact List', data);
        }
        else{
            this.error = error;
            window.console.log('Contact error', error);
            this.result = undefined;
        }
    }

    constructor(){
        super(); 
      console.log('Inside constructor'); 
  }   
  handleClick(event){
    this.inputText = event.target.value;
    window.console.log('event.targer',event.target);
  }
  handleSubmit(){
    alert('Button Clicked');
    getAccountDetails()
        .then(result => {
            this.result = result;
            this.error = undefined;
        })
        .catch(error => {
            // TODO Error handling
            this.error = error;
            this.result = undefined;
        });
  }
    //connectedCallback() { 
    //  console.log('Inside connected callback'); 
   // }
   // disconnectedCallback(){
   //     console.log('Inside disconnected callback');
   // }
}