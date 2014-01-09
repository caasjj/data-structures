var makeStack = function() {
  	var instance = Object.create(stackMethods);
	instance._storage = {};
	instance._size = 0;

  	return instance;
};

var extend = function(to, from){
  for (var key in from){
    to[key] = from[key];
  }
};

var push = function(value){
  this._size++;
  this._storage[this._size] = value;
};

var pop = function(){
  if(this._size) {
    var result = this._storage[this._size];
    delete this._storage[this._size];
    this._size--;
  }
  return result;
};

var size = function(){
  return this._size;
};

var stackMethods = {
	push: push,
	pop: pop,
	size: size
};