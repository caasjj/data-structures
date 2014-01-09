var makeQueue = function(){
  var instance = {}, storage = {}, head=0, tail=0;

  // Implement the methods below
  instance.enqueue = function(value){
    storage[tail++] = value;
  };

  instance.dequeue = function(){
    
    if(head < tail){  
      var result = storage[head];
      delete storage[head];
      head++;
      return result;
    }
    
  };

  instance.size = function(){
    return tail - head;
  };

  return instance;
};

// c b a