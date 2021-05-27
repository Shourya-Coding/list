var student_array = [];

function submit(){

    display_array = [];

for (var s = 1; s <= 4; s++){
var name = document.getElementById("name_of_the_student_" + s).value;
console.log(name);
student_array.push(name);
}

console.log(student_array);

var length = student_array.length;
console.log(length);

for (var i = 0; i < length; i++){
display_array.push("<h4> NAME - "+ student_array [i] + "</h4>");
console.log(display_array);
}
console.log(display_array);

document.getElementById("display_name_with_commas").innerHTML = display_array;

var remove_comma = display_array.join(" ");
console.log(remove_comma);
document.getElementById("display_name_without_commas").innerHTML = remove_comma;

document.getElementById("sumbit_button").style.display = "none";
document.getElementById("sort_button").style.display = "inline-block";
}

