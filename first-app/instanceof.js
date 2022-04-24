{
    function User(){
        this.active = false;
    };

    User.prototype.sayHello = function(){
        return this.name + " says hello";
    };

    function Student(name, major){
        this.name = name;
        this.major = major;
    };


    function Teacher(name, teaching){
        this.name = name;
        this.teaching = teaching;
    };


    Student.prototype = new User(); // inherit from User
    Teacher.prototype = new User(); // inherit from User

    Teacher.prototype.sayHello = function(){
        return this.name + " says hello!";
    };

    let student = new Student("Titi Tractoristul", "English");
    let teacher = new Teacher("Caleb Curry", ["Math", "Sience"]);
    
    console.log(student, teacher);

    // console.log(student instanceof User); // true
    // console.log(student instanceof Student); // true
    // console.log(teacher instanceof User); // true
    // console.log(teacher instanceof Teacher); // true
    // console.log(teacher instanceof Student); // false


    function doSomething(user){
        if(user instanceof User){
            return 5;
        }
        return -1;
    };

    console.log(doSomething(teacher) + " teacher"); // 5 teacher
    console.log(doSomething(student) + " student"); // 5 student
    console.log(doSomething()); // -1








}