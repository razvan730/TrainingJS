// https://developer.mozilla.org/en-US/docs/Web/API/node


// DOM Node Types:

/*
Name	                        Value
ELEMENT_NODE                	1
ATTRIBUTE_NODE              	2
TEXT_NODE	                    3
CDATA_SECTION_NODE          	4
PROCESSING_INSTRUCTION_NODE	    7
COMMENT_NODE                	8
DOCUMENT_NODE               	9
DOCUMENT_TYPE_NODE          	10
DOCUMENT_FRAGMENT_NODE	        11
*/

// { // element node (element node or text node)
//     let list = document.getElementsByTagName("li");

//     console.log(list); // HTMLCollection(3) [li.home, li#special.border, li.border, special: li#special.border]
//     console.log(list[0].childNodes[0]); // Home

//     if(list[0].nodeType === 1) {
//         console.log("Is an element");
//     } 
    
//     else if(list[0].nodeType === 3) {
//         console.log('Is a text');
//     }

// }

{ // text node, child nodes
    //let paragraphs = document.getElementsByTagName("p")[0];
    let paragraphs = document.getElementsByTagName("p");
    console.log(paragraphs); // cand merg sa ma uit la nodeType: 3, pana aici e ok

    // am mai adaugat in text in html <strong>important</strong> 
    /* childNodes: NodeList(2)
        0: text
        1: strong
        length: 2
    */
   
}



/// Modifying nodeValue
// https://www.youtube.com/watch?v=aKB-e9IR1wQ&list=PL_c9BZzLwBRLVh9OdCBYFEql6esA6aRsi&index=98




// https://www.youtube.com/watch?v=YZQJxDUldlA&list=PL_c9BZzLwBRLVh9OdCBYFEql6esA6aRsi&index=101












