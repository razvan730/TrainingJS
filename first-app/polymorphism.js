//

{
    
    let user = {
        active: false,
        sayHello: function () {
            return this.name + ' says hello!';
        }
    };

    let student = {
        name: "Razvan",
        major: "English"
    };

    let teacher = {
        name: "Caleb",
        teaching: ['math', 'science'],
        sayHello: function(){
            let message = this.name + ' says hello!';
            this.teaching.forEach(function(e){
                message += " I teach " + e + " ";
            });
            return message;
        }
    };

    Object.setPrototypeOf(student, user);
    Object.setPrototypeOf(teacher, user);

    student.active = true;

   // console.log("Teacher: ", teacher.sayHello()); // Teacher: Caleb says hello!
   // console.log("Student: ", student.sayHello()); // Student: Razvan says hello!


    let newMemebers = [teacher, student];

    newMemebers.forEach(function (e) { // e = teacher or student , adica elementul
        console.log(e.sayHello());
    });



}

// https://www.youtube.com/watch?v=qQFt7z2RzZQ&list=PL_c9BZzLwBRLVh9OdCBYFEql6esA6aRsi&index=84

function doSomething(){
    return 1 + 1;
}

let test = new doSomething();

if (doSomething.prototype === Object.getPrototypeOf(test)){
    console.log("yes");
}


function Taco(){
    this.toppings = ["cheese"];
}

Taco.prototype.make = function(){
    console.log("Making a taco...");
}

let myTaco = new Taco();
let newTaco = new Taco();




//https://www.youtube.com/watch?v=xY-hiREf9Xs&list=PL_c9BZzLwBRLVh9OdCBYFEql6esA6aRsi&index=85



