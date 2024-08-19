// Obter referências aos elementos HTML
const guessField = document.getElementById('guessField');
const guessSubmit = document.querySelector('button');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const congratsImage = document.getElementById('congratsImage');

// Inicializar variáveis de jogo
let guessCount = 1;
let resetButton;
let randomNumber = generateRandomNumber();

// Função para gerar um novo número aleatório entre 1 e 100
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function checkGuess() {
    let userGuess = Number(guessField.value);
    
    if (guessCount === 1) {
        guesses.textContent = 'Palpites anteriores: ';
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = 'Parabéns! Você acertou!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        congratsImage.classList.remove('hidden'); // Exibir a imagem de parabéns
        setTimeout(resetGame, 5000); // Agendar a reinicialização do jogo após 5 segundos
    } else {
        lastResult.textContent = 'Errado!';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'O último palpite foi muito baixo!';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'O último palpite foi muito alto!';
        }
        guessCount++;
    }

    guessField.value = '';
    guessField.focus();
}

function resetGame() {
    guessCount = 1;
    guesses.textContent = '';
    lastResult.textContent = '';
    lowOrHi.textContent = '';
    congratsImage.classList.add('hidden'); // Ocultar a imagem de parabéns
    randomNumber = generateRandomNumber(); // Gerar um novo número aleatório
}

guessSubmit.addEventListener('click', checkGuess);

// Event listener para o pressionamento da tecla "Enter"
guessField.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault(); // Impede a submissão padrão do formulário
        checkGuess();
    }
});
