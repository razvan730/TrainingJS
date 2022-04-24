// https://www.youtube.com/watch?v=6cZ-H_l4cIo&list=PL_c9BZzLwBRLVh9OdCBYFEql6esA6aRsi&index=93



// DOM - Document Object Model
// Node - Element
// NodeList - Element List
// merg in consola si scriu document.childNodes
// merg la childnodes -> Body   ->  childNodes ->  si gasesc toata structura paginii noastre
// pot sa iau ce element vreau, exemplu:

{
    let list = document.childNodes[1]
    .childNodes[2].childNodes[1];

    console.log(list);
    console.log(list.parentElement); 


}






