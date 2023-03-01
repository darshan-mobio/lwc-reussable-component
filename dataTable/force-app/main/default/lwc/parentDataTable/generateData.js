export default function generateData({ amountOfRecords }) {
    //const names = ["Bill", "Kelly", "John"];

//const getname = names.map(function(name) {
 //   return name;
//});
    return [...Array(amountOfRecords)].map((_,index) => {
        return {
            name: `${index}`,
            lastName: `A(${index})`,
            website: 'www.salesforce.com',
            phone: `${Math.floor(Math.random() * 9000000000) + 1000000000}`,
            email: 'web@gmail.com',
            //closeAt: new Date(
             //   Date.now() + 86400000 * Math.ceil(Math.random() * 20)
            //),
        };
    });
}