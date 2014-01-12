window.variant = document.location.search.slice(1);

define([
  'spec/verifyClass.js',
  '../lib/chai/chai.js',
  '../lib/mocha/mocha.js',
  'src/'+variant+'/stack.js',
  'src/'+variant+'/queue.js',
  '../lib/jquery/jquery.js'
], function(verifyClass, chai){

  mocha.setup('bdd');
  var expect = chai.expect;
  describe("Profiler", function() {


  var checkStack = function(numIteration) {
    var stack;
    for(var i =0; i<numIteration; i++) {
      stack = (variant === 'pseudoclassical') ? new Stack() : makeStack();
      for(var j=0; j<numIteration; j++) {
        stack.push(123);
        stack.pop();
      }
    }
  };

    beforeEach(function(){

    });

    describe('Totally dummy test', function(){
        checkStack(10000);
        it('Should ALWAYS pass', function() {
          expect(true).to.equal(true);
      });

    });
  });

  mocha.run();
});


