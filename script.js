window.addEventListener('load', start);

let ced2,ced5,ced10,ced20,ced50,ced100,ced200 = 0;
let mod5,mod10,mod25,mod50,mod1 = 0;
let btn = document.querySelector('#btn');
let totalDinheiro = document.querySelector('#totalD');
let totalMoeda = document.querySelector('#totalM');
let totalSoma = document.querySelector('#totalSoma');

function start() {

    btn.addEventListener('click', calcular);

}

function calcular() {

    let somaD = "";
    let somaM ="";

    ced2 = document.querySelector('#cedula2').value;
    ced5 = document.querySelector('#cedula5').value;
    ced10 = document.querySelector('#cedula10').value;
    ced20 = document.querySelector('#cedula20').value;
    ced50 = document.querySelector('#cedula50').value;
    ced100 = document.querySelector('#cedula100').value;
    ced200 = document.querySelector('#cedula200').value;

    mod5 = document.querySelector('#mod5').value;
    mod10 = document.querySelector('#mod10').value;
    mod25 = document.querySelector('#mod25').value;
    mod50 = document.querySelector('#mod50').value;
    mod1 = document.querySelector('#mod1').value;

    ced2 = ced2 * 2;
    ced5 = ced5 * 5;
    ced10 = ced10 * 10;
    ced20 = ced20 * 20;
    ced50 = ced50 * 50;
    ced100 = ced100 * 100;
    ced200 = ced200 * 200;

    somaD = (ced2 + ced5 + ced10 + ced20 + ced50 + ced100 + ced200);
    somaM = ((((mod5*5)/100)+((mod10*10)/100)+((mod25*25)/100)+((mod50*50)/100)+((mod1*100)/100)));
   /*  somaM = ((mod5*0.05)+((mod10*10)/100)+(mod25*0.25)+(mod50*0.50)+(mod1*1.00)); */

    totalDinheiro.value = 'Total em Dinheiro = R$ '+ somaD;
    totalMoeda.value = 'Total em Moeda = R$ '+ somaM;
    totalSoma.value = 'Soma Total = R$ '+(somaD+somaM);
}