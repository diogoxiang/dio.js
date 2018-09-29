function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Janee", lastName: "User" };
document.body.innerHTML = greeter(user);
