//write a person class to hold all details
class Person{
    constructor(firstname,lastname,age,phone,email,address){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
        this.phone=phone;
        this.email=email;
        this.address=address;
    }
    setName(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }
    getName(){
        return `${this.firstname} ${this.lastname}`;
    }
    setAge(age){
        this.age=age;
    }
    getAge(){
        return this.age;
    }
    setPhone(phone){
        this.phone=phone;
    }
    getPhone(){
        return this.phone
    }
    setEmail(email){
        this.email=email;
    }
    getEmai(){
        return this.email;
    }
    setAddress(address){
        this.address=address;
    }
    getAddress(){
        return this.address;
    }
}
let p=new Person();
p.setName("Mohamed","siddiq");
console.log(`Full Name : ${p.getName()}`);
p.setAge(27);
console.log(`Age : ${p.getAge()}`);
p.setPhone("+91887081217")
console.log(`Phone : ${p.getPhone()}`);
p.setEmail("diddiq88@gmail.com");
console.log(`Email : ${p.getEmai()}`);
p.setAddress("house no:13,cuddalore,kattumannarkoil");
console.log(`Address : ${p.getAddress()}`);