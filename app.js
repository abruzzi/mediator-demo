var sys = require('sys')
var exec = require('child_process').exec;
var notifier = require('node-notifier');

var Mediator = require('./mediator');
var Component = require('./component');

var mediator = new Mediator();

var c1 = new Component(mediator);
c1.execute = function(data) {
  console.log("c1: "+data);
}

var c2 = new Component(mediator);
c2.execute = function(data) {
  console.log("c2: "+data);
}

var c3 = new Component(mediator);
c3.execute = function(data) {
  console.log("c3: "+data);
}

mediator.register(c1);
mediator.register(c2);
mediator.register(c3);

c1.post('hello');
console.log('-------------------');
c2.post('world');
