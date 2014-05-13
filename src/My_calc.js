/**
 * Created by Svetttik on 01.05.14.
 */

window.addEventListener('load',function (){

    input.value=0;
    var btnC = document.getElementById('btnC');
    btnC.addEventListener('click', function(){
        var input = document.getElementById('input');
        input.value = 0;});

    var btnone = document.getElementById('btn1');
    btnone.addEventListener('click', function(){
        print(this.value);
    });


    var btntwo = document.getElementById('btn2');
    btntwo.addEventListener('click', function(){
        print(this.value);
    });

    var btnthree = document.getElementById('btn3');
    btnthree.addEventListener('click', function(){
        print(this.value);
    });

    var btnfour = document.getElementById('btn4');
    btnfour.addEventListener('click', function(){
        print(this.value);
    });

    var btnfive = document.getElementById('btn5');
    btnfive.addEventListener('click', function(){
        print(this.value);
    });

    var btnsix = document.getElementById('btn6');
    btnsix.addEventListener('click', function(){
        print(this.value);
    });

    var btnseven = document.getElementById('btn7');
    btnseven.addEventListener('click', function(){
        print(this.value);
    });

    var btneight = document.getElementById('btn8');
    btneight.addEventListener('click', function(){
        print(this.value);
    });

    var btnnine = document.getElementById('btn9');
    btnnine.addEventListener('click', function(){
        print(this.value);
    });

    var btnnull = document.getElementById('btn0');
    btnnull.addEventListener('click', function(){
        print(this.value);
    });

    var btnp = document.getElementById('btnpoint');
    btnp.addEventListener('click', function(){
        print(this.value);
    });

    var btnminus = document.getElementById('btn+-');
    btnminus.addEventListener('click', function(){
        print(this.value);
    });
});


function print(symbol){

    if (!check(symbol)){
        return;
    }
    var input = document.getElementById('input');


    console.log(symbol);
    if ( symbol=='.' ){
        if (input.value.indexOf('.')==-1){
             input.value =input.value + symbol;
        }
        else {
            return;
        }
    }
    else if ( symbol=='-' ){
        if (input.value.indexOf('-')==-1){
            input.value = symbol + input.value ;
        }
        else {
            input.value=input.value.replace('-','');
        }
    }
    else{
        if (input.value==0){
            input.value = symbol;
        }else{
            input.value = input.value + symbol;
        }
    }
    return;
}

function check(symbol){
    if (symbol==1 || symbol==2||symbol==3||symbol==4||symbol==5||symbol==6||symbol==7||symbol==8||symbol==9||symbol==0||symbol=='.'||symbol=='-'){
        return true;
    }
    else{
        return false;
    }
}

