console.log("lodash practice");

let users=[
    {'user':'fred',    'active':false,'age':40},
    {'user':'pebbles', 'active':false,'age':1},
    {'user':'barney',  'active':true,'age':36}
]

//CHUNK
//let chunk1=_.chunk(['a','b','c','d'],2); //=>[['a','b'],['c','d']]
let chunk1=_.chunk(users,2);
console.log(chunk1);

//Find Index
//let foundIndex=_.findIndex(users,x=>x.user=='barney');
let foundIndex=users.findIndex(x=>x.user=='barney');
console.log(foundIndex);

//TAKE
let first2=_.take(users,2);
console.log(first2);

//FILTER
//let filtered=_.filter(users,x=>x.active==true);
let filtered=users.filter(x=>x.active==true);
console.log(filtered);

//SORT in place~~
//let sorted=_.sortBy(users,x=>x.age);
//let sorted=_sortBy(users,["age"]);
let sorted=_.sortBy(users,[x=>x.active,x=>x.age]);

//Not Work
// let sorted=users.sort((a,b)=>{
//    return a.user.localeCompare(b.user);
// });
console.log(sorted);

//FOR EACH RIGHT(for each starting from the end going backwards)
//starting this part commanded sort part~
let reversed=[];
_.forEachRight(users,x=>{
    reversed.push(x);
})
console.log(reversed);

//RANDOM
let random4=_.random(1.2,5.2);//=>a floating-point number between 1.2 and 5.2
console.log(random4.toFixed(2));

//CLONING OBJECTS / ARRAYS
//numbers are "primitive" so copy by
// let x=1;
// let y=x;
// y++;
// console.log(x);//1
// console.log(y);//2

//??
// let x=[1,2,3];
// let y=x;
// y.push(4);
// console.log(x); //1,2,3,4
// console.log(y); //1,2,3,4

//"clone" x using the spread syntax
// let x=[1,2,3,4];
// let y=[...x];
// y.push(4);
// console.log(x);//1,2,3,4
// console.log(y);//1,2,3,4,4

//y is a referance  to x....
// let x={
//     name:"Bob",
//     address:{
//         street:"Main St.",
//         number:0
//     }
// }
// let y=x;
// y.name="Frank";
// console.log(x); //Frank....
// console.log(y); //Frank...

//_.cloneDeep performs a deep clone of the object(all...)
let x={
    name:"Bob",
    address:{
        street:"Main St.",
        number:0
    }
}
let y=_.cloneDeep(x);
y.name="Frank";
y.address.street="Changed St."
console.log(x); //Bob,Main...
console.log(y); //Frank,Changed...

//ESCAPE
let myStr="<scrip>window.alert('hello world!')</script>";
console.log(myStr);
console.log(_.escape(myStr));