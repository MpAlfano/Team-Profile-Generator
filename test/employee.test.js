const Employee = require('../lib/Employee')

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
    describe('getName', () => {
        it('Should return Employee name property', () => {
            let expectedName = 'Joe';

            let newEmployee = new Employee(expectedName, 1, "testemail" )

            expect(newEmployee.name).toEqual(expectedName);
        })
    })
    describe('getId', () => {
        it('Should return Employee id property', () => {
            let expectedId = '1';

            let newEmployee = new Employee('Joe', expectedId, "testemail" )

            expect(newEmployee.id).toEqual(expectedId);
        })
    })
    describe('getEmail', () => {
        it('Should return Employee email property', () => {
            let expectedEmail = 'testemail';

            let newEmployee = new Employee('Joe', 1, expectedEmail )

            expect(newEmployee.email).toEqual(expectedEmail);
        })
    })
    describe('getRole', () => {
        it('Should return Employee role property', () => {
            const role = 'Employee'

            let expectedRole = 'Employee';

            let newEmployee = new Employee('Joe', 1, "testemail" )

            expect(newEmployee.getRole()).toEqual(expectedRole);
        })
    })
})