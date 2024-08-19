const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

class Calculator {
    constructor(previousOperationText, currentOperationText) {
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = "";
        this.initialize();
    }

    initialize() {
        for (let item of btn) {
            item.addEventListener('click', (e) => {
                let btnText = e.target.innerText;
                if (btnText == '×') {
                    btnText = '*';
                }
                if (btnText == '÷') {
                    btnText = '/';
                }
                screen.value += btnText;
            });
        }

        document.addEventListener('keydown', (e) => {
            let key = e.key;
            if ((key >= '0' && key <= '9') || key == '.' || key == '/' || key == '*' || key == '-' || key == '+') {
                screen.value += key;
            }
            if (key == 'Enter') {
                this.evaluate();
            }
            if (key == 'Backspace') {
                this.backspc();
            }
        });
    }

    appendToScreen(value) {
        screen.value += value;
    }

    evaluate() {
        try {
            const result = eval(screen.value);
            this.updateHistory(screen.value, result);
            screen.value = result;
        } catch {
            screen.value = 'Error';
        }
    }

    updateHistory(operation, result) {
        this.previousOperationText.innerText = `${operation} = ${result}`;
    }

    clearScreen() {
        screen.value = '';
    }

    sin() {
        screen.value = Math.sin(screen.value);
    }

    cos() {
        screen.value = Math.cos(screen.value);
    }

    tan() {
        screen.value = Math.tan(screen.value);
    }

    pow() {
        screen.value = Math.pow(screen.value, 2);
    }

    sqrt() {
        screen.value = Math.sqrt(screen.value);
    }

    log() {
        screen.value = Math.log(screen.value);
    }

    pi() {
        screen.value = 3.14159265359;
    }

    e() {
        screen.value = 2.71828182846;
    }

    fact() {
        let num = parseInt(screen.value);
        if (isNaN(num) || num < 0) {
            screen.value = 'Error';
            return;
        }
        let f = 1;
        for (let i = 1; i <= num; i++) {
            f *= i;
        }
        screen.value = f;
    }

    backspc() {
        screen.value = screen.value.slice(0, -1);
    }
}

const calculator = new Calculator(previousOperationText, currentOperationText);

function evaluateExpression() {
    calculator.evaluate();
}

function clearScreen() {
    calculator.clearScreen();
}

function backspc() {
    calculator.backspc();
}

function sin() {
    calculator.sin();
}

function cos() {
    calculator.cos();
}

function tan() {
    calculator.tan();
}

function pow() {
    calculator.pow();
}

function sqrt() {
    calculator.sqrt();
}

function log() {
    calculator.log();
}

function pi() {
    calculator.pi();
}

function e() {
    calculator.e();
}

function fact() {
    calculator.fact();
}
