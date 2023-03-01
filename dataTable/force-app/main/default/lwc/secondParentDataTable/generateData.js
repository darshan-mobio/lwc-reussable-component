export default function generateData({ amountOfRecords }) {
    //const names = ["Bill", "Kelly", "John"];

//const getname = names.map(function(name) {
 //   return name;
//});
    return [...Array(amountOfRecords)].map((_,index) => {
        return {
            index: `(${index})`,
            indexName: `B(${index})`,
            list: 'www.salesforce.com',
            code: `${Math.floor(Math.random() * 9000000000) + 1000000000}`,
            //email: 'web@gmail.com',
            //closeAt: new Date(
             //   Date.now() + 86400000 * Math.ceil(Math.random() * 20)
            //),
        };
    });
}