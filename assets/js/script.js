// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employees = [];

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects

  const employee = createEmployee();
  employees.push(employee);

  while (confirm("Would you like to add another employee?")) {
    const employee = createEmployee();
    employees.push(employee);
  }

  return employees;
};

function createEmployee() {
  const employee = {
    firstName: " ",
    lastName: " ",
    salary: 0,
  };

  employee.firstName = prompt("What is the employee's first name?");
  employee.lastName = prompt("What is the employee's last name?");
  employee.salary = prompt("What is the employee's salary?");

  if (isNaN(employee.salary)) {
    employee.salary = 0;
  } else {
    employee.salary = parseFloat(employee.salary);
  }
  
  return employee;
}

// Display the average salary
// TODO: Calculate and display the average salary
const displayAverageSalary = function(employeesArray) {
  let salariesSum = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    salariesSum += Number(employeesArray[i].salary);
  }
  let averageSalary = salariesSum / employeesArray.length;
  console.log (`The average employee salary between our ${employeesArray.length} employee(s) is ${averageSalary.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}`);
}

// Select a random employee
// TODO: Select and display a random employee
const getRandomEmployee = function(employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName} our random drawing winner!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function(event) {
  event.preventDefault();
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
