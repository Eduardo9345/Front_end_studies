
let value = Number(prompt('Enter the product value: '));
let result;
if(value >= 20){
    result = 'Approved';
} else {
    result = 'Denied';
}

document.getElementById('result').innerHTML = result;