var makeQueue = function(){
  var instance = {
  	_storage : {},
  	_head: 0,
  	_tail: 0
  }

  extend(instance, queueMethods);

  return instance;
};

var extend = function(to, from){
	for(var key in from)
		to[key] = from[key];
}

// Implement the methods below
var enqueue = function(value){
	this._storage[this._tail++] = value;
};

var dequeue = function(){
	if(this._head < this._tail){  
	  var result = this._storage[this._head];
	  delete this._storage[this._head];
	  this._head++;
	  return result;
	}
};

var size = function(){
return this._tail - this._head;
};


var queueMethods = {
	enqueue: enqueue,
	dequeue: dequeue,
	size: size
};