const buttons = document.querySelectorAll(".btn");
const body = document.body;

buttons.forEach((btn) => {
    btn.addEventListener('click', ()=> {
        let color = btn.value;
        changeBackground(color)
    });
})

function changeBackground(color){
    body.className="";

    switch (color){
        case 'purple':
            body.classList.add('purple');
            break;
        case 'red':
            body.classList.add('red');
            break;
        case 'blue':
            body.classList.add('blue');
            break;
        case 'orange':
            body.classList.add('orange');
            break;
        case 'green':
            body.classList.add('green');
            break;
        default:
            break;

    }
}