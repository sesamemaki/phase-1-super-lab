// Write your classes here

class Tree {
  constructor(species) {
    this.species = species;
  }

  static definition() {
    return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.";
  }
}

class Deciduous extends Tree {
  constructor(species, name) {
    super(species);
    this.name = name;
  }

  static definition() {
    return super.definition() + "Deciduous trees shed their leaves annually.";
  }
}

class Evergreen extends Tree {
  constructor(species, name) {
    super(species);
    this.name = name;
  }

  static definition() {
    return super.definition() + "Evergreens keep their leaves all year round.";
  }
}

let tree = new Tree("Maple");
console.log(tree.species);
console.log(Tree.definition());

let oak = new Deciduous("Oak", "Professor");
console.log(oak.name);
console.log(Deciduous.definition());

let fir = new Evergreen("Fir", "Douglas");
console.log(fir.species)
console.log(Evergreen.definition())