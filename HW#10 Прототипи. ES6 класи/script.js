class Student {
  dismissed = false;

  constructor(university, course, fullName, marks) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = marks;
  }

  getInfo() {
    return `Студент ${this.course}-го курсу, ${this.university}, ${this.fullName}`;
  }

  get getMarks() {
    if (this.dismissed) {
      return null;
    }
    return this.marks;
  }

  set addMark(mark) {
    if (this.dismissed) return;
    this.marks.push(mark);
  }

  getAverageMarks() {
    if (this.marks.length === 0) {
      return null;
    }
    return (
      this.marks.reduce((acc, cur) => acc + cur, 0) / this.marks.length
    ).toFixed(1);
  }

  dismiss() {
    this.dismissed = true;
    return `Студент ${this.fullName} відрахований.`;
  }

  recover() {
    this.dismissed = false;
    return `Студент ${this.fullName} зарахований.`;
  }
}

const firstStudent = new Student("НУВГП", "4", "Остап Бендер", [5, 4, 4, 5]);

console.log(firstStudent.getInfo());
console.log(firstStudent.getMarks);
console.log((firstStudent.addMark = 5));
console.log(firstStudent.getMarks);
console.log(firstStudent.getAverageMarks());
console.log(firstStudent.dismiss());
console.log((firstStudent.addMark = 4));
console.log(firstStudent.getMarks);
console.log(firstStudent.recover());
console.log((firstStudent.addMark = 4));
console.log(firstStudent.getMarks);

class BudgetStudent extends Student {
  constructor(university, course, fullName, marks) {
    super(university, course, fullName, marks);
    setInterval(() => {
      this.getScholarship();
    }, 30000);
  }
  getScholarship() {
    if (this.getAverageMarks() >= 4 && this.dismissed === false) {
      console.log(`${this.fullName} отримав 1400 грн. стипендії.`);
    } else if (this.getAverageMarks() < 4) {
      console.log(`${this.fullName} не отримує стипендії.`);
    } else if (this.dismissed) {
      console.log(`${this.fullName} - відрахований.`);
    }
  }
}

const secondStudent = new BudgetStudent(
  "НУВГП",
  "2",
  "Іван Сірко",
  [4, 4, 5, 5]
);
console.log(secondStudent.dismiss());
