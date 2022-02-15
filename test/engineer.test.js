const Engineer = require('../lib/engineer')

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
})