const fields=document.querySelectorAll('.tictactoe');
const welcome=document.querySelector('.welcome');
const playground=document.querySelector('.grid');
const start=document.querySelector('.start');
const end=document.querySelector('.endEndScreen');
const turn=document.querySelector('.turn');
const player1=document.querySelector('.player1');
const player2=document.querySelector('.player2');

let i=0;
let prazno=true;

const gameBoard = {
    value : [
        ['' , '', ''],
        ['' , '', ''], 
        ['' , '', ''],
    ],
    validate(){
        for (let i = 0; i < this.value.length; i++) {
            if(this.value[i][j]==this.value[i++][j] && this.value[i][j]==this.value[i+2][j]){
                console.log('victory');
            }
            else if(this.value[i][j]==this.value[i][j++] && this.value[i][j]==this.value[i][j+2]){
                console.log('victory');
            }
            else if(this.value[i][j]==this.value[i++][j++] && this.value[i][j]==this.value[i+2][j+2]){
                console.log('victory');
            }
        }
    }
}

const player = {
    name:"",
    score: "",
}

function promeniIme() {
    if (i%2==0){
        turn.innerHTML=player1.value;
    }
    else{
        turn.innerHTML=player2.value;
    }
}

fields.forEach(field => {
    field.addEventListener('click',()=>{
        if (field.innerHTML=='') {
            let x=field.dataset.x;
            let y=field.dataset.y;
            if (i%2==0){
                field.innerHTML='O';
                gameBoard.value[x][y].push('O');
            }
            else{
                field.innerHTML='X';
                gameBoard.value[x][y].push('X');
            }
            i++;
            console.log(gameBoard.value);
        }
        promeniIme();
    });
});



start.addEventListener('click',()=>{
    welcome.style.display='none';
    playground.style.display='grid'
});