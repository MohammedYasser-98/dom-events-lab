/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const displayEl = document.querySelector('.display');
const displayEl1 = document.querySelector('.display'); 

/*-------------------------------- Variables --------------------------------*/
let numberOperator = [];
let m =[];

/*-------------------------------- Functions --------------------------------*/

const addValueToArray = (value) =>{
    numberOperator.push(value);
    if (isNaN(value)){
        document.querySelector('.display').textContent = `${value}`;
    
    }
}

const combineConsecutiveNumbers = () =>{
 
    let resultArray = [];
    let concatenatedNumbers = '';
    
    for (let i = 0; i < numberOperator.length; i++) {
        const value = numberOperator[i];
        const parsedValue = parseFloat(value); // Parse the string to a float
        
        // Check if the current value is a valid number
        if (!isNaN(parsedValue) && isFinite(parsedValue)) {
            concatenatedNumbers += value; // Append to the concatenated string
            
            document.querySelector('.display').textContent = `${concatenatedNumbers}`
            console.log(`concatenatedNumbers: ${concatenatedNumbers}`);
        } else {
            // If we reach a non-number and have concatenated numbers, push it to the result
            if (concatenatedNumbers) {
                resultArray.push(concatenatedNumbers.trim());
                concatenatedNumbers = ''; // Reset for the next sequence
            }
            document.querySelector('.display').textContent = `${concatenatedNumbers}`
            resultArray.push(value); // Push the non-number
        }
    }

    // If there are still concatenated numbers at the end, push them to the result
    if (concatenatedNumbers) {
        resultArray.push(concatenatedNumbers.trim());
    }

    return resultArray; // Return the new array with combined numbers
}

const calculatorM = ()=>{

    const updatedArray = combineConsecutiveNumbers();

    for (i=0; i<updatedArray.length-1; i++){
            const value = updatedArray[i];
            const isNumber = !isNaN(Number(value));
           if (isNumber){
            updatedArray[i] = parseFloat(value);
            }
            if ( updatedArray[i] === '*') {

            const newNumber = updatedArray[i-1]*updatedArray[i+1];
            updatedArray.splice(i+1, 1, newNumber) 
            document.querySelector('.display').textContent = `answer: ${newNumber}`;
            console.log(updatedArray)

            } else if ( updatedArray[i] === '/') {

            const newNumber = updatedArray[i-1]/updatedArray[i+1];
            updatedArray.splice(i+1, 1, newNumber)
            document.querySelector('.display').textContent = `answer: ${newNumber}`;
            console.log(updatedArray)
            } else if ( updatedArray[i] === '+') {
            const num1 = parseFloat(updatedArray[i-1])
            const num2 = parseFloat(updatedArray[i+1])
            const newNumber = num1 + num2;
            updatedArray.splice(i+1, 1, newNumber)
            document.querySelector('.display').textContent = `answer: ${newNumber}`;
            console.log(updatedArray)
            } else if ( updatedArray[i] === '-') {

            const newNumber = updatedArray[i-1]-updatedArray[i+1];
            updatedArray.splice(i+1, 1, newNumber)
            document.querySelector('.display').textContent = `answer: ${newNumber}`;
            console.log(updatedArray)
            }
    }
}
  

 const resetCalculator = () =>{
    numberOperator.length = 0; // Clear the array
    console.log('Reset to 0');
    document.querySelector('.display').textContent = 'Reset to 0'
 }
//---------------------------------------------------------


buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      
      const buttonText = event.target.innerText;
      
                if (buttonText === '0') {
                   addValueToArray(0);
                   combineConsecutiveNumbers(0)
                } else if (buttonText === '1') {
                    addValueToArray('1');
                    combineConsecutiveNumbers(1)
                } else if (buttonText === '2') {
                    addValueToArray('2');
                    combineConsecutiveNumbers(2)
                } else if (buttonText === '3') {
                    addValueToArray('3');
                    combineConsecutiveNumbers(3)
                } else if (buttonText === '4') { 
                    addValueToArray('4');
                    combineConsecutiveNumbers(4)
                } else if (buttonText === '5') {  
                    addValueToArray('5');
                    combineConsecutiveNumbers(5)
                } else if (buttonText === '6') {  
                    addValueToArray('6');
                    combineConsecutiveNumbers(6)
                } else if (buttonText === '7') { 
                    addValueToArray('7');
                    combineConsecutiveNumbers(7)
                } else if (buttonText === '8') {   
                    addValueToArray('8');
                    combineConsecutiveNumbers(8)
                } else if (buttonText === '9') {
                    addValueToArray('9');
                    combineConsecutiveNumbers(9)
                } else if (buttonText === '*') { 
                    addValueToArray('*');
                    //combineConsecutiveNumbers('*')
                } else if (buttonText === '/') {
                    addValueToArray('/');
                   // combineConsecutiveNumbers('/')
                } else if (buttonText === '+') {  
                    addValueToArray('+');
                    //combineConsecutiveNumbers('+')
                } else if (buttonText === '-') { 
                    addValueToArray('-');
                   // combineConsecutiveNumbers('-')
                } else if (buttonText === '=') {
                    //showArray();
                    calculatorM()
                } else if (buttonText === 'C') {
                    resetCalculator();
                }          
    });
  });
  
 
























