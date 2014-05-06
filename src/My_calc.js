/**
 * Created by Svetttik on 01.05.14.
 */


window.addEventListener('load',function(){

    var btn = document.getElementById('someId');
    btn.addEventListener('click', function(){
        var value = this.value;
        var input = document.getElementById('input');
        input.value = input.value + value;

    });

});







