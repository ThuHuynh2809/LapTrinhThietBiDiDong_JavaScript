
// 1. Select the element with the 'again' class and attach a click event handler
document.querySelector('.again').addEventListener('click', function () {
// 2. Restore initial values of 'score' and 'secretNumber' variables
    let score = 20; // You may adjust this to your initial score value
    let secretNumber = Math.floor(Math.random() * 20) + 1; // Adjust range as needed
    
// 3. Restore initial conditions of the message, number, score, and guess input fields
    document.getElementById('message').textContent = 'Start guessing...';
    document.getElementById('score').textContent = score;
    document.getElementById('guess').value = '';
  
// 4. Restore the original background color (#222) and number width (15rem)
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });