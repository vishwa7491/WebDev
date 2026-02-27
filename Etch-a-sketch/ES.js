const black=document.querySelector("#black");
const grey=document.querySelector("#grey");
const color=document.querySelector("#color");
const eraser=document.querySelector("#eraser");
const setSize=document.querySelector("#set-size");
const clear=document.querySelector("#clear");
const grid=document.querySelector(".grid");
const sizeInput=document.getElementById("size-ip")
const colorPallete=[
    [120,200,200],
    [100,180,190],
    [90,170,180],
    [110,190,185],
    [80,160,170]
];
let currMode="black";
let currSize=16;
const handleOver=(cell)=>{
    let visits=Number(cell.dataset.visits);
    if(currMode==="eraser"){
        cell.style.backgroundColor="white";
        cell.dataset.visits=0;
        return;
    }
    if(visits>=10) return;
    visits++;
    cell.dataset.visits=visits;
    if(currMode==="black"){
        cell.style.backgroundColor="black";
        cell.dataset.visits=10;
    }
    if(currMode==="grey"){
        const val=255-visits*25.5;
        cell.style.backgroundColor=`rgb(${val},${val},${val})`;
    }
    if(currMode==="color"){
        if(!cell.dataset.baseColor){
            const choice=colorPallete[Math.floor(Math.random()*colorPallete.length)];
            cell.dataset.baseColor=choice.join(",");
        }
        let [r,g,b]=cell.dataset.baseColor.split(",").map(Number);
        const fac=1-visits*0.1;
        cell.style.backgroundColor=(visits>=10)?"black":`rgb(${r*fac},${g*fac},${b*fac})`;
    }
};
const createGrid=(n)=>{
    grid.innerHTML="";
    const size=grid.clientWidth;
    const cellSize=size/n;
    for(let i=0;i<n*n;i++){
        const cell=document.createElement("div");
        cell.classList.add("cell");
        cell.style.flex=`0 0 ${cellSize}px`;
        cell.style.height=`${cellSize}px`;
        cell.dataset.visits=0;
        cell.addEventListener("mouseover",()=>handleOver(cell));
        grid.appendChild(cell);
    }
};
black.onclick=()=>currMode="black";
grey.onclick=()=>currMode="grey";
color.onclick=()=>currMode="color";
eraser.onclick=()=>currMode="eraser";
clear.onclick=()=>createGrid(currSize);
sizeInput.addEventListener("keydown", (e) => {
  if (["-", "e", "E"].includes(e.key)) {
    e.preventDefault();
  }
});
setSize.addEventListener("click",()=>{
    let n=Number(sizeInput.value);
    if(!n || n<1) return;
    if(n>100) n=100;
    currSize=n;
    createGrid(n);
    sizeInput.value="";
});
window.addEventListener("resize", () => createGrid(currSize));
createGrid(currSize);