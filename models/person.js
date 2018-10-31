class Person {
  constructor(firstName, surname, dob) {
    this.firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    this.surname = surname;
    this.dob = dob;
    this.emails = [];
    this.phoneNumbers = [];
    this.pets = [];
  }

  fullname() {
    return this.firstName + ' ' + this.surname;
  }

  addEmail(email) {
    this.emails.push(email);
  }

  addPhoneNumber(phoneNumber) {
    this.phoneNumbers.push(phoneNumber);
  }

  addPet(pet) {
    this.pets.push(pet);
  }

  returnFormattedDetails() {
    var details = this.fullname() + '/n' + '----------' + '/n' + 'DOB: ' + this.dob +
    '/n' + '/n' + 'Email Addresses:' + '/n';
    for(var i of this.emails) {
      details += '- ' + i + '/n';
    }
    details += '/n' + 'Phone Numbers:' + '/n';
    for(var i of this.phoneNumbers) {
      details += '- ' + i + '/n';
    }

    return details;
  }
};

module.exports = Person;
