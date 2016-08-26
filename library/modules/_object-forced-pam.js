// Forced replacement prototype accessors methods
module.exports = require('./_library')|| !require('./_fails')(function(){
  var K = Math.random();
  // In FF throws only define methods
  var obj = {};
  __defineSetter__.call(obj, K, function(){ /* empty */});
  delete obj[K];
});
