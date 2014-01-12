var expect = chai.expect;
var assert = chai.assert;

describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it("should add values to a set", function(){
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    assert.isTrue(set.contains("Danny Glover"));
    assert.isTrue(set.contains("Susan Sarandon"));
  });

  it("should remove values from a set", function(){
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    assert.isFalse(set.contains('Mel Gibson'));
  });

  it("should be able to handle numbers", function(){
    set.add(5);
    assert.isTrue(set.contains(5));
  });

  it("should be able to handle arbitrary objects", function(){
    var obj = { prop: 'AnObj' };
    set.add( obj );
    assert.isTrue(set.contains( obj ));
  });

});
