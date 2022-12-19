
// 1
/* let arr = ['Mukhlisa', "Ilon", 'Darya', 'Devid', 'islom', 'Shakh', 'Timoxa', 'Ravshan', 'Ibragim', "Далер", 'daler', "Aлександр"]

console.log(arr.sort((a,b) => b.length - a.length)) */

//2
/*  let cars = [5000, 5000,10000, 16000, 25000, 35000, 50000,,10000, 16000, 25000, 35000, 50000,70000, 15000]
    
    let cheap = cars.filter(function(number){
        return number < 35000
    } )
  
  console.log(cheap) */

//3
let arr = [1, 2, false, 'hello', 24,'world', undefined, null,  'error', 22 ];
let n = arr.filter(item => typeof item === 'number')

if( n.length >= 5 ){
    console.log("good")
} else {
    console.log("bad")
}
