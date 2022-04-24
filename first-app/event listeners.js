{
    let list = document.getElementsByTagName("ol");
    console.log(list); // HTMLCollection(1) [ol]
    let ourList = list[0];
    console.log(ourList); // ol

    ourList.onmouseover = function() {
        console.log("Mouse is over");
        ourList.childNodes[1].childNodes[0].nodeValue = "House";
    };

    //  de revazut: de la 91-100;
    // https://www.youtube.com/watch?v=BhFmD1PcV0M&list=PL_c9BZzLwBRLVh9OdCBYFEql6esA6aRsi&index=91

    let button = document.getElementById("clickme");
    button.onmouseenter = function() {
        button.innerHTML = "Revealed";
    };

    button.onmouseleave = function() {
        button.innerHTML = "Click Me";

        ourList.remove();
    };




}