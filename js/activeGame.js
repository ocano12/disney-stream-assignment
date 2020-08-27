const activeGame = (node) => {
  let removeActive = document.querySelector('.active');

  if (removeActive) {
    removeActive.classList.remove('active');
  }

  let activeGame = document.getElementById(`${node}`);
  let list = document.getElementById('scroll');

  list.scrollLeft = activeGame.offsetLeft - activeGame.offsetWidth;

  activeGame.classList.add('active');
};

export default activeGame;
