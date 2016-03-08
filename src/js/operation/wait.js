import _ from 'lodash';
import Operation from './operation';

export default class Wait extends Operation {

  constructor(context, scheduler) {
    super();
    this._context = context;
    this._scheduler = scheduler;
  }

  run(millisecond) {
    if (_.isNumber(millisecond)) {
      this._scheduler.add((finished) => {
        setTimeout(finished, millisecond)
      });
    }
  }

}
