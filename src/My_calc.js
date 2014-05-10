/**
 * Created by Svetttik on 01.05.14.
 */

window.addEventListener('load',function (){

    input.value=0;
    var btnC = document.getElementById('btnC');
    btnC.addEventListener('click', function(){
        var input = document.getElementById('input');
        input.value = 0;
    });

    var btnone = document.getElementById('btn1');
    btnone.addEventListener('click', function(){
        var value = this.value;
        var input = document.getElementById('input');
        input.value = input.value+ this.value;
    });

    var btntwo = document.getElementById('btn2');
    btntwo.addEventListener('click', function(){
        var value = this.value;
        var input = document.getElementById('input');
        input.value =input.value+ value;
    });

    var btnthree = document.getElementById('btn3');
    btnthree.addEventListener('click', function(){
        var value = this.value;
        var input = document.getElementById('input');
        input.value =input.value+ value;
    });

    var btnfour = document.getElementById('btn4');
    btnfour.addEventListener('click', function(){
        var value = this.value;
        var input = document.getElementById('input');
        input.value =input.value+ value;
    });

    var btnfive = document.getElementById('btn5');
    btnfive.addEventListener('click', function(){
        var value = this.value;
        var input = document.getElementById('input');
        input.value = input.value+value;
    });

    var btnsix = document.getElementById('btn6');
    btnsix.addEventListener('click', function(){
        var value = this.value;
        var input = document.getElementById('input');
        input.value =input.value+ value;
    });

    var btnseven = document.getElementById('btn7');
    btnseven.addEventListener('click', function(){
        var value = this.value;
        var input = document.getElementById('input');
        input.value =input.value+ value;
    });

    var btneight = document.getElementById('btn8');
    btneight.addEventListener('click', function(){
        var value = this.value;
        var input = document.getElementById('input');
        input.value =input.value+value;
    });

    var btnnine = document.getElementById('btn9');
    btnnine.addEventListener('click', function(){
        var value = this.value;
        var input = document.getElementById('input');
        input.value =input.value+ value;
    });

    var btnnull = document.getElementById('btn0');
    btnnull.addEventListener('click', function(){
        var value = this.value;
        var input = document.getElementById('input');
        input.value =input.value+ value;});

    var btnp = document.getElementById('btnpoint');
    btnp.addEventListener('click', function(){
        var value = this.value;
        var input = document.getElementById('input');
        input.value = input.value +value;});

    var btns=document.getElement;
    btns.addEventListener('click', function(){
    var a=this.value;
    alert(a);
    });

    var btnsumm = document.getElementById('btn+');
    btnsumm.addEventListener('click', function(){
        var value = this.value;
        var input = document.getElementById('input');
        input.value = value;});
//
//    var btn = document.getElementById('btn-');
//    btn.addEventListener('click', function(){
//        var value = this.value;
//        var input = document.getElementById('input');
//        input.value = value;});
//
//    var btn = document.getElementById('btn/');
//    btn.addEventListener('click', function(){
//        var value = this.value;
//        var input = document.getElementById('input');
//        input.value = value;});
//
//    var btn = document.getElementById('btnx');
//    btn.addEventListener('click', function(){
//        var value = this.value;
//        var input = document.getElementById('input');
//        input.value = value;});
    var btnequel = document.getElementById('btn=');
    btnequel.addEventListener('click', function(){
return 0;});
});

function culc(){
    var a;
    var b;
    var btn1 = document.getElementById('btn1');
    var btn2 = document.getElementById('btn2');
    var btn3 = document.getElementById('btn3');
    var btn4 = document.getElementById('btn4');
    var btn5 = document.getElementById('btn5');
    var btn6 = document.getElementById('btn6');
    var btn7 = document.getElementById('btn7');
    var btn8 = document.getElementById('btn8');
    var btn9 = document.getElementById('btn9');
    var btn0 = document.getElementById('btn0');

    if (btn1.addEventListener('click')){
        a=btn1.value;
    }
    else if (btn2.addEventListener('click')){
        a=btn2.value;
    }
    else if (btn3.addEventListener('click')){
        a=btn3.value;
    }
    else if (btn4.addEventListener('click')){
        a=btn4.value;
    }
    else if (btn5.addEventListener('click')){
        a=btn5.value;
    }
    else if (btn6.addEventListener('click')){
        a=btn6.value;
    }
    else if (btn7.addEventListener('click')){
        a=btn7.value;
    }
    else if (btn8.addEventListener('click')){
        a=btn8.value;
    }
    else if (btn9.addEventListener('click')){
        a=btn9.value;
    }
    else if (btn0.addEventListener('click')){
        a=btn0.value;
    }
    return alert(a)
}








