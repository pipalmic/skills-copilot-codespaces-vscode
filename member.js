function skillsMember() {
    var member = document.getElementById("member").value;
    var skills = document.getElementById("skills").value;
    var result = document.getElementById("result");
    var memberSkills = member + " has " + skills + " skills.";
    result.innerHTML = memberSkills;
}