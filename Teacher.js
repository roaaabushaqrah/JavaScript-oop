class Teacher extends student {
    constructor(salary, subject, id, name, email, mobile_number) {
        super(id, name, email, mobile_number);
        this.salary = salary;
        this.subject = subject;
    }

    Salary() {
        return (this.salary);
    }

    Subject() {
        return Array.from(this.subject.split(","));
    }
}
let teacher1 = new Teacher(
    "800",
    "[English ,Arabic,Math,Science]",
    "96432",
    "sadi",
    "Sadia @orange.com",
    "07777788888."
);
console.log(teacher1.Salary());
console.log(teacher1.Subject());