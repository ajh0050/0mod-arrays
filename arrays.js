var smallGroup = ["adam","josh","courtney","jocelle"];
var birthYears = [95,93,60,65];
var yesNo = [true,false,true,false];

//remove the last item "jocelle" from the array
smallGroup.pop();

//add a new item to the end of the array
birthYears.push(85);

//remove the first item from the array
yesNo.shift();

console.log(smallGroup);
console.log(birthYears);
console.log(yesNo);


//I will write "adam was born in 95 is true"

console.log(`${smallGroup[0]} was born in ${birthYears[1]} is ${yesNo[1]}`)
