
function capitalizeFirstLetter(str) {
    var words = str.split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}


document.addEventListener('DOMContentLoaded', function() {

    var input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Digite uma frase...';
    document.body.appendChild(input);

    var button = document.createElement('button');
    button.textContent = 'Capitalizar';
    button.addEventListener('click', function() {
        var inputString = input.value;
        var stringCapitalizada = capitalizeFirstLetter(inputString);
        alert(stringCapitalizada);
    });
    document.body.appendChild(button);

   
    input.addEventListener('keypress', function(event) {
        
        if (event.key === 'Enter') {
          
            var inputString = input.value;
            var stringCapitalizada = capitalizeFirstLetter(inputString);
            alert(stringCapitalizada);
        }
    });
});
