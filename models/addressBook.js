class AddressBook {
  constructor() {
    this.entries = [];
    this.pets = [];
  }

  add(person) {
    this.entries.push(person);
  }

  findByFirstName(search) {
    var result = [];
    for(var i of this.entries) {
      if(i.firstName == search) {
        result.push(i);
      }
    }
    return result;
  }

  findBySurname(search) {
    var result = [];
    for(var i of this.entries) {
      if(i.surname == search) {
        result.push(i);
      }
    }
    return result;
  }
};

module.exports = AddressBook;
