const Manager = require('../lib/Manager')

describe('Manager', () => {
    describe('Initialization', () => {
        it('Should return Manager object with name, id, email and officeNumber properties', () => {
            const name = 'Joe';
            const id = 1;
            const email = 'email';
            const officeNumber = 'officeNumber';
            
            const newManager = new Manager(name, id, email, officeNumber);
            
            expect(newManager.name).toEqual(name);
            expect(newManager.id).toEqual(id);
            expect(newManager.email).toEqual(email);
            expect(newManager.officeNumber).toEqual(officeNumber)
        })

        it('Should return an error when not all properties are provided', () => {
            const cb = () => new Manager();
            const errorMsg = new Error('Not all parameters were provided')
            expect(cb).toThrowError(errorMsg)
        })
    })
})