{
    // Prototype is a class-based OOP system.
    // It is a design pattern that allows us to create objects that inherit from other objects.
    // It is a way to create a class that is a blueprint for other classes.
    // The prototype pattern is used to define the class of an object without instantiating the class.
    // This pattern is used to create objects with similar properties and methods.
    // The prototype pattern is also used to create inheritance relationships between classes.
     // Astea sunt generate de Co-Pilot.

    

    let user = {
        active: false,
        sayHello: function () {
            return this.name + ' says hello!';
        }
    };

    let student = {
        name: "Razvan student",
        major: "English"
    };

    let teacher = {
        name: "Nice guy Caleb",
        teaching: ['math', 'science']
    };

    // Object.setPrototypeOf(teacher, user);
    // console.log (teacher.active); // true   -> inherited from user
    // console.log (teacher.teaching); // ['math', 'science']
    // console.log (teacher); //teaching: (2) ['math', 'science'] [[Prototype]]: Object
    
    // Foarte tare, aici iau din mai multe obiecte proprietatile(inheritance) si le pun in un singur obiect.
    Object.setPrototypeOf(student, user);
    Object.setPrototypeOf(teacher, user);

    student.active = false;

    console.log("student", student.active); // false 
    console.log("teacher", teacher.active); // true   
    console.log("test", student.teaching); // undefined ( ca nu am facut prototype)

    Object.setPrototypeOf(student, teacher);
    console.log("testCuProto", student.teaching); // ['math', 'science']  // deci merge, trebuie doar sa fac prototype-ul inainte.

    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

    console.log("teacher", teacher); // teacher: (2) ['math', 'science'] [[Prototype]]: Object 
    console.log("student", student); // student: {major: "English", active: false} [[Prototype]]: Object
    // ambele obiecte prototype de mai sus, mi-au luat si setarile din user, e bine sa mai butonez ca sa vad diferenta si sa-mi aduc aminte.

    student.active = true;
    //////
    console.log("Teacher: ", teacher.sayHello()); // teacher Nice guy Caleb says hello!
    console.log("Student: ", student.sayHello()); // student Razvan student says hello!








}