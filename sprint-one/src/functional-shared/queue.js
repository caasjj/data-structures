var makeQueue = function(){
  // Hey! Copy your code from src/functional/queue.js and paste it here
  var instance = {
  	read: 0,
  	write: 0,
  	storage: {}
  };
 
  extend(instance, queueMethods);

  return instance;
};

var extend = function(to, from){
  for (var key in from){
    to[key] = from[key];
  }
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