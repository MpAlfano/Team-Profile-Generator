const Intern = require('../lib/Intern')

describe('Intern', () => {
    describe('Initialization', () => {
        it('Should return Intern object with name, id, email and school properties', () => {
            const name = 'Joe';
            const id = 1;
            const email = 'email';
            const school = 'school';
            
            const newIntern = new Intern(name, id, email, school);
            
            expect(newIntern.name).toEqual(name);
            expect(newIntern.id).toEqual(id);
            expect(newIntern.email).toEqual(email);
            expect(newIntern.school).toEqual(school);
        })

        it('Should return an error when not all properties are provided', () => {
            const cb = () => new Intern();
            const errorMsg = new Error('Not all parameters were provided')
            expect(cb).toThrowError(errorMsg)
        })
    })
    describe('getName', () => {
        it('Should return Intern name property', () => {
            let expectedName = 'Joe';

            let newIntern = new Intern(expectedName, 1, "testemail" )

            expect(newIntern.name).toEqual(expectedName);
        })
    })
    describe('getId', () => {
        it('Should return Intern id property', () => {
            let expectedId = '1';

            let newIntern = new Intern('Joe', expectedId, "testemail" )

            expect(newIntern.id).toEqual(expectedId);
        })
    })
    describe('getEmail', () => {
        it('Should return Intern email property', () => {
            let expectedEmail = 'testemail';

            let newIntern = new Intern('Joe', 1, expectedEmail )

            expect(newIntern.email).toEqual(expectedEmail);
        })
    })
    describe('getgithub', () => {
        it('Should return Intern github property', () => {
            let expectedSchool = 'UofT';

            let newIntern = new Intern('Joe', 1, "testemail", expectedSchool )

            expect(newIntern.school).toEqual(expectedSchool);
        })
    })
    describe('getRole', () => {
        it('Should return Intern role property', () => {
            let expectedRole = 'Intern';

            let newIntern = new Intern('Joe', 1, "testemail" )

            expect(newIntern.getRole()).toEqual(expectedRole);
        })
    })
})