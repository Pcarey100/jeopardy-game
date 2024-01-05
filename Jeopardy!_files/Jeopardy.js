const game = document.getElementById('game')
const scoreDisplay = document.getElementById('score')

const jeopardyCategories = [
    {
        genre: "WHO",
        questions: [
            {
                question: "Who is the actor that plays Madea?",
                answer:["Tyler Parry", "Mahershala Ali"],
                correct: "Tyler Parry",
                level: "easy"

            },
            {
                question: "Who is the actor that plays Ant Man?",
                answer:["Paul Rudd", "Dane Cook"],
                correct: "Tyler Parry",
                level: "medium"

            },
            {
                question: "Who is the actor that plays Madea?",
                answer:["Tyler Parry", "Mahershala Ali"],
                correct: "Tyler Parry",
                level: "hard"

            },
        ]
    },
    {
        genre: "WHERE",
        questions: [
            {
            question: "Where is the Bermuda triangle?",
            answer:["Tyler Parry", "Mahershala Ali"],
            correct: "Tyler Parry",
            level: "easy"

            },
            {
            question: "Where is mount rushmore located?",
            answer:["Tyler Parry", "Mahershala Ali"],
            correct: "Tyler Parry",
            level: "medium"

            },
            {
            question: "Who is the actor that plays Madea?",
            answer:["Tyler Parry", "Mahershala Ali"],
            correct: "Tyler Parry",
            level: "hard"

            },
        ]
    },
    {
        genre: "WHAT",
        questions: [
            {
            question: "What is the name of the leader of the autobots?",
            answer:["Bumblebee", "Optimus Prime"],
            correct: "Optimus Prime",
            level: "easy"

            },
            {
            question: "What is the capital of france?",
            answer:["Paris", "Quebec"],
            correct: "Paris",
            level: "medium"

            },
            {
            question: "Who is the actor that plays Madea?",
            answer:["Tyler Parry", "Mahershala Ali"],
            correct: "Tyler Parry",
            level: "hard"

            },
        ]
    },
    {
        genre: "WHEN",
        questions: [
            {
            question: "Who is the actor that plays Madea?",
            answer:["Tyler Parry", "Mahershala Ali"],
            correct: "Tyler Parry",
            level: "easy"

            },
            {
            question: "Who is the actor that plays Madea?",
            answer:["Tyler Parry", "Mahershala Ali"],
            correct: "Tyler Parry",
            level: "medium"

            },
            {
            question: "Who is the actor that plays Madea?",
            answer:["Tyler Parry", "Mahershala Ali"],
            correct: "Tyler Parry",
            level: "hard"

            },
        ]
    },
    {
        genre: "HOW MANY",
        questions: [
            {
            question: "Who is the actor that plays Madea?",
            answer:["Tyler Parry", "Mahershala Ali"],
            correct: "Tyler Parry",
            level: "easy"

            },
            {
            question: "Who is the actor that plays Madea?",
            answer:["Tyler Parry", "Mahershala Ali"],
            correct: "Tyler Parry",
            level: "medium"

            },
            {
            question: "Who is the actor that plays Madea?",
            answer:["Tyler Parry", "Mahershala Ali"],
            correct: "Tyler Parry",
            level: "hard"

            },
        ],
    },

]

let  score = 0 

function addCategory (category){
    const column = document.createElement('div')
    column.classList.add('genre-column')

    const genreTitle = document.createElement('div')
    genreTitle.classList.add('genre-title')
    genreTitle.innerHTML = category.genre

    column.appendChild(genreTitle)
    game.append(column)



    category.questions.forEach(question => {
        const card = document.createElement('div')
        card.classList.add('card')
        column.append(card);
    
        if (question.level === 'easy') {
            card.innerHTML = 100
        } 
        if (question.level === 'medium') {
            card.innerHTML = 200
        } 
        if (question.level === 'hard') {
            card.innerHTML = 300
        }


        card.setAttribute('data-question',  question.question)
        card.setAttribute('data-answer-1' , question.answer[0])
        card.setAttribute('data-answer-2', question.answer[1])
        card.setAttribute('data-correct', question.correct)
        // card.setAttribute('data-value', card.innerHTLM());

       card.addEventListener('click', flipCard)


    })
}

jeopardyCategories.forEach(category => addCategory(category))

// function  flipCard(){
//     this.innerHTML = ""

//     const testDisplay = document.createElement('div')
//     textDisplay.classList.add('card-text')
//     textDisplay.innerHTML = this.getAttribute('data-question')
//     const firstButton = document.createElement('button')
//     const secondButton = document.createElement('button')
//     firstButton.classList.add('first-button')
//     secondButton.classList.add('second-button')
//     firstButton.innerHTML = this.getAttribute('data-answer-1')
//     secondButton.innerHTML = this.getAttribute('data-answer-2')
//     this.append(textDisplay, firstButton,  secondButton)
// }


function flipCard() {
    // Retrieve data attributes
    const question = this.getAttribute('data-question');
    const answer1 = this.getAttribute('data-answer-1');
    const answer2 = this.getAttribute('data-answer-2');

    // Create elements for display
    const textDisplay = document.createElement('div');
    textDisplay.classList.add('card-test');
    textDisplay.innerHTML = question;
    this.style.fontSize = "15px"
    this.style.lineHeight = "30px"

    const firstButton = document.createElement('button');
    const secondButton = document.createElement('button');

    firstButton.classList.add('first-button');
    secondButton.classList.add('second-button');

    firstButton.innerHTML = answer1;
    secondButton.innerHTML = answer2;
    firstButton.addEventListener('click', getResult)
    secondButton.addEventListener('click', getResult)

    // Clear the card's content and append new elements
    this.innerHTML = "";
    this.append(textDisplay, firstButton, secondButton);

    const allCards = array.from(document.querySelectorAll('.card'))
    allCards.forEach(card => card.removeEventListener('click',flipCard ))
}

function getResult () {
    const allCards  = Array.from (document.querySelectorAll('.card'))
    allCards.forEach(card => card.removeEventListener ('click', flipCard))

    const cardOfButton = this.parentElement

   if(cardOfButton.getAttribute('data-correct') == this.innerHTML){
    score = score + parseInt(cardOfButton.getAttribute ('data-value'))
    scoreDisplay.innerHTML = score
    cardOfButton.classList.add('correct-answer')
    setTimeout(()  => {
        while (cardOfButton.firstChild) {
            cardOfButton.removeChild(cardOfButton.lastChild)
        }
        cardOfButton.innerHTML = cardOfButton.getAttribute('data-value')
 
        }, 100)
   } else  {
        cardOfButton.classList.add('wrong-answer')
        setTimeout(() => {
                    while (cardOfButton.firstChild) {
            cardOfButton.removeChild(cardOfButton.lastChild)
        }
        cardOfButton.innerHTML = 0
        }, 100)
   }
   cardOfButton.removeEventListener('click' , flipCard)
}