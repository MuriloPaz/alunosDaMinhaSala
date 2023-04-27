nameOfTheStudentArray = []

function submit() {
    var name_1 = document.getElementById("nameOfStudent1").value;
    var name_2 = document.getElementById("nameOfStudent2").value;
    var name_3 = document.getElementById("nameOfStudent3").value;
    var name_4 = document.getElementById("nameOfStudent4").value;

    nameOfTheStudentArray.push(name_1);
    nameOfTheStudentArray.push(name_2);
    nameOfTheStudentArray.push(name_3);
    nameOfTheStudentArray.push(name_4);

    console.log(nameOfTheStudentArray);

    document.getElementById("displayName").innerHTML = nameOfTheStudentArray;
}