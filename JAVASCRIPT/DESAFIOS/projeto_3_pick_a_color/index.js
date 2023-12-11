let colors = ['blue', 'green', 'yellow', 'red', 'purple', 'brown', 'gray', 'pink', 'cyan', 'orange', 'white'];

let button = document.getElementById('btn')

button.addEventListener('click', function(){
    let random = Math.round(Math.random() * colors.length - 1);
    let color = colors[random];

    document.body.style.background = color;
    document.getElementById('yourColor').innerHTML = color;
})
