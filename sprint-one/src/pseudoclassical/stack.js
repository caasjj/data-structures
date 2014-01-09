var Stack = function() { 
	this._storage = {};
	this._size = 0;
};

Stack.prototype.push = function(value){
  this._size++;
  this._storage[this._size] = value;
};

Stack.prototype.pop = function(){
  if(this._size) {
    var result = this._storage[this._size];
    delete this._storage[this._size];
    this._size--;
  }
  return result;
};

Stack.prototype.size = function(){
  return this._size;
};

var stack = new Stack();