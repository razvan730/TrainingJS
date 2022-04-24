// {
//     // genul asta e mai recomandat
//     function User(name, interests){
//         this.name = name;
//         this.interests = interests;
//         // 1.1
//         this.outputStuff = function(){
//             console.log("my name is " + this.name + " and my interests are " + this.interests);
//         } 
//     };
//     // 2.1
//     User.prototype.greeting = function(){
//         console.log("Hello, my name is " + this.name, this.interests);
//     };


//     let me = new User("Gigi", ["cooking", "eating", "exercise"]);
//     let you = new User("Camila", ["hotwheels"]);
//     console.log(me, you);
//     // 1.2
//     me.outputStuff(); // my name is Gigi and my interests are cooking,eating,exercise
//     you.outputStuff();  // my name is Camila and my interests are hotwheels

//     console.log("~~~~~~~~~~~~~~~~~~~~~~~");
//     // 2.2 
//     me.greeting(); // Hello, my name is Gigi and my interests are cooking,eating,exercise
//     you.greeting(); // Hello, my name is Camila and my interests are hotwheels



    // sa invat sa fac genul de prototype methods (2.1 - 2.2)
//}

{
    
    function User(name, interests){
        this.name = name;
        this.interests = interests;
    };

    // 2.1
    User.prototype.greeting = function(){
        console.log("Hello, my name is " + this.name, this.interests);
    };

    let me = new User("Gigi", ["cooking", "eating", "exercise"]);
    let you = new User("Camila", ["hotwheels"]);
    //console.log(me, you);

    me.greeting(); // Hello, my name is Gigi and my interests are cooking,eating,exercise)
    you.greeting(); // Hello, my name is Camila and my interests are hotwheels    

}





