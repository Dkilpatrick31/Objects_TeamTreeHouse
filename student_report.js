var message = '';
var student;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
};

for (var i = 0; i < students.length; i ++) {
  student = students[i];
  message += '<h1>Student: ' + student.name + "</h1>";
};

print(message);
