var passes;

var failures;

var student;

var result;

var totalStudents;

totalStudents = window.prompt("How many students in this class?");

passes = 0;

failures = 0;

student = 1;

do {
    result = window.prompt("Enter result of student " + student + " (1=pass,any other input=fail)", "0");
    if (result == "1") {
        passes = passes + 1;
    } else {
        failures = failures + 1;
    }
    student = student + 1;
} while (student <= totalStudents);

document.writeln("<h1>Examination Results</h1>");

document.writeln("<h3>Passed: " + passes + "; Failed: " + failures + "</h3>");

if (passes > totalStudents * .6) {
    document.writeln("<h3>Excelsior instructor!</h3>");
}
