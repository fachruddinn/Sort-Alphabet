var arrToConvert = [["a", "c", "b", "e", "d"],["g", "e", "f"]];
var newArr = [];


for(var i = 0; i < arrToConvert.length; i++)
{
    newArr = newArr.concat(arrToConvert[i]);
}

newArr.sort();

var arr2 = newArr;

var newArr2 = [];
while(arr2.length) newArr2.push(arr2.splice(0,5));

console.log(newArr2)