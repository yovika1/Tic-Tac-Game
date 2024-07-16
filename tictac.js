
let a1 = document.getElementById("d1");
let a2 = document.getElementById("d2");
let a3 = document.getElementById("d3");
let a4 = document.getElementById("d4");
let a5 = document.getElementById("d5");
let a6 = document.getElementById("d6");
let a7 = document.getElementById("d7");
let a8 = document.getElementById("d8");
let a9 = document.getElementById("d9");
let flag = 1;

function reset()
{
a1.innerHTML=a2.innerHTML=a3.innerHTML=a4.innerHTML=a5.innerHTML=a6.innerHTML=a7.innerHTML=a8.innerHTML=a9.innerHTML=" ";
a1.style.backgroundColor='transparent';
a2.style.backgroundColor='transparent';
a3.style.backgroundColor='transparent';
a4.style.backgroundColor='transparent';
a5.style.backgroundColor='transparent';
a6.style.backgroundColor='transparent';
a7.style.backgroundColor='transparent';
a8.style.backgroundColor='transparent';
a9.style.backgroundColor='transparent';
a1.disabled=false;
a2.disabled=false;
a3.disabled=false;
a4.disabled=false;
a5.disabled=false;
a6.disabled=false;
a7.disabled=false;
a8.disabled=false;
a9.disabled=false;

document.getElementById("r2").innerHTML="";
} 

function fun1() {
  if (flag == 1) {
    // if you want change or replace the value then u can write like this:
    document.getElementById("p1").innerHTML="player 1 turn";
    // or if u want you set the value TouchEvent, you can write like this:0
    a1.innerHTML = "x";
   
    a1.disabled=true;
    
    flag = 0;
  } 
  else
  {
    document.getElementById("p2").innerHTML="player 2 turn";
    a1.innerHTML = "0";
   a1.disabled=true;
    flag = 1;
  }
}
function fun2() {
  if (flag == 1) {
    document.getElementById("p1").innerHTML="player 1 turn";
    a2.innerHTML = "x";
   
    a2.disabled=true;
    
    flag = 0;
  } 
  else
  {
    document.getElementById("p2").innerHTML="player 2  turn";
    a2.innerHTML = "0";
    a2.disabled=true;
    flag = 1;
  }
}
function fun3() {
  if (flag == 1) {
    document.getElementById("p1").innerHTML="player 1 turn";
    a3.innerHTML = "x";
   
    a3.disabled=true;
    
    flag = 0;
  } 
  else
  {
    document.getElementById("p2").innerHTML="player 2 turn";
    a3.innerHTML = "0";
    a3.disabled=true;
    flag = 1;
  }
}
function fun4() {
  if (flag == 1) {
    document.getElementById("p1").innerHTML="player 1 turn";
    a4.innerHTML = "x";
    a4.disabled=true;
    flag = 0;
  } 
  else
  {
    document.getElementById("p2").innerHTML="player 2 turn";
    a4.innerHTML = "0";
    a4.disabled=true;
    flag = 1;
  }
}
function fun5() {
  if (flag == 1) {
    document.getElementById("p1").innerHTML="player 1 turn";
    a5.innerHTML = "x";
    a5.disabled=true;
    flag = 0;
  } 
  else
  {
    document.getElementById("p2").innerHTML="player 2 turn";
    a5.innerHTML = "0";
    a5.disabled=true;
    flag = 1;
  }
}
function fun6() {
  if (flag == 1) {
    document.getElementById("p1").innerHTML="player 1 turn";
    a6.innerHTML = "x";
    a6.disabled=true;
    flag = 0;
  } 
  else
  {
    document.getElementById("p2").innerHTML="player 1 turn";
    a6.innerHTML = "0"
    a6.disabled=true;
    flag = 1;
  }
}
function fun7() {
  if (flag == 1) {
    document.getElementById("p1").innerHTML="player 1 turn";
    a7.innerHTML = "x";
    a7.disabled=true;
    flag = 0;
  } 
  else
  {
    document.getElementById("p2").innerHTML="player 2 turn";
    a7.innerHTML = "0";
    a7.disabled=true;
    flag = 1;
  }
}
function fun8() {
  if (flag == 1) {
    document.getElementById("p1").innerHTML="player 1 turn";
    a8.innerHTML = "x";
    a8.disabled=true;
    flag = 0;
  } 
  else
  {
    document.getElementById("p2").innerHTML="player 2 turn";
    a8.innerHTML = "0";
    a8.disabled=true;
    flag = 1;
  }
}
function fun9() {
  if (flag == 1) {
    document.getElementById("p1").innerHTML="player 1 turn";
    a9.innerHTML = "x";
    a9.disabled=true;
    flag= 0;
  } 
  else
  {
    document.getElementById("p1").innerHTML="player 2 turn";
    a9.innerHTML = "0";
     a9.disabled=true;
    flag=1;
  
}}

