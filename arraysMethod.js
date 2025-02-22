let frnds = ["nikhil","vedant"];
for(let i=0;i<=frnds.length-1;i++)
{
    console.log(frnds[i]); //print frnds
}

frnds.push("chaitanya");
console.log();
for(let i=0;i<=frnds.length-1;i++)
    {
        console.log(frnds[i]); //print frnds and add at end index
    }

frnds.unshift("harshal");
console.log();
for(let i=0;i<=frnds.length-1;i++)
    {
        console.log(frnds[i]);  //print frnds and add at first index
    }

frnds.pop();
console.log();
for(let i=0;i<=frnds.length-1;i++)
    {
        console.log(frnds[i]); //delete from end and print 
    }

frnds.shift();
console.log();
for(let i=0;i<=frnds.length-1;i++)
    {
        console.log(frnds[i]);  //delet from first index and print
    }
