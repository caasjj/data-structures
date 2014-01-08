var makeQueue = function(){
  var instance = {}, storage = {}, size = 0, first;

  // Implement the methods below
  instance.enqueue = function(value){
    size++;
    storage[size] = value;
  };

  instance.dequeue = function(){
    if(size){
      var result = storage[size];
      delete storage[size];
      size--;      
    } 
    return result;
  };

  instance.size = function(){
    return size;
  };

  return instance;
};

// c b a