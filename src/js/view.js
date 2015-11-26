import Cursor from './cursor';
import '../css/view.css';

export default class View {

  constructor(optCursor) {
    this.optCursor = optCursor;
    this.init();
  }

  init() {
    const dom = document.createElement('div');
    const span = document.createElement('span');
    const _cursor = new Cursor(this.optCursor);
    dom.appendChild(span);
    dom.appendChild(_cursor.getHtmlDom());

    this._dom = dom;
    this._span = span;
    this._cursor = _cursor;
  }

  /**
   * append a char or string to the view.
   * @param sth
   */
  append(sth) {
    const {_span, _cursor} = this;
    _cursor.unBlink(); // TODO: should be optimized.
    _span.innerHTML += sth;
  }

  done() {
    this._cursor.blink();
  }

  del() {
    const {_span, _cursor} = this;
    _cursor.unBlink(); // TODO: should be optimized.
    const origin = _span.innerHTML;
    _span.innerHTML = origin.substr(0, origin.length - 1);
  }

  getHtmlDom() {
    return this._dom;
  }

}
