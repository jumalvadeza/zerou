document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    
    var name = document.getElementById('nameInput').value;
  
    
    alert('Olá, ' + name + '!');
  
   
    document.getElementById('nameInput').value = '';
  });