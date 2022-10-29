let str = "is2 Thi1s T4est 3a"
let obj = {};


// breaks string into words
let strWords = str.split(' ');
//console.log(strWords);

// test for number in a string

strWords.forEach(element => 
assaignStrValue(element))

//  create an object that holds a string with a value from its number


//what number does each string hold
function assaignStrValue(str){
  
  let strArr = str.split('');
  for (i = 0; i < strArr.length; i ++){
  if (! isNaN(Number(strArr[i]))){
    obj[str] = Number(strArr[i]);
  } 
  
   }
  
}
console.log(obj);

const sortable = Object.fromEntries(
    Object.entries(obj).sort(([,a],[,b]) => a-b)
);

console.log(Object.keys(sortable).join());