const Employee = require('../lib/Employee');

test('creates an employee object', () => {
   const employee = new Employee('Brenda', 54, 'brenda@company.com');

   expect(employee.name).toEqual(expect.any(String));
   expect(employee.id).toEqual(expect.any(Number));
   expect(employee.email).toEqual(expect.any(String));
});

test("gets employee's name as an object", () => {
   const employee = new Employee('Brenda', 54, 'brenda@company.com');

   expect(employee.getName()).toEqual(expect.any(String));
});

test("gets employee's ID number as an object", () => {
   const employee = new Employee('Brenda', 54, 'brenda@company.com');

   expect(employee.getId()).toEqual(expect.any(Number));
});

test("gets employee's email as an object", () => {
   const employee = new Employee('Brenda', 54, 'brenda@company.com');

   expect(employee.getEmail()).toEqual(expect.any(String));
});

test("gets employee's role as an object", () => {
   const employee = new Employee('Brenda', 54, 'brenda@company.com');

   expect(employee.getRole()).toEqual("Employee");
});