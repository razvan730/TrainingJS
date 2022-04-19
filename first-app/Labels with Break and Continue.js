{
    
    let grades = [
        [12, 13, 32, 43, 42, 14],
        [12, 43, 21, 12, 43, 54, 12, 44, 63, 54],
        [43, 12, 43, 12, 75]
    ];


    // Break
    // for (let i = 0; i < grades.length; i++) {
    //     for (let k = 0; k < grades[i].length; k++) {
    //         console.log(grades[i][k]);
    //         if(grades[i][k] === 54) {
    //             console.log("You found the value");
    //             //console.log("You found the value at index " + i); // de obicei prima linie din loop o pot folosi ca index (ca referinta sa iau acea variabila)
    //             break; // daca pun break, nu mai executa a doua linie de cod de unde face parte break-ul (adica cea cu k) si trece la urmatoarea iteratie a primei linii de cod (adica cea cu i)
    //         }
    //     }
    //     //console.log ("\n"); //   \n = new line intre fiecare iteratie
    //     console.log("~~~~~~~~~~");
    // }


    // Continue
    // for (let i = 0; i < grades.length; i++) {
    //     for (let k = 0; k < grades[i].length; k++) {
    //         console.log(grades[i][k]);
    //         if(grades[i][k] === 54) {
    //             console.log("You found the value");
    //             continue;  // daca am continue, nu mai executa codul "console.log("dooing stuff");" in momentul in care gaseste valoarea, sare peste. 
    //                        // in rest el executa acel cod.
    //         }
    //         console.log("dooing stuff");
    //     }
        
    //     console.log("~~~~~~~~~~");
    // }


    // Labels
    outerLoop: for (let i = 0; i < grades.length; i++) {
        for (let k = 0; k < grades[i].length; k++) {
            console.log(grades[i][k]);
            if(grades[i][k] === 54) {
                console.log("You found the value");
                continue outerLoop; // 1) cand gasesc valoarea 54, iese afara din cod si continua cu prima linie
            }
            console.log("dooing stuff");
        }
        
        console.log("~~~~~~~~~~"); // 2) nu mai printeaza acesta linie de cod ( pe care o printa daca foloseam break ),
                                   // cam asta e diferenta intre break si label (cred ca Label e folosit pentru proiecte mai mari unde codul e mai dezvoltat si e nevoie. ex: pui items pe un jucator, daca are un echipament pe el, sari linia de cod in care echipeaza si aduna valorile noului echipament. )
                                   // sa ma mai gandesc la el cand e de optimizat un cod (ca sa nu citeasca multe linii de cod, cum ar fi cases)
    }






































}