var makeQueue = function() {
  // Hey! Copy your code from src/functional-shared/queue.js and paste it here
  var instance = Object.create(queueMethods);
  instance.read = 0;
  instance.write = 0;
  instance.storage = {};
  return instance;
};

var queueMethods = {
	enqueue: function(value) {
		this.storage[this.write] = value;
		this.write++;
	},
	dequeue: function(){
    var result;
    if(this.read < this.write) {
      result = this.storage[this.read];
      delete this.storage[this.read];
      this.read++;
    }
    return result;
  },
  size: function(){
    return this.write - this.read;
  }
};