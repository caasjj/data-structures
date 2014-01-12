var Stack = function() {
  // Hey! Copy your code from src/prototypal/stack.js and paste it here
  this.storage = {};
  this.stackSize = 0;
};

// Implement the methods below
Stack.prototype.push = function(value){
	this.storage[this.stackSize] = value;
	this.stackSize++;
};

Stack.prototype.pop = function(){
	var result;
	if(this.stackSize) {
		this.stackSize--;
		result = this.storage[this.stackSize];
		delete this.storage[this.stackSize];
	}
	return result;
};

Stack.prototype.size = function(){
	return this.stackSize;
};