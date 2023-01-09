
// Напишите функцию которая заполняет массив нужными данными 
 let arr = ['a', 'a', 'a', 'a'] // -> [4, 'a'] 
  let arr2 = [];

  for (i in arr) {
    if (arr2[arr[i]] != undefined) {
      (arr2[arr[i]]++)
    } else {
      (arr2[arr[i]] = 1)
    }
  }
  console.log(arr2);
 
 
 
 
 
 
 
 
 
 
 
 
 
  //2
// compact
// Убрать все не желательные элементы 
/* let arr = ['hello', null, 0, true, false, 1, undefined, '', NaN]
console.log (arr.filter(Boolean))
 */





//3
// unique
// Оставить в массиве только оригинал
/*  let arr = ['a', 'b', true, 'a', false, 'b', true]
console.log(arr.filter((v, i, a) => a.indexOf(v) === i)) */





// 4
// Проверить массив на схожесть
/* let arr = [1,2,3,4,5]
let arr2 = [1,2,3,4,5]

console.log(arr[0] === arr2[0]) */