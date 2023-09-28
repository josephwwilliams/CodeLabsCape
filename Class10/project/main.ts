interface Student {
  firstName: string;
  grade: number;
}

interface Teacher {
  firstName: string;
  grade: number;
  students: Student[];
}

class School<T> {
  people: T[] = [];

  addPeople(person: T) {
    this.people.push(person);
  }

  showPeople() {
    console.log(this.people);
  }
}

const studentOne: Student = {
  firstName: 'Timmy',
  grade: 12,
};

const teacherOne: Teacher = {
  firstName: 'John',
  grade: 12,
  students: [],
};

const fakeStudent = {
  id: 4,
  name: 'Bob',
};

teacherOne.students = [studentOne];

const newSchool = new School();

newSchool.addPeople(studentOne);

newSchool.addPeople(teacherOne);

newSchool.showPeople();
