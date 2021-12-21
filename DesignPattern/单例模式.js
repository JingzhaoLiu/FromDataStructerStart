var CreateDiv = function (html) {
  this.html = html;
  this.init();
};

CreateDiv.prototype.init = function () {
  var div = document.createElement('div');
  div.innerHTML = this.html;
  document.body.appendChild(div);
};

var CreateDialog = function (node) {
  this.node = node;
  this.init();
};

CreateDialog.prototype.init = function () {
  var div = document.createElement('div');
  div.innerHTML = this.node;
  document.body.appendChild(div);
};

var ProxySingletonCreateDiv = (function () {
  var instance;
  return function (html) {
    if (!instance) {
      instance = new CreateDiv(html);
    }
    return instance;
  };
})();

var SingletonCreateDialog = (function () {
  var instance;
  return function (html) {
    if (!instance) {
      instance = new CreateDialog(html);
    }
    return instance;
  };
})();

// ### 代理实现单例模式
// 思想：单一职责原则
var CreateDiv = function (html) {
  this.html = html;
  this.init();
};
CreateDiv.prototype.init = function () {
  var div = document.createElement('div');
  div.innerHTML = this.html;
  document.body.appendChild(div);
};

var ProxySingletonCreateDiv = (function () {
  var instance;
  return function (html) {
    if (!instance) {
      instance = new CreateDiv(html);
    }
    return instance;
  };
})();