let c=0;
let c1=0;
let c2=0;
let count=0;
function result(){
 let win  = false

  if(a1.innerHTML=="x"&& a2.innerHTML=="x"&& a3.innerHTML=="x")
{
document.getElementById("p1").innerHTML="player1  win";

a1.style.backgroundColor="red";
a2.style.backgroundColor="red";
a3.style.backgroundColor="red";
a4.disabled="true";
a5.disabled="true";
a6.disabled="true";
a7.disabled="true";
a8.disabled="true";
a9.disabled="true";
c++;
document.getElementById("r1").innerHTML=`${c}`;
win = true;

}

  else if(a4.innerHTML=="x"&& a5.innerHTML=="x"&& a6.innerHTML=="x")
{
document.getElementById("p1").innerHTML="player1  win";
a4.style.backgroundColor="red";
a5.style.backgroundColor="red";
a6.style.backgroundColor="red";
a1.disabled="true";
a2.disabled="true";
a3.disabled="true";
a7.disabled="true";
a8.disabled="true";
a9.disabled="true";
c++;
document.getElementById("r1").innerHTML=`${c}`
win = true;
}

else if(a7.innerHTML=="x"&& a8.innerHTML=="x"&& a9.innerHTML=="x")
{
document.getElementById("p1").innerHTML="player1  win";
a7.style.backgroundColor="red";
a8.style.backgroundColor="red";
a9.style.backgroundColor="red";
a1.disabled="true";
a2.disabled="true";
a3.disabled="true";
a4.disabled="true";
a5.disabled="true";
a6.disabled="true";
c++;
document.getElementById("r1").innerHTML=`${c}`;
win = true;
}

else if(a1.innerHTML=="x"&& a4.innerHTML=="x" && a7.innerHTML=="x")
{
document.getElementById("p1").innerHTML="player1  win";
a1.style.backgroundColor="red";
a4.style.backgroundColor="red";
a7.style.backgroundColor="red";
a2.disabled="true";
a5.disabled="true";
a8.disabled="true";
a3.disabled="true";
a6.disabled="true";
a9.disabled="true";
c++;
document.getElementById("r1").innerHTML=`${c}`;
win = true;

}

else if(a2.innerHTML=="x"&& a5.innerHTML=="x"&& a8.innerHTML=="x")
{
document.getElementById("p1").innerHTML="player1  win";
a2.style.backgroundColor="red";
a5.style.backgroundColor="red";
a8.style.backgroundColor="red";
a1.disabled="true";
a4.disabled="true";
a7.disabled="true";
a3.disabled="true";
a6.disabled="true";
a9.disabled="true";
c++;
document.getElementById("r1").innerHTML=`${c}`;
win = true;

}

else if(a3.innerHTML=="x"&& a6.innerHTML=="x"&& a9.innerHTML=="x")
{
document.getElementById("p1").innerHTML="player1  win";
a3.style.backgroundColor="red";
a6.style.backgroundColor="red";
a9.style.backgroundColor="red";
a1.disabled="true";
a4.disabled="true";
a7.disabled="true";
a2.disabled="true";
a5.disabled="true";
a8.disabled="true";
c++;
document.getElementById("r1").innerHTML=`${c}`;
win = true;

}

else  if(a1.innerHTML=="x"&& a5.innerHTML=="x"&& a9.innerHTML=="x")
{
document.getElementById("p1").innerHTML="player1  win";
a1.style.backgroundColor="red";
a5.style.backgroundColor="red";
a9.style.backgroundColor="red";
a4.disabled="true";
a7.disabled="true";
a8.disabled="true";
a2.disabled="true";
a3.disabled="true";
a6.disabled="true";
c++;
document.getElementById("r1").innerHTML=`${c}`;
win = true;

}

else if(a3.innerHTML=="x"&& a5.innerHTML=="x"&& a7.innerHTML=="x")
{
document.getElementById("p1").innerHTML="player1  win";
a3.style.backgroundColor="red";
a5.style.backgroundColor="red";
a7.style.backgroundColor="red";
a1.disabled="true";
a2.disabled="true";
a4.disabled="true";
a6.disabled="true";
a9.disabled="true";
a8.disabled="true";
c++;
document.getElementById("r1").innerHTML=`${c}`;
win = true;

}

  if(a1.innerHTML=="0"&& a2.innerHTML=="0"&& a3.innerHTML=="0")
{
document.getElementById("p2").innerHTML="player2 win";
a1.style.backgroundColor="blue";
a2.style.backgroundColor="blue";
a3.style.backgroundColor="blue";
a4.disabled="true";
a5.disabled="true";
a6.disabled="true";
a7.disabled="true";
a8.disabled="true";
a9.disabled="true";
c1++;
document.getElementById("r3").innerHTML=`${c1}`;
win = true;

}

else  if(a4.innerHTML=="0"&& a5.innerHTML=="0"&& a6.innerHTML=="0")
{
document.getElementById("p2").innerHTML="player 2 win";
a4.style.backgroundColor="blue";
a5.style.backgroundColor="blue";
a6.style.backgroundColor="blue";
a1.disabled="true";
a2.disabled="true";
a3.disabled="true";
a7.disabled="true";
a8.disabled="true";
a9.disabled="true";
c1++;
document.getElementById("r3").innerHTML=`${c1}`;
win = true;

}

else  if(a7.innerHTML=="0"&& a8.innerHTML=="0"&& a9.innerHTML=="0")
{
document.getElementById("p1").innerHTML="player 2  win";
a7.style.backgroundColor="blue";
a8.style.backgroundColor="blue";
a9.style.backgroundColor="blue";
a1.disabled="true";
a2.disabled="true";
a3.disabled="true";
a4.disabled="true";
a5.disabled="true";
a6.disabled="true";
c1++;
document.getElementById("r3").innerHTML=`${c1}`;
win = true;

}

else  if(a1.innerHTML=="0"&& a4.innerHTML=="0"&& a7.innerHTML=="0")
{
document.getElementById("p2").innerHTML="player 2  win";
a1.style.backgroundColor="blue";
a4.style.backgroundColor="blue";
a7.style.backgroundColor="blue";
a2.disabled="true";
a5.disabled="true";
a8.disabled="true";
a3.disabled="true";
a6.disabled="true";
a9.disabled="true";
c1++;
document.getElementById("r3").innerHTML=`${c1}`;
win = true;

}

else if(a2.innerHTML=="0"&& a5.innerHTML=="0"&& a8.innerHTML=="0")
{
document.getElementById("p2").innerHTML="player 2  win";
a2.style.backgroundColor="blue";
a5.style.backgroundColor="blue";
a8.style.backgroundColor="blue";
a1.disabled="true";
a4.disabled="true";
a7.disabled="true";
a3.disabled="true";
a6.disabled="true";
a9.disabled="true";
c1++;
document.getElementById("r3").innerHTML=`${c1}`;
win = true;

}

else  if(a3.innerHTML=="0"&& a6.innerHTML=="0"&& a9.innerHTML=="0")
{
document.getElementById("p2").innerHTML="player 2  win";
a3.style.backgroundColor="blue";
a6.style.backgroundColor="blue";
a9.style.backgroundColor="blue";
a1.disabled="true";
a4.disabled="true";
a7.disabled="true";
a2.disabled="true";
a5.disabled="true";
a8.disabled="true";
c1++;
document.getElementById("r3").innerHTML=`${c1}`;
win = true;

}

else  if(a1.innerHTML=="0"&& a5.innerHTML=="0"&& a9.innerHTML=="0")
{
document.getElementById("p2").innerHTML="player 2  win";
a1.style.backgroundColor="blue";
a5.style.backgroundColor="blue";
a9.style.backgroundColor="blue";
a4.disabled="true";
a7.disabled="true";
a8.disabled="true";
a2.disabled="true";
a3.disabled="true";
a6.disabled="true";
c1++;
document.getElementById("r3").innerHTML=`${c1}`;
win = true;

}

else  if(a3.innerHTML=="0"&& a5.innerHTML=="0"&& a7.innerHTML=="0")
{
document.getElementById("p2").innerHTML="player 2 win";
a3.style.backgroundColor="blue";
a5.style.backgroundColor="blue";
a7.style.backgroundColor="blue";
a1.disabled="true";
a2.disabled="true";
a4.disabled="true";
a6.disabled="true";
a9.disabled="true";
a8.disabled="true";
c1++;
document.getElementById("r3").innerHTML=`${c1}`;
}else if (!win && checkTie()) {
  document.getElementById("r2").innerHTML = "Match Tie";
  win = true;

}
}


function checkTie() {
return [a1, a2, a3, a4, a5, a6, a7, a8, a9].every(cell => cell.innerHTML === "x" || cell.innerHTML === "0");
}