class student {
    constructor(id, name, Email, mobile) {

        this.id = id;
        this.name = name;
        this.Email = Email;
        this.mobile = mobile;
    }

    ID() {
        return this.id;
    }
    Name() {
        return this.name;

    }

    Phone() {
        return this.mobile;
    }


    email() {
        return this.Email;
    }
}

let stud = new student(
    "1998",
    "Roaa",
    "roaa.abusharah@gmail.com",
    "0798627620"
);

console.log(stud.Name());
console.log(stud.Phone());
console.log(stud.ID());

console.log(stud.email());