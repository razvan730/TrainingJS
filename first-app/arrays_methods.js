
    //let grades = [];
    //console.log(grades);


    // // pot sa introduc urmatoarele elemente in consola browserului, ex:     let grades = [1, 2, 3]; si imi adauga aceste elemente array-ului grades care eu il am gol
    // // in momentul o sa scriu grades.length, si o sa am 3 elemente in array
    /*
    ex:
        []
        let grades = [1, 2, 3];
            undefined
        console.log(grades);
            VM1283:1 (3) [1, 2, 3]
            undefined

    */

    //grades.push(4); // add element to the end of the array
    // //console.log(grades);

    // grades.pop(); // remove element from the end of the array
    // //console.log(grades);
    
    // // daca vreau ca valorile sterse sa le salvez undeva, fac o variabila noua unde sa stochez valorile, ex:
    // let poppedValue = grades.pop();
    // console.log(poppedValue);




// push() - add element to the end of the array
// pop() - remove element from the end of the array
// shift() - remove element from the beginning of the array
// unshift() - add element to the beginning of the array
// splice() - remove/add elements from/to the array
// slice() - copy elements from the array
// sort() - sort elements in the array
// reverse() - reverse the order of the elements in the array
// join() - convert the array to a string
// indexOf() - find the index of an element in the array
// lastIndexOf() - find the last index of an element in the array
// forEach() - execute a function for each element in the array
// map() - create a new array by executing a function for each element in the array
// filter() - create a new array with elements that pass a test
// reduce() - reduce the array to a single value
// every() - check if all elements in the array pass a test
// some() - check if any element in the array pass a test
// reduceRight() - reduce the array to a single value, starting from the end of the array
// find() - find the first element in the array that pass a test
// findIndex() - find the index of the first element in the array that pass a test
// fill() - fill the array with a value
// entries() - create an iterator over array elements
// keys() - create an iterator over array keys
// values() - create an iterator over array values
// copyWithin() - copy array elements within the array



// JS: Variabilele sunt un obiect, care are proprietati si metode
let grades = [1, 2, 3];



grades.unshift(40); // add element to the beginning of the array
console.log(grades); // Result: [40, 1, 2, 3]

grades.shift(); // remove element from the beginning of the array
console.log(grades); // Result: [1, 2, 3]


//deleting with splice 
let testCuSplice = [1, 2, 3, 40000, 20, 10, 40];

let removedElements = testCuSplice.splice(2,3); // remove 3 elements from index 2
// aici am array-ul din care am sters 3 elemente si imi arata ce elemente au ramas, iar in removedElements am stocat acele 3 elemente sterse
console.log(testCuSplice); // Result: [1, 2, 10, 40]
console.log(removedElements); // Result: [3, 40000, 20]



//add with splice       ////  splice(start, deleteCount, elementsToAdd) cam asa vine:
testCuSplice.splice(2,0,3,3,3); // add 3 elements at index 2
console.log(testCuSplice); // Result: [1, 2, 3, 3, 3, 10, 40]
console.log(testCuSplice.length); // Result: 7 elements in the array



//replacing with splice
let testCuSplice2 = [1, 2, 3, 40000, 20, 10, 40];
console.log(testCuSplice2);  // Result: [1, 2, 3, 40000, 20, 10, 40]

testCuSplice2.splice(2,4,0,0,0,0); // replace 4 elements from index 2 with 0,0,0,0
console.log(testCuSplice2); // Result: [1, 2, 0, 0, 0, 0, 40]



/// SORTING
grades.push( 15, 13, 524, 65, 2, 4, 2, 43, 64, 756, 34, 23, 3);
console.log(grades); // Result: [1, 2, 3, 15, 13, 524, 65, 2, 4, 2, 43, 64, 756, 34, 23, 3]

grades.sort(); // sort the array
console.log(grades); // Result: [1, 13, 15, 2, 2, 2, 23, 3, 3, 34, 4, 43, 524, 64, 65, 756]
// sorteaza cam aiurea, cred ca trebuie facut ceva de compararea numerelor, in index (parca aveam un loop in script.js care era bun- ceva cu largest number)

let gradesLength = grades.length;
console.log(gradesLength); // Result: 16 elements in the array

grades.sort(function(a, b){return a-b}); // sort the array in ascending order)
console.log(grades); // Result: [1, 2, 2, 3, 23, 3, 34, 4, 4, 13, 15, 65, 65, 524, 756, 756, 64, 43]
// alta viata asa, de tinut minte chestia asta :))



// Reverse
console.log(grades); // Result: [1, 2, 2, 2, 3, 3, 4, 13, 15, 23, 34, 43, 64, 65, 524, 756]
grades.reverse(); // reverse the array
console.log(grades); // Result: [756, 524, 65, 64, 43, 34, 23, 15, 13, 4, 3, 3, 2, 2, 2, 1]



// FILL
grades.fill(-1, 0, grades.length); // fill the array with -1 from index 0 to the end of the array
console.log(grades); // Result: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]



