var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._size = 0;

};

HashTable.prototype.rehash = function(size) {
  temp = this._storage;

  this._limit = size;
  this._storage = makeLimitedArray(this._limit);
  this._size = 0;
  var that = this;
  temp.each( function(bin) {
    if (bin && bin.length) {
      bin.forEach( function(value) {
        that.insert( value[0], value[1]);
      });
    }
  });
  console.log('Reshash done');
};

HashTable.prototype.insert = function(k, v){
  if (this.retrieve(k)) {
    this.remove(k);
  }
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, [k, v]);
  if (++this._size >= Math.floor(this._limit * 0.75 ) ) {
    this.rehash(this._limit * 2);
    console.log('Rehashed Up!');
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bin = this._storage.get(i);
  var result = null;
  if (bin && bin.length) {
    bin.forEach(function(val){
      if (val[0] === k) {
        result = val[1];
      }
    });
  }
  return result;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  bin = this._storage.get(i);
  if (bin && bin.length) {
    var that = this;
    bin.forEach(function(val, idx) {
      if( val[0] === k) {
        bin.splice(idx, 1);
        --that._size;
      }
    });
    if (this._size < Math.floor(this._limit * 0.25)) {
      this.rehash(this._limit/2);
    }
  }
};

