//11. Getter and Setter
// Getters and setters are used to access and modify the value of a property in an object. They are defined using the get and set keywords, respectively.

class Student {
  private _courseNumber = 1;
  protected subjectTaken = 5;

  constructor(public name: string, public semester: number) {}

  // in getter u can use return type, here is string
  get studentInfo(): string {
    return `Name: ${this.name} is in ${this.semester} semester`;
  }

  public get courseCount(): number {
    return this._courseNumber;
  }

  //   for calculating any data we use setter, but you cannot use any return type in setter function
  set courseCount(_courseNumber: number) {
    if (_courseNumber <= 1) {
      throw new Error("Course Number should be more than 1");
    }
    this.courseCount = _courseNumber;
  }

  private deleteToken() {
    console.log("Token Delted Successfully");
  }

  // protected data is accessible within the class and its subclasses
  protected updatedCourseCount() {
    this._courseNumber = 5;
  }
}

const amir = new Student("Amir", 3);
console.log(amir.studentInfo);
console.log(amir.courseCount);

// cannot access the private property from outside the class which is only accessible within the class
// amir.deleteToken() //shows error

// you cannot access the protected data from outside the class
// amir.updatedCourseCount(); // shows error

class StaffStudent extends Student {
  takenSubject() {
    this.subjectTaken = 7;
    console.log(`${this.name} took ${this.subjectTaken} subjects.`);
  }
}

// protected data is accessible within the class and its subclasses
const akhi = new StaffStudent("Akhi", 4);
akhi.takenSubject();
