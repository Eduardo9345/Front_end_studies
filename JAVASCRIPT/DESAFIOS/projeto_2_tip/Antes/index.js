function update(){
    let bill = Number(document.getElementById('yourBill').value);
    
    let tip = Number(document.getElementById('tipInput').value);
    
    let split = Number(document.getElementById('splitInput').value);
    
    let tipValue = bill * (tip/100);
    let billTotal = tipValue + bill;
    let billEach = billTotal / split;

    document.getElementById('totalWithTip').innerHTML = formatMoney(billTotal);

    document.getElementById('tipPercent').innerHTML = tip + '%'

    document.getElementById('splitValue').innerHTML = formatSplit(split);

    document.getElementById('billEach').innerHTML = formatMoney(billEach);

    document.getElementById('tipForOnePerson').innerHTML = formatMoney(tip / split);
}

function formatMoney(value){
    value = Math.ceil(value * 100) / 100;
    value = value.toFixed(2);
    return '$ ' + value;
}
function formatSplit(value){
    let complement = value > 1? 'people':'person'
    return value + ' ' + complement;
}