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

  var i = getIndexBelowMaxForKey(k, this._limit);
  var hashBucket = this._storage.get(i) || [];
  var that = this;
  if (hashBucket && hashBucket.length > 0) {
    // tried functional instead fo for loop ... ran into problem
    // returning early from 'insert' when a key is repeated and we
    // have to copy instead of add. So, logic looks/is sucky.
    hashBucket.forEach( function(value, idx, arr) {
      if ( value[0] === k) {
        arr[idx]=[k,v];
        console.log('repeat key on index ', idx, ':', k);
      } else {
        arr.push([k,v]);
        that._size++;
      }
    });
  } else {
    hashBucket.push([k,v]);
    this._size++;
  }
  this._storage.set(i, hashBucket);
  if (this._size >= Math.floor(this._limit * 0.75 ) ) {
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

