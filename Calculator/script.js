let currentInput = '';
let currentResult = '';

function addToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
    playButtonPressEffect();
}

function clearDisplay() {
    currentInput = '';
    currentResult = '';
    document.getElementById('display').value = '';
    playButtonPressEffect();
}

function calculate() {
    try {
        currentResult = eval(currentInput);
        document.getElementById('display').value = currentResult;
    } catch (error) {
        currentResult = 'Error';
        document.getElementById('display').value = currentResult;
    }
    currentInput = '';
    playButtonPressEffect();
}

function playButtonPressEffect() {
    const buttons = document.querySelectorAll('input[type="button"]');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.add('pressed');
            setTimeout(() => {
                button.classList.remove('pressed');
            }, 100);
        });
    });
}
