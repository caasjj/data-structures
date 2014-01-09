var Queue = function() {
  // Hey! Copy your code from src/prototypal/queue.js and paste it here
  this.read = 0;
  this.write = 0;
  this.storage = {};
};

Queue.prototype.enqueue= function(value) {
	this.storage[this.write] = value;
	this.write++;
};

Queue.prototype.dequeue=function(){
	var result;
	if(this.read < this.write) {
		result = this.storage[this.read];
		delete this.storage[this.read];
		this.read++;
	}
	return result;
};

Queue.prototype.size=function(){
	return this.write - this.read;
};
