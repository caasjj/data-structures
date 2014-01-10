var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (list.head === null) {
      list.head = list.tail = makeNode(value);
    } else {
      list.tail.next =  makeNode(value);
      list.tail = list.tail.next; 
    }
  };

  list.removeHead = function(){
    list.head = list.head.next;
  };

  list.contains = function(target, node){
    if (!list.head) {
      return false;
    } else {
      var temp = list.head;
      while (temp.value !== target) {
        if (temp.next === null ) {
          return false;
        } 
        temp = temp.next;
      }
      return true;
    }
  };

  list.addToHead = function(value) {
    var node = makeNode(value);
    node.next = list.head;
    list.head = node;
  };

  list.removeTail = function() {
    if (list.tail === list.head) {
      list.head = list.tail = null;
    } else {
      var node = list.head;
      while(node.next !== list.tail){
        node = node.next;
      }
      list.tail = node;
      list.tail.next = null;
    }
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
