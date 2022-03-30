let saleDate = "2010-11-07T04:00:00+00:00";

moment.locale('fr-ca');

let mDate = moment(saleDate); // create a new "moment" object

let mDate17 = mDate.format('LLLL'); // Sunday, November 7, 2010 12:00 AM

console.log(mDate17);

let standardOutputforDB = mDate.toISOString();

console.log(standardOutputforDB);

