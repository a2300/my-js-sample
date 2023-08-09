const person = {
  name: "Peter",
  age: 42
};

const careerData = {
  title: "Developer",
  company: "ABC Software"
}

const personWithCareerData = {
  ...person,
  ...careerData
};

console.log(personWithCareerData);

const numbers = [1, 2, 3, 4, 5];
const newNumber = [
  0,
  ...numbers,
  6
];

console.log(newNumber);