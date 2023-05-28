let firstNumber=null;
let secondNumber=null;
let operator=null;


const lastOperationScreen = document.getElementById('lastOperationScreen')
const currentOperationScreen = document.getElementById('currentOperationScreen')


const add = function(a,b) {
    return(a+b)	
  };



const substract = function(a,b) {
	return(a-b)
};

const multiply = function(a,b) {
	return(a*b)
};

const divide = function(a,b) {
	return(a/b)
};

const percentage = function(a,b){
  return((a/100)*b)
}

const squareRoot = function(a){
  return(Math.sqrt(a))
}


operate=function(first,second,operation){
    return(operation(first,second));
}

function appendCurrent(string) {
  if (currentOperationScreen.textContent=='0'){
    currentOperationScreen.textContent=string
  }
  else{
    currentOperationScreen.textContent += string;
  } 
}

function appendLast(string){
  lastOperationScreen.textContent += currentOperationScreen.textContent+string;
  clearCurrent();
}


function clearCurrent(string){
  currentOperationScreen.textContent='';
}
function clearLast(){
  lastOperationScreen.textContent='';
}

function clearAll(){
  lastOperationScreen.textContent='';
  currentOperationScreen.textContent='0';
  firstNumber=null;
  secondNumber=null;
  operator=null;
}




function getClick(e){
  if (e.classList[0]==="digits"){
    if (operator===null){
      if (firstNumber===null){
        firstNumber=parseInt(e.value);
        appendCurrent(firstNumber)
      }
      else{
        firstNumber=firstNumber*10+parseInt(e.value);
        appendCurrent(parseInt(e.value))
      }
    console.log(firstNumber)
    }
    else{
      if (secondNumber===null){
        secondNumber=parseInt(e.value);
        appendCurrent(secondNumber)
      }
      else{
        secondNumber=secondNumber*10+parseInt(e.value);
        appendCurrent(parseInt(e.value));
      }
    console.log(secondNumber)
    }
  }
  else if (e.classList[0]==="operators"){
    if (secondNumber!=null){
      console.log(operate(firstNumber,secondNumber,operator))
      firstNumber=operate(firstNumber,secondNumber,operator);
      if (e.id!="equals"){
        clearLast();
        clearCurrent();
        appendLast(firstNumber); 
      }
      else{
        appendLast('=');
        clearCurrent();
        appendCurrent(firstNumber);
      }
      secondNumber=null;
      operator=null;
    }
    if (e.id!="equals"){
      if(lastOperationScreen.textContent.includes('=')){
        clearLast();
      }
      if (e.id==="plus"){
        operator=add;
        appendLast('+');
        clearCurrent();
      }
      else if (e.id==="minus"){
        operator=substract;
        appendLast('-');
        clearCurrent();
      }
      else if (e.id==="multiply"){
        operator=multiply;
        appendLast('×');
        clearCurrent();
      }
      else if (e.id==="divide"){
        operator=divide;
        appendLast('÷');
        clearCurrent();
      }
      else if (e.id==="percentage"){
        operator=percentage;
        appendLast('%');
        clearCurrent();
      }
    }
    console.log(operator)  
  }
  else if (e.classList[0]==="special-operators"){
    if (e.id==="erase"){
      clearAll();
    }
    else if (e.id==="delete"){
      if (lastOperationScreen.textContent===''){
          if (currentOperationScreen.textContent!=''){
            if (currentOperationScreen.textContent.length<2){
              currentOperationScreen.textContent='0';
              firstNumber=null;
            }
            else{
              firstNumber=Math.floor(firstNumber/10);
              currentOperationScreen.textContent=currentOperationScreen.textContent.slice(0,-1);
            }
          }
      }
      else{
        if (currentOperationScreen.textContent!=''){
          if (currentOperationScreen.textContent.length<2){
            currentOperationScreen.textContent='';
            secondNumber=null;
          }
          else{
            secondNumber=Math.floor(secondNumber/10);
            currentOperationScreen.textContent=currentOperationScreen.textContent.slice(0,-1);          
          }
        }
        else{
          currentOperationScreen.textContent=lastOperationScreen.textContent.slice(0,-1); 
          lastOperationScreen.textContent='';
          operator=null;
          secondNumber=null;
        }
      }
    }
    else if(e.id==='point'){
      
    }
  }
}
 

let cells = document.querySelectorAll('button');

cells.forEach(cell => cell.addEventListener('click',(evt) => getClick(evt.target), false));






