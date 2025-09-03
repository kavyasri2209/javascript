let students = [
    { name: 'kavya', marks: 87 },
    { name: 'navya', marks: 85 },
    { name: 'lasya', marks: 89 },
    { name: 'sravya', marks: 67 }
];
const findHighestScorer = (students) => {

  let highestScorer = students[0];

  for (let i = 1; i <students.length; i++) {
    if (students[i].marks > highestScorer.marks) {
      highestScorer = students[i];
    }
  }

  return highestScorer;
  
};
const highestScorer = findHighestScorer(students);
console.log(highestScorer.marks);
