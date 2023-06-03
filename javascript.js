let firstNumber=null;
let secondNumber=null;
let operator=null;
let pointCounter=0;


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

const exponent = function(a,b){
  return(a**b)
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
  pointCounter=0;
}




function getClick(e){
  if (e.classList[0]==="digits"){
    if (operator===null){
      if (firstNumber===null){
        if (pointCounter>0){
          firstNumber=parseInt(e.value)/10;
          pointCounter+=1;
        }
        else{
          firstNumber=parseInt(e.value);
        }
        appendCurrent(parseInt(e.value)); 
      }
      else{
        if (pointCounter>0){
          firstNumber=firstNumber+parseInt(e.value)/(10**pointCounter);
          pointCounter+=1;
        }
        else{
          firstNumber=firstNumber*10+parseInt(e.value);
        }
        appendCurrent(parseInt(e.value))
      }
    console.log(firstNumber)
    }
    else{
      if (secondNumber===null){
        if (pointCounter>0){
          secondNumber=parseInt(e.value)/10;
          pointCounter+=1;
        }
        else{
          secondNumber=parseInt(e.value);
        }
        appendCurrent(parseInt(e.value))
      }
      else{
        if (pointCounter>0){
          secondNumber=secondNumber+parseInt(e.value)/(10**pointCounter);
          pointCounter+=1;
        }
        else{
          secondNumber=secondNumber*10+parseInt(e.value);
        }
        appendCurrent(parseInt(e.value));
      }
    console.log(secondNumber)
    }
    console.log(pointCounter)
  }
  else if (e.classList[0]==="operators"){
    if (secondNumber!=null){
      console.log(operate(firstNumber,secondNumber,operator))
      firstNumber=operate(firstNumber,secondNumber,operator);
      if (e.id!="equals"){
        clearLast();
        clearCurrent();
        appendLast(firstNumber); 
        pointCounter=0;
      }
      else{
        appendLast('=');
        clearCurrent();
        appendCurrent(firstNumber);
        if (Number.isInteger(firstNumber)===false){
          pointCounter=(currentOperationScreen.textContent.split(".").slice(-1)).length+1;
        }
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
      else if (e.id==="exponent"){
        operator=exponent;
        appendLast('^');
        clearCurrent();
      }
      pointCounter=0;
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
              if(currentOperationScreen.textContent.slice(-1)==="."){
                pointCounter=0;
                currentOperationScreen.textContent=currentOperationScreen.textContent.slice(0,-1);
              }
              else{
                if (Number.isInteger(firstNumber)) {
                  firstNumber=Math.floor(firstNumber/10);
                }
                else{
                  firstNumber=Math.floor(firstNumber*10**(pointCounter-2))/10**(pointCounter-2);
                  pointCounter=pointCounter-1;
                }
                currentOperationScreen.textContent=currentOperationScreen.textContent.slice(0,-1);
              }
            }
          }
      }
      else if(lastOperationScreen.textContent.includes('=')){
        if (currentOperationScreen.textContent!=''){
          if (currentOperationScreen.textContent.length<2){
            currentOperationScreen.textContent='';
            lastOperationScreen.textContent='';
            firstNumber=null;
            operator=null;
            secondNumber=null;
            pointCounter=0;
          }
          else{
            if (operator===null){
              if(currentOperationScreen.textContent.slice(-1)==="."){
                pointCounter=0;
                currentOperationScreen.textContent=currentOperationScreen.textContent.slice(0,-1);
              }
              else{
                if(Number.isInteger(firstNumber)){
                  firstNumber=Math.floor(firstNumber/10);
                }
                else{
                  firstNumber=Math.floor(firstNumber*10**(pointCounter-2))/10**(pointCounter-2);
                  pointCounter=pointCounter-1;
                }
                currentOperationScreen.textContent=currentOperationScreen.textContent.slice(0,-1); 
              } 
            }
            else{
              if(currentOperationScreen.textContent.slice(-1)==="."){
                pointCounter=0;
                currentOperationScreen.textContent=currentOperationScreen.textContent.slice(0,-1);
              }
              else{
                if(Number.isInteger(secondNumber)){
                  secondNumber=Math.floor(secondNumber/10);
                }
                else{
                  secondNumber=Math.floor(secondNumber*10**(pointCounter-2))/10**(pointCounter-2);
                  pointCounter=pointCounter-1;
                }
                currentOperationScreen.textContent=currentOperationScreen.textContent.slice(0,-1); 
              }
            }         
          }
        }
        else{
          currentOperationScreen.textContent=lastOperationScreen.textContent.slice(0,-1); 
          lastOperationScreen.textContent='';
          operator=null;
          secondNumber=null;
          if(currentOperationScreen.textContent.includes(".")){
            pointCounter=(currentOperationScreen.textContent.split(".").slice(-1)).length+1;
          }
          else{
            pointCounter=0;
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
            if(currentOperationScreen.textContent.slice(-1)==="."){
              pointCounter=0;
              currentOperationScreen.textContent=currentOperationScreen.textContent.slice(0,-1);
            }
            else{
              if(Number.isInteger(secondNumber)){
                secondNumber=Math.floor(secondNumber/10);
              }
              else{
                secondNumber=Math.floor(secondNumber*10**(pointCounter-2))/10**(pointCounter-2);
                pointCounter=pointCounter-1;
              }
              currentOperationScreen.textContent=currentOperationScreen.textContent.slice(0,-1); 
            }          
          }
        }
        else{
          currentOperationScreen.textContent=lastOperationScreen.textContent.slice(0,-1); 
          lastOperationScreen.textContent='';
          operator=null;
          secondNumber=null;
          if (Number.isInteger(firstNumber)===false){
            pointCounter=(currentOperationScreen.textContent.split(".").slice(-1)).length+1;
          }
        }
      }
    }
    else if (e.id==="point"){
      if (pointCounter===0){
        pointCounter+=1;
        currentOperationScreen.textContent=currentOperationScreen.textContent+'.'
      }
    }
  }
}
 

let cells = document.querySelectorAll('button');

cells.forEach(cell => cell.addEventListener('click',(evt) => getClick(evt.target), false));






