let answersContainer=document.getElementById('answers');
let questionElement=document.getElementById('question');
let nextElement=document.querySelector('.question_form__next_button');
let answers=[];
let questionNumber=0;
let carbonScore=0;

    showNextQuestion();


function showNextQuestion(){
    removeAllAnswers();
    questionElement.innerText=questions[questionNumber].question;
    for (let i = 0; i < 4; i++) {
        const input=document.createElement('input');
        const label=document.createElement('label');
        const br=document.createElement('br');
        input.setAttribute('type', 'radio');
        input.setAttribute('name', "answers");
        input.setAttribute('id', 'id'+questionNumber+i);
        input.value=questions[questionNumber].values[i];
        label.setAttribute('for', 'id'+questionNumber+i);
        label.innerText=questions[questionNumber].options[i];
        answersContainer.appendChild(input);
        input.after(label);
        label.after(br);
    }
}
nextElement.addEventListener('click',nextQuestion);

function nextQuestion(e){
    const rbs=document.querySelectorAll('input[name="answers"]');
    let selectedValue;
    for (const rb of rbs){
        if(rb.checked){
            selectedValue=rb.value;
            break;
        }
    }
    
    carbonScore+=Number(selectedValue);
    questionNumber+=1;
    if(questionNumber<questions.length-1){
        showNextQuestion();
    }else if(questionNumber===questions.length-1){
        showFinalQuestion();
    }
    
}

function showFinalQuestion(){
    showNextQuestion();
    window.localStorage.setItem('carbonScore', carbonScore);
    nextElement.innerText="Finish"
    nextElement.addEventListener('click',function(e){   
        window.location.href='./dashboard.html';
    });
}

function removeAllAnswers(){
    while(answersContainer.firstChild){
        answersContainer.removeChild(answersContainer.firstChild);
    }   
}