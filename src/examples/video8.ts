let name1: string | number = "ba trung";
name1 = 10;

// let employee: object;
// employee = {
// firstName: 'Eric',
// lastName: 'Pham',
// age: 25,
// jobTitle: 'Web Developer'
// };
// console.log(employee);
// employee = 10; //error

// let employee: {
//   firstName: string;
//   lastName: string;
//   age: number;
//   jobTitle: string;
// };
// employee = {
//   firstName: "Eric",
//   lastName: "Pham",
//   age: 25,
//   jobTitle: "Web Developer",
// };

// let employee: {
//   firstName: string;
//   lastName: string;
//   age: number;
//   jobTitle: string;
// } = {
//   firstName: "Eric",
//   lastName: "Pham",
//   age: 25,
//   jobTitle: "Web Developer",
// };

type TEmployee = {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
};

let employee: TEmployee = {
  firstName: "Eric",
  lastName: "Pham",
  age: 25,
  jobTitle: "Web Developer",
};

interface IEmployee {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
}
let employee1: IEmployee = {
  firstName: "Eric",
  lastName: "Pham",
  age: 25,
  jobTitle: "Web Developer",
};
