const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      'Neuer', 'Kimmich', 'Boateng', 'Hernandez', 'Davies', 'Goretzka', 'Tolisso', 'Muller', 'Gnabry', 'Lewandowski', 'Coman',
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hernandez'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };
  
  // 1. Loop over the game.scored array and print each player name with the goal number
  game.scored.forEach((player, index) => {
    console.log(`Goal ${index + 1}: ${player}`);
  });
  
  // 2. Use a loop to calculate the average odd and log it to the console
  const odds = Object.values(game.odds);
  let averageOdd = 0;
  for (const odd of odds) {
    averageOdd += odd;
  }
  averageOdd /= odds.length;
  console.log(`Average odd: ${averageOdd.toFixed(2)}`);
  
  // 3. Print the odds in a nice formatted way
  console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
  console.log(`Odd of draw: ${game.odds.x}`);
  console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);
  
  // 4. Bonus: Create an object 'scorers' with player names and number of goals
  const scorers = {};
  game.scored.forEach((player) => {
    scorers[player] = (scorers[player] || 0) + 1;
  });
  console.log('Scorers:', scorers);