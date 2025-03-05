let id = setInterval(() => {
    console.log("helloeorld");
}, 2000);

setTimeout(() => {
    clearInterval(id);
}, 1000);
