function zipWith(fn,array1,array2) {
    const minLength = Math.min(array1.length, array2.length);
    let aggregateArray = [];
    for (var i = 0; i < minLength; i++) {
      aggregateArray.push(fn(array1[i], array2[i]));
    }
    return aggregateArray;
  }
