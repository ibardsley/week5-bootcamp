// Object Oriented Programming OOP
// most common methodology used in coding of how to write code
// Objects have attributes and define them and things they can do

/*
DVD Player
Height
weight
width
color

Functionality
Play 
fast forward
rewind
Pause 

DVD
movie length
Image 
Size 

OOP 4 main pillars
abstraction
allows us to hide complexity by giving us a 30,000 foot view of a concept or object 
vehicles all move is an example of abstraction

Encapsulation 
Hiding the details of how a method works 
when you drive you don't know what the engine is doing but you know it works

Inheritance
allows objects to inherit properties and functionality from other classes, a parent or base class can be passed down 

Poly Morphism 
something can take many different forms
for example animal communicates differently from other animals
the communitcation method is poly morphism because it is different with each animal

we need to learn how to structure our code so we can use it in an OOP fashion
We can use constructs called classes to group our code together in a logical way to represent objects 
Objects can be created from classes, classes are like blueprints for objects to be created from 
object is an instance of a class.
*/

/*
Classes
Classes are useful to group properties and functionality together
to provide representation of an object. 

Objects that represent students

*/

class Student{  // classes do not follow camelCase but pacale first letter of each word capital
    constructor(firstName, lastName, phoneNumber, grade){
        this.firstName = firstName; //represents the object created from the class "Student"
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.grade = grade;
    }

    introduce(){ // method  / a function which belongs to a class
        console.log(`${this.firstName} ${this.lastName} can be reached at ${this.phoneNumber}`)

    }
}

let student1 = new Student('Tom', 'Sawyer', 9874563210, 'A');
let student2 = new Student('Sam', 'Smith', 5632104897, 'B');

student1.introduce();
student2.introduce();

// When to create a class
// good rule is each class should be in charge of one thing
// any time you have a new concept that needs properties and functionality create a class
// Card game - classes for players card dealer deck game etc
// Each class has its own role

// Inherticance

class NotificationSender {
    constructor(status){
        this.status = status;
    }
}

class PromotionSender {
    constructor(){

    }
    sendNotification(notification){
        console.log('Sending: ' + notification);
    }

    findUsersWithStatus(status){
        let users = getUsers(status);
        return users;
    }
    calculateDiscount(status){
        if (status === 'GOLD'){
            return .3;
        }else if(status === 'SILVER'){
            return .15;
        }
        return 0;
    }
}

class CollectionsSender{
    constructor(){

    }
    sendNotification(notification){
        consolee.log('Sending: ' + notification);
    }
    findUsersWithStatus(status){
        let users = getUsers(status);
        return users;
    }
    calculateFee(status){
        if(status === 'OVERDUE'){
            return 10;
        }else if(status === 'DELIQUENT'){
            return 25;
        }
        return 5;
    }
}
