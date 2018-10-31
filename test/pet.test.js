const chai = require('chai');
const expect = chai.expect;
const AddressBook = require('../models/addressBook.js');
const Person = require('../models/person.js');
const Pet = require('../models/pet.js');

describe('Pet', ()=> {
  it('should show you a sound of a given pet', ()=> {
    var pet1 = new Pet('Nemo', 'cat');
    expect(pet1.sound()).to.equal('Meow');
  })
})
