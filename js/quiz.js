const questions = [

{
question:"«Шыңырау» символы нені білдіреді?",
answers:["Тағдыр","Табиғат","Жол","Достық"],
correct:0
},

{
question:"Сантьяго кім?",
answers:["Құдық қазушы","Балықшы","Жазушы","Суретші"],
correct:1
},

{
question:"Теңіз символы нені білдіреді?",
answers:["Өмір кеңістігі","Ауа","Уақыт","Тыныштық"],
correct:0
},

{
question:"Үлкен балық нені білдіреді?",
answers:["Мақсат пен күрес","Достық","Табиғат","Жол"],
correct:0
},

{
question:"Еңсеп қандай кейіпкер?",
answers:["Жауынгер","Құдық қазушы","Саяхатшы","Жазушы"],
correct:1
}

]

let currentQuestion
let score=0

function loadQuestion(){

currentQuestion=Math.floor(Math.random()*questions.length)

document.getElementById("question").innerText=
questions[currentQuestion].question

let answersHTML=""

questions[currentQuestion].answers.forEach((answer,index)=>{

answersHTML+=`<button onclick="checkAnswer(${index})">${answer}</button>`

})

document.getElementById("answers").innerHTML=answersHTML

}

function checkAnswer(answer){

if(answer===questions[currentQuestion].correct){

score++

alert("Дұрыс!")

}

else{

alert("Қате!")

}

}

function nextQuestion(){

loadQuestion()

document.getElementById("score").innerText="Ұпай: "+score

}

loadQuestion()
