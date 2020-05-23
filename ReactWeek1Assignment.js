class Student {
    constructor (name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
};

class Bootcamp extends Student {
    constructor (name, level, students = []){
        this.name = name;
        this.level = level;
        this.students = students;
        if (students === 'null') {
            students = []}
        }
    registerStudent(student){
        const newStudents = students.filter(n => n ==)
    }
};
