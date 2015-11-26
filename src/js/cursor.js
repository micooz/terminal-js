import '../css/cursor.css';

export default class Cursor {

  constructor(options) {
    this.width = options.width || 10;
    this.height = options.height || 25;
    this.color = options.color || '#45FF4B';
    this.init();
  }

  init() {
    const dom = document.createElement('span');
    dom.classList.add('tm-cursor');
    dom.style.width = this.width + 'px';
    dom.style.height = this.height + 'px';
    dom.style.backgroundColor = this.color;
    this._dom = dom;
    this.blink();
  }

  blink() {
    this._dom.classList.add('tm-cursor-blink');
  }

  unBlink() {
    this._dom.classList.remove('tm-cursor-blink');
  }

  getHtmlDom() {
    return this._dom;
  }

}
