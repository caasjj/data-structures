var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._size = 0;

};

HashTable.prototype.rehash = function(size) {
  var temp = this._storage;
  this._limit = size;
  this._storage = makeLimitedArray(this._limit);
  temp.each( function(value) {
    this._storage.insert( value.key, value);
  });
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage[i] = v;
  this._storage[i].key = k;
  if (++this._size >= Math.floor(this._limit * 0.75 ) ) {
    this.rehash(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage[i] || null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  delete this._storage[i];
  if (--this._size < Math.floor(this._limit * 0.25) ) {
    this.rehash( this._limit / 2);
  }
};

