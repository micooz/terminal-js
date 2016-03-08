import _ from 'lodash';
import View from './view';
import Operator from './operator';
import '../css/core.css'

export default class Core {

  constructor(options) {
    const dom = options.dom;
    this.dom = _.isString(dom) ? document.getElementById(dom) : dom;
    this.speed = options.speed || 15;
    this.optCursor = options.cursor || {};
    this.init();
  }

  init() {
    this._view = new View(this.optCursor);

    const {dom, _view} = this;
    dom.classList.add('tm-container');
    dom.appendChild(_view.getHtmlDom());
  }

  run(callback) {
    const op = new Operator(this);
    callback(op);
    op.start();
    return this;
  }

}
