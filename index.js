let firstNum = "";
let secondNum = "";
let operator = "";


//get buttons
const numBtn = document.querySelectorAll("[data-type='number']");
const opeBtn = document.querySelectorAll("[data-type='operator']");
const dotBtn = document.querySelector("[data-type='dot']");
const clearBtn = document.querySelector("[data-type='clear']");
const delBtn = document.querySelector("[data-type='del']");
const equalBtn = document.querySelector("[data-type='equal']");

//get monitor
const solution = document.querySelector(".solution");
const formula = document.querySelector(".formula");


//buttons event listener
numBtn.forEach((item)=>{
    item.addEventListener("click", ()=>{
        solution.innerHTML+=item.innerHTML;
    })
})

opeBtn.forEach((item)=>{
    item.addEventListener("click", ()=>{operate(item.innerHTML)});
})

clearBtn.addEventListener("click", ()=>{
    firstNum="";
    secondNum = "";
    operator = "";
    solution.innerHTML="";
    formula.innerHTML="";
})

equalBtn.addEventListener("click", ()=>{
    formula.innerHTML= firstNum + operator + solution.innerHTML;
    calculate();

})

delBtn.addEventListener("click", ()=>{
    solution.innerHTML=solution.innerHTML.slice(0,-1)
})

dotBtn.addEventListener("click",()=>{
    solution.innerHTML+="."
})



//calculate functions
function operate(symbol){
    if (operator!==""){calculate()}
    firstNum = solution.innerHTML;
    operator=symbol;
    formula.innerHTML= firstNum + operator;
    solution.innerHTML = "";
}

function calculate(){
    secondNum = solution.innerHTML;
    a=Number(firstNum);
    b=Number(secondNum);
    switch(operator){
        case "+":
            solution.innerHTML= a+b;
            break;
        case "-":
            solution.innerHTML= a-b;
            break;
        case "*":
            solution.innerHTML= a*b;
            break;
        case "/":
            solution.innerHTML= a/b;
            break;

    }
}