var makeTree = function(value, parent){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  newTree.parent = parent || null;
  extend(newTree, treeMethods);
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  if (!this.children) {
    this.children = [makeTree(value, this)];
  } else {
    this.children.push( makeTree(value, this) );
  }
};

treeMethods.contains = function(target){

  if (this.value === target ) {
    return true;
  } else if (this.children) {
    for(var i=0; i< this.children.length; i++) {
      if(this.children[i].contains(target)) {
        return true;
      }
    }
  }
  return false;
};

treeMethods.removeFromParent = function() {
  return this;
};

var extend = function(targ, obj) {
  for(var p in obj) {
    if (!targ.hasOwnProperty(p)) {
      targ[p] = obj[p];
    }
  }
};

