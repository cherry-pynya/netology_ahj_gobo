import goblin from '../img/goblin.png';

export default class Game {
  constructor(str, index) {
    this.element = document.querySelector(str);
    this.boardSize = index ** 2;
    if (this.element === null) throw new Error('Field not found');
  }

  init() {
    this.createCells();
    this.insertImg();
    setInterval(() => {
      this.removeImg();
      this.insertImg();
    }, 2000);
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
}
