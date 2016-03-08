import _ from 'lodash';
import Operation from './operation';

export default class Del extends Operation {

  constructor(context, scheduler) {
    super();
    this._context = context;
    this._scheduler = scheduler;
  }

  run(count) {
    if (_.isNumber(count)) {
      const _this = this;
      this._scheduler.add((finished) => {
        const {_view, speed} = _this._context;
        let index = 0;

        const id = setInterval(() => {
          if (index++ < count) {
            _view.del();
          } else {
            _view.done();
            clearInterval(id);
            finished();
          }
        }, 1. / speed * 1000.0);
      });
    }
  }

}
