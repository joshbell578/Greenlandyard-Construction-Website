function validateName(name) {
    var name = $("#name").val();
    if (validate(name)) {
        $("#results").text(name + " is valid :)");
        $("#results").css("color", "green");
    } else {
        $("#results").text(name + " is not correct, please retry:(");
        $("#results").css("color", "red");
    }
}

function validateEmailAddress(email) {
    var emailAddress = $("#email").val();
    if (validate(email)) {
        $("#results").text(emailAddress + " is valid :)");
        $("#results").css("color", "green");
    } else {
        $("#results").text(emailAddress + " is not correct, please retry:(");
        $("#results").css("color", "red");
    }
}
