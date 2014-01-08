var makeQueue = function(){
  var instance = {};
  var read = 0;
  var write = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  instance.enqueue = function(value){
    storage[write] = value;
    write++
  };

  instance.dequeue = function(){
    var result;
    if(read < write) {
      result = storage[read];
      delete storage[read];
      read++;
    }
    return result;
  };

  instance.size = function(){
    return write - read;
  };

  return instance;
};
