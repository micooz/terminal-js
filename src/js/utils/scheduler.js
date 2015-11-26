/**
 * This class creates a chain of promises,
 * guarantees the order of function calls.
 */
export default class Scheduler {

  constructor() {
    this.promises = [];
  }

  add(callback) {
    this.promises.push(() => {
      return new Promise(callback);
    });
  }

  run() {
    this.promises.reduce((prev, next) => {
      return prev.then(next);
    }, new Promise((resolve) => resolve()));
  }

}
