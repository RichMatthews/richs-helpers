  // Array.prototype.insideMyArray = function(value) {
  //   if (typeof value == 'object') {
  //   console.log('object!')
  //   }
  //   for (var i=0; i < this.length; i++){
  //   if (this[i] == value) {
  //     return true;
  //     }
  //   }
  //   return false;
  // }

const rhInsideArray = function(value, array) {
  console.log('workyworks');
  if (typeof value == 'object') {
    console.log('object!')
  }
  for (var i=0; i < array.length; i++){
    if (array[i] == value) {
      return true;
      }
    }
  return false;
}

const rhShuffle = function(array) {
  let arrayClone = array.slice(0);
  let tempArray = [];
  while(arrayClone.length > 0){
    const min = 0;
    const max = (arrayClone.length);
    const val = Math.floor(Math.random() * (max-min) + min)
    const index = arrayClone.indexOf(arrayClone[val])
    const removedItem = arrayClone.splice(index, 1)
    tempArray = tempArray.concat(removedItem)
  }
  arrayClone = tempArray;
  return arrayClone;
}

  const rhObjComparison = function(comparingObject, arrayOfObjects) {
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

module.exports = {
  rhInsideArray,
  rhShuffle,
  rhObjComparison
}
