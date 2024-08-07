
//design class (blueprint of object)
class Person{

    //to initialize object
    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }

    getPersonData(){
        console.log(this.name,this.age,this.gender)
    }
}

//create objects(instance) of class type
let person1=new Person('ravi',21,'male')
let person2=new Person('manasa',18,'female')
let person3=new Person('bhanu',32,'male')

// console.log(person1.getPersonData())
// console.log(person2.getPersonData())
// console.log(person3.getPersonData())





//design student class
class Student{
    constructor(rollNo,name,marks){
        this.rollNo=rollNo;
        this.name=name;
        this.marks=marks;
    }

    getAverageMarks(){
        let sum=this.marks.reduce((acc,mark)=>acc+mark)
        let average=sum/this.marks.length;
        return average;
    }
}

//create student objects
let student1=new Student(100,'madhu',[90,56,78])
console.log(student1.getAverageMarks())
let student2=new Student(200,'vikas',[87,90,93])
console.log(student2.getAverageMarks())