const getInfo = ({ firstName, lastName, age, name }) =>
  `${firstName} ${lastName}. Age: ${age}. Full name: ${name}`;

const person1 = {
  firstName: `Son Tung`,
  lastName: `M-TP`,
  age: 25,
};

console.log(getInfo(person1)); //Son Tung M-TP. Age: 25. Full name: undefined
console.log(getInfo({ firstName: `Huan`, lastName: `Rose` })); //Huan Rose. Age: undefined. Full name: undefined

const person2 = {
  firstName: `Son Tung`,
  lastName: `M-TP`,
  age: 25,
};
console.log(person1 === person2); //false

const setPersonSname = (person, name) => (person.name = name);
setPersonSname(person1, `Son Tung M-TP`);
console.log(getInfo(person1)); //Son Tung M-TP. Age: 25. Full name: Son Tung M-TP
console.log(getInfo({ ...person2, name: `Huan Hoa Hong` })); //Son Tung M-TP. Age: 25. Full name: Huan Hoa Hong

const students = [
    { name: "Sam", grade: 14, point: 26 },
    { name: "Devlin", grade: 15, point: 25 },
    { name: "Alex", grade: 15, point: 15 },
  { name: "Eagle", grade: 13, point: 12 },
];

students.sort((a, b) => a.name.localeCompare(b.name));
students.sort((a, b) => b.grade - a.grade);
console.log(students);

students.forEach(student => {
    if(student.point > 15)
        console.log(student);
})

const totalPoint = students.reduce((total, student) => {
    if(student.grade == 15)
        return total + student.point;
    return total;
}, 0);
console.log(totalPoint);

const newStudent = students.filter(student => student.name != `Sam`);
console.log(newStudent);