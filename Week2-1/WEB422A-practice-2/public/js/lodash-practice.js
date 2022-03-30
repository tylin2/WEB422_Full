//console.log("lodash practice!");

let users = [
    { 'user': 'fred',    'active': false, 'age': 40 },
    { 'user': 'pebbles', 'active': false, 'age': 1  },
    { 'user': 'barney',  'active': true,  'age': 36 },
    { 'user': 'wilma',  'active': true,  'age': 39 }
];

// CHUNK

//let chunk1 = _.chunk(['a', 'b', 'c', 'd'], 2); // => [['a', 'b'], ['c', 'd']] 
let chunk1 = _.chunk(users, 2);
console.log(chunk1);

// FIND INDEX

//let foundIndex = _.findIndex(users, x=>x.user == 'barney');
let foundIndex = users.findIndex(x=>x.user == 'barney');
console.log(foundIndex);

// TAKE

let first2 = _.take(users, 2);
console.log(first2);


// FILTER

//let filtered = _.filter(users, x=>x.active == false);
let filtered = users.filter(x=>x.active == false)
console.log(filtered);

// SORT

//let sorted = _.sortBy(users, x=>x.user);
//let sorted = _.sortBy(users, ["user"]);

// let sorted = users.sort((a,b)=>{
//     return a.user.localeCompare(b.user);
// });

let sorted = _.sortBy(users, [x=>x.active, x=>x.age]);
console.log(sorted);

// FOR EACH RIGHT (for each starting from the end going backwards)

let reversed = [];

_.forEachRight(users, x=>{
    reversed.push(x);
});

console.log(reversed);

// RANDOM

let random4 = _.random(1.2, 5.2);// => a floating-point number between 1.2 and 5.2
console.log(random4.toFixed(2));

// CLONING OBJECTS / ARRAYS

// numbers are "primitives" so copy by value

// let x = 5;
// let y = x;

// y++;

// console.log(x); // 5
// console.log(y); // 6

// arrays are not 'primitive' so they're copied by reference

// let x = [1,2,3];
// let y = x;

// y.push(4);

// console.log(x); // [1,2,3,4]
// console.log(y); // [1,2,3,4]

// "clone" x using the spread syntax

// let x = [1,2,3];
// let y = [...x];

// y.push(4);

// console.log(x); // [1,2,3]
// console.log(y); // [1,2,3,4]

// y is a reference to x because the object isn't a primitive

// let x = {
//     name: "Bob",
//     address: {
//         street: "Main St.",
//         number: 123
//     }
// }

// let y = x;
// y.name = "Frank";

// console.log(x); // {"Frank"}
// console.log(y); // {"Frank"}

// spread syntax = "shallow" copy

// let x = {
//     name: "Bob",
//     address: {
//         street: "Main St.",
//         number: 123
//     }
// }

// let y = {...x};
// y.name = "Frank";
// y.address.street = "Changed St."

// console.log(x); // {"Bob","Changed St."}
// console.log(y); // {"Frank","Changed St."}

// _.cloneDeep performs a deep clone of the object (all properties & values)

let x = {
    name: "Bob",
    address: {
        street: "Main St.",
        number: 123
    }
}

let y = _.cloneDeep(x);
y.name = "Frank";
y.address.street = "Changed St."

console.log(x); //{"Bob","Main St."}
console.log(y); //{"Frank","Changed St."}

// ESCAPE

let myStr = "<script>window.alert('hello world')</script>";
console.log(myStr); //
console.log(_.escape(myStr));



// TEMPLATES

let template1 = _.template(`Hello <%= name %>!`);
let template1Result = template1({name: users[0].user});
console.log(template1Result);

let template2 = _.template(`Hello <%- name %>!`);
let template2Result = template2({name: "<script>something</script>"});
console.log(template2Result);

let template3 = _.template(`Hello <%- name() %>!`);
let template3Result = template3({name: function(){
    return "Barney"
}});
console.log(template3Result);

let template4 = _.template(`
    <ul>
        <% users.forEach(user=>{ %>
            <li>name: <%- user.user %> age: <%- user.age %></li>
        <% }); %>
    </ul>
`);
let template4Result = template4({users: users});
console.log(template4Result);



