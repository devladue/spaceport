class Part{
  constructor({name, type, value}) {
    this.name = name;
    this.validTypes = [
    'shell',
    'hyperdrive',
    'computer',
    'life support',
    'landing gear',
    undefined
  ],
    this.type = this.validTypes.includes(type) ? type : undefined;
    this.value = value;
    this.broken = false;

  }
 isValid(name, type, value) {
   if(this.name === undefined) {
     return false;
   }
   if(this.type === undefined) {
     return false;
   }
  if(this.value === undefined) {
    return false;
   }
   else {
     return true;
   }
  }
}


module.exports = Part;
