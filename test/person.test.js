const chai = require('chai');
const expect = chai.expect;

const Person = require('../models/person.js')

describe('Person', ()=> {
  it('should initialise properly', ()=> {
    var person = new Person('Joe', 'Bloggs', '1 Jan 1990');
    expect(person.firstName).to.equal('Joe');
    expect(person.surname).to.equal('Bloggs');
    expect(person.dob).to.equal('1 Jan 1990');

    expect(person.emails).to.deep.equal([]);
  })

  it('should capitalise the first name', ()=> {
    var person = new Person('amy', 'Bloggs', '1 Jan 1990');
    expect(person.firstName).to.equal('Amy');
  })

  it('should return a full name', ()=> {
    var person = new Person('Joe', 'Bloggs', '1 Jan 1990');
    expect(person.fullname()).to.equal('Joe Bloggs');
  })

  it('should accept new emails and add them to the array', ()=> {
    var person = new Person('Joe', 'Bloggs', '1 Jan 1990');
    person.addEmail('joes@example.com');
    person.addEmail('joe.bloggs@workexample.com');
    expect(person.emails).to.deep.equal(['joes@example.com', 'joe.bloggs@workexample.com']);
  })
})
