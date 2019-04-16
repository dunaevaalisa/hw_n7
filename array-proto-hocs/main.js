function compareArrays(arr1, arr2) {
  console.log(false);
  function diff(compareArrays) {
    arr1.filter(i=>arr2.indexOf(i)<0);
    arr2.filter(i=>arr1.indexOf(i)<0);
    if (arr1.length = arr2.length) {
      console.log(true);
    } else {
      console.log(false);
    }
}

function memoize(fn, limit) {
  let result = [mSum];
  mSum.args;
  mSum.result;
  const sum = (a, b) => a + b;
  const mSum = memoize(sum, 2);
  sum( 3, 4 );
  mSum( 3, 4 );
  return fn;
}
