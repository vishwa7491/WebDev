let res=null;
let currentIp="0";
let previousIp=null;
let operator=null;
let lastOperator=null;
let shouldResetScr=false;
let lastVal=null;
let expression="";
const display=document.querySelector(".screen");
const numBtns=document.querySelectorAll(".num");
const oprBtns=document.querySelectorAll(".opr");
const equalBtn=document.querySelector("#equal");
const decimalBtn=document.querySelector("#dot");
const clearBtn=document.querySelector("#AC");
const delBtn=document.querySelector("#C");
function appendNum(num){
    if(shouldResetScr){
        currentIp="";
        shouldResetScr=false;
    }
    if(expression.length>=17) return;
    if(num==='.' && currentIp.includes(".")) return;
    if(currentIp==="" && num!==".") currentIp=num;
    else currentIp+=num;
    expression+=num;
    if(operator!==null){
        res=operate(
            parseFloat(previousIp),
            parseFloat(currentIp),
            operator
        );
        currentIp=res.toString();
    }
    updateDisplay();
}
function chooseOpr(op){
    if(currentIp==="" && expression==="") return;
    if(["+","-","*","/"].includes(expression.slice(-1))){
        expression=expression.slice(0,-1)+op;
        operator=op;
        updateDisplay();
        return;
    }
    operator=op;
    expression+=op;
    previousIp=currentIp;
    currentIp="";
    updateDisplay();
}
function evaluate(){
    if(!operator || currentIp==="") return;
    expression=currentIp.toString();
    operator=null;
    shouldResetScr=true;
    updateDisplay();
}
function resetCalci(){
    previousIp=null;
    operator=null;
}
function clearAll(){
    currentIp="0";
    expression="";
    resetCalci();
    updateDisplay();
}
function deleteLast(){
    if(expression.length===1){
        currentIp="";
        expression="";
    }else{
        expression=expression.slice(0,-1);
        currentIp=currentIp.slice(0,-1);
    }
    updateDisplay();
}
function operate(a,b,op){
    if(op==="+") return a+b;
    if(op==="-") return a-b;
    if(op==="*") return a*b;
    if(op==="/"){
        if(b==="0") return "Error";
        return a/b;
    }
}
function updateDisplay(){
    display.textContent=expression || "0";
}
document.addEventListener("keydown",(e)=>{
    if(!isNaN(e.key)) appendNum(e.key);
    if(e.key===".") appendNum(".");
    if(["+","-","*","/"].includes(e.key)) chooseOpr(e.key);
    if(e.key==="Enter" || e.key==="=") evaluate();
    if(e.key==="Backspace") deleteLast();
    if(e.key==="Escape") clearAll();
});
numBtns.forEach(btn=>
    btn.addEventListener("click",()=>appendNum(btn.textContent))
);
oprBtns.forEach(btn=>
    btn.addEventListener("click",()=>{
        chooseOpr(btn.textContent);
    })
);
equalBtn.addEventListener("click",()=>evaluate());
clearBtn.addEventListener("click",clearAll);
decimalBtn.addEventListener("click",()=>appendNum("."));
delBtn.addEventListener("click",deleteLast);