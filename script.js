document.body.style.backgroundColor="Cornflowerblue";
document.body.style.textAlign="center";
document.body.style.fontSize="34px";
document.body.style.fontWeight="600";

document.getElementById("text").innerHTML="მოცემულია მასივი: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]";


var array=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var index=0;
var sum=0;
while (index < array.length)
{
    sum +=array[index];
 
    index++;
}

document.getElementById("text2").innerHTML="მასივის ჯამია: " + sum;