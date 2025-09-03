// let stu_info = [{name:'kavya' ,  marks:87} ,
//     {name:'navya' ,  marks:85},
//     {name:'lasya' ,  marks:89},
//     {name:'sravya' ,  marks:67}]
//  avg_marks = stu_info.sum(marks) / stu_info.marks.length
// console.log(stu_info.name);
let stu_info = [
    { name: 'kavya', marks: 87 },
    { name: 'navya', marks: 85 },
    { name: 'lasya', marks: 89 },
    { name: 'sravya', marks: 67 }
];

function calculateAverage(students) {
    if (students.length === 0) {
        return 0;
    }
    
    let totalMarks = 0;
    for (let i = 0; i < students.length; i++) {
        totalMarks += students[i].marks;
    }
    
    const average = totalMarks / students.length;
    return average;
}

const avg_marks = calculateAverage(stu_info);
console.log("Average marks: " + avg_marks);