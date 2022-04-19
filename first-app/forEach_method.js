{
    let grades =[12, 13, 32, 43, 42, 23];
    grades.length = 30; // this will change the length of the array

    // //standard for loop
    // for(let i=0; i<grades.length; i++){
    //     console.log(grades[i]); // Result: 12, 13, 32, 43, 42, 23
    // }

    // for(let i=0; i<grades.length; i++){
    //     if(grades[i] !== undefined)
    //     console.log(grades[i]);
    // } // Result: 12, 13, 32, 43, 42, 23 (because the undefined values are not printed) in case i use a bigger array with undefined values //

    // forEach method   (seamana cu cea de mai sus, dar nu mai trebuie sa caut si pentru sloturi nedefinite)
    grades.forEach(function(elemntDinArray){
        console.log(elemntDinArray); // Result: 12, 13, 32, 43, 42, 23
    });
    

    // forEach method with index
    grades.forEach(function(elementDinArray, index){
        console.log(elementDinArray, index); // Result: 12, 0, 13, 1, 32, 2, 43, 3, 42, 4, 23, 5  (in consola se vede mai bine si sunt cate 2 elemente element + index)
    });

     
     grades.forEach(function(elementDinArray, index, array){
         console.log(elementDinArray, index, array); // aici vad ca imi printeaza si array-ul fata de cel de mai sus
     });
     
     //baza metodei e urmatoarea:
     //grades.forEach(function(item , index , array){});
     // item = elementul din array, index = indexul elementului din array, array = array-ul in care se afla elementul
     // 




































     
 }


















