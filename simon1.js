let gameseq=[];
let userseq=[];
let start=false;
let level=0;
let color=["box1","box2","box3","box4"];
let h3=document.querySelector("h3");
document.addEventListener("keydown",function(){
    if(start==false){
        levelup();
        start=true;
    }
});
function levelup(){
    userseq=[];
 level++;
    h3.innerText=`Level ${level}`;
    let random=Math.floor(Math.random()*3);
    let randcolor=color[random];
    let randbox=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(`gameseq=${gameseq}`);
    flash(randbox);

   
}
function flash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },250);
}
let button=document.querySelectorAll(".btn");
for(button of button){
    button.addEventListener("click",buttonpress)
}
function buttonpress(){
    console.log(this);
    let userbtn=this.getAttribute("id");
    userseq.push(userbtn);
    console.log(`userseq=${userseq}`);
    flash(this);
    let indx=userseq.length-1;
    checkans(indx);
}
function checkans(indx){
    if(gameseq[indx]==userseq[indx]){
        if(userseq.length==gameseq.length)
           setTimeout(levelup,1000)
        
    }
    else{
        console.log("Game Over");
        h3.innerText="GAME OVER PRESS ANY KEY TO RESTART!!!";
        
        
        start=false;
       let score=document.querySelector(".score");
       score.innerText=`score:${level-1}`;
        gameseq=[];
        level=0;
    }

}
