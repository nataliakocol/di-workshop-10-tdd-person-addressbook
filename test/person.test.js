const chai = require('chai');
const expect = chai.expect;

const Person = require('../models/person.js');
const Pet = require('../models/pet.js');

describe('Person', ()=> {
  it('should initialise properly', ()=> {
    var person = new Person('Joe', 'Bloggs', '1 Jan 1990');
    expect(person.firstName).to.equal('Joe');
    expect(person.surname).to.equal('Bloggs');
    expect(person.dob).to.equal('1 Jan 1990');
    expect(person.emails).to.deep.equal([]);
    expect(person.phoneNumbers).to.deep.equal([]);
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

  it('should accept new phone numbers and add them to the array', ()=> {
    var person = new Person('Joe', 'Bloggs', '1 Jan 1990');
    person.addPhoneNumber('984857394');
    expect(person.phoneNumbers).to.deep.equal(['984857394']);
  })

  it('should return formatted details', ()=> {
    var person = new Person('Joe', 'Bloggs', '1 Jan 1990');
    person.addEmail('joe@example.com');
    person.addEmail('joe.bloggs@workexample.com');
    person.addPhoneNumber('07712345678');
    person.addPhoneNumber('07654321987');
    expect(person.returnFormattedDetails()).to.equal('Joe Bloggs' + '/n' +
  '----------' + '/n' + 'DOB: 1 Jan 1990' + '/n' + '/n' + 'Email Addresses:' + '/n' +
  '- joe@example.com' + '/n' + '- joe.bloggs@workexample.com' + '/n' + '/n' +
  'Phone Numbers:' + '/n' + '- 07712345678' + '/n' + '- 07654321987' + '/n');
    })

  it('should add a pet to a person', ()=> {
    var person = new Person('Joe', 'Bloggs', '1 Jan 1990');
    var pet1 = new Pet('Nemo', 'cat')
    person.addPet(pet1);
    expect(person.pets).to.deep.equal([pet1]);
  })
})
