const Intern = require('../lib/Intern');

// intern object
test('creates an intern object', () => {
    const intern = new Intern('Grace', 5, 'cgracesharpe@gmail.com', 'butler university');
  
    expect(intern.school).toEqual(expect.any(String));
    
});

// get intern school name with getSchool()

test('get intern school name', () => {
    const intern = new Intern('Grace', 5, 'cgracesharpe@gmail.com', 'butler university');
  
    expect(intern.getSchool()).toEqual(expect.any(String));
    
});

// returns 'Intern' with getRole()

test("gets employee role", () => {
    const intern = new Intern('Grace', 5, 'cgracesharpe@gmail.com', 'butler university');

    expect(intern.getRole()).toEqual('Intern');
 
});