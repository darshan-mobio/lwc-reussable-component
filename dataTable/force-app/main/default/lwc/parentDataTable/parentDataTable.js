import { LightningElement, api } from 'lwc';
import generateData from './generateData';

export default class ParentDataTable extends LightningElement {
    objKey = 'label';
    userdata = generateData({ amountOfRecords: 10 });
    //objkeyfield = 'fieldName';
    // connectedCallback(){
    //     const userdata = generateData({ amountOfRecords: 10 });
        
    // }
    
    columns = [ 
        { 
            label: 'Name', 
            fieldName: 'name',
            sortable: "true"
        },
        { 
            label: 'Last Name', 
            fieldName: 'lastName',
            sortable: "true"
        },
        { 
            label: 'Website', 
            fieldName: 'website',
            sortable: "true"
        },
        { 
            label: 'Phone', 
            fieldName: 'phone',
            sortable: "true"
        },
        { 
            label: 'Email', 
            fieldName: 'email',
            sortable: "true"
        },
    ]
    
    
}