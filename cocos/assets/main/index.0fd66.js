window.__require=function t(e,o,r){function n(a,i){if(!o[a]){if(!e[a]){var u=a.split("/");if(u=u[u.length-1],!e[u]){var f="function"==typeof __require&&__require;if(!i&&f)return f(u,!0);if(c)return c(u,!0);throw new Error("Cannot find module '"+a+"'")}a=u}var l=o[a]={exports:{}};e[a][0].call(l.exports,function(t){return n(e[a][1][t]||t)},l,l.exports,t,e,o,r)}return o[a].exports}for(var c="function"==typeof __require&&__require,a=0;a<r.length;a++)n(r[a]);return n}({test:[function(t,e,o){"use strict";cc._RF.push(e,"f8d8cgTTHFJXoJ8mdWfbK4s","test");var r,n=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,a=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(a=(c<3?n(a):c>3?n(e,o,a):n(e,o))||a);return c>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var a=cc._decorator,i=a.ccclass,u=(a.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.start=function(){cc.debug.setDisplayStats(!1);var t=(new cc.Node).addComponent(cc.Layout);t.type=cc.Layout.Type.HORIZONTAL,t.resizeMode=cc.Layout.ResizeMode.CONTAINER,t.node.parent=this.node,"Hello World...".split("").forEach(function(e){var o=(new cc.Node).addComponent(cc.Label);o.string=e,o.fontSize=30,o.lineHeight=30,o.node.parent=t.node,o.addComponent(cc.LabelOutline)}),t.node.children.forEach(function(t,e,o){cc.tween(t).delay(.1*e).to(.2,{y:30},{easing:"sineOut"}).to(.2,{y:0},{easing:"sineIn"}).call(function(){var e=[255,0,128][Math.floor(3*Math.random())],o=[255,128,0][Math.floor(3*Math.random())],r=[255,0,128][Math.floor(3*Math.random())];t.color=cc.color(e,o,r);var n=t.getComponent(cc.LabelOutline),c=[192,64,128][Math.floor(3*Math.random())];n.color=cc.color(c,c,c)}).delay(.1*(o.length-e)+.5).union().repeatForever().start()})},c([i],e)}(cc.Component));o.default=u,cc._RF.pop()},{}]},{},["test"]);