// Foarte important!                                                - Arrow Function -
// Sunt intr-un fel mai precise, rezultatul e acelasi mereu. 
// Cu ajutorul arrow function-ului, nu mai trebuie sa scriem functia ca si parametru, ci doar ca si expresie.


// Exemplu:
// {
//     function cube(x){
//         return x*x*x; // "x" la puterea a 3-a
//     }

//     let cubeArrow = x => x*x*x; // "x" la puterea a 3-a
//     //let cubeArrow = (x) => x*x*x;    // parantezele sunt necesare cand am 0 parametri, sau de la 2 parametrii in sus
//     //let cubeArrow = x => {return x*x*x}; // alta varianta de scriere - dar cand pun un block de cod am nevoie de return + de parantezele acolada

//     console.log(cube(5)); // Result: 125
//     console.log(cubeArrow(5)); // Result: 125

//     let cubeArrow2 = x => {
//         console.log("calculating...");
//         return x*x*x;
//     }
//     console.log(cubeArrow2(5)); // Result: calculating... 125

// }


// This with Arrow Functions
{
    let arrow = () => this; 
    function normal(){
        return this;
    }

   // console.log(arrow()); // Result: Window
   // console.log(normal()); // Result: Object
    
    console.log("!!!", this); // Result: Window
    let functions = {
        this: this,
        arrow: arrow,
        normal: normal,
        arrowTest: () => this
    };   

   // console.log(functions);
    /* Result:
        {arrow: ƒ, normal: ƒ}
            arrow: () => this
            normal: ƒ normal()
        [[Prototype]]: Object
    */

    console.log(functions.arrow()); // Result: Window
    console.log(functions.normal()); // Result: Object
    console.log(functions.arrowTest()); // Result: Window
    
}

// Arrow Methods and Objects Literals
{





}