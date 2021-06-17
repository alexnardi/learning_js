var name; // declaration

name = "alex"; //assignment

console.log(typeof name); // tipo de dado

let age, isHuman;

age = 27;
isHuman = true;

console.log(name, age, isHuman);
console.log("O " + name + " tem " + age + " anos."); // concatenando os valores
console.log(`O ${name} tem ${age} anos.`); // interpolando valores com template literals com CRASE
-------------

//obejct
const person = {
  name: "John",
  age: 30,
  Weight: 88.6,
  isAdmin: true,
};

console.log(`${person.name} tem ${person.age} anos`)
---------------------------------
   //Array
   const animals = [
    "Lion",
    "Monkey",
    {
      name: "Cat",
      age: 3,
    },
  ];

  // acessar valores dentro do array

  console.log(animals[2]);
  ----------------------------


Exercícios:
     //   let weight
      //   console.log(typeof weight)
      //undefined//

      //   let name = "alex"
      //   let age = 27
      //   let weight = 62.5
      //   let isSubscribed = true

    //   let student = {
    //     name: "alex",
    //     age: 27,
    //     weight: 62.5,
    //     isSubscribed: true,
    //   };

      //   console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kilos `);

    //   let students = [student];

    //   console.log(students[0]);

    //   const flavia = {
    //     name: "flavia",
    //     age: 24,
    //     weight: 61.5,
    //     isSubscribed: false,
    //   };
    //   students[1] = flavia
    //   console.log(students)
------------------
