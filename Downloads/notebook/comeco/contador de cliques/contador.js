const clickButton = document.getElementById('click-btn');
  const resetButton = document.getElementById('reset-btn');
  const clickCount = document.getElementById('click-count');

  let counter = 0;

  function updateCounter() {
    clickCount.textContent = counter;
  }

  clickButton.addEventListener('click', function() {
    counter++;
    updateCounter();
  });

  resetButton.addEventListener('click', function() {
    counter = 0;
    updateCounter();
  });