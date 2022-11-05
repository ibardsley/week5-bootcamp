class Subject {
    constructor(name){
        this.name = name
    }

   describe(){
    return `${this.name} is cool!`
   }
}

class Student {
    constructor(firstName, lastName, grade){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = grade;
        this.subjects = []
    }

    addSubject(subject){
        if(subject instanceof Subject){
            this.subjects.push(subject);
        } else {
            throw new Error(`You are missing information. Please try again `)
        }
    }

    describe() {
        return `${this.firstName} ${this.lastName} is in ${this.grade}.`;
    }
}


class Classroom {
    constructor() {
        this.classroom = [];
        this.selectedStudent = null
    }

    Enroll() {
        let choice = this.addYourStudents();

        while (choice != 'e') {
            switch(choice){
                case 'a':
                    this.addStudents();
                    break;
                case 'b':
                    this.viewStudent();
                    break;
                case 'c':
                    this.deleteStudent();
                    break;
                case 'd':
                    this.displayAllStudents();
                    break;
                default:
                    choice = e;
            }
            choice = this.addYourStudents();
        }

        alert('Have a nice day!');
    }

    addYourStudents() {
        return prompt(`
        a.) Add a new student
        b.) View your student
        c.) Remove a student
        d.) View all students
        e.) Exit
        `);
    }

    addClassesToStudents(studentInfo){
        return prompt(`
        a.) Add a class
        b.) Delete a class
        c.) Go back
        ----------------------------
        ${studentInfo}
        `);
    }

    addStudents(){
        let firstName = prompt('Enter the first name of your student.');
        let lastName = prompt(`Enter the last name of your student.`);
        let grade = prompt(`Enter the grade of your student.`);
        this.classroom.push(new Student(firstName, lastName, grade));
    }

    viewStudent(){
        let index = prompt('Enter the index of the student you would like to view.');
        if(index > -1 && index < this.classroom.length){
            this.selectedStudent = this.classroom[index];
            let title = `Student: ${this.selectedStudent.firstName} ${this.selectedStudent.lastName} ${this.selectedStudent.grade} \n`;

            for(let i = 0; i < this.selectedStudent.subjects.length; i++){
                title += i + '. ' + this.selectedStudent.subjects[i].name + ' ' + '\n';
            }
            let choice = this.addClassesToStudents(title);
            switch(choice){
                case 'a':
                    this.addClass();
                    break;
                case 'b':
                    this.deleteClass();
                    break;
                default: choice = 'c';
            }
        }
    }

    displayAllStudents(){
        let listOfStudents = '';
        for(let i = 0; i < this.classroom.length; i++){
            listOfStudents += i + '. ' + this.classroom[i].firstName + ' '
             + this.classroom[i].lastName + ' ' + this.classroom[i].grade + '\n';
        }
        alert(listOfStudents);
    }

    deleteStudent(){
        let index = prompt('What is the index of the student you are trying to delete?');
        if(index > -1 && index < this.classroom.length){
            this.classroom.splice(index, 1);
        }
    }

    addClass(){
        let name = prompt('What is the name of the new class you are adding?');
        this.selectedStudent.subjects.push(new Subject(name));
    }

    deleteClass(){
        let index = prompt('What is the index of the class you would like to delete?');
        if(index > -1 && index < this.selectedStudent.subjects.length){
            this.selectedStudent.subjects.splice(index, 1);
        }
    }
}

let classroom = new Classroom();
classroom.Enroll();