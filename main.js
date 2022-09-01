const game = () => {
    let pScore = 0;
    let cScore = 0;
  
    const startGame = () => {
      const playButton = document.querySelector('.intro button');
      const introScreen = document.querySelector('.intro');
      const match = document.querySelector('.match');
  
      playButton.addEventListener('click', () => {
        introScreen.classList.add('fadeOut');
        match.classList.add('fadeIn');
      });
    };
  
    // play match
    const playMatch = () => {
    const option = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hands');
    const computerHand = document.querySelector('.computer-hands');
    const hands = document.querySelectorAll('.hands img');
    
    hands.forEach(hand => {
      hand.addEventListener('animationend', function() {
        this.style.animation = '';
      })
    })
  
    // computer option 
    const computerOption = ['rock', 'paper', 'scissors'];
  
    option.forEach((option) => {
      option.addEventListener('click', function() {
        // computer choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOption[computerNumber];
  
        setTimeout(() => {
          // Here is wherre we call compare hands
          compareHands(this.textContent, computerChoice);
          // Update Images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`; 
        }, 2000)
  
        // Animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
  
      });
    });
  };
  
  // update score
  const updateScore = () => {
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore++;
  }
  
  
  // comparison for result
  const compareHands = (playerChoice, computerChoice) => {
    // Update Text
    const winner = document.querySelector('.winner');
  
    // checking for  a tie
    if (playerChoice === computerChoice) {
      winner.textContent = 'Seri 😞😞😞';
      return;
    }
  
    // checking for a rock
    if (playerChoice === 'rock') {
      if (computerChoice === 'scissors') {
        winner.textContent = 'Kamu Menang 😃😃😃'
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'Kamu Kalah 😭😭😭';
        cScore++;
        updateScore();
        return;
      }
    }
  
    // checking for paper
    if (playerChoice === 'paper') {
      if (computerChoice === 'scissors') {
        winner.textContent = 'Kamu Kalah 😭😭😭'
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'Kamu Menang 😃😃😃'
        pScore++;
        updateScore();
        return;
      }
    }
  
    // checking for scissors
    if (playerChoice === 'scissors') {
      if (computerChoice === 'rock') {
        winner.textContent = 'Kamu Kalah 😭😭😭'
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'Kamu Menang 😃😃😃'
        pScore++;
        updateScore();
        return;
      }
    }
  
  }
  
  
    startGame();
    playMatch();
  }
  
  
  
  
  // start the game function 
  game();
  
  
  