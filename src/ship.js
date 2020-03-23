class Ship {
  constructor({name, type}) {
    this.name = name;
    this.type = type;
    this.validType = [
      'passenger',
      'cargo',
    ];
  }
}


module.exports = Ship;
