"use strict";
exports.__esModule = true;
var Observer = [];
var location = getLocation();
function getLocation() {
    var _a = window.location, pathname = _a.pathname, search = _a.search, hash = _a.hash;
    return ({
        pathname: pathname,
        search: search,
        hash: hash,
        state: null
    });
}
var routerListener = function (fn) {
    Observer.push(fn);
    return function () {
        Observer = Observer.filter(function (i) { return i !== fn; });
    };
};
// 用于处理浏览器前进后退操作
window.addEventListener('popstate', function () {
    location = getLocation();
    Observer.forEach(function (fn) { return fn(location); });
});
function push() {
    Observer.forEach(function (fn) { return fn(location); });
}
routerListener(function () {
    console.log('sd');
});
push();
