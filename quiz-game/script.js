const startButton = document.getElementById('start-btn');
const scoreCounter= document.getElementById('scores');
const questionElement = document.getElementById('question');
const optionButtonsElement = document.getElementById('options');
const optionAElement = document.getElementById('optiona');
const optionBElement = document.getElementById('optionb');
const optionCElement = document.getElementById('optionc');
const optionDElement = document.getElementById('optiond');
const nextButton = document.getElementById('next-btn');

startButton.addEventListener('click', startGame);

var score = 1; //to count score


function startGame(){
    document.getElementById("started-btn").classList.remove('hide');
    scoreCounter.classList.remove('hide');
    startButton.classList.add('hide');
    nextButton.classList.remove('hide');
    setQuestion1();
}

function setQuestion1(){
    questionElement.innerText = questions[0].question;
    optionAElement.innerHTML = questions[0].options[0];
    optionBElement.innerHTML = questions[0].options[1];
    optionCElement.innerHTML = questions[0].options[2];
    optionDElement.innerHTML = questions[0].options[3];
    checkOptions();
    nextButton.addEventListener('click', setQuestion2)
}

function setQuestion2(){
    resetButtons();
    questionElement.innerText = questions[1].question;
    optionAElement.innerHTML = questions[1].options[0];
    optionBElement.innerHTML = questions[1].options[1];
    optionCElement.innerHTML = questions[1].options[2];
    optionDElement.innerHTML = questions[1].options[3];
    checkOptions();
    nextButton.addEventListener('click', setQuestion3)
}

function setQuestion3(){
    resetButtons();
    questionElement.innerText = questions[2].question;
    optionAElement.innerHTML = questions[2].options[0];
    optionBElement.innerHTML = questions[2].options[1];
    optionCElement.innerHTML = questions[2].options[2];
    optionDElement.innerHTML = questions[2].options[3];
    checkOptions();
    nextButton.addEventListener('click', setQuestion4)
}

function setQuestion4(){
    resetButtons();
    questionElement.innerText = questions[3].question;
    optionAElement.innerHTML = questions[3].options[0];
    optionBElement.innerHTML = questions[3].options[1];
    optionCElement.innerHTML = questions[3].options[2];
    optionDElement.innerHTML = questions[3].options[3];
    checkOptions();
    nextButton.addEventListener('click', setQuestion5)
}

function setQuestion5(){
    resetButtons();
    questionElement.innerText = questions[4].question;
    optionAElement.innerHTML = questions[4].options[0];
    optionBElement.innerHTML = questions[4].options[1];
    optionCElement.innerHTML = questions[4].options[2];
    optionDElement.innerHTML = questions[4].options[3];
    checkOptions();
    nextButton.addEventListener('click', endGame)
}

function endGame(){
    document.getElementById('secondhalf-content').classList.add('hide');
    document.getElementById('endtext').classList.remove('hide');
    document.getElementById("started-btn").innerHTML = 'Quiz Ended!'
}

//reset buttons to normal style when next button is clicked
function resetButtons(){
    optionAElement.classList.remove('btn2-wrong');
    optionBElement.classList.remove('btn2-wrong');
    optionCElement.classList.remove('btn2-correct');
    optionDElement.classList.remove('btn2-wrong');
}

//check if option is correct
function checkOptions() {
    optionButtonsElement.addEventListener('click', function(e) {
        var target = e.target;
        if(target.id === 'optiona'){
            optionAElement.classList.add('btn2-wrong');
            optionBElement.classList.remove('btn2-wrong');
            optionCElement.classList.remove('btn2-correct');
            optionDElement.classList.remove('btn2-wrong');
        } else if(target.id === 'optionb'){
            optionAElement.classList.remove('btn2-wrong');
            optionBElement.classList.add('btn2-wrong');
            optionCElement.classList.remove('btn2-correct');
            optionDElement.classList.remove('btn2-wrong')
        } else if(target.id === 'optionc'){
            optionAElement.classList.remove('btn2-wrong');
            optionBElement.classList.remove('btn2-wrong');
            optionCElement.classList.add('btn2-correct');
            optionDElement.classList.remove('btn2-wrong');
        } else if(target.id === 'optiond'){
            optionAElement.classList.remove('btn2-wrong');
            optionBElement.classList.remove('btn2-wrong');
            optionCElement.classList.remove('btn2-correct');
            optionDElement.classList.add('btn2-wrong')
        }
    });
}

function gameScore(){
    document.getElementById('game-score').innerHTML = score++;
}

const questions = [
    {
        question: 'Question One: Would you attend your victims funeral?',
        options: [
            'Never, even if its a family member',
            'Yes, of course',
            'Watch from a distance',
            'Only to kill my next target'
        ]
    },
    {
        question: 'Question Two: Do you have any law enforcement/military/combact training?',
        options: [
            'Is that a thing?',
            'No',
            'Lots!',
            'A bit'
        ]
    },
    {
        question: 'Question Three: After the crime you get pulled over. What do you do?',
        options: [
            'Panic and floor it',
            'Get out and run',
            'Act normal.',
            'Pull out a gun'
        ]
    },
    {
        question: 'Question Four: How did you get rid of the body?',
        options: [
            'Shallow grave',
            'I knew i forgot something',
            'Acid drums',
            'Its sleeping with the fishes'
        ]
    },
    {
        question: 'Question Five: You begin to show remorse and it drives you insane',
        options: [
            'Keep it in a diary',
            'Confess',
            'Wouldnt happen im cold',
            'Run to mexico'
        ]
    }
]
console.log(score)