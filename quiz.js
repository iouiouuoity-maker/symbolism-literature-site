const questions = [

{
question:"«Шыңырау» шығармасындағы негізгі символ қандай?",
answers:["Теңіз","Шыңырау","Балық","Жол"],
correct:1
},

{
question:"Сантьяго кім?",
answers:["Құдық қазушы","Жазушы","Балықшы","Саудагер"],
correct:2
},

{
question:"Теңіз нені білдіреді?",
answers:["Өмір кеңістігі","Табиғат","Ауа","Уақыт"],
correct:0
},

{
question:"Еңсептің мақсаты қандай?",
answers:["Үй салу","Құдық қазу","Саяхат","Кітап жазу"],
correct:1
},

{
question:"Үлкен балық нені символдайды?",
answers:["Мақсат пен күрес","Табиғат","Жол","Достық"],
correct:0
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

answersHTML+=`<button onclick="checkAnswer(${index})">${answer}</button><br>`

})

document.getElementById("answers").innerHTML=answersHTML

}

function checkAnswer(answer){

if(answer===questions[currentQuestion].correct){

score++

alert("Дұрыс!")

}

else{

alert("Қате")

}

}

function nextQuestion(){

loadQuestion()

document.getElementById("score").innerText="Ұпай: "+score

}

loadQuestion()
