
    /* 1 */ 
 /* let name = "Alex"
 let money  = 10000
 let account = 7777

 let user = prompt('What is your name?')


 if(user === "Alex"){

    let number = prompt('What is your account number')
    if(number === "7777" ){ 

        let cash = prompt("How much to cash out?") 
        if(cash <= 10000){
           alert("Perfect")

           if (cash <= 10000 ) {
            console.log(10000-cash)
           } else {
            alert ("Insufficient funds")
           }

        } else {
            alert ("Insufficient funds")
          }

    } else{
     alert("User is not found bye")
    }

    

 } else {
    alert("User is not found bye")
 } 
 */


 
 /* 2 */

 let name = prompt("What is your name?")

 let cash = prompt("How much money do you have?")


 if(name[0] === 'a' || name[0] === 'A' && cash >= 100){
    
   let age = prompt("How old are you?")
  if( age >= '20' && age <= '40'){

   let member = prompt("How many people are you?")
   if(member <= 10){
       alert("perfect")
   } else {
       alert("oh sorry we do not have enough space")
   }
  } else{
   alert('bye')
  }


 } else {
    alert('bye')
 }