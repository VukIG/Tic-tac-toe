const field1=document.querySelector(".tictactoe1");
const field2=document.querySelector(".tictactoe2");
const field3=document.querySelector(".tictactoe3");
const field4=document.querySelector(".tictactoe4");
const field5=document.querySelector(".tictactoe5");
const field6=document.querySelector(".tictactoe6");
const field7=document.querySelector(".tictactoe7");
const field8=document.querySelector(".tictactoe8");
const field9=document.querySelector(".tictactoe9");

let i = 1;

function computersturn() {
    return Math.floor(Math.random()*9);
}

function maass(element) {
    if(element.innerHTML=="")
        element.innerHTML="O"
    else{
        console.log("well you are a piece of shit");    }
    let t=computersturn();
    if(t==1){
        if(field1.innerHTML=='')
            field1.innerHTML='X';
        else
            maass(element);
    }
    if(t==2){
        if(field2.innerHTML=='')
            field2.innerHTML='X';
        else
        maass(element);
    }
    if(t==3){
        if(field3.innerHTML=='')
            field3.innerHTML='X';
        else
        maass(element);
    }
    if(t==4){
        if(field4.innerHTML=='')
            field4.innerHTML='X';
        else
        maass(element);
    }
    if(t==5){
        if(field5.innerHTML=='')
            field5.innerHTML='X';
        else
        maass(element);
    }
    if(t==6){
        if(field6.innerHTML=='')
            field6.innerHTML='X';
        else
        maass(element);
    }
    if(t==7){
        if(field7.innerHTML=='')
            field7.innerHTML='X';
        else
        maass(element);
    }
    if(t==8){
        if(field8.innerHTML=='')
            field8.innerHTML='X';
        else
        maass(element);
    }
    if(t==9){
        if(field9.innerHTML=='')
            field9.innerHTML='X';
        else
        maass(element);
    }
    if(field1.innerHTML==field2.innerHTML && field1==field3.innerHTML)
        console.log('pobeda')
    i++;
    
}


field1.addEventListener("click",function () {
    maass(field1)
});

field2.addEventListener("click",function () {
    maass(field2)
});

field3.addEventListener("click",function () {
    maass(field3)
});

field4.addEventListener("click",function () {
    maass(field4)
});

field5.addEventListener("click",function () {
    maass(field5)
});

field6.addEventListener("click",function () {
    maass(field6)
});

field7.addEventListener("click",function () {
    maass(field7)
});

field8.addEventListener("click",function () {
    maass(field8)
});

field9.addEventListener("click",function () {
    maass(field9)
});