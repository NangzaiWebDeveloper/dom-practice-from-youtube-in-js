//getElementsByTagName()
// let a = document.getElementsByTagName('ul')
// console.log(a);

//getElementsByClassName()
// let b = document.getElementsByClassName("hero")
// console.log(b);


//getElementById()
// let c = document.getElementById("manes")
// console.log(c);


//querySelector() //only first property show. It's like includes method.
// let d = document.querySelector(".hero")
// console.log(d);


//querySelectorAll()
// let e = document.querySelectorAll("li")
// console.log(e);




//------Traverse The DOM------

//parentElement;
// let parent = document.querySelector('ul')
// let result = parent.parentElement;
// console.log(result);


//children
// let son = document.querySelector(".top")
// console.log(son.children[0]);

//childNodes
// let sun = document.querySelector(".top")
// console.log(sun.childNodes[1])


//previousElementSibling
// EX : 1
// console.log(document.querySelector(".hero").previousElementSibling.previousElementSibling)

// EX : 2
// let previous = document.querySelector(".hero")
// if(previous.previousElementSibling == null){
//     console.log("Your finding element is Null BOSS");
// }
// else{
//     console.log(previous.previousElementSibling);
// }

// EX : 3
// let previous = document.querySelectorAll(".hero")
// previous.forEach((ele)=> console.log(ele.previousElementSibling))



//appendChild



//remove

//replaceChild

//parentNode

//previousSibling

//firstChild

//lastChild