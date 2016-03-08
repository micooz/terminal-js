import _ from 'lodash';
import Operation from './operation';

export default class Newline extends Operation {

  constructor(context, scheduler) {
    super();
    this._context = context;
    this._scheduler = scheduler;
  }

  run(count = 1) {
    if (_.isNumber(count) && count > 0) {
      this._scheduler.add((finished) => {
        while (count--) {
          this._context._view.append('<br/>');
        }
        finished();
      });
    }
  }

}
