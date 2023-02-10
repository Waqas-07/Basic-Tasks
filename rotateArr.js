let arr = [1,2,3,4,5,6,7];
let k = 3;
for (i = 1; i <= k; i++){
    let A = arr.pop();
    arr.unshift(A);
}
console.log(arr);




