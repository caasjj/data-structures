
var makeStack = function(){
    var instance = {};
    var size = 0;

  // Use an object with numeric keys to store values
    var storage = {};
  /* START PROMPT
    var size; // Hint: set an initial value here
  -END PROMPT */

  // Implement the methods below
  instance.push = function(value){
    storage[size] = value;
    size++;
  };

  instance.pop = function(){
    var result;
    if(size) {
      size--;
      result = storage[size];
      delete storage[size];
    }
    return result;
  };

  instance.size = function(){
    return size;
  };
  
    return instance;
  };
