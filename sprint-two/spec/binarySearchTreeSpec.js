var assert = chai.assert;

describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree(5);
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it("should insert values at the root of the tree", function(){
    expect(binarySearchTree.value).to.equal(5);
  });

  it("should insert values at the correct location in the tree", function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it("should have a working 'contains' method", function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    assert.isTrue(binarySearchTree.contains(7));
    assert.isFalse(binarySearchTree.contains(8));
  });

  it("should execute a callback on every value in a tree using 'depthFirstLog'", function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    assert.deepEqual(array, [5,2,3]);
    assert.notStrictEqual(array, [5,2,3]);
  });

  it("should not alter a tree of 1 element", function() {
    binarySearchTree.reBalance();
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.depthFirstLog(func);
    assert.deepEqual(array, [5]);
    assert.notStrictEqual(array, [5]);
  });

  it("should balance an imbalanced tree of 3 elements", function() {
    binarySearchTree.insert(6);
    binarySearchTree.insert(7);
    binarySearchTree.reBalance();
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.depthFirstLog(func);
    assert.deepEqual(array, [6, 7, 5]);
    assert.notStrictEqual(array, [6, 7, 5]);
  });

  it("should balance an imbalanced tree of 7 elements", function() {
    binarySearchTree.insert(6);
    binarySearchTree.insert(7);
    binarySearchTree.insert(8);
    binarySearchTree.insert(9);
    binarySearchTree.insert(10);
    binarySearchTree.insert(11);
    binarySearchTree.reBalance();
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.depthFirstLog(func);
    assert.deepEqual(array, [8, 10, 11, 9, 6, 7, 5]);
    assert.notStrictEqual(array, [8, 10, 11, 9, 6, 7, 5]);
  });

});
