var student = {
    name:'Ram',
    age:20,
    hobbies:['dance','music'],
    greet:function(){
        console.log('Good Day') 
    },
    address:{
        city:'Bangalore',
        state:'KR'
    }
}
/*
console.log(student.name);
console.log(student.age);
console.log(student.hobbies);
console.log(student.address.city);
console.log(student.address.state);
student.greet();
*/
for(const prop in student)
{
    var stud=student[prop];
    console.log(stud);
}

