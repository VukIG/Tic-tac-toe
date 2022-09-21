const fields=document.querySelectorAll('.tictactoe');
const welcome=document.querySelector('.welcome');
const playground=document.querySelector('.grid');
const start=document.querySelector('.start');
const end=document.querySelector('.endEndScreen');
const turn=document.querySelector('.turn');
const player1=document.querySelector('.player1');
const player2=document.querySelector('.player2');

let xilio=-1;
let prazno=true;

end.style.display='none'

let gameBoard = {
    value : [
        ['' , '', ''],
        ['' , '', ''], 
        ['' , '', ''],
    ],
    validate(){
        
        for (let i = 0; i < this.value.length-2; i++) {
            let sta=i+2;
            for (let j = 0; j < this.value.length-2; j++) {
                if (this.value[i][j]!='') {
                    let zasto=j+2;
                    let znak=this.value[i][j];
                    let spetsnaz=i-2;
                    if(this.value[i][j]==this.value[i++][j] && this.value[i][j]==this.value[sta][j]){ 
                        pobeda(znak);
                    }
                    else if(this.value[i][j]==this.value[i][j++] && this.value[i][j]==this.value[i][zasto]){
                        pobeda(znak);
                    }
                    else if(this.value[0][0]==this.value[1][1] && this.value[0][0]==this.value[2][2]){
                        pobeda(znak);
                    }
                    else if(this.value[0][2]==this.value[1][1] && this.value[0][2]==this.value[2][0]){
                        pobeda(znak);
                    }    
                    else{
                        console.log('nereseno');
                    }
                }
                
            }
        }
    }
}

const player = {
    name:"",
    score: "",
}

function clear() {
    playground.style.display='grid';
    end.style.display='none';
    let ocisti=gameBoard.value;
}

function pobeda(znak) {
    playground.style.display='none';
    end.style.display='block';
    if (znak=='X') {
        end.innerHTML=`
        <h1>Congratulations, ${player1.value}</h1>
        <button class="refresh">Refresh</button>
        `    
    }
    else{
        end.innerHTML=`
        <h1>Congratulations, ${player2.value}</h1>
        <button class="refresh">Refresh</button>
        `  
    }
    turn.style.display='none';
    let refresh=document.querySelector('.refresh');
    refresh.addEventListener('click',()=>{
        clear();
    });
}

function promeniIme() {
    if ( xilio%2==0){
        turn.innerHTML=player1.value+' s turn';
    }
    else{
        turn.innerHTML=player2.value+' s turn';
    }
}

fields.forEach(field => {
    field.addEventListener('click',()=>{
        if (field.querySelector('h1').innerHTML=='') {
            let x=field.dataset.x;
            console.log(x);
            let y=field.dataset.y;
            let matrix=gameBoard.value;
            xilio++;
            if ( xilio%2==0){
                field.querySelector('h1').innerHTML='O';
                matrix[x-1][y-1]='O';
            }
            else{
                field.querySelector('h1').innerHTML='X';
                matrix[x-1][y-1]='X';
            }
            gameBoard.validate();
            promeniIme();
            console.log(gameBoard.value);
        }
        
    });
});



start.addEventListener('click',()=>{
    if(player1.value.length>0 && player2.value.length>0){

    }

    welcome.style.display='none';
    playground.style.display='grid'
});