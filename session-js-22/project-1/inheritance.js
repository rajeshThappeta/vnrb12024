//class Person (parent class or base class or super class)
class Person{
    constructor(name,age,mobile,address){
        this.name=name;
        this.age=age;
        this.mobile=mobile;
        this.address=address;
    }
}

//class Student(child class or sub class ) is a person
class Student extends Person{
    constructor(name,age,mobile,address,course,fee){
        //pass first 4 values to parent class(Person)
        super(name,age,mobile,address)
        this.course=course;
        this.fee=fee;
    }
}


let std1=new Student('ravi',21,9999999,'hyd','CSE',150000)
console.log(std1)
let std2=new Student('manasa',31,997766,'chennai','ECE',170000)
console.log(std2)

//class Employee is a person
class Employee extends Person{
    constructor(name,age,mobile,address,designation,company){
        super(name,age,mobile,address)
        this.designation=designation;
        this.company=company;
    }
}


let emp1=new Employee('john',35,555555,'hyd','FSD developer','JP Morgan')
console.log(emp1.toString())




let test={
    a:10,
    b:20
}

console.log(test)