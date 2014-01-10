var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);  
  this._storage[i] = v;
  if (++this._size >= 7 ) {
    var temp = this._storage;
    this._limit = 16;
    this._storage = makeLimitedArray(this._limit);
    extend(this._storage, temp);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage[i] || null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  delete this._storage[i];
  if (--this._size < 3 ) {
    var temp = this._storage;
    this._limit = 8;
    this._storage = makeLimitedArray(this._limit);
    extend(this._storage, temp);
  }
};