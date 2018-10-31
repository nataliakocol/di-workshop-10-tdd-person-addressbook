class Pet {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  sound() {
    if(this.type == 'cat') {
      return 'Meow';
    }
    else if(this.type == 'dog') {
      return 'Woof';
    }
    else if(this.type == 'goldfish') {
      return 'Blub';
    }
    else {
      return 'unknown sound';
    }
  }
}

module.exports = Pet;
