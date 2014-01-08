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
    size++;
  };

  instance.pop = function(){
    if(size) {
      size--;
    }
  };

  instance.size = function(){
    return size;
  };
  
    return instance;
  };