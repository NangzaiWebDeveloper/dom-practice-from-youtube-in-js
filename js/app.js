//-----getElementsByTagName()
// let a = document.getElementsByTagName('ul')
// console.log(a);

//----getElementsByClassName()
// let b = document.getElementsByClassName("hero")
// console.log(b);


//----getElementById()
// let c = document.getElementById("manes")
// console.log(c);


//----querySelector() //only first property show. It's like includes method.
// let d = document.querySelector(".hero")
// console.log(d);


//-----querySelectorAll()
// let e = document.querySelectorAll("li")
// console.log(e);




//---@@@---Traverse The DOM---@@@---


//----parentElement;
// let parent = document.querySelector('ul')
// let result = parent.parentElement;
// console.log(result);


//-----children
// let son = document.querySelector(".top")
// console.log(son.children[0]); //output: <h2>...</h2>

// //-----childNodes
// let sun = document.querySelector(".top")
// console.log(sun.childNodes[0]) //output: text


//-----previousElementSibling
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



//-----appendChild
// const ulElement = document.querySelector("ul")
// const newLi = document.createElement("li")
// newLi.textContent = "this is Sujon"
// ulElement.appendChild(newLi)


//-----remove()
// const ul = document.querySelector("li")
// ul.remove()


//-----replaceChild
// const ulElement = document.querySelector("ul")
// const locationOfChild = ulElement.children[1];
// const newLi = document.createElement("li")
// newLi.textContent = "SUSHIL WANT TO CHANGE MY MIND"
// ulElement.replaceChild(newLi, locationOfChild)


//-----parentNode
// const parentN = document.querySelector("html")
// const pro = parentN.parentNode;
// console.log(pro);


//-----previousSibling
// const a = document.querySelector(".hero")
// console.log(a.previousElementSibling); //output: <li>...</li>

// const b = document.querySelector(".hero")
// console.log(b.previousSibling);//output: #text


//-----nextSibling
// const next = document.querySelector(".hero")
// console.log(next.nextSibling);//output: #text

// ----- nextElementSibling
// const nextEle = document.querySelector(".hero")
// console.log(nextEle.nextElementSibling);//output: <li>..Baron..</li>



//-----firstChild
// const fChild = document.querySelector("ul")
// const resultT = fChild.firstChild;
// console.log(resultT);

//-----firstElementChild
// const fEChild = document.querySelector("ul")
// const resultE = fEChild.firstElementChild;
// console.log(resultE)



//lastChild
// const lChaild = document.querySelector("ul")
// const resultL = lChaild.lastChild;
// console.log(resultL);//output: text

// //lastElementChild
// const leChild = document.querySelector("ul")
// const resultLe = leChild.lastElementChild;
// console.log(resultLe)//output: Eden



//------innerHtml
const hold = document.querySelector("ul")
const pick = hold.children
for(let i=0; i<= pick.length; i++){
    const result = pick[i].innerHTML
    console.log(result);
}


