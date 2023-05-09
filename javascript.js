let FirstNumber=null;
let SecondNumber=null;
let operator=null;
let firstNumber=0



const add = function(a,b) {
    return(a+b)	
  };



const subtract = function(a,b) {
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
    if (firstNumber===0){
      firstNumber=e.value;
    }
    else{
      firstNumber=firstNumber+e.value;
    }
   console.log(firstNumber)
  }
  else if (e.classList[0]==="operators"){
    console.log(e.value)
  }
}
 

let cells = document.querySelectorAll('button');
cells.forEach(cell => cell.addEventListener('mouseover',(evt) => evt.target.style.backgroundColor =`rgb(164, 196, 241)`, false));
cells.forEach(cell => cell.addEventListener('mouseleave',(evt) => evt.target.style.backgroundColor =`rgb(24, 107, 224)`, false));

cells.forEach(cell => cell.addEventListener('click',(evt) => getClick(evt.target), false));






