function Component(mediator){
    this.mediator = mediator;
    this.mediator.register(this);
}

Component.prototype.execute = function(message, sender) {
  throw new Error("not implemented");
}

Component.prototype.post = function(message) {
  this.mediator.notify(message, this);
}

module.exports = Component;
