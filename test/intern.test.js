const Intern = require('../lib/intern')

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
})