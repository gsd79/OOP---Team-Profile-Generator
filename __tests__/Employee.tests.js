const Employee = require('../lib/Employee');

// employee object
test('creates an employee object', () => {
    const employee = new Employee('Grace', 5, 'cgracesharpe@gmail.com');
  
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// get employee name with getName()

test("gets employee name", () => {
  const employee = new Employee('Grace', 5, 'cgracesharpe@gmail.com');

  expect(employee.getName()).toEqual(expect.any(String));
 
});

// get employee ID with getId()

test("gets employee id", () => {
  const employee = new Employee('Grace', 5, 'cgracesharpe@gmail.com');

  expect(employee.getId()).toEqual(expect.any(Number));
 
});

// get employee email with getEmail()

test("gets employee email", () => {
  const employee = new Employee('Grace', 5, 'cgracesharpe@gmail.com');

  expect(employee.getEmail()).toEqual(expect.any(String));
 
});

// returns 'employee' with getRole()

test("gets employee role", () => {
  const employee = new Employee('Grace', 5, 'cgracesharpe@gmail.com');

  expect(employee.getRole()).toEqual('Employee');
 
});