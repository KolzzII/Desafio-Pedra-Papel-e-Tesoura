var rps = 0;
var voce = 0;
var junin = 0;

function pPedra(){
    rps = Math.floor(Math.random() * (4 - 1) +1);
    if(rps == 1){
        document.querySelector(".resultado").innerHTML = '<h3>Você escolheu Pedra X Junin escolheu Pedra</h3><h3> Empatou! :| </h3>'
    }
    else if (rps == 2){
        document.querySelector(".resultado").innerHTML = '<h3>Você escolheu Pedra X Junin escolheu Papel</h3> <h3>Você perdeu! ;-; </h3>'
        junin ++;
    } 
    else{
        document.querySelector(".resultado").innerHTML = '<h3>Você escolheu Pedra X Junin escolheu Tesoura </h3> <h3>Você venceu! :D </h3>'
        voce ++;
    }
    document.querySelector(".placar").innerHTML = `${voce} X ${junin}`
}

function pPapel(){
    rps = Math.floor(Math.random() * (4 - 1) +1);
    if(rps == 1){
        document.querySelector(".resultado").innerHTML = '<h3>Você escolheu Papel X Junin escolheu Pedra </h3><h3> Você venceu! :D </h3>'
        voce ++;
    }
    else if (rps == 2){
        document.querySelector(".resultado").innerHTML = '<h3>Você escolheu Papel X Junin escolheu Papel </h3><h3> Empatou! :| </h3>'

    } 
    else{
        document.querySelector(".resultado").innerHTML = '<h3>Você escolheu Papel X Junin escolheu Tesoura </h3><h3> Você perdeu! ;-; </h3>'
        junin ++;
    }
    document.querySelector(".placar").innerHTML = `${voce} X ${junin}`
}

function pTesoura(){
    rps = Math.floor(Math.random() * (4 - 1) +1);
    if(rps == 1){
        document.querySelector(".resultado").innerHTML = '<h3>Você escolheu Tesoura X Junin escolheu Pedra </h3><h3> Você perdeu! ;-; </h3>'
        junin ++;
    }
    else if (rps == 2){
        document.querySelector(".resultado").innerHTML = '<h3>Você escolheu Tesoura X Junin escolheu Papel </h3><h3> Você venceu! :D </h3>'
        voce ++;
    } 
    else{
        document.querySelector(".resultado").innerHTML = '<h3>Você escolheu Tesoura X Junin escolheu Tesoura </h3><h3> Empatou! :| </h3>'
    }
    document.querySelector(".placar").innerHTML = `${voce} X ${junin}`
}

function reset() {
    voce = 0;
    junin = 0;
    document.querySelector(".placar").innerHTML = `${voce} X ${junin}`
    document.querySelector(".resultado").innerHTML = '<h3></h3>'

}