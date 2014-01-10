var expect = chai.expect;
var assert = chai.assert;

describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(linkedList).to.have.property('head');
    expect(linkedList).to.have.property('tail');
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).to.be.a('function');
    expect(linkedList.removeHead).to.be.a('function');
    expect(linkedList.contains).to.be.a('function');
  });

  it("should designate a new tail when new nodes are added", function(){
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it("should remove the head from the list when removeHead is called", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    console.log(linkedList);
    linkedList.removeHead();
        console.log(linkedList) ;
    expect(linkedList.head.value).to.equal(5);
  });

  it("should contain a value that was added", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    assert.isTrue(linkedList.contains(4));
    assert.isTrue(linkedList.contains(5));
    assert.isFalse(linkedList.contains(6));
  });

  it("should not contain a value that was removed", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    assert.isFalse(linkedList.contains(4));
  });

  it("shoudld add item to head", function(){
    linkedList.addToHead(4);
    assert.isTrue(linkedList.contains(4));
  });

  it("should not break linked list links when adding to head", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToHead(14);
    assert.isTrue(linkedList.contains(14));
    assert.isTrue(linkedList.contains(4));
    assert.isTrue(linkedList.contains(5));
  });

 it("should remove tail from list of more than one node", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeTail();
    assert.isFalse(linkedList.contains(5));
    assert.isTrue(linkedList.contains(4));
  });

  it("should empty list of one node", function(){
    linkedList.addToTail(4);
    linkedList.removeTail();
    assert.isFalse(linkedList.contains(4));
    assert.equal(linkedList.head, null);
  });

  // add more tests here to test the functionality of linkedList
});
