
var PrefixTree = function(rank) {

  this.children = {}
  this.rank = rank;

};

PrefixTree.prototype.insert = function(word, rank) {

  var addLetter = function(node,letter, rank) {
    if (!node.children.hasOwnProperty[letter]) {
      return node.addChild(letter, rank);
    }
    else {
      return node.children[letter];
    }
  };

  node = this;
  for(var idx=0; idx<word.length; idx++) {
    if( idx === word.length - 1) {
      node = addLetter(node, word[idx], rank );
    } else {
      node = addLetter(node, word[idx]);
    }
  }
};

PrefixTree.prototype.trace = function(word) {
  var rank = null;
  return rank;
};

PrefixTree.prototype.addChild = function(letter, rank) {
  var newNode = new PrefixTree(rank);
  this.children[letter] = newNode;
  return newNode;
};

PrefixTree.prototype.hasChild = function(letter) {
  return this.children.hasOwnProperty(letter);
};


var randkedWords = {
  'hello' : 1,
  'the' : 1 ,
  'there' : 2
};

var pt = new PrefixTree();
for(var word in randkedWords) {
  pt.insert(word, randkedWords[word]);
}