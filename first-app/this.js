{ // THIS 
     
    // function j(a,b) {
    //     console.log(this);
    //     // this este argumentul implicit al functiei
    // }

    // valoarea lui "this" se poate schimba in functie de cum este chemata functia
    /* In C# sau Java:  "this" inseamna intotdeauna obiectul la care metoda este atasata (pentru ca este object oriented si toate functiile sunt metode)
       In JavaScript nu functioneaza chiar asa, pentru ca avem o functie care functioneaza ca si entitate proprie (putem invoca acea functie si cu un nou 
        cuvant cheie si atunci devine constructor). 
       Pe langa asta mai exista o capacitate pe care javascript o are (Modul Strict), altfel in cat pot spune "use strict" si apoi functionalitatea se
        schimba iar.
    */

    // dog.j(); // this este obiectul dog

    // let me = {
    //     name: "Ion",
    //     outputMe: function() {
    //         console.log(this);
    //         console.log(this.name);
            
    //     }
    //     // this este obiectul me
    // };
    //me.outputMe(); // metoda
    //console.log(me); // obiectul me

    


    // let me = {
    //     name: "Ion",
    //     outputMe: outputMe
    // };

    // function outputMe() {
    //     'use strict'; // modul strict R: undefined
    //     console.log(this);
    // };

    // function outputMeStrict() {
    //     "use strict";
    //     console.log(this);
    // };

    function Person(){
        console.log(this);
        this.name = "Razvan";
        console.log(this);
    }

    // me.outputMe(); // method
    // outputMe(); // function
    // outputMeStrict(); // function strict R: undefined 

    let personX  = new Person(); // new Person() este constructorul personX
    console.log(personX);




































}