const Engineer = require('../lib/Engineer')

describe('Engineer', () => {
    describe('Initialization', () => {
        it('Should return Engineer object with name, id, email and github properties', () => {
            const name = 'Joe';
            const id = 1;
            const email = 'email';
            const github = 'github';
            
            const newEngineer = new Engineer(name, id, email, github);
            
            expect(newEngineer.name).toEqual(name);
            expect(newEngineer.id).toEqual(id);
            expect(newEngineer.email).toEqual(email);
            expect(newEngineer.github).toEqual(github);
        })

        it('Should return an error when not all properties are provided', () => {
            const cb = () => new Engineer();
            const errorMsg = new Error('Not all parameters were provided')
            expect(cb).toThrowError(errorMsg)
        })
    })
    describe('getName', () => {
        it('Should return Engineer name property', () => {
            let expectedName = 'Joe';

            let newEngineer = new Engineer(expectedName, 1, "testemail" )

            expect(newEngineer.name).toEqual(expectedName);
        })
    })
    describe('getId', () => {
        it('Should return Engineer id property', () => {
            let expectedId = '1';

            let newEngineer = new Engineer('Joe', expectedId, "testemail" )

            expect(newEngineer.id).toEqual(expectedId);
        })
    })
    describe('getEmail', () => {
        it('Should return Engineer email property', () => {
            let expectedEmail = 'testemail';

            let newEngineer = new Engineer('Joe', 1, expectedEmail )

            expect(newEngineer.email).toEqual(expectedEmail);
        })
    })
    describe('getgithub', () => {
        it('Should return Engineer github property', () => {
            let expectedGithub = 'testhub';

            let newEngineer = new Engineer('Joe', 1, "testemail", expectedGithub )

            expect(newEngineer.github).toEqual(expectedGithub);
        })
    })
    describe('getRole', () => {
        it('Should return Engineer role property', () => {
            let expectedRole = 'Engineer';

            let newEngineer = new Engineer('Joe', 1, "testemail" )

            expect(newEngineer.getRole()).toEqual(expectedRole);
        })
    })
})