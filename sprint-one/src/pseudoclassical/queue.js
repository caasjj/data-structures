var Queue = function() {
	this._storage = {},
	this._head = 0;
	this._tail = 0;
};

Queue.prototype.enqueue = function(value){
	this._storage[this._tail++] = value;
};

Queue.prototype.dequeue = function(){
	if(this._head < this._tail){  
	  var result = this._storage[this._head];
	  delete this._storage[this._head];
	  this._head++;
	  return result;
	}
};

Queue.prototype.size = function(){
	return this._tail - this._head;
};


var queue = new Queue();