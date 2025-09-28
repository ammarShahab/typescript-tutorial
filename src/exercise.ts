//Exercise-1: student profile exercise

// create a Student type with the following properties:
type Student = {
  name: string;
  age: number;
  isEnrolled: boolean;
  courses: string[];
  scores: number[];
  info: [string, number, boolean];
};

// create two student objects and set the type to Student
const student1: Student = {
  name: "Arham",
  age: 7,
  isEnrolled: true,
  courses: ["English", "Bangla", "Math"],
  scores: [90, 85, 98],
  info: ["Arham", 7, true],
};

const student2: Student = {
  name: "Afnan",
  age: 6,
  isEnrolled: false,
  courses: [],
  scores: [80, 75, 88],
  info: ["Afnan", 6, false],
};

// now create a function to display student profile and use void as it does not return any value
function getStudentInfo(student: Student): void {
  console.log(`Name: ${student.name}`);
  console.log(`Age: ${student.age}`);
  console.log(`Course Enrolled: ${student.isEnrolled}`);
  console.log(
    `Courses Taken: ${
      student.courses.length > 0 ? student.courses.join(", ") : 0
    }`
  );
}

getStudentInfo(student1);
getStudentInfo(student2);
