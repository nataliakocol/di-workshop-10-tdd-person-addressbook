const chai = require('chai');
const expect = chai.expect;
const AddressBook = require('../models/addressBook.js');
const Person = require('../models/person.js')
const Pet = require('../models/pet.js')

describe('AddressBook', ()=> {
  it('initialises properly', ()=> {
    book = new AddressBook();
    expect(book.entries).to.deep.equal([]);
  })

  it('can add people to the book', ()=> {
    book = new AddressBook();
    person1 = new Person('Joe', 'Bloggs', '1 Jan 1990');

    book.add(person1);
    expect(book.entries.length).to.equal(1);
    expect(book.entries[0].firstName).to.equal('Joe');
  })

  it('can find people by their first name', ()=> {
    book = new AddressBook();
    person1 = new Person('Joe', 'Bloggs', '1 Jan 1990');

    book.add(person1);
    expect(book.findByFirstName('Joe')).to.deep.equal([person1]);
  })

  it('can find people by their surname', ()=> {
    book = new AddressBook();
    person1 = new Person('Joe', 'Bloggs', '1 Jan 1990');

    book.add(person1);
    expect(book.findBySurname('Bloggs')).to.deep.equal([person1]);
  })

  it('should show a person\'s pets', ()=> {
    book = new AddressBook();
    person1 = new Person('Joe', 'Bloggs', '1 Jan 1990');
    book.add(person1);
    pet1 = new Pet('Nemo', 'cat');
    person1.addPet(pet1);
    expect(book.entries[0].pets).to.deep.equal([pet1]);
  })
})
