// The Construction function is a basic item in the Object Oriented Programming.



// {
//     // functia (1)
//     function User(){
//         console.log(this);  // (3) 
//         this.name = "John";
//         console.log(this);  // (4)


//     }



//     // constructor (2)
//     let me = new User();
//     console.log(me);
// }




{
    function User(name, age, hobby, car, job){
        this.name = name;
        this.age = age;
        this.hobby = hobby;
        this.car = car;
        this.job = job;
       
    }

    let me = new User("Gigi");
    let you = new User("Camila", 25);
    console.log(me, you);  /* Result:
                            User {name: 'Gigi', age: undefined}
                            User {name: 'Camila', age: 25}
    */

    let soso = new User("Soso", 25, "reading", "BMW", "teacher");
    console.log(soso);  /* Result:  User {name: 'Soso', age: 25, hobby: 'reading', car: 'BMW', job: 'teacher'}
    */
   
}

// fac o functie sablon (template object)
// creez variabile si folosesc constructorul "new" pentru a crea un alt obiect cu acea functie template pe care am facut-o






















