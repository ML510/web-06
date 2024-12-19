console.log("Heloo web")

document.write("ICET")

document.getElementById("heloo1").innerHTML = "Chenge The h1"


// EventHadling Element Chech EX :- 01
//-------------------------------------
function clickEvent() {
    console.log("Heloo...")
}

// EventHadling Element Chech EX :- 02
//-------------------------------------

// document.getElementById("heloo1").addEventListener("click",clickEvent);

// function clickEvent(){
//     console.log("Hi....");
// }

//==================================================================================

// document.getElementById("name");
// document.getElementById("password");
// document.getElementById("age");
// document.getElementById("button_submit").addEventListener("click", loginOnAction);

// console.log(document.getElementById("name"));
// console.log(document.getElementById("password"));
// console.log(document.getElementById("age"));
// console.log(document.getElementById("button_submit"));

// function loginOnAction() {
//     console.log(document.getElementById("name").value);
//     console.log(document.getElementById("password").value);
//     console.log(document.getElementById("age").value);
// }
//===================================================================================

document.getElementById("button_submit").addEventListener("click", loginOnAction);

function loginOnAction() {
    let userName = document.getElementById("name").value;
    let userPassword = document.getElementById("password").value;
    let userAge = document.getElementById("age").value;

    if (userAge > 18) {
        console.log("You are eligible");
        alert("You are eligible")
    } else {
        console.log("You are not eligible");
        alert("You are not eligible")
    }

    switch(userAge){
        case "18" : alert("Your are is 18")
        break;
        case "19" : alert("You age is 19")
        break;
    }


    alert("Heloo");

    console.log(userName);
    console.log(userPassword);
    console.log(userAge);
}

//----------------------------------------loops-----------------------------

// for(let i=0 ; i<10; i++){
//     console.log(i);
    
// }

//==========================================================================

let number = [10,20,30,40,50,60,70,80,90];

console.log(typeof number);


for(let i=0; i<number.length; i++){
    console.log(number[i]);
}

number.push(100);
console.log(number);

//---------------------------------Object and Array in Object--------------------

// Object :-
const customer = {
    name : "Nimal",
    age : 10,
    address : "Panadura"
}

console.log(customer);

console.log(customer.name);
console.log(customer.age);
console.log(customer.address);

//Array in Object :-

const customers = [
    {
        name : "Nimal",
        age : 10,
        address : "Panadura"
    },
    {
        name : "Kamal",
        age : 11,
        address : "Polonnaruwa"
    },
    {
        name : "Amal",
        age : 12,
        address : "Ampara"
    },
    {
        name : "Saman",
        age : 13,
        address : "Kalithara"
    }
]

console.log(customers);
console.log(customers[1]);

console.log(customers[1].name);
console.log(customers[1].age);
console.log(customers[1].address);


