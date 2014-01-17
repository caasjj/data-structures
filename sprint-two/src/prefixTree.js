var PrefixTree = function(rank) {
  this.children = {}
  this.rank = rank;
};

PrefixTree.prototype.insert = function(word, rank) {

  var addLetter = function addLetter(node, letter, rank) {
    if (!node.hasChild(letter)) {
      return node.addChild(letter, rank);
    }
    else {
      node.children[letter].rank = node.children[letter].rank || rank;
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
  var node = this;
  // look for a word in the dictionary
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

PrefixTree.prototype.getSubtrees = function(digit) {
  var letters = [null, null, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  if (!letters[digit]) return;
  var chars = letters[digit]
  var nodes = [];
  for(var idx=0; idx<chars.length; idx++) {
    if (this.hasChild(chars[idx])) 
      nodes.push(this.children[chars[idx]]);
  }
  return nodes;
};