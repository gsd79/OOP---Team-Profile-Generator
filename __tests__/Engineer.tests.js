const Engineer = require('../lib/Engineer');

// engineer object
test('creates an employee object', () => {
    const engineer = new Engineer('Grace', 5, 'cgracesharpe@gmail.com', 'gsd79');
  
    expect(engineer.github).toEqual(expect.any(String));
    
});

// get engineer github username with getGitHub()

test("gets engineer github name", () => {
    const engineer = new Engineer('Grace', 5, 'cgracesharpe@gmail.com', 'gsd79');

    expect(engineer.getGitHub()).toEqual(expect.any(String));
 
});

// returns 'Engineer' with getRole()

test("gets employee role", () => {
    const engineer = new Engineer('Grace', 5, 'cgracesharpe@gmail.com', 'gsd79');

    expect(engineer.getRole()).toEqual('Engineer');
 
});