import Scheduler from './utils/scheduler';
import {
  Output,
  Wait,
  Del,
  Newline
} from './operation/index';

export default class Operator {

  constructor(context) {
    this._context = context;
    this._scheduler = new Scheduler();
  }

  output(string) {
    (new Output(this._context, this._scheduler)).run(string);
    return this;
  }

  wait(millisecond) {
    (new Wait(this._context, this._scheduler)).run(millisecond);
    return this;
  }

  del(count) {
    (new Del(this._context, this._scheduler)).run(count);
    return this;
  }

  newline(count = 1) {
    (new Newline(this._context, this._scheduler)).run(count);
    return this;
  }

  start() {
    this._scheduler.run();
  }

}
