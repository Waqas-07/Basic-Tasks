let array = [3,6,-2,-5,7,3]
let product = [];
for (i = 0; i < array.length - 1; i++){
   product = Math.max(array[i] * array[i + 1], product);
}
console.log(product)