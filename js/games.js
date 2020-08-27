import activeGame from './activeGame.js';

//trying to mimic reusabilty in components
const buildGames = (games) => {
  let gameContainer = document.getElementById('scroll');
  games.map((game, index) => {
    //only games that have a recap should be shown. Since theres no img to even display.
    if (game.status.statusCode === 'F') {
      let content = game.content.editorial.recap.mlb;
      let homeTeam = game.teams.home.team.name;
      let awayTeam = game.teams.away.team.name;

      //create elements
      let listItem = document.createElement('li');
      let headLine = document.createElement('span');
      let image = document.createElement('img');
      let description = document.createElement('span');
      //add classes
      listItem.id = index;
      headLine.className = 'headline';
      description.className = 'headline';
      //inject data
      headLine.textContent = `${homeTeam} vs. ${awayTeam}`;
      description.textContent = content.headline;
      image.src = content.image.cuts[13].src;
      //append new children
      listItem.appendChild(headLine);
      listItem.appendChild(image);
      listItem.appendChild(description);
      gameContainer.appendChild(listItem);
    }
  });

  //if no content for games create generic no recaps
  if (!document.getElementsByTagName('li').length) {
    document.querySelector('.no-games').classList.remove('no-games-hide');
    document.querySelector('.no-games').classList.add('no-games-show');
  }
};

export default buildGames;
