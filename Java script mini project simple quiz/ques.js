const Questions = [{
    q: "Javascript is an_______language?",
    a: [{ text: "Object-Based", isCorrect: false },
    { text: "Procedural", isCorrect: false },
    { text: "Object-Oriented", isCorrect: true },
    { text: "Non of the above", isCorrect: false }
    ]

},
{
    q: "Which of the following keywords is used to define a variable in Javascript?",
    a: [{ text: "var", isCorrect: false, },
    { text: "let", isCorrect: false },
    { text: "Both A and B", isCorrect: true },
    { text: "None of the above", isCorrect: false }
    ]

},
{
    q: "Which of the following methods is used to access HTML elements using Javascript?",
    a: [{ text: "getElementbyId()", isCorrect: false },
    { text: "getElementsByClassName()", isCorrect: false },
    { text: "Both A and B", isCorrect: true },
    { text: "None of the above", isCorrect: false }
    ]

},
{
    q: "Upon encountering empty statements, what does the Javascript Interpreter do?",
    a:[{text: "Throws an error",isCorrect: false},
    {text: "Ignores the statements",isCorrect: true},
    {text: "Gives a warning",isCorrect: false},
    {text: "None of the above",isCorrect:false}
    ]
},
{
    q:"of the following methods can be used to display data in some form using Javascript?",
    a:[{text:"document.write()",isCorrect:false},
        {text:"console.log()",isCorrect:false},
        {text:"window.alert()",isCorrect:false},
        {text:"All of the above",isCorrect:true}
    ]
},
{
    q: "can a datatype be declared to be a constant type?",
    a:[{text:"const",isCorrect:true},
        {text:"var",isCorrect:false},
        {text:"let",isCorrect:false},
        {text:"constant",isCorrect:false}
    ]
},
{
    q:"the switch statement matches the expression with the given labels, how is the comparison done?",
    a:[{text:"Both the datatype and the result of the expression are compared",isCorrect:true},
        {text:"only the datatype of the expression os compared",isCorrect:false},
        {text:"Only the value of the expression is compared",isCorrect:false},
        {text:"None of the above",isCorrect:false}
    ]
},
{
    q:"What keyword is used to check whether a given property is valid or not?",
    a:[{text:"in",isCorrect:true},
        {text:"is in",isCorrect:false},
        {text:"exists",isCorrect:false},
        {text:"lies",isCorrect:false}
    ]
}
]

let currQuestion = 0
let score = 0

function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")

    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""

    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = Questions[currQuestion].a[i].text;

        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}

loadQues();

function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}

function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}