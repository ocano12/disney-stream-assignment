const gameDetail = (activeGame, games) => {
  let overlay = document.getElementById('modal-1');

  let content = document.getElementById('game-content');

  content.textContent = games[activeGame].content.editorial.recap.mlb.blurb;

  overlay.classList.toggle('active');
};

export default gameDetail;
