let cnquestions=[
    {
        no:1,
        question:"Full form of CN",
        options:[
            "A.Cartoon Network",
            "B.Computer Network",
            "C.Commercial Network",
            "D.Country Network",
        ],
        answer:"B.Computer Network"

    },
    {
        no:2,
        question:"What is full form of OSI",
        options:[
            "A.operating system interface ",
            "B.online system interface ",
            "C.open system interface",
            "D.open system interconnection",
        ],
        answer:"D.open system interconnection"

    },
    {
        no:3,
        question:"Which one of the following is not a client-server application?",
        options:[
            "A.Internet Chat",
            "B. Web Browsing",
            "C.Email",
            "D.ping",
        ],
        answer:"D.ping"

    },
    {
        no:4,
        question:" Which of these is a standard interface for serial data transmission?",
        options:[
            "A.ASCII",
            "B.RS232C",
            "C.2",
            "D.Centronics",
        ],
        answer: "B.RS232C"

    },
];
let dbmsquestions=[
    {
        no:1,
        question:"Who created the first DBMS?",
        options:[
            "Edgarr Franck Codd",
            "Charles Bachman",
            "Charles Babbage",
            "Sharon B.Codd",
        ],
        answer:"Charles Bachman"

    },
    {
        no:2,
        question:"Which of the following is not a type of database?",
        options:[
            "Hierarchial",
            "Network",
            "Distributed",
            "Decentralized",
        ],
        answer:"Decentralized"

    },
    {
        no:3,
        question:"Which of the following is not an example of DBMS?",
        options:[
            "MySQL",
            "Microsoft Access",
            "IBM DB2",
            "Google",
        ],
        answer:"Google"

    },
    {
        no:4,
        question:"Fullform of DBMS?",
        options:[
            "Database Management System",
            "Database Management Service",
            "Data Backup Management System",
            "Data Backup Management Syervice",
        ],
        answer:"Database Management System"

    },
];
let osquestions=[
    {
        no:1,
        question:" What is an operating system?",
        options:[
            "A. interface between the hardware and application programs",
            "B.collection of programs that manages hardware resources",
            "C.system service provider to the application programs",
            "D.all of the mentioned",
        ],
        answer:"D.all of the mentioned"

    },
    {
        no:2,
        question: "In Operating Systems, which of the following is/are CPU scheduling algorithms?",
        options:[
            "A.Priority",
            "B. Round Robin",
            "C.Shortest Job First",
            "D.All of the mentioned",
        ],
        answer:"D.All of the mentioned"

    },
    {
        no:3,
        question:"Which of the following is not an operating system?",
        options:[
            "A.Windows",
            "B.Linux",
            "C.DOS",
            "D.Oracle",
        ],
        answer:"D.Oracle"

    },
    {
        no:4,
        question:"To access the services of the operating system, the interface is provided by the ",
        options:[
            "A.Library",
            "B.System calls",
            "C.Assembly instructions",
            "D.API",
        ],
        answer:"B.System calls"

    },
];
let htmlquestions=[
    {
        no:1,
        question:"full form of html?",
        options:[
            "A.hypertext markup language",
            "B.HighText Machine Language",
            "C.HyperText and links Markup Language",
            "D.None of these",
        ],
        answer: "A.hypertext markup language"

    },
    {
        no:2,
        question:"The correct sequence of HTML tags for starting a webpage is -",
        options:[
            "A.Head, Title, HTML, body",
            "B.HTML, Body, Title, Head",
            "C.HTML, Head, Title, Body",
            "D.HTML, Head, Title, Body",
        ],
        answer:"D.HTML, Head, Title, Body"

    },
    {
        no:3,
        question:"Which of the following element is responsible for making the text bold in HTML?",
        options:[
            "A.pre",
            "B.a",
            "C.b",
            "D.br",
        ],
        answer:"C.b"

    },
    {
        no:4,
        question:"Which of the following tag is used to insert a line-break in HTML?",
        options:[
            "A.br",
            "B.a",
            "C.pre",
            "D.b",
        ],
        answer: "A.br"

    },
];
let quescount=0;
let quesnum=1;
let score=0;
let timeValue = 10;
let counter;
const nextbtn=document.querySelector('.next-btn');
nextbtn.onclick=()=>{
    clearInterval(counter);
    if(quescount<questions.length-1){
           quescount++;
   showQuestions(quescount);
   quesnum++;
   quesCounter(quesnum);
   headerScore();
   nextbtn.classList.remove('active');
   startTimer(timeValue); 
    }
    else{
        showResult();
    }

}
function startTimer(time) {
    const timerElement = document.querySelector('.timer');
    timerElement.textContent = time;
    counter = setInterval(() => {
        time--;
        timerElement.textContent = 'Time:'+time+'sec';
        if (time < 1) {
            clearInterval(counter);
            nextbtn.click(); // automatically move to the next question
        }
    }, 1000); // update timer every second
}
const optionList=document.querySelector('.option-list');
function showQuestions(index){
    const question_text=document.querySelector('.question');
    question_text.textContent=questions[index].no+'.'+questions[index].question;
    let optionTag='<div class="option"><span>'+questions[index].options[0]+'</span></div><div class="option"><span>'+questions[index].options[1]+'</span></div><div class="option"><span>'+questions[index].options[2]+'</span></div><div class="option"><span>'+questions[index].options[3]+'</span></div>'
     optionList.innerHTML=optionTag;
     const option=document.querySelectorAll('.option');
     for(let i=0;i<option.length;i++){
       option[i].setAttribute('onclick','optionselected(this)');
     }}
function optionselected(answer){
    let useranswer=answer.textContent;
    let correctanswer=questions[quescount].answer;
    let allOptions=optionList.children.length;
    if(useranswer==correctanswer){
        answer.classList.add('correct');
        score++;
    }
    else{
        answer.classList.add('incorrect');
        for(let i=0;i<allOptions;i++){
            if(optionList.children[i].textContent==correctanswer){
                optionList.children[i].setAttribute('class','option correct')
            }
        }
    }
    for(let i=0;i<allOptions;i++){
        optionList.children[i].classList.add('disabled');
    }
    nextbtn.classList.add('active');
}
function quesCounter(index){
    const questotal=document.querySelector('.total-questions');
    questotal.textContent=index+' of '+questions.length+' questions';
}
function headerScore(){
   const headerScoretext=document.querySelector('.header-score');
   headerScoretext.textContent='Score:'+score+'/'+questions.length;
}
function showResult(){
    // quizsection.classList.remove('active');
    resultsection.classList.add('active');
    const scoretext=document.querySelector('.score-text');
    scoretext.textContent='Your Score '+score+' out of '+questions.length;
    const circularProgress=document.querySelector('.circular-progress');
    const progressValue=document.querySelector('.progress-value');
    let progressStartvalue=-1;
    let progressEndvalue=(score/questions.length)*100;
    let speed=20;
    let progress=setInterval(() => {
        progressStartvalue++;
        progressValue.textContent=progressStartvalue+'%';
        circularProgress.style.background='conic-gradient(rgb(50, 94, 128)'+(progressStartvalue*3.6)+'deg, rgba(255,255,255,.1) 0deg )';
        if(progressStartvalue==progressEndvalue){
            clearInterval(progress);
        }
    },speed);
   

}
goToHome.onclick=()=>{
    quizsection.classList.remove('active');
   main.classList.remove('active');
   quescount=0;
   quesnum=1;
   score=0;
   showQuestions(quescount);
   quesCounter(quesnum)
   headerScore();
    }