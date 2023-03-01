import { LightningElement, api } from 'lwc';
import generateData from './generateData';

export default class ParentDataTable extends LightningElement {
    objKey = 'label';
    userdata = generateData({ amountOfRecords: 5 });
    //objkeyfield = 'fieldName';
    // connectedCallback(){
    //     const userdata = generateData({ amountOfRecords: 10 });
        
    // }
    
    columns = [ 
        { 
            label: 'Index', 
            fieldName: 'index',
            sortable: "true"
        },
        { 
            label: 'Index Name', 
            fieldName: 'indexName',
            sortable: "true"
        },
        { 
            label: 'List', 
            fieldName: 'list',
            sortable: "true"
        },
        { 
            label: 'Code', 
            fieldName: 'code',
            sortable: "true"
        },
        // { 
        //     label: 'Email', 
        //     fieldName: 'email',
        //     sortable: "true"
        // },
    ]
    
    
}