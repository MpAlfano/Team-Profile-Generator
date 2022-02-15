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
    describe('getName', () => {
        it('Should return Manager name property', () => {
            let expectedName = 'Joe';

            let newManager = new Manager(expectedName, 1, "testemail" )

            expect(newManager.name).toEqual(expectedName);
        })
    })
    describe('getId', () => {
        it('Should return Manager id property', () => {
            let expectedId = '1';

            let newManager = new Manager('Joe', expectedId, "testemail" )

            expect(newManager.id).toEqual(expectedId);
        })
    })
    describe('getEmail', () => {
        it('Should return Manager email property', () => {
            let expectedEmail = 'testemail';

            let newManager = new Manager('Joe', 1, expectedEmail )

            expect(newManager.email).toEqual(expectedEmail);
        })
    })
    describe('getofficeNumber', () => {
        it('Should return Manager email property', () => {
            let expectedofficeNumber = '1';

            let newManager = new Manager('Joe', 1, "testemail", expectedofficeNumber)

            expect(newManager.officeNumber).toEqual(expectedofficeNumber);
        })
    })
    describe('getRole', () => {
        it('Should return Manager role property', () => {
            let expectedRole = 'Manager';

            let newManager = new Manager('Joe', 1, "testemail" )

            expect(newManager.getRole()).toEqual(expectedRole);
        })
    })
})