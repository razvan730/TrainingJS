{

    let list = document.getElementsByTagName("li");
    console.log(list); // HTMLCollection(3) [li.home, li#special.about, li.contact, special: li#special.about]

    let list2 = document.getElementsByClassName("border");
    console.log(list2); // HTMLCollection(2) [li#special.border, li.border, special: li#special.border]  adica About si Contact din HTML

    let list3 = document.getElementById("special");
    console.log(list3);  // mi-a luat id-ul special din HTML a lui About.


    // inca o mentiune, vad ca aici nu e obligatoriu .clasa , #id   -> dar cred ca la querrySelector e obligatoriu .clasa sau #id.
    // posibil sa fie si aici daca nu le pun (daca nu le pun in ghilimele?)
}