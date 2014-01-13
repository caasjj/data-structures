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

binTreeMethods.sort = function() {
  var result = [];
  var sort = function(node) {
    if (!node) return;
    sort(node.left);
    result.push(node.value);
    sort(node.right);
  }
  sort( this );
  return result;
}

binTreeMethods.reBalance = function() {

  var reIndex = function(array) {
    var result = [];
    var recurse = function(subArray) { 
      var L = subArray.length;
      var N = Math.floor(L/2);
      if (L < 2) {
        if (L===1) {
          result.push(subArray[0]);
        }
        return
      }
      result.push( subArray[N] );
      recurse( subArray.slice(0,N) );
      recurse( subArray.slice(N+1) );
    };
  recurse(array);
  return result;
  }

  var sortedArray = this.sort();
  var reIndexedArray = reIndex( sortedArray );
  var newTree = this;
  this.value = reIndexedArray.shift() ;
  this.left = null;
  this.right = null;
  reIndexedArray.forEach( function(value) {
    newTree.insert( value );
  });

}



