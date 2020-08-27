import buildGames from './games.js';
import buildHeader from './header.js';
import activeGame from './activeGame.js';
import gameDetail from './gameDetails.js';
//sudo state
const store = {
  activeIndex: 0,
  games: [],
};

const getDate = () => {
  let today = new Date();

  let day = String(today.getDate() - 1).padStart(2, '0');
  let month = String(today.getMonth() + 1).padStart(2, '0');
  let year = today.getFullYear();
  return year + '-' + month + '-' + day;
};

const fetchGames = () => {
  fetch(`http://statsapi.mlb.com/api/v1/schedule?hydrate=game(content(editorial(recap))),decisions&date=${getDate()}&sportId=1`)
    .then((results) => {
      return results.json();
    })
    .then((data) => {
      store.games = data.dates[0].games;

      buildHeader(data.dates[0]);
      buildGames(store.games);
    })
    .then(() => activeGame(store.activeIndex))
    .catch((err) => console.log(err));
};

const keyboardFunctionality = (e) => {
  let totalGames = document.querySelectorAll('li').length - 1;
  switch (e.keyCode) {
    case 37:
      e.preventDefault();
      store.activeIndex--;
      if (store.activeIndex < 0) {
        store.activeIndex = 0;
      }
      activeGame(store.activeIndex);
      break;
    case 39:
      e.preventDefault();
      store.activeIndex++;
      if (store.activeIndex > totalGames) {
        store.activeIndex = totalGames;
      }
      activeGame(store.activeIndex);
      break;
    case 13:
      e.preventDefault();
      gameDetail(store.activeIndex, store.games);
      break;
  }
};

document.addEventListener('DOMContentLoaded', fetchGames);
document.addEventListener('keydown', keyboardFunctionality);
