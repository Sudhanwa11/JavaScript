//javascript objects
let user = {
    name : "sudhanwa",
    age: 22,
    "likes movies" : true,
};

//for...in loop 
let car = {
    name: "fortuner",
    price: 55,
    company: "toyota",
    year: "2025",
    condition: "awesome"
};
for(let key in car) {
    alert(key + " : " + car[key]);
}
console.log("");

//function
function makeuser2 (name, age) {
    return {
        name,
        age
    };
}
console.log(makeuser2("kanha", 22));
console.log("");


//property names limitation
let obj = {
    0: "test",
    for: 1,
    let: 2
}
alert(obj.for + obj.let);
alert(obj["0"]);
alert(obj[0]);
alert("");

//prompt to take user input
user.fruit = prompt("which fruit u want?? : ", "");
console.log("");

//ways to access properties of an object
user.sex = "male";
user["cars owned"] = 5;
alert("name" in user);
alert(" ");


//printing the output
console.log("your gender is : " + user.sex);
console.log("you like movies?? : " + user["likes movies"]);
alert("your age is : " + user.age + " years.");
alert("u own " + user["cars owned"] + " cars.");
alert("u want to eat an " + user.fruit);


