var questions=[
    {
       question:'What is capital of pakistan?',
        answers:[
            {text:'faisalabad',correct: false},
            {text:'multan',correct:false},
            {text:'islamabad',correct:true},
            {text:'lahore',correct:false}
                ]
    },
    {
        question:'What is manchester of pakistan?',
        answers:[
            {text:'faisalabad',correct: true},
            {text:'islamabad',correct:false},
            {text:'multan',correct:false},
            {text:'lahore',correct:false}
        ]
    },
    {
        question:'Who is the founder of pakistan?',
        answers:[
            {text:'allama iqbal',correct: false},
            {text:'quaid e azam',correct: true},
            {text:'sir sayad ahmad khan',correct:false},
            {text:'liaquat ali khan',correct:false}
        ]
    },
    {
        question:'How many provinces of pakistan?',
        answers:[
            {text:'4',correct: false},
            {text:'5',correct:true},
            {text:'6',correct:false},
            {text:'7',correct:false}
        ]
    },
    {
        question:'Who is our national poet?',
        answers:[
            {text:'muhammad ali shaghla',correct: false},
            {text:'abdul rab nashtar',correct:false},
            {text:'allama iqbal',correct:true},
            {text:'fatima jinnah',correct:false}
        ]
    },
    {
        question:'What is the color of 100 pakistani rupee?',
        answers:[
            {text:'blue',correct: false},
            {text:'green',correct:false},
            {text:'red',correct:true},
            {text:'gray',correct:false}
        ]
    }

];

var score=0;
var questionIndex = 0;
function start()
{
    //it is starting step
    document.getElementById('start').style.display = "none";
    document.querySelector('.answers').style.display = "block";
    document.getElementById('questionsLength').style.display = "block";
    document.getElementById('questionsLength').innerHTML='Questions: '+1+' / '+questions["length"];
    //first question display
    var getQuestion = document.getElementById('question');
    getQuestion.innerHTML = questions[questionIndex]["question"];
    //first question answer display
     document.getElementById('opt1').innerHTML=questions[questionIndex]["answers"][0]["text"];
     document.getElementById('opt2').innerHTML=questions[questionIndex]["answers"][1]["text"];
     document.getElementById('opt3').innerHTML=questions[questionIndex]["answers"][2]["text"];
     document.getElementById('opt4').innerHTML=questions[questionIndex]["answers"][3]["text"];

}

function submit() {
    questionIndex++;
    document.getElementById('questionsLength').innerHTML='Questions: '+parseInt(questionIndex+1)+' / '+questions["length"];
    var getQuestion = document.getElementById('question');
    getQuestion.innerHTML = questions[questionIndex]["question"];

    //next questions answer display
     document.getElementById('opt1').innerHTML=questions[questionIndex]["answers"][0]["text"];
     document.getElementById('opt2').innerHTML=questions[questionIndex]["answers"][1]["text"];
     document.getElementById('opt3').innerHTML=questions[questionIndex]["answers"][2]["text"];
     document.getElementById('opt4').innerHTML=questions[questionIndex]["answers"][3]["text"];

    var correct1= questions[questionIndex]["answers"][0]["correct"];
    var correct2= questions[questionIndex]["answers"][1]["correct"];
    var correct3= questions[questionIndex]["answers"][2]["correct"];
    var correct4= questions[questionIndex]["answers"][3]["correct"];

    var opt1 =document.getElementById('opt1').innerHTML;
    var opt2 =document.getElementById('opt2').innerHTML;
    var opt3 =document.getElementById('opt3').innerHTML;
    var opt4 =document.getElementById('opt4').innerHTML;
    console.log(opt1);
    console.log(opt2);
    console.log(opt3);
    console.log(opt4);

}

console.log(opt1);