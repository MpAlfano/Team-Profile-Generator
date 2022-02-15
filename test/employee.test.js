const Employee = require('../lib/employee')

describe('Employee', () => {
    describe('Initialization', () => {
        it('Should return Employee object with name, id, email properties', () => {
            const name = 'Joe';
            const id = 1;
            const email = 'email';
            
            const newEmployee = new Employee(name, id, email);
            
            expect(newEmployee.name).toEqual(name);
            expect(newEmployee.id).toEqual(id);
            expect(newEmployee.email).toEqual(email);
        })

        it('Should return an error when not all properties are provided', () => {
            const cb = () => new Employee();
            const errorMsg = new Error('Not all parameters were provided')
            expect(cb).toThrowError(errorMsg)
        })
    })
})