{
    // https://www.youtube.com/watch?v=u1s_S6MW7oQ&list=PL_c9BZzLwBRLVh9OdCBYFEql6esA6aRsi&index=59    // foarte tare
    // cum sa salvez in memorie un numar pe care l-am mai calculat de mai multe ori:
    pow.calculated = [];
    function pow(x, y){
        let stringVersion = x + "^" + y;
        console.log("string version: " + stringVersion);

        if(stringVersion in pow.calculated){
            console.log("found in cache");
            return pow.calculated[stringVersion];
        }

        console.log("calculating");
        let total = 1;
        for (let i = 0; i<y; i++){
            total *= x;
            //console.log(i);
        }
        //pow.calculated.push(total);
        //inlocuim cu:
        pow.calculated[stringVersion] = total;

        console.log(pow.calculated);
        return total;
    }

    pow(3,3); // Result: [27]
    pow(3,3); // found in cache
    pow(10,4); // Result: (3) [27, 27, 10000]
    pow(10,3); // Result: (4) (4) [27, 27, 10000, 1000]
    pow(10,3); // found in cache
    pow(10,4); // string version: 10^4     found in cache (versiunea completa din consola)
    
}