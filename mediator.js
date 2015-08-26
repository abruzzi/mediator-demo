var _ = require('lodash');

function Mediator() {
  this.peers = [];
}

Mediator.prototype.register = function(peer) {
  this.peers.push(peer);
}

Mediator.prototype.notify = function(message, sender) {
  _.without(this.peers, sender).forEach(function(peer) {
    peer.execute(message, sender);
  });
}

module.exports = Mediator;
