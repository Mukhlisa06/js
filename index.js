 /* 1 */
 let prisident = prompt('What is your name?').toLowerCase().trim()

 if(prisident === 'putin'  || prisident === 'biden' || prisident === 'shavkat' || prisident === 'zelenskiy') {
     console.log ('welcome mr' + " " + prisident)
 }  else  {
      console.log ('sorry we could not find you')
 }
 
 
 /* 2 */
 let name = prompt("What is your name?").toLowerCase().trim()
 let age = prompt("How old are you?")
 
 if(name.length % 2 === 0 && age >= 18){
     console.log('perfect')
 } else {
     console.log ("go away")
 } 