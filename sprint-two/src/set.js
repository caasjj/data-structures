var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage = this._storage || {};
  this._storage[ ''+item ] = item;
};

setPrototype.contains = function(item){
  return this._storage && this._storage.hasOwnProperty( '' + item );
};

setPrototype.remove = function(item){
  delete this._storage[ '' + item ];
};
