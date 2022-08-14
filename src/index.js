module.exports = function reverse (n) {
  num = String(Math.abs(n));
  let arr = [];
  for (let i = 0; i < num.length; i++) {
    if (i < num.length-1) {arr[num.length-1-i]=num.slice(i,i+1)}
    else {arr[0] = num.slice(i)}
  }
  let res = Number(arr.join(''));
  return(res);
}
