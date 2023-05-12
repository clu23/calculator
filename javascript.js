let firstNumber=null;
let secondNumber=null;
let operator=null;




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


operate=function(first,second,operation){
    return(operation(first,second));
}

function getClick(e){
  if (e.classList[0]==="digits"){
    if (operator===null){
      if (firstNumber===null){
        firstNumber=parseInt(e.value);
      }
      else{
        firstNumber=firstNumber*10+parseInt(e.value);
      }
    console.log(firstNumber)
    }
    else{
      if (secondNumber===null){
        secondNumber=parseInt(e.value);
      }
      else{
        secondNumber=secondNumber*10+parseInt(e.value);
      }
    console.log(secondNumber)
    }
  }
  else if (e.classList[0]==="operators"){
    if (secondNumber!=null){
      console.log(operate(firstNumber,secondNumber,operator))
      firstNumber=operate(firstNumber,secondNumber,operator);
      secondNumber=null;
      operator=null;
    }
    if (e.id!="equals"){
      if (e.id==="plus"){
        operator=add;
      }
      else if (e.id==="minus"){
        operator=substract;
      }
      else if (e.id==="multiply"){
        operator=multiply;
      }
      else if (e.id==="divide"){
        operator=divide;
      }
    }
    console.log(operator)  
  }
  
}
 

let cells = document.querySelectorAll('button');
cells.forEach(cell => cell.addEventListener('mouseover',(evt) => evt.target.style.backgroundColor =`rgb(164, 196, 241)`, false));
cells.forEach(cell => cell.addEventListener('mouseleave',(evt) => evt.target.style.backgroundColor =`rgb(24, 107, 224)`, false));

cells.forEach(cell => cell.addEventListener('click',(evt) => getClick(evt.target), false));






