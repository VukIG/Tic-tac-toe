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
    value : ['','','','','','','','',''],
    winConditions:[
        [0,1,2],
        [3,4,5],
        [6,7,8],

        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [6,4,2],

    ],
    validate(){
        console.log('jo lengta de nordiska summarem')
        for(let i=0;i<this.winConditions.length;i++){
            if (this.value[this.winConditions[i][0]]!='' && this.value[this.winConditions[i][0]]==this.value[this.winConditions[i][1]] && this.value[this.winConditions[i][0]]==this.value[this.winConditions[i][2]]) {
                console.log("pobeda");
                pobeda(this.value[this.winConditions[i][0]]);  
            }
        }
    }
    
}

function MiniMax(position,depth,maximizingPlayer) {
    if (depth==0 || gameOver==true){
        return 
    }
}

function clear() {
    playground.style.display='grid';
    end.style.display='none';
    let ocisti=gameBoard.value;
    ocisti.forEach(polje => {
        polje.valueOf='';
    });
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
            let matrix=gameBoard.value;
            xilio++;
            if ( xilio%2==0){
                field.querySelector('h1').innerHTML='O';
                matrix[x-1]='O';
            }
            else{
                field.querySelector('h1').innerHTML='X';
                matrix[x-1]='X';
            }
            gameBoard.validate();
            promeniIme();
            console.log(gameBoard.value);
        }
        
    });
});



start.addEventListener('click',()=>{
    if(player1.value.length>2 && player2.value.length>2){
        welcome.style.display='none';
        playground.style.display='grid'
    }
    else{
        let greska = document.createElement('div');
        greska.innerHTML='Enter a name';
        greska.classList.add('ovan')
        welcome.appendChild(greska);
    }
});