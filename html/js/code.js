

const startBtn = document.getElementById('start_btn');
const container = document.querySelector('.container');
const queContainer = document.querySelector(".questions_container")
let fragment = document.createDocumentFragment();

startBtn.addEventListener('click',(e)=>{
    hidePre()
    createQuestions()
    createElements()
})

let preguntas = {
    qu1 :[
        question = '',
        res = ''
    ], 
    qu2:[
        question = '',
        res = ''
    ],
    qu3:[
        question = '',
        res = ''
    ],
    qu4:[
        question = '',
        res = ''
    ],
    qu5:[
        question = '',
        res = ''
    ],
    qu6:[
        question = '',
        res = ''
    ],
    qu7:[
        question = '',
        res = ''
    ],
     

    
}

const createElements = (e)=>{
    const h2 = document.createElement('h2').classList.add('q_title')
    const p = document.createElement('p').classList.add('text')
    const div = document.createElement('div').classList.add('qu_section')
    fragment.appendChild(h2);
    fragment.appendChild(p);
    fragment.appendChild(div);
    queContainer.appendChild(fragment)  
}



const createQuestions = ()=>{
   const entries =  Object.entries(preguntas)
   entries.forEach(el =>{
       console.log(el)
   })
}

const hidePre = ()=>{
    container.style.opacity = '0';

}