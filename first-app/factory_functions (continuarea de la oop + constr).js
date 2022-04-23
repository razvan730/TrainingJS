{
    // genul asta e mai recomandat
    function User(name, interests){
        this.name = name;
        this.interests = interests;
    }

    // asta mai putin recomandat desi se practica
    function newUser(name, interests){
        let person ={
            name: name,
            interests: interests
        }
        return person;
    }


    let me = new User("Gigi", ["reading", "cooking", "eating"]);
    let you = new User("Camila", ["hotwheels"]);
    console.log(me, you); 
    me.membership = "Gold"
    console.log(me);

    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!");
   // console.log(newUser("Gigi", ["reading", "cooking", "eating"]));
    you.membership = "Gold";
    console.log(you); // deci pun variabila.numeProprietate = new(constructorul) FunctiaSablon(numeProprietate, valoareProprietate, etc) 
                      // si ii dau o proprietate noua in obiectul creat.























}