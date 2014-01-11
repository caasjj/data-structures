var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._size = 0;

};

HashTable.prototype.rehash = function(size) {
  var temp = this._storage;
  this._limit = size;
  this._storage = makeLimitedArray(this._limit);
  temp.each( function(bin) {
    bin.each( function(value, idx) {
      this._storage.insert( value.key, value);
    });
  });
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if( !this._storage[i]) {
    this._storage[i] = [];
    this._storage[i].key = [];
    this._storage[i] = v;
    this._storage[i].key = k;
  } else {
    this._storage[i].push(v);
    this._storage[i].key.push(k);
  }
  if (++this._size >= Math.floor(this._limit * 0.75 ) ) {
    this.rehash(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var idx = this._storage[i].key.indexOf(k);
  return this._storage[idx] || null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var idx = this._storage[i].key.indexOf(k);
  delete this._storage[idx];
  if (--this._size < Math.floor(this._limit * 0.25) ) {
    this.rehash( this._limit / 2);
  }
};

