document.getElementById("demo").onclick = () => {
    console.log("Hello World!"); // cand dau click pe text, afiseaza Hello World! in consola
};
// eventul merge corect


// mergem la sources iar sa setam un breakpoint pentru event listener
// daca nu am actionat acel buton sau zona pe ce vreau sa apas, nu afiseaza nimic in sursa 
// dupa ce am ajuns iar la sources, jos am Event Listeners Breakpoints
document.getElementById("demo").onmouseover = () => {
    console.log("Mouse Over!"); 
};  // functioneaza si asta, imi inregistreaza in consola de cate ori am trecut cu mouse-ul peste zona/buton/etc

// selectez Mouse - mouseover/click si cand duc mouse iar pe text(in cazul meu), imi afiseaza Mouse Over! + Breakpoint, se opreste si se selecteaza linia de cod
// 



