import goblin from '../img/goblin.png';

export default class Game {
  constructor(str, index) {
    this.element = document.querySelector(str);
    this.boardSize = index ** 2;
    if (this.element === null) throw new Error('Field not found');
    this.sucessConuter = 0;
    this.failCounter = 0;
  }

  init() {
    this.element.style = `max-width: ${Math.sqrt(this.boardSize) * 100}px; min-height: ${Math.sqrt(this.boardSize) * 100}px`
    this.createCells();
    this.insertImg();
    setInterval(() => {
      this.removeImg();
      this.insertImg();
      this.failCoumter += 1;
      if (this.failCounter === 5) {
        this.gameOver();
      }
    }, 1000);
  }

  createCells() {
    for (let i = 1; i <= this.boardSize; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('game-field-cell');
      this.element.insertAdjacentElement('afterbegin', cell);
    }
  }

  insertImg() {
    const index = Math.floor(Math.random() * (this.boardSize - 1));
    const img = document.createElement('img');
    img.classList.add('game-field-cell-img');
    img.src = goblin;
    img.alt = 'голова гоблина';
    const arr = [...document.querySelectorAll('.game-field-cell')];
    arr[index].insertAdjacentElement('afterbegin', img);
  }

  removeImg() {
    this.img = document.querySelector('.game-field-cell-img');
    this.img.remove();
  }

  gameOver() {
    alert('Game lost!');
    this.failCounter = 0;
    this.sucessConuter = 0;
    this.init();
  }

  click() {
    
  }
}
