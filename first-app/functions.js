{
    // Exemple de functii:

    // function square(x) {
    // return x * x;

    // }


    // Exemple de functii cu parametrii:   
    // square(5);
    // console.log(square(5)); // 25

    // square(5, 10, "hello"); // 25
    // console.log(square()); // NaN (not a number)

    // square(5, 10);
    // console.log(square()); // NaN (not a number), pentru ca trebuie sa ii mai dau parametrii functiei mele facute mai sus




    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Example 2: Function with Parameters
    // // program to print the text
    // // declaring a function

    // function greet(name) {
    //     console.log("Hello " + name + " :)");
    // }

    // // variable name can be different
    // let name = prompt("Enter a name: ");

    // // calling function
    // greet(name);


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //  Note:
    // - When a value is passed when declaring a function, it is called parameter.
    // - And when the function is called, the value passed is called argument.
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Example 3: Add Two Numbers
    // program to add two numbers using a function
    // declaring a function

    // function add(a, b) {
    //     console.log(a + b);
    // }

    // // calling functions
    // add(3,4);
    // add(2,9);


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Example 4: Sum of Two Numbers
    // program to add two numbers
    // declaring a function

    // function add(a, b) {
    //     return a + b;
    // }

    // // take input from the user
    // let number1 = parseFloat(prompt("Enter first number: "));
    // let number2 = parseFloat(prompt("Enter second number: "));

    // // calling function
    // let result = add(number1,number2);

    // // display the result
    // console.log("The sum is " + result);


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Benefits of Using a Function
    // Function makes the code reusable. You can declare it once and use it multiple times.
    // Function makes the program easier as each small task is divided into a function.
    // Function increases readability.
    // Function makes the code more maintainable.
    // Function makes the code more testable.
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    // Interesant:

    // // program to find the square of a number
    // // function is declared inside the variable
    // let x = function (num) { return num * num };
    // console.log(x(4)); // 16

    // // can be used as variable value for other variables
    // let y = x(3); // 9
    // console.log(y);


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////// JS Variable Scope //////////////////////////////////////////////////////////////////////

    // - Global Scope
    // program to print a text 
    // let a = "hello";

    // function greet () {
    //     console.log(a);
    // }

    // greet(); // hello

    // In the above program, variable a is declared at the top of a program and is a global variable.
    // It means the variable a can be used anywhere in the program.




    // // The value of a global variable can be changed inside a function. For example:
    // // program to show the change in global variable
    // let a = "hello";

    // function greet() {
    //     a = 3;
    // }

    // // before the function call
    // console.log(a);

    // //after the function call
    // greet();
    // console.log(a); // 3

    
    // Note: 
    // It is a good practice to avoid using global variables because the value of a global variable can change in different areas in the program. 
    // It can introduce unknown results in the program.



    // function greet() {
    //     a = "hello"
    // }
    
    // greet();
    
    // console.log(a); // hello

    //In the above program, variable a is a global variable. If the variable was declared using let a = "hello", the program would throw an error.


    // Note: 
    // In JavaScript, there is "strict mode"; in which a variable cannot be used without declaring it.
    // To learn more about strict, visit JavaScript Strict. https://www.programiz.com/javascript/variable-scope


    

    // - Local Scope
    //A variable can also have a local scope, i.e it can only be accessed within a function.

    // Example 1: Local Scope Variable
    // program showing local scope of a variable
    // let a = "hello";

    // function greet() {
    //     let b = "World"
    //     console.log(a + b);
    // }

    // greet();
    // console.log(a + b); 
    // Output:
    // helloWorld
    // Uncaught ReferenceError: b is not defined
    // In the above program, variable a is a global variable and variable b is a local variable. 
    // The variable b can be accessed only inside the function greet. Hence, when we try to access variable b outside of the function, an error occurs.


    // let is Block Scoped
    // The let keyword is block-scoped (variable can be accessed only in the immediate block).

    // Example 2: Block Scoped Variable
    // program showing block-scoped concept
    // global variable
    // {
    //     let a = 'Hello';

    //     function greet() {

    //         // local variable
    //         let b = 'World';

    //         console.log(a + ' ' + b); // Hello World

    //         if (b == 'World') {

    //             // block-scoped variable
    //             let c = 'hello';

    //             console.log(a + ' ' + b + ' ' + c); // Hello World hello
    //         }

    //         // variable c cannot be accessed here
    //         console.log(a + ' ' + b + ' ' + c); // Uncaught ReferenceError: c is not defined
    //     }

    //     greet();

    // }

    // In the above program, variable

    // -> a is a global variable. It can be accessed anywhere in the program.
    // -> b is a local variable. It can be accessed only inside the function greet.
    // -> c is a block-scoped variable. It can be accessed only inside the if statement block.


   // Hence, in the above program, the first two console.log() work without any issue.
   // However, we are trying to access the block-scoped variable c outside of the block in the third console.log(). This will throw an error.

    // Note:
    // In JavaScript, var is function scoped and let is block-scoped. 
    // If you try to use var c = 'hello'; inside the if statement in the above program, the whole program works, as c is treated as a local variable.


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////     JS Hoisting   //////////////////////////////////////////////////////////////////////
    // Variable Hoisting
    // In terms of variables and constants, keyword var is hoisted and let and const does not allow hoisting.


    // // program to display value
    // a = 5;
    // console.log(a); // 5   (asta e hoisting, variabila a este declarata inainte de a fi folosita)
    // var a; // 5 (asta nu e hoisting, variabila a este declarata inainte de a fi folosita)
    // console.log(a); // 5

    // // let si const nu au hoisting, variabilele sunt declarate inainte de a fi folosite.
    



    // Also, when the variable is used inside the function, the variable is hoisted only to the top of the function. For example,

    // program to display value
    var a = 4;

    function greet() {
        b = 'hello';
        console.log(b); // hello
        var b;
    }

    greet(); // hello
    console.log(b); // Uncaught ReferenceError: b is not defined

    // Note:
    // In hoisting, the variable declaration is only accessible to the immediate scope.







    // Function Hoisting
    // A function can be called before declaring it. For example,

    // program to print the text
    greet();

    function greet() {
        console.log('Hi, there.');
    }

    // Output:
    // Hi, there

    










}