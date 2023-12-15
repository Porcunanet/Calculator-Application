let display = document.getElementById('display');

function pressKey(key) {
    if (key === 'C') {
        display.value = '';
    } else if (key === '=') {
        calculate();
    } else {
        display.value += key;
    }
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}