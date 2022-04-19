// var valentine = new Date();
// console.log(valentine); // Result: Tue Apr 19 2022 09:16:47 GMT+0300 (Eastern European Summer Time)

// // default value of date is (year + month), month is from (0 to 11  : 0 = January, 11 = December)
// date values: (year, month, day, hours, minutes, seconds, milliseconds)
// se fac niste conversii ca sa ajungi sa ti se afiseze data corecta; (sa mai caut Date.UTC() , standard time + conversie la local time)

// var date2 = new Date (1990, 11, 31); 
// console.log(date2); // Result: Mon Dec 31 1990 00:00:00 GMT+0200 (Eastern European Standard Time)


// {
//     let start = Date.now();


//     let x = 0;
//     for (let i = 0; i < 100000000; i++) {
//         x = x + i;
//     }    

//     let end = Date.now();
//     let total = end - start;
//     console.log(x);
//     console.log(total);

// }


// {
//     let before = new Date(2020, 10, 15);
//     let after = new Date(2020, 10, 20);
    
//     // 1000 = ms/s , 60 = s/min , 60 = min/hr , 24 = hr/day
//     let oneDay = 1000 * 60 * 60 * 24;
//     let days = (after - before) / oneDay;
//     console.log(days);
// }


{
    // Date Methods
    let myDate = new Date();
    console.log(myDate); // Result: Tue Apr 19 2022 09:54:15 GMT+0300 (Eastern European Summer Time) , chiar e 9:54 acum :))

    myDate.setHours(10);
    console.log(myDate); // Result: Tue Apr 19 2022 10:54:34 GMT+0300 (Eastern European Summer Time)



}





























