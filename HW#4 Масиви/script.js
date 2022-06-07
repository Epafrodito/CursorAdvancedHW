let students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

let themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і стрктури даних",
];

let marks = [4, 5, 5, 3, 4, 5];

function sortStudents(arr) {
  let boy = [];
  let girl = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].endsWith("а")) {
      girl.push(arr[i]);
    } else {
      boy.push(arr[i]);
    }
  }
  let pairStudent = [];
  for (let i = 0; i < boy.length; i++) {
    pairStudent.push([boy[i], girl[i]]);
  }
  return pairStudent;
}

let sortPair = sortStudents(students);

console.log(sortStudents(students));

function addThemes(arr, themes) {
  let pairAndThemes = [];
  for (let i = 0; i < themes.length; i++) {
    let [boy, girl] = arr[i];
    pairAndThemes.push([boy + " і " + girl, themes[i]]);
  }
  return pairAndThemes;
}

let pairAndThemes = addThemes(sortPair, themes);

console.log(pairAndThemes);

function addAssessment(students, marks) {
  let studentsAssessment = [];
  for (let i = 0; i < students.length; i++) {
    studentsAssessment.push([students[i], marks[i]]);
  }
  return studentsAssessment;
}

let assessment = addAssessment(students, marks);

console.log(assessment);

function addPairAndThemesAndAssessment(pairAndThemes) {
  let pairAndThemesAndAssessment = [];

  for (let i = 0; i < pairAndThemes.length; i++) {
    pairAndThemesAndAssessment.push([
      ...pairAndThemes[i],
      Math.round(Math.random() * (5 - 1) + 1),
    ]);
  }
  return pairAndThemesAndAssessment;
}

let pairAndThemesAndAssessment = addPairAndThemesAndAssessment(pairAndThemes);

console.log(pairAndThemesAndAssessment);
