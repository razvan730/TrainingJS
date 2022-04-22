// {
//     function pow(x,y, ...extra){
//         console.log(extra);
//         let total = 1;
//         for (let i = 0; i<y; i++){
//             total *= x;
//         }
//         return total;
//     }

//     //console.log(pow(3,3));
//     console.log(pow(3, 3, 4, 5, 6, 2)); // Result: [4, 5, 6, 2] de obicei o sa fie ignorate
                                           //         27
    
// }

{// x,y sunt default parameters, iar ...extra este un rest parameter (cred, nu sunt sigur)
    function pow(x,y, ...extra){
        console.log(this); //pasul 1 -> cand pun un this in functie, o sa-mi arate window object
        console.log(arguments); //pasul 3 -> cand pun un argument in functie, o sa-mi arate arguments object cu indexurile argumentelor
        console.log(extra);
        let total = 1;
        for (let i = 0; i<y; i++){
            total *= x;
        }
        return total;
    }


    function largest(x, ...extra){
        let largest = x;
        for(let i=0; i<extra.length; i++){
            if(extra[i]>largest){
                largest = extra[i];
            }
        }
        return largest;
    }
  
    //console.log(largest(30, 3, 44, 5, 612, 222)); // Result: 612
    console.log(pow(3,3)); // pasul 2 
}

// implicit parameters (de obicei cand vorbesc de asta "this")
