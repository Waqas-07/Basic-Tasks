// Question 4
// Create a nested Create a nested for loops produce the loops produce the 
// following output.
// ....1 
// ...22
// ..333
// .4444
// 55555
let result = '';
for(i = 1; i <= 5; i++){
    for(j = 1; j <= 5 - i; j++){
        result = result + "."
    }      
    for (k = 1; k <= i; k++){
        result = result + i
    }
    console.log(result);
    result = '';
}