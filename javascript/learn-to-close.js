// var name  ="jack";
// var age = 23;
// var message = "Hi, my name is " + name + " and I am " + age + " year old!";

// var firstname = "na";
// var lastname = "du";
// var dateOfBirth = '6-11-95';
// var age = 23;
// var profileImgUrl = "http://coolpicks.com/johnjacob.jpg";

// var loginWelcomeMessage = "Wwelcome, " +firstname+ ". Happy "+age+"rd birthday!";

// console.log(loginWelcomeMessage);

// var studentNames = ["Tim", "John", "ASD"];
// var naughtyList = [];
// naughtyList.push(studentNames[0]);

// var index = naughtyList.indexOf("Tim");

// console.log(naughtyList);
// if(index > -1){
// 	naughtyList.splice(index, 1);
// }

// console.log(naughtyList);

// ######################### object ###################


var students = [];

function Student(firstname, lastname, age){
	this.firstname = firstname;
	this.lastname = lastname;
	this.age = age;
	this.greeting = function(){
		return "Hi, I'm " + this.firstname + " and I'm " + this.age + " years old.";
	}
}

// var student0 = {
// 	firstname : "Jayne",
// 	lastname : "Looo",
// 	age : 8,
	
// };

// console.log(student0.greeting());

// console.log(student.firstname);
// console.log(student.lastname);
// console.log(student["firstname"]);
// console.log(student["lastname"];

// creates new empty object
// var student1 = new Object();
// student1.firstname = "John";
// student1.lastname = "Parker";
// student1.age = 7;

// var student2 = {};
// student2.firstname = "Zack";
// student2.lastname = "Bobo";
// student2.age = 5;

// students.push(student0);
// students.push(student1);
// students.push(student2);


// var s1 = new Student("Jenny", "Laga, 5");
// console.log(s1);
// console.log(s1.greeting());

students.push(new Student("Je", "La", 5));
students.push(new Student("f", "d", 6));
students.push(new Student("wf", "wef", 23));

// for(var index = 0; index < students.length; index++){
// 	var student = students[index];
// 	console.log(student.greeting());
// }


var student = students[0];
for(var key in student){
	console.log(student[key]);
}