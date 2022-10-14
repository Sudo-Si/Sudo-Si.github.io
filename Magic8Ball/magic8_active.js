// magic 8 logic
//Next
//clear text box 
//css 
//document 
//
const question_span = document.getElementById("user-input-question");
const m8Answer_span = document.getElementById("m8-ball-answer");
const chngehead = document.getElementById("ttl-head");
const ipbx = document.getElementById("question-input-box");

const btn = document.getElementById("btn-shk");


function write() {
    var text = ipbx.input.value;
    return ipbx.getElementById('id').innerHTML = text;
  }
  
function flipBall(question) {
    let eightBall = ''; 
    let randomNumber = Math.floor(Math.random()*8); 
    if (question != "" && question != " "  )
    {
        eightBall = randomNumber 
        switch( eightBall ){ 

            case 1: 
            question_span.innerHTML= question  ;
            m8Answer_span.innerHTML = "It is certain";
            documnet.getElementById("ipbx").value =" ";
          
            // m8Answer_span.innerHTML= "It is certain"  

           return (`You asked ${question}... It is certain`); 
           
           break; 
           
           case 2: 
           question_span.innerHTML= question
      
        documnet.getElementById("ipbx").value =" ";
        m8Answer_span.innerHTML = `It is decidedly so`
        
           return (`You asked ${question}... It is decidedly so`); 
           
           break; 
           
           case 3: 
           question_span.innerHTML= question
           m8Answer_span.innerHTML = `Reply hazy try again`
     
        documnet.getElementById("ipbx").value =" ";
           return (` You asked ${question}... Reply hazy try again`); 
           
           break; 
           
           case 4: 
           question_span.innerHTML= question
           m8Answer_span.innerHTML = `Cannot predict now `
     
           return (`You asked ${question}... `); 
           documnet.getElementById("ipbx").value =" ";
           break; 
           
           case 5: 
           question_span.innerHTML= question
  
        m8Answer_span.innerHTML = `Do not count on it`
           return (`You asked ${question}... Do not count on it`); 
           documnet.getElementById("ipbx").value =" ";
           break; 
           
           case 6: 
           question_span.innerHTML= question
    
        m8Answer_span.innerHTML = 'My sources say no'
        documnet.getElementById("ipbx").value =" ";
           return (`You asked ${question}... My sources say no`); 
        
           break; 
           
           case 7: 
           question_span.innerHTML= question;
     
        m8Answer_span.innerHTML = 'Outlook not so good'
        documnet.getElementById("ipbx").value =" ";
           return (`You asked ${question}... Outlook not so good`); 
           
           break; 
           
           default: 
           question_span.innerHTML= question
    
        m8Answer_span.innerHTML = "Signs point to yes"
        documnet.getElementById("ipbx").value =" ";
           return (`You asked ${question}... Signs point to yes`) 
           
           break; 
           
           } 
        }
        else {  
            
            console.log("hmm?... nothing ")
          
              setTimeout(() => {
                console.log(" Ask Me A Question");
              }, "3000")
            
        }
       
      ipbx.innerHTML("ipbx").input.value =" ";
 
}


   function main(){
      btn.addEventListener('click', ()=> {flipBall (question_span.innerHTML = ipbx.value +"?");
      ipbx.innerHTML("ipbx").inputArea.value =" ";
   }
      )
      
   }


main();


