var makeStack = function() {
  // Hey! Copy your code from src/functional-shared/stack.js and paste it here
  var instance =  Object.create(stackMethods);
  
  	instance.stackSize = 0,
  	instance.storage = {}
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