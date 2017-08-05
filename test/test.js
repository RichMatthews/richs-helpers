let assert = require('assert');

const testArray = ['a', 'b', 'c', 'd', 'e'];
const insideArray = function(a, array) {
  for (var i=0; i < array.length; i++){
    if (array[i] == a) {
      return true;
      }
    }
    return false;
}
const objComparison = function(comparingObject, arrayOfObjects) {
let flag;
 for (var i=0; i < arrayOfObjects.length; i++){
    if (Object.keys(comparingObject).length == Object.keys(arrayOfObjects[i]).length){
       const keys = Object.keys(arrayOfObjects[i])
	   flag = false
       for(var j=0; j < keys.length; j++) {
			if(comparingObject[keys[j]] == arrayOfObjects[i][keys[j]]) {
				flag = true
				return flag;
			}
		}
    }
	flag = false;
 }
 return flag;
}

const richMinFunc = function(array) {
  let lowestVal;
  let temp;
  temp = array[i];
  for (var i=0; i < array.length; i++){
    if (temp <= array[i]) {
      lowestVal = temp;
    }
    else {
      temp = array[i]
    }
  }
  lowestVal = temp;
  return lowestVal;
}
describe('Functions', function() {

  describe('insideArray', function() {
    it('should return true when value inside array', function() {
      const test = insideArray('a', testArray)
      assert.equal(test, true)
    });
    it('should return false when value not inside array', function() {
      const test = insideArray('z', testArray)
      assert.equal(test, false)
    });
  });

  describe('object comparison', function() {
    it('should return true when comparing object is inside array', function() {
      const comparingObject = {a: 1};
      const arrayOfObjects = [{a: 1}, {b: 2}, {c: 3}];
      const test = objComparison(comparingObject, arrayOfObjects)
      assert.equal(test, true)
    });
    it('should return false when comparing object is not inside array', function() {
      const comparingObject = {d: 4};
      const arrayOfObjects = [{a: 1}, {b: 2}, {c: 3}];
      const test = objComparison(comparingObject, arrayOfObjects)
      assert.equal(test, false)
    });
    it('should return true no matter where the object is inside the array', function() {
      const comparingObject = {a: 1};
      const arrayOfObjects = [{b: 2}, {a: 1}, {c: 3}];
      const test = objComparison(comparingObject, arrayOfObjects)
      assert.equal(test, true)
    });
    it('should return false if the matching objects have the same key but different number of properties', function() {
      const comparingObject = {a: 1};
      const arrayOfObjects = [{b: 2}, {a: 1, b: 2}, {c: 3}];
      const test = objComparison(comparingObject, arrayOfObjects)
      assert.equal(test, false)
    });
  });

  describe('min value in array', function() {
    it('should return a single value', function() {
      const array = [5, 2, 124, 55, 23]
      const test = richMinFunc(array);
      assert.equal(test, 2);
    });
  });

});