/* GRAVYARD
const handalButton = (event) => {
      
        
    //numberOperator = parseInt(event.target.innerText, 10) 
    
    //console.log(numberOperator)
    
 
    
}

const Click = (button) => {
    button.addEventListener('click', handalButton);

        

  }

   buttons.forEach(Click);

  

    const handalCalculator = (event) => {

    
    
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
       //console.log(event.target.classList);
       let showResult;
         




       for (let i = 0; i<1; i++){ 
        if (event.target.classList.contains('number')) {
          // Do something with a number
          //tar += event.target.classList;
         numberOperator.push(parseInt(event.target.innerText, 10)) ;
         showResult = `${numberOperator[i]} `
            //showResult = document.createElement('string')
            document.querySelector('.display').textContent = showResult

            //displayEl.appendChild(showResult)
                //console.log(numberOperator)
                
            } else if (event.target.classList.contains('operator')) {
               numberOperator.push(event.target.innerText)
               showResult = `${numberOperator[i+1]}`
               document.querySelector('.display').textContent = showResult
               //showResult = document.createElement('string')
              
               //displayEl.appendChild(showResult) 
            }
       }
          
        //if (document.querySelector('.display').textContent !== '') {
                //document.querySelector('.display').textContent = ''
            //}

    




      console.log(numberOperator)
      console.log(event.target.classList)

      
  
    
    for (let i = 0; i<52; i++){
      if (numberOperator[i] === '*') {
      
        //showResult = ''
        m.push(numberOperator[i-1]*numberOperator[i+1])
        
        
        //showResult.textContent = ` ${numberOperator[1]} ${numberOperator[2]}`
        //displayEl.appendChild(showResult)
        
       //m = numberOperator[i-1]*numberOperator[i+1];
       //console.log(m)
       //calculator.textContent = `${m} dislike(s). Dislike this post!`
      //numberOperator.push(m)
      } else if (numberOperator[i] === '/') {
        
        m.push(numberOperator[i-1] / numberOperator[i+1])
        
        //let showResult = document.createElement('p')
        //showResult.textContent = `${numberOperator[i-1]} / ${numberOperator[i+1]}`
        //displayEl.appendChild(showResult)
        //m = numberOperator[i-1]/numberOperator[i+1];
        //console.log(m)
         //calculator.textContent = `${m} dislike(s). Dislike this post!`

       } else if (numberOperator[i] === '+') {
        
        m.push(numberOperator[i-1] + numberOperator[i+1])
        //let showResult = document.createElement('p')
        //showResult.textContent = `${numberOperator[i-1]} + ${numberOperator[i+1]}`
        //displayEl.appendChild(showResult)
         //m = numberOperator[i-1] + numberOperator[i+1];
         //console.log(m)
         //calculator.textContent = `${m} dislike(s). Dislike this post!`

        } else if (numberOperator[i] === '-') {
        
            m.push(numberOperator[i-1] - numberOperator[i+1])
            //let showResult = document.createElement('p')
            //showResult.textContent = `${numberOperator[i-1]} - ${numberOperator[i+1]}`
            //displayEl.appendChild(showResult)
            
            //m = numberOperator[i-1] - numberOperator[i+1];
            //console.log(m)
             //calculator.textContent = `${m} dislike(s). Dislike this post!`
           }


            if (event.target.classList.contains('equals')) {
        
                result = m[m.length - 1];
                //numberOperator.splice(numberOperator.length - 1, 1, result)
                //showResult.textContent = '';
                //let showResult = document.createElement('string')
                
                //showResult.textContent = ` = ${result}`
                //displayEl.appendChild(showResult)
                document.querySelector('.display').textContent = ` = ${result}`;
                //showResult = document.createElement('string')
                //showResult.textContent = `${numberOperator[i]} `
                //displayEl.appendChild(showResult)
                
            } 

            if (numberOperator[i] === 'C') {
        
                result = 0;
                numberOperator = [];
                m = [];
                
                //let showResult = document.createElement('p')
                //showResult.textContent = `${result}`
                //displayEl.appendChild(showResult)
            } 

    }
    
    console.log('m: ', m[m.length - 1])
    console.log('Result: ', result)

    //for (let i = 0; i<1; i++){

        //const showResult = document.createElement('number')
        //showResult.textContent = numberOperator
        //displayEl.appendChild(showResult)


    //}
             
            
        
    

  }

    






  

/*----------------------------- Event Listeners -----------------------------

   //const clickCalculator = (calculator) =>{

    calculator.addEventListener('click', handalCalculator);
   //} 
  
   //buttons.forEach(clickCalculator);

   
     

*/
/*
const isNumeric = (string) => /^[+-]?\d+(\.\d+)?$/.test(string)

const NumericTest = () =>{

 
 for (i=0; i<numberOperator.length - 1; i++){
    

    if(Numericis(numberOperator[i]) === true){
        console.log('it is a number')

    }
    if(Numericis(numberOperator[i+1]) === true){
        numberOperator[i] = numberOperator[i] + numberOperator[i+1]
        number = parseInt(numberOperator[i] , 10)         
    } else {
        number = parseInt(numberOperator[i] , 10)  
    }
    

    console.log(number)
 }

}

*/
 //console.log(numberOperator.classList)
/*
  calculator.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
    
  
    // Example
    if (event.target.classList.contains('number')) {
      // Do something with a number
      number = parseInt(event.target.innerText, 10) 




    }
    
  
    // Example
    if (event.target.innerText === '*') {
      // Do something with this operator
    }
  });
  */