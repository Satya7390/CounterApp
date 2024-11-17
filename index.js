
const countValue = document.querySelector('#counter');

let decrement = () => {
    let value = parseInt(countValue.innerText);
    value -= 1;
    countValue.innerText = value;
}

let increment = () => {
    let value = parseInt(countValue.innerText);
    value += 1;
    countValue.innerText = value;
}