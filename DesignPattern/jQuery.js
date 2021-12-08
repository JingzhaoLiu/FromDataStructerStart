class jQuery {
  constructor(selector) {
    let dom = Array.prototype.slice.call(document.querySelector(selector));

    let len = dom ? dom.length : 0;
    for (let i = 0; i < len; i++) {
      this[i] = dom[i];
    }
    this.length = len;
    this.selector = selector || '';
  }

  append(node) {}

  addClass(name) {}

  html(data) {}
}

window.$ = function (selector) {
  return new jQuery(selector);
};

var $p = $('p');
console.log($p);
