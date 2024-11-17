var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var userName = document.getElementById("userName").value;
    var Name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var gender = document.getElementById("male").checked ? "male" :
        document.getElementById("female").checked ? "female" : "";
    var nationality = document.getElementById("nationality").value;
    var cauli = document.getElementById("cauli").value;
    var skill = document.getElementById("skill").value;
    var resumeHTML = "\n    <h5><b>Dynamic And Editable Resume</b></h5>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(userName, "</span></p>\n     <p><b> lastName:</b><span contenteditable=\"true\">").concat(Name, "</span></p>\n    <p><b>email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>password:</b><span contenteditable=\"true\">").concat(password, "</span></p>\n    <p><b>gender:</b><span contenteditable=\"true\">").concat(gender, "</span></p>\n     <p><b>Nationality:</b><span contenteditable=\"true\">").concat(nationality, "</span></p>\n     <p><b>Qualification:</b><span contenteditable=\"true\">").concat(cauli, "</span></p>\n     <p><b>Skills:</b><span contenteditable=\"true\">").concat(skill, "</span></p>\n\n   \n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.log("the resume display element is missing");
    }
});
