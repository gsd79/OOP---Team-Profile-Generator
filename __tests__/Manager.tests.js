const Manager = require('../lib/Manager');

// manager object
test('creates an manager object', () => {
    const manager = new Manager('Grace', 5, 'cgracesharpe@gmail.com', 10);
  
    expect(manager.officeNumber).toEqual(expect.any(Number));
    
});

// returns 'Manager' with getRole()

test("gets employee role", () => {
    const manager = new Manager('Grace', 5, 'cgracesharpe@gmail.com', '10');

    expect(manager.getRole()).toEqual('Manager');
 
});