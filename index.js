let user = prompt('any name?')
let queston = confirm("Do you want to delte this student?")

let students = [
    {
        name: "Shakhboz",
        age: 18,
        gender: "m"
    },
    {
        name: "Alexandr",
        age: 32,
        gender: "m"
    },
    {
        name: "Daler",
        age: 15,
        gender: "m"
    },
    {
        name: "Muzaffar",
        age: 19,
        gender: "m"
    },
    {
        name: "Eldor",
        age: 16,
        gender: "m"
    },
    {
        name: "Ibragim",
        age: 14,
        gender: "w"
    },
    {
        name: "Ravshan",
        age: 18,
        gender: "m"
    },
    {
        name: "Timur",
        age: 19,
        gender: "w"
    },
    {
        name: "Aziz",
        age: 15,
        gender: "w"
    },
    {
        name: "Darya",
        age: 26,
        gender: "w"
    },
    {
        name: "Mukhlisa",
        age: 16,
        gender: "w"
    }
]




let people = students.find(person => person.name === user)

let index = students.map(x => {
    return x.name;
  }).indexOf(user);

if(queston === true){
    students.splice(index, 1);

    console.log(students)
} else {
    console.log(people)
}
 

  
