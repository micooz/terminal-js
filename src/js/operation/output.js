import _ from 'lodash';
import Operation from './operation';

export default class Output extends Operation {

  constructor(context, scheduler) {
    super();
    this._context = context;
    this._scheduler = scheduler;
  }

  run(string) {
    const str = string;

    if (_.isString(str)) {
      const _this = this;
      this._scheduler.add((finished) => {
        const {_view, speed} = _this._context;
        let index = 0, len = str.length;

        const id = setInterval(() => {
          if (index < len) {
            _view.append(str[index++]);
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
