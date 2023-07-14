function Student(name) {
  this.name = name;
}

Student.prototype.printDetails = function() {
  console.log(`Hello, my name is ${this.name}`);
};

const student = new Student('Pushkar');

student.printDetails();
