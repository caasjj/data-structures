var makeBinarySearchTree = function(value){

  var tree = {};
  tree.value = value;
  tree.left = null;
  tree.right = null;
  extend(tree, binTreeMethods);
  return tree;

};

var binTreeMethods = {};

binTreeMethods.insert = function(value) {

  if (value >= this.value) {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = makeBinarySearchTree(value);
    }
    return;
  }

  if (this.left) {
    this.left.insert(value);
  } else {
    this.left = makeBinarySearchTree(value);
  }

};

binTreeMethods.contains = function(value) {

  if (this.value === value) {
    return true;
  } else if (value >= this.value) {
      if (this.right) {
        return this.right.contains(value);
      } else {
        return false;
      }
    } else if (this.left) {
      return this.left.contains( value);
    } else {
      return false;
    }
};

binTreeMethods.depthFirstLog = function(func) {

  func(this.value);
  var junkToAppeaseSublime = this.right && this.right.depthFirstLog( func );
  junkToAppeaseSublime = this.left && this.left.depthFirstLog( func );

};