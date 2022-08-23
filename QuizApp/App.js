const correct = ['A', 'B', 'B', 'A'];

const result = document.querySelector('.result');

const form = document.querySelector('.quiz-form');
let mark =0;


form.addEventListener('submit', e => {
    e.preventDefault();
    let score =0;

     
     const userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    userAnswer.forEach((answer, index) =>{
        if(answer === correct[index]){
            
            score ++;
            
        }
         mark = (score/correct.length)*100;

    });



    scrollTo(0,0);
        result.querySelector('span').textContent = `${mark}%`;
        result.classList.remove('d-none');
        let output = 0;

        const timer = setInterval( () =>{
            result.querySelector('span').textContent = `${output}%`;
            if(output === mark){
                clearInterval(timer)
            } else{
                output ++;
            }
        }, 10);
        
    
 });