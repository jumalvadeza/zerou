
var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');


for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;

        if (btntext == '×') {
            btntext = '*';
        }

        if (btntext == '÷') {
            btntext = '/';
        }
        screen.value += btntext;
    });
}

document.addEventListener('keydown', (e) => {
    let key = e.key;

    if (key >= '0' && key <= '9' || key == '.' || key == '/' || key == '*' || key == '-' || key == '+') {
        screen.value += key;
    }

    if (key == 'Enter') {
        try {
            screen.value = eval(screen.value);
        } catch {
            screen.value = 'Error';
        }
    }

    if (key == 'Backspace') {
        backspc();
    }
});

function sin() {
    screen.value = Math.sin(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value);
}

function pow() {
    screen.value = Math.pow(screen.value, 2);
}

function sqrt() {
    screen.value = Math.sqrt(screen.value);
}

function log() {
    screen.value = Math.log(screen.value);
}

function pi() {
    screen.value = 3.14159265359;
}

function e() {
    screen.value = 2.71828182846;
}

function fact() {
    var i, num, f;
    f = 1
    num = screen.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }

    i = i - 1;

    screen.value = f;
}

function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}
