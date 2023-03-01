import { LightningElement, track, wire, api } from 'lwc';
//import generateData from './generateData';
//import getContacts from '../LWCDataTableSortingExample.getContacts';


    //console.log('columns'+columns);   
    //var result = Object.keys(columns).map(function (key) {
         
        // Using Number() to convert key to number type
        // Using obj[key] to retrieve key value
     //   return [Number(key), columns[key]];
//});
    //console.log('result'+result);
    // Printing values
    //this.lstAccounts.forEach(function(acc){
     //   console.log(acc.Name);
    //});
    
    //for(var i = 0; i < result.length; i++) {
    //    alert("go");
    //    console.log(this.result[i].label);
        //for(var z = 0; z < result[i].length; z++) {
        //    document.write(result[i][z] + " ");
        //    alert("hello");
        //}
        //document.write("</br>");
   // }    
    //console.log('result'+result);             
export default class ReusableDataTable extends LightningElement {
    @api columns = this.columns;
    //@api data = this.data;
    @api okey = this.okey;
    @api tdata = this.tdata;
    //@api keyfield = this.keyfield
    @track searchString;
    initialRecords;
    sortedColumn;
    sortedDirection = 'asc';
    keyListValue;
    @track data
    //data = this.tdata;

    //@wire(generateData)
    
    connectedCallback() {
       // this.datadata = this.tdata;
        this.data = JSON.parse(JSON.stringify(this.tdata));
        
        let bo = [];
        this.data.forEach(element => {
            bo.push(JSON.parse(JSON.stringify(element)));
        });
        this.data = bo;

        
        

         
        console.log('testss');
        let colmnsloop = this.columns;
        console.log({colmnsloop});
        let temoArr = [];
        colmnsloop.forEach( colm => {
            let temObj = [];
            for(let key in colm) {
                let test = {};
                    test.key = key;
                    test.value = colm[key];
                
                var checkLabel = this.okey; 
                console.log('sdasda',checkLabel);
                if(checkLabel == test.key){
                    temObj.push(test);
                }
                
            }
           // fieldArr.push(dataObj);
            temoArr.push(temObj);
            
        } );
        this.columns = temoArr;
        
        let keyValue = JSON.parse(JSON.stringify(colmnsloop));
        let no = [];
        keyValue.forEach(element => {
            no.push(element.fieldName);
        });
        this.keyListValue = no;
        
        let finalArray = [];
        let rec={};
                this.data.forEach(rec=>{
                    rec.keyItem = [];
                    this.keyListValue.forEach(key => {
                        let singleKeyObject = {};
                        if(rec.hasOwnProperty(key) == false){
                            rec = Object.assign(rec, {[key]: ""})
                        }
                        if(Object.keys(rec).includes(key)){
                            singleKeyObject.keys = key
                            singleKeyObject.value =  rec[key];
                            rec.keyItem.push(singleKeyObject);
                        }
                    });
                });
    
                    finalArray.push(rec);
                    this.initialRecords = this.data;
                    //  this.initialRecords = finalArray;
        //             console.log('iniiiiiiii',this.initialRecords);
        // console.log(JSON.parse(JSON.stringify(this.initialRecords)));
        //let keyloop = JSON.parse(JSON.stringify(colmnsloop));
        
    }

    //sorting
    sortRecs( event ) {
        let colName = event.target.name;
        console.log( 'Column Name is ' + colName );
        if ( this.sortedColumn === colName ) {
            this.sortedDirection = ( this.sortedDirection === 'asc' ? 'desc' : 'asc' );
        }
        else {
            this.sortedDirection = 'asc';
        }

        let isReverse = this.sortedDirection === 'asc' ? 1 : -1;

        this.sortedColumn = colName;

        // sort the data
        let sortData = this.data;
        sortData = JSON.parse( JSON.stringify( sortData ) );
        sortData.sort( ( a, b ) => {
            a = a[ colName ] ? a[ colName ].toLowerCase() : ''; // Handle null values

            b = b[ colName ] ? b[ colName ].toLowerCase() : '';
            return a > b ? 1 * isReverse : -1 * isReverse;
            //return a - b;
            
        });
        console.log('sorting',sortData);
        alert('000');
        this.data = sortData;
    }
    // end sorting
    handleSearch(event) {
        console.log('thissss',this.data);
        console.log(JSON.parse(JSON.stringify(this.data)));
        const searchKey = event.target.value.toLowerCase();
        console.log( 'Search Key is ' + searchKey );
        if (searchKey) {
            
            let data = this.initialRecords;
            console.log('thissss',data);
        console.log(JSON.parse(JSON.stringify(data)));
            if (data) {
                
                let searchRecords = [];
                console.log('valuesDDDDD',data);
                console.log(JSON.parse(JSON.stringify(data)));
                for (let record of data) {
                    
                    let valuesArray = Object.values(record);
                    console.log('valuesArray',valuesArray);
                    for (let val of valuesArray) {
                        
                        console.log('val is ' + val);
                        let strVal = String(val);
                        
                        if (strVal) {
                            
                            if (strVal.toLowerCase().includes(searchKey)) {
                                searchRecords.push(record);
                                break;
                            }
                        }
                    }
                }
                
                console.log('Matched Accounts are ' + JSON.stringify(searchRecords));
                this.data = searchRecords;
                console.log('Lastttt',this.data);
                console.log(JSON.parse(JSON.stringify(this.data)));
            }
        } else {
            this.data = this.initialRecords;
        }
    }
    
    
}