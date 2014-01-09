var makeStack = function() {
  // Hey! Copy your code from src/functional/queue.js and paste it here
  var instance = {
  	stackSize: 0,
  	storage: {}
  };

  extend(instance, stackMethods);

  return instance;
};

var stackMethods = {

	push: function(value){
		this.storage[this.stackSize] = value;
		this.stackSize++;
	},

	pop: function(){
		var result;
		if(this.stackSize) {
			this.stackSize--;
			result = this.storage[this.stackSize];
			delete this.storage[this.stackSize];
		}
		return result;
	},

	size: function(){
		return this.stackSize;
	}
};