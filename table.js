let n = prompt("Write your Number");

n = parseInt(n);

for (let i = n; i <= n * 10; i = i + n) {
    console.log(i);
}
