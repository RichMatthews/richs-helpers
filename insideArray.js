Array.prototype.insideMyArray = function(value) {
  if (typeof value == 'object') {
	console.log('object!')
  }
  for (var i=0; i < this.length; i++){
  if (this[i] == value) {
    return true;
    }
  }
  return false;
}
