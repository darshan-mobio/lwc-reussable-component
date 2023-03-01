import {
    LightningElement,
    wire,track,
    api
} from 'lwc';
import {
    getPicklistValues
} from 'lightning/uiObjectInfoApi';
import RATING from '@salesforce/schema/Account.Rating';


export default class ConditionalRendering extends LightningElement {
    @api selectVal;
    @wire(getPicklistValues, {
        recordTypeId: '012000000000000AAA',
        fieldApiName: RATING
    })
    ratings;
    handleOnChange(event) {
        this.selectVal = event.target.label;
    }
    get isSelectHot() {
        return this.selectVal === "Hot";
    }
    get isSelectWarm() {
        return this.selectVal === "Warm";
    }
    get isSelectCold() {
        return this.selectVal === "Cold";
    }

}