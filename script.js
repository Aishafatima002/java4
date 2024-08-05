// function add(a,b) {
//     return a+b
// }
// console.log(add(12,9))

// function multiply(a,b){
//     return a*Number(b)
// }
// console.log("2","3")

//it declare 2 3

// let greet="hello"

//DOM:document obj material
//work on html:root element
//it uesd html by changing js //tree line strcture
//n css
//programing interface web documents:that can change sturcture style   content

// console.log(document)
// console.log(document.body.childNodes)
 //DOM method
 //getelementbyid,byclaass ,bytagname
//  let head=document.getElementById("heading")
//  head.style.color="red"
//  head.style.backgroundColor="#BD8484";
//  head.style.fontSize="64px"
//  console.log(head)

// let para1=document.getElementsByClassName("para")
// para1[0].style.fontSize="18px"
// para1[0].innerHTML="hy"//innerhtml retuerna html elements
//  let para2=document.getElementsByClassName("example2")
//  para2[0].style.backgroundColor="#BD8488"
//  para2[0].style.border="2px solid black"
//  para2[0].style.width="150px"


// //by tag
// let collection=document.getElementsByTagName("li")
// // document.getElementById("demo").innerHTML=collection[1].innerHTML;
// document.getElementById("demo").innerHTML=collection[2].innerHTML;
 
 
//
// function changecolor ( newcolor) {
//     const btn=document.getElementById("para")
//     btn.style.color=newcolor
//     btn.style.fontSize="34px"
//     btn.style.fontFamily="italic"
// }


// document.querySelector("p").style.backgroundColor="yellow"
//set interval :continously run//set time out :only one time

// let button=document.getElementById("btn")
// button.addEventListener("dblclick",()=> {
//     document.querySelector(".container").innerHTML="<b>you wre clicked</b>  enjoy your click"
// })


// button.addEventListener("contextmenu",()=> {
//     document.querySelector(".container").innerHTML="<b>you wre clicked</b>  enjoy your click"
// })
// let button=document.getElementById("btn")
// button.addEventListener("mouseenter",()=> {
//     document.querySelector(".container").innerHTML="<b>you wre clicked</b>  enjoy your click"
// })

// let button=document.getElementById("btn")
// button.addEventListener("keyup",(e)=> {
//     document.querySelector(".container").innerHTML="<b>you wre clicked</b>  enjoy your click"
//     console.log(e)
// })

function myFunction() {
    let y=document.getElementById("frame")
    console.log(y)
    y.value=y.value.toUpperCase()
}
function myFunction1() {
   document.getElementById("email").innerHTML="you press the key inside input field"
   document.getElementById("email").style.color='yellow'
}
function myFunction2() {
    alert("you  down the key inside the input field")
    
 }
 console.log(myFunction2())