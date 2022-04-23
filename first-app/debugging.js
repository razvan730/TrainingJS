{
    // asta e un factorial, iau un numar si il inmultesc cu toate numere sub el (si ar trebui sa-mi dea 5*4*3*2*1=120)
    //
    function fact(x){
        let total = 1;
        for(let i = x; i > 1; i--){
            console.log(total);
            total *= i;
        }
        return total;
    }
    console.log(fact(5));

}
// Cum fac Debug:
// -intru in Chrome si dau inspect, apoi dau click pe Sources (e langa Consola)
// -caut fisierul meu .js pe care vreau sa-l testez
// -pun breakpoints sa vad unde sunt erori, iar fiecare iteratie trebuie reluata dupa breakpoint cu acel buton de play
// -imi apare si la ce iteratie este i, ce total am la acea iteratie
// -dau click stanga sa setez un breakpoint pe lina de cod pe care vreau sa o testez
// -dau click dreapta si pot sa dau remove la breakpoint, add conditional breakpoint, never pause here, etc.








