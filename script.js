//complete this code
class Persion{
    constructor(name,age){
        this._name = name;
        this._age = age;
    }

    get name(){
        return this._name;
    }
    /**
     * @param {Integer} p_age
     */
    set age(p_age){
        this._age = p_age
    }
}
class Student extends Persion{
    study(){
        console.log(`${this._name} is studying`);
    }
}

class Teacher extends Persion{
    teach(){
        console.log(`${this._name} is teaching`);
    }
}


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
