var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  extend(newTree, treeMethods);
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  if (!this.children) {
    this.children = [makeTree(value)];
  } else {
    this.children.push( makeTree(value) );
  }
};

treeMethods.contains = function(target){

  var temp = this;
  result = false;

  if (this.value === target ) {
    return true;
  } else {
    if (this.children) {
        for(var i=0; i< this.children.length; i++) {
          result = result || this.children[i].contains(target);
        }
    } else {
      return false;
    }
  }
  return result;
};

var extend = function(targ, obj) {
  for(var p in obj) {
    if (!targ.hasOwnProperty(p)) {
      targ[p] = obj[p];
    }
  }
};

