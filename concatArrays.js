let arr1 = ["red", "blue"];
console.log("Array 1 is ");
console.log();
for (let i = 0; i <= arr1.length - 1; i++) {
    console.log(arr1[i]);
}

console.log();
console.log("Array 2 is ");
console.log();
let arr2 = ["black", "white"];
for (let i = 0; i <= arr2.length - 1; i++) {
    console.log(arr2[i]);
}

console.log();
console.log("after Concationation");
console.log();
let arr3 = arr1.concat(arr2);

for (let i = 0; i <= arr3.length - 1; i++) {
    console.log(arr3[i]);
}
