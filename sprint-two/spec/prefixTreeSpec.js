var expect = chai.expect;
var assert = chai.assert;

describe("prefix tree", function() {

  describe("basic functions", function() {
    var tree;

    beforeEach(function() {
      tree = new  PrefixTree(null);
    });

    it("should have null rank in the root", function() {
      assert.equal(tree.rank, null);
    });

    it("should have 'the' with correct rank ", function(){
      tree.insert('the', 1);
      assert.equal(tree.children['t'].rank, null);
      assert.equal(tree.children['t'].children['h'].rank, null);
      assert.equal(tree.children['t'].children['h'].children['e'].rank, 1);
    });

    it("should not alter rank of 'the' with adding 'there' ", function(){
      tree.insert('the', 1);
      tree.insert('there', 2);
      assert.equal(tree.children['t'].rank, null);
      assert.equal(tree.children['t'].children['h'].rank, null);
      assert.equal(tree.children['t'].children['h'].children['e'].rank, 1);
      assert.equal(tree.children['t'].children['h'].children['e'].children['r'].rank, null);
      assert.equal(tree.children['t'].children['h'].children['e'].children['r'].children['e'].rank, 2);
    });

    it("should add 'the' when 'there' is already present ", function(){
      tree.insert('there', 2);
      tree.insert('the', 1);
      assert.equal(tree.children['t'].rank, null);
      assert.equal(tree.children['t'].children['h'].rank, null);
      assert.equal(tree.children['t'].children['h'].children['e'].rank, 1);
    });

    it("should add 'them' when 'the' and 'there' are present", function() {
      tree.insert('the', 1);
      tree.insert('there', 2);
      tree.insert('them', 3);
      assert.equal(tree.children['t'].children['h'].children['e'].children['m'].rank, 3);
    });
  });

  describe("word ranking", function() {
    var tree, randkedWords;

    beforeEach(function() {
      tree = new  PrefixTree(null);
      randkedWords = {
        'the'     : 1,
        'there'   : 2,
        'them'    : 3,
        'hello'   : 10,
        'hacker'  : 100,
        'that'    : 5,
        'thermos' : 90,
        'bat'     : 30,
        'great'   : 40,
        'go'      : 8,
        'i'       : 1
      };
      for(var word in randkedWords) {
        tree.insert(word, randkedWords[word]);
      }
    });

    it("should return subtrees corresponding to digit pressed", function() {
      var subtrees = tree.getSubtrees(4);
      expect(subtrees.length).to.eq(3);
      expect(subtrees[0]).to.equal( tree.children['g'] );
      expect(subtrees[1]).to.equal( tree.children['h'] );
      expect(subtrees[2]).to.equal( tree.children['i'] );
    });
  });

});