// CopyWithin
let grades2 = [15, 13, 524, 65, 2, 4, 2, 43, 64, 756, 34, 23, 3];
console.log(grades2); // Result: [15, 13, 524, 65, 2, 4, 2, 43, 64, 756, 34, 23, 3]
let gradesLenght2= grades2.length
console.log(grades2, gradesLenght2); // Result: [15, 13, 524, 65, 2, 4, 2, 43, 64, 756, 34, 23, 3] , 13 elements in the array

grades2.copyWithin(1,4); // 
console.log(grades2); // Result: [15, 2, 4, 2, 43, 64, 756, 34, 23, 3, 34, 23, 3]
// pe asta o bag in .... 


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  The JavaScript Array copyWithin() method shallow copies array elements to another position in the array, overwriting the existing values.
 
//                                         array.copyWithin(target, start, end)

//     copyWithin() Parameters
//     The copyWithin() method takes in:

//     target -            The index position to copy the elements to.
//     start (optional) -  The index position to start copying elements from. If omitted, it will copy from index 0.
//     end (optional) -    The index position to end copying elements from. (exclusive) If omitted, it will copy until last index.

//Notes:
// This method overwrites the original array.
// This method does not change the length of the original array.

{
    let array = [1, 2, 3, 4, 5, 6];

    // target: from second-to-last element, start: 0, end: array.length
    let returned_arr = array.copyWithin(-2); 
    console.log(returned_arr); // [ 1, 2, 3, 4, 1, 2 ]
    // modifies the original array
    console.log(array); // [ 1, 2, 3, 4, 1, 2 ]

    array = [1, 2, 3, 4, 5, 6];
    // target: 0, start copying from 5th element
    array.copyWithin(0, 4);
    console.log(array); // [ 5, 6, 3, 4, 5, 6 ]

    array = [1, 2, 3, 4, 5, 6];
    // target: 1, start copying from 3rd element to second-to-last element
    array.copyWithin(1, 2, -1); // -1 = last element (exclusive)
    console.log(array); // [ 1, 3, 4, 5, 5, 6 ]

    //Output:
    // [ 1, 2, 3, 4, 1, 2 ]
    // [ 1, 2, 3, 4, 1, 2 ]
    // [ 5, 6, 3, 4, 5, 6 ]
    // [ 1, 3, 4, 5, 5, 6 ]
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Concat
let gradesA = [1, 2, 3, 4, 5, 6];
let gradesB = [21, 22, 23, 24, 25, 26];
console.log(gradesA); // Result: [1, 2, 3, 4, 5, 6]
console.log(gradesB); // Result: [21, 22, 23, 24, 25, 26]

let gradesC = gradesA.concat(gradesB); // concatenate the arrays  // dar nu schimba array-urile originale, doar le concateneaza intr-un alt array
console.log(gradesC); // Result: [1, 2, 3, 4, 5, 6, 21, 22, 23, 24, 25, 26]
console.log(gradesA); // Result: [1, 2, 3, 4, 5, 6]
console.log(gradesB); // Result: [21, 22, 23, 24, 25, 26]

//let testNouGradesC = gradesA + gradesB; // aici face tocanita, nu e bun!
//console.log(testNouGradesC);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Cum sa caut un singur element in array, gen boolean
let searchOneElem = gradesB.includes(22); // check if the array contains a certain element
console.log(searchOneElem); // Result: true

let searchoneElem2 = gradesB.includes(44); // check if the array contains a certain element
console.log(searchoneElem2); // Result: false


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// IndexOf 
let indexOfElem = gradesB.indexOf(22); // return the index of the first occurrence of a specified value in an array
console.log(indexOfElem); // Result: 1 (the index of the first occurrence of 22 in the array)

let indexOfElem2 = gradesB.indexOf(23123);
console.log(indexOfElem2); // Result: -1 (the index of the first occurrence of 23123 in the array)
//pentru ca nu gaseste nimic, returneaza -1




//Join method (convert an array into a string)
let gradesD = [1, 2, 3, 4, 5, 6];
console.log(gradesD); // Result: [1, 2, 3, 4, 5, 6]
gradesD.join(); // convert the array into a string
console.log(gradesD); // Result: 1,2,3,4,5,6
gradesD.join("-"); // convert the array into a string with a separator
console.log(gradesD); // Result: 1-2-3-4-5-6
gradesD.join(" "); // convert the array into a string with no separator
console.log(gradesD); // Result: 1 2 3 4 5 6
grades.join("A"); 
console.log(gradesD); // Result: 1A2A3A4A5A6  // teoretic asa ar trebui sa fie, dar in consola nu apare asa :))


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// SLICE

// slice(); // The slice() method returns the selected elements in an array, as a new array object.
// slice(start, end); // The slice() method selects the elements starting at the given index and up to, but not including, the end index.

let grA = [15, 13, 524, 65, 2, 4, 2, 43, 64, 756, 34, 23, 3];

let grB = grA.slice(3,5); // slice the array from index 3 to index 5
console.log(grB); // Result: [65, 2]

let grC = grA.slice(4); // slice the array from index 3 to the end
console.log(grC); // Result: [2, 4, 2, 43, 64, 756, 34, 23, 3]


















