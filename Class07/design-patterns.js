class Calculator {
  constructor() {
    this._value = 0;
  }

  add(value) {
    // this._value = this._value + value
    this._value += value;
    return this;
  }

  mutliply(value) {
    // this._value = this._value * value
    this._value *= value;
    return this;
  }

  get value() {
    return this._value;
  }
}

const myCalculator = new Calculator();
myCalculator.add(10).add(12).add(-21).mutliply(9);

const myBFCalculator = new Calculator();
myBFCalculator.add(30);

// console.log('Mine: ', myCalculator.value);
// console.log('Theirs: ', myBFCalculator.value);

class Employee {
  constructor(name, position, height, id) {
    this._name = name;
    this._position = position;
    this._height = height;
    this._id = id;
  }
}

class Developer extends Employee {
  constructor(name, position, height, id) {
    super(name, position, height, id);
  }
}

class LeadDeveloper extends Employee {
  constructor(name, position, height, id) {
    super(name, position, height, id);
    this._team = [];
  }

  addMember(member) {
    this._team.push(member);
  }

  viewTeam() {
    const teamView = this._team.map((teamMember) => {
      const member = {
        name: teamMember._name,
        position: teamMember._position,
      };

      return member;
    });

    return teamView;
  }
}

const developer1 = new Developer('Joseph', 'Developer', 20, 7890);
const developer2 = new Developer('Shelly', 'Developer', 30, 9000);
const leadDeveloper1 = new LeadDeveloper('Tim', 'Lead', 40, 15);

leadDeveloper1.addMember(developer1);
leadDeveloper1.addMember(developer2);
console.log(leadDeveloper1.viewTeam());
