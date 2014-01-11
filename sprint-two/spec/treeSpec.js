var expect = chai.expect;
var assert = chai.assert;

describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.removeFromParent).to.be.a('function');
    expect(tree.traverse).to.be.a('function');
    assert.isTrue('value' in tree);
  });

  it("should add children to the tree", function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it("should return true for a value that the tree contains", function(){
    tree.addChild(5);
    assert.isTrue(tree.contains(5));
  });

  it("should return false for a value that was not added", function(){
    tree.addChild(5);
    assert.isFalse(tree.contains(6));
  });

  it("should be able to add children to a tree's child", function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it("should correctly detect nested children", function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    assert.isTrue(tree.contains(7));
    assert.isTrue(tree.contains(8));
  });

  it("should be parent of all its children", function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.addChild(8);
    for(var i=0; i < tree.children.length; i++) {
      assert.equal(tree.children[i].parent, tree);
    }
  });

  it("should dissociate removed children", function(){
    tree.addChild(0);
    tree.addChild(1);
    tree.addChild(2);
    tree.children[1].addChild('a');
    tree.children[1].addChild('b');
    tree.children[1].children[0].addChild('c');

    tree.children[1].removeFromParent();
    assert.isFalse(tree.contains(1));
    assert.isFalse(tree.contains('a'));
    assert.isFalse(tree.contains('b'));
    assert.isFalse(tree.contains('c'));
  });

it("should traverse tree and execute a callback on every element", function(){
    var array = [];
    var func = function(value){ array.push(value); };
    tree = makeTree(1);
    tree.addChild(2);
    tree.addChild(3);
    tree.children[1].addChild(4);
    tree.children[1].children[0].addChild(9);
    tree.children[1].addChild(5);
    tree.children[0].addChild(6);
    tree.traverse(func);
    assert.deepEqual(array, [1, 2, 6, 3, 4, 9, 5]);
    assert.notStrictEqual(array, [1, 2, 6, 3, 4, 9, 5]);
  });

});
