const buildHeader = (data) => {
  let header = document.getElementById('header');

  let totalGames = document.createElement('span');
  let gamesInProgress = document.createElement('span');

  totalGames.className = 'total-games';
  gamesInProgress.className = 'games-in-progress';

  totalGames.textContent = `Total Games: ${data.totalGames}`;
  gamesInProgress.textContent = `Games in Progress: ${data.totalGamesInProgress}`;

  header.prepend(totalGames);
  header.prepend(gamesInProgress);
};

export default buildHeader;
