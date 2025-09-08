const studentData=[
    {name:'Alice',marks:91},
    {name:'Bob',marks:45},];


const passingMarks=50;

function managestudentGrades(students){
    const upperCaseStudents = students.map(student =>{
        return{
            name:student.name.toUpperCase(),
            marks:student.marks
        }; 

    });
    const passedStudents = upperCaseStudents.filter(student => student.marks>=passingMarks);

    passedStudents.forEach(student =>{
        const shortName=student.name.slice(0,3);
        const hasA = student.name.includes('A')?"Includes 'A'":"No 'A'";
        let grade;
        if(student.marks>=90){
            grade='A';
        }
        else if(student.marks>=75){
            grade='B';
        }
        else if(student.marks>=passingMarks){
            grade='C';
        }
        else{
            grade='F';
        }
        // console.log(Name:${shortName}, Marks:${student.marks}, Grade:${grade}, ${hasA});
        console.log("Name:"+shortName+",Marks:"+student.marks+",Grade:"+grade+","+hasA);
    });
}

managestudentGrades(studentData);