const questions=[

{
q:"Шыңырау символы нені білдіреді?",
a:["Тағдыр","Табиғат","Жол"],
c:0
},

{
q:"Сантьяго кім?",
a:["Балықшы","Құдық қазушы","Жазушы"],
c:0
},

{
q:"Теңіз символы нені білдіреді?",
a:["Өмір","Уақыт","Достық"],
c:0
}

]

let current
let score=0

function load(){

current=Math.floor(Math.random()*questions.length)

document.getElementById("question").innerText=questions[current].q

let html=""

questions[current].a.forEach((x,i)=>{
html+=`<button onclick="check(${i})">${x}</button>`
})

document.getElementById("answers").innerHTML=html

}

function check(i){

if(i===questions[current].c){
score++
alert("Дұрыс")
}

else{
alert("Қате")
}

}

function next(){

load()
document.getElementById("score").innerText="Ұпай: "+score

}

load()
