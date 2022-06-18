const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];
// Function #1
function getSubjects(studentObj) {
  const subjects = Object.keys(studentObj.subjects).map((item) =>
    capitalizeFirstLetter(item).replace("_", " ")
  );

  return subjects;
}

console.log('Список предметів:', getSubjects(students[0]));

function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}

// Function #2

function getAverageMark(studentObj) {
  const allMarks = Object.values(studentObj.subjects).flat();

  const avarage = (
    allMarks.reduce((sum, item) => sum + item, 0) / allMarks.length
  ).toFixed(2);

  return avarage;
}
console.log('Середня оцінка:', getAverageMark(students[0]));

//Function #3

function getStudentInfo(studentObj) {
  const info = {
    course: studentObj.course,
    name: studentObj.name,
    avarageMark: getAverageMark(studentObj),
  };

  return info;
}

console.log('Інформація про студента:', getStudentInfo(students[0]));

// Function #4

function getStudentsNames(students) {
  const nameStudents = students.map((item) => item.name).sort();

  return nameStudents;
}

console.log('Імена студентів в алфавітному порядку:', getStudentsNames(students));

// Function #5

function getBestStudent(students) {
  const allMarks = students.map((item) => [item.name, getAverageMark(item)]);

  const result = allMarks.reduce(
    (acc, item) => (item[1] > acc[1] ? item : acc),
    allMarks[0]
  );
  return result[0];
}

console.log("Ім'я кращого студента:", getBestStudent(students));

// Function #6
function calculateWordLetters(str) {
  const obj = Array
  .from(new Set(str.split('')))
  .reduce((acc, item) => ({ ...acc, [item]: 0 }), {});
  
  const result = str.split('').reduce((acc, item) => ({...acc, [item]: acc[item] + 1}), obj);

  return result;
}

console.log('Кількість букв у слові:', calculateWordLetters("test"));
