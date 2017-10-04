function Person(name, subject){
	this.name = name;
  //this.subject = subject;
}

var TeacherA = new Person("Alice");
var TeacherB = new Person("Mike");

Person.prototype.teach = function(subject){
	return this.name + " is teaching " + subject;
}

console.log(TeacherA.teach("Math"));
console.log(TeacherB.teach("Science"));