var person = {
    name: 'Sarah',
    country: 'United States',
    age: 35,
    treehouseStudent: true,
    skills: ['Javascript', 'HTML', 'CSS']
};

person.gender = 'female';

console.log(person);

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}
//
// var message = "<p>Hell my name is " + person.name + "</p>";
// message += "<p>I live in the " + person.country + ".</p>";
// person.name = 'Rainbow Dash';
// message += '<p>But, I wish my name was ' + person.name + '.</p>';
// person.age += 1;
// message += '<p>My age is now ' + person.age + '</p>';
// // message += '<p>I have ' + person.skills.length + ' skills: ' + person.skills.join(', ') + '</p>'; //the next two lines are the same as this one.
// message += '<p>I have ' + person.skills.length + ' skills: ';
// message += person.skills.join(', ') + '</p>';
// print(message);
//

for (prop in person) {
  console.log(prop,': ', person[prop]);
}
