{
    function doStuff(input, input2) {
        console.log(input, input2);
        console.log(this);
    }

    doStuff.call("hello", 5, 10);

    let args = [5, 10];
    // //doStuff.apply("hello", [5, 10]);
    doStuff.apply("hello", args);

    // Call and apply are used to change values of this 
    // call take separate arguments and will passed into each argument
    // apply takes an array of arguments, you may also see this assigned into a separate array (ex cu args)

}

