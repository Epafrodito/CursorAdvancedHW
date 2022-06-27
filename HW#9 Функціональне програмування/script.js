const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };

const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// Function #1 

function getMyTaxes(salary) {
  const tax = this.tax * salary;

  return tax;
}

console.log('Податок одного працівника в Україні(заробітня плата становить 1898 у.о.): ', getMyTaxes.call(ukraine, 1898));

// Function #2 

function getMiddleTaxes() {
  const middleTax = this.tax * this.middleSalary;

  return middleTax;
}

console.log('Середній податок працівників в Литві: ', getMiddleTaxes.call(litva));

// Function #3

function getTotalTaxes() {
  const totalTax = this.tax * this.middleSalary * this.vacancies;

  return totalTax;
}

console.log('Податок усіх працівників в Україні: ',getTotalTaxes.call(ukraine));

// Function #4

function getMySalary() {
  setInterval(() => {
    const salary = +(Math.random() * (2000 - 1500) + 1500).toFixed();
    const taxes = this.tax * salary;
    const result = {
      salary: salary,
      taxes: taxes,
      profit: salary - taxes,
    };
    console.log(result);
  }, 10000);
}

getMySalary.call(latvia);
