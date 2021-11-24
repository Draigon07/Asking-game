

const startBtn = document.getElementById('start_btn');
const container = document.querySelector('.container');
const queContainer = document.querySelector(".questions_container")
let fragment = document.createDocumentFragment();
let points = 0
const stopWatch = document.querySelector('.stopWatch')

startBtn.addEventListener('click',(e)=>{
    hidePre()
    setTimeout(() => {
        createQuestions()
        searchQuestion(preguntas)   
        Watch()
    }, 1000);
    //createElements()
})


const contador = ()=>{

}
let preguntas = {
    qu1 :[
        question = '1. País más grande del mundo',
        res = 'Rusia',
        options = ["USA","Canadá","Rusia"]
    ], 
    qu2:[
        question = '2. País con más idiomas del mundo',
        res = 'Papúa Nueva Guinea',
        options = ["India","Papúa NUeva Guinea","Indonesia"]
    ],
    qu3:[
        question = '3. Idioma más hablado en Bélgica',
        res = 'Francés',
        options = ["Francés","Neerlandés","Alemán"]
    ],
    qu4:[
        question = '4. País con el mayor salario mínimo',
        res = 'Australia',
        options = ["Usa","Alemania","Australia"]
    ],
    qu5:[
        question = '5. Moneda utilizada en Suiza',
        res = 'Franco suizo',
        options = ["Euro","Franco suizo","Corona suiza"]
    ],
    qu6:[
        question = '6. Medio de transporte sostenible',
        res = 'Bicicleta',
        options = ["Autos eléctricos","Moto","Bicicleta"]
    ],
    qu7:[
        question = '7. Grupo de lenguas al que pertenece el inglés',
        res = 'germánicas',
        options = ["latinas","germánicas","celtas"]
    ],
    qu8:[
        question = '8. País más pequeño del mundo',
        res = 'Nauru',
        options = ["Nauru","Fidji","Malta"]
    ],
    qu9:[
        question = '9. Grupo étnico predominante en China, Japón, Corea etc.',
        res = 'mongoloide',
        options = ["oriental","asiático","mongoloide"]
    ],
    qu10:[
        question = '10. Reino al que pertenecen los hongos ',
        res = 'Fungi',
        options = ["Fungi","Vegetal","Monera"]
    ],
    

    
}

let number = 0
const searchQuestion = (data)=>{
     let entrie =  Object.entries(data)
     let datos = entrie.forEach(dat =>{
         const div = document.createElement('div')
         const h2 = document.createElement('h2')
         const resUer = document.createElement('input')
         resUer.type = 'text'
         addClasses(h2,'que_title')
         addClasses(div,'que_section')
         addClasses(resUer,"res_user")
         
         h2.innerText = dat[1][0]
         creAndSerOptions(dat[1][2],div)
         div.appendChild(h2);
         div.appendChild(resUer)
         fragment.appendChild(div)
         queContainer.appendChild(fragment)
         queContainer.style.visibility = 'visible'
        })

        return datos
    }

const creAndSerOptions = (dat,div)=>{
    stopWatch.style.display = 'flex'
    dat.forEach(el =>{
        let option = document.createElement('option')
        addClasses(option,"options")
        option.textContent = `${number} ${el}`;
        fragment.appendChild(option)
        div.appendChild(fragment)      
         })
}



function addClasses(el, cla) {
    el.classList.add(cla);
}


const createQuestions = ()=>{
   const entries =  Object.entries(preguntas)
   entries.forEach(el =>{
       console.log(el)
   })
}

const hidePre = ()=>{
    container.style.opacity = '0';
    setTimeout(() => {
        container.style.display = 'none'  
    }, 1000);
}


/*let stopTimer = false

const Watch = ()=>{
    let min = 0;
    let sec = 0;

    while (stopTimer === false) {  

        const watch = setInterval(() => {
            sec++;
            console.log(sec);

            if (sec === 60) {
                min++;
                console.log(min);
                sec = 0;
            }

            if (min === 2) {
                stopTimer = true;
            }

            let stringSecond = sec.toString()
            stopWatch.innerText = stringSecond
            
        }, 1000);
        console.log(watch)
    }  

}*/







