'use strict';

class Badge {
  create() {
    return this.styledMessage;
  }
}
class ErrorBadge extends Badge {
  constructor(msg) {
    super();
    this.prefix = '\x1b[31m[ERROR]\x1b[0m ';
    this.styledMessage = `${this.prefix}${msg}`;
  }
}
class AppBadge extends Badge {
  constructor(msg) {
    super();
    this.prefix = '\x1b[36m[APP]\x1b[0m ';
    this.styledMessage = `${this.prefix}${msg}`;
  }
}
class WarningBadge extends Badge {
  constructor(msg) {
    super();
    this.prefix = '\x1b[33m[WARNING]\x1b[0m ';
    this.styledMessage = `${this.prefix}${msg}`;
  }
}
class DoneBadge extends Badge {
  constructor(msg) {
    super();
    this.prefix = '\x1b[32m[DONE]\x1b[0m ';
    this.styledMessage = `${this.prefix}${msg}`;
  }
}

const badgelist = new Map([
  ['err', ErrorBadge],
  ['msg', AppBadge],
  ['wrn', WarningBadge],
  ['ok', DoneBadge],
]);

/*
 * interface
 */
class Printer {
  constructor(type, message) {
    this._type = type;
    this._message = Array.prototype.slice.call(message).join('');
    this._setBadgeCreator();
    this._createMessage();
  }
  _setBadgeCreator() {
    const badgeCreator = badgelist.get(this._type);
    this.badgeCreator = new badgeCreator(this._message);
  }
  _createMessage() {
    this._message = this.badgeCreator.create();
  }
  print() {
    console.log(this._message);
  }
}

/**
 *@description Simple loger. Add stutus badge to string before console.log
 * @method err - console.log message with [ERROR] badge in red color.
 * @method msg - console.log message with [APP] badge in cyan color.
 * @method wrn - console.log message with [WARNING] badge in yellow color.
 * @method ok - console.log message with [DONE] badge in green color.
 */
class Loger {
  constructor() {
    this.type = 'msg';
  }
  err() {
    new Printer('err', arguments).print();
  }
  msg() {
    new Printer('msg', arguments).print();
  }
  wrn() {
    new Printer('wrn', arguments).print();
  }
  ok() {
    new Printer('ok', arguments).print();
  }
}

module.exports = Loger;
