{
    let grades = [
        [12, 13, 32, 43, 42, 14],
        [12, 43, 21, 12, 43, 12, 44, 63],
        [43, 12, 43, 12, 75]
    ];

    /*
    for (let i = 0; i < grades.length; i++) {
        for (let k = 0; k < grades[i].length; k++) {
            console.log(grades[i][k]);
        }
        console.log ("\n"); //   \n = new line intre fiecare iteratie
    }

    */


    // forEach method
    grades.forEach(function(row) {
             console.log(row);
    }); 
    // Result: (6) [12, 13, 32, 43, 42, 14]
    //         (8) [12, 43, 21, 12, 43, 12, 44, 63]
    //         (5) [43, 12, 43, 12, 75]


    grades.forEach(function(row) { 
        row.forEach(function(col) {
            console.log(col);
        });      
        console.log("~~~~~~~~~~");
    });

    // aici mai am de invatat, vad ca se pot printa in mai multe moduri array-urile din alt array.


























}






























