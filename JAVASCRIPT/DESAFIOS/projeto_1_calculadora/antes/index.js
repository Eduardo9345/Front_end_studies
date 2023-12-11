function outcome(){
    let num1 = Number(document.getElementById('num-one').value);
    let num2 = Number(document.getElementById('num-two').value);
    let result = 0;

    if(document.getElementById('box1').checked){
        result = num1 + num2;
    }
    else if (document.getElementById('box2').checked){
        result = num1 - num2;
    }
    else if (document.getElementById('box3').checked){
        result = num1 * num2;
    }
    else if (document.getElementById('box4').checked && num2 != 0){
        result = num1 / num2;
    } else {
        result = 'Não foi possível executar a operação, tente novamente!';
    }
    document.getElementById('resultArea').innerHTML = 'Result: ' + result;
    
}