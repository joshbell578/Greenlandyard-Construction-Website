function validateEmailAddress(email) {
    }
    function validate() {
    $("#results").text("result");
    var firstName = $("#firstName").val();
    if (validate(firstName)) {
        $("#results").text(firstName + " is valid :)");
        $("#results").css("color", "green");
    } else {
        $("#results").text(firstName + " is not correct, please retry:(");
        $("#results").css("color", "red");
    }
    var lastName = $("#lastName").val();
    if (validate(lastName)) {
        $("#results").text(lastName + " is valid :)");
        $("#results").css("color", "green");
    } else {
        $("#results").text(lastName + " is not correct, please retry:(");
        $("#results").css("color", "red");
    }
    var emailAddress = $("#email").val();
    if (validate(emailAddress)) {
        $("#results").text(emailAddress + " is valid :)");
        $("#results").css("color", "green");
    } else {
        $("#results").text(emailAddress + " is not correct, please retry:(");
        $("#results").css("color", "red");
    }
    var otherInfo = $("#other").val();
    if (validate(otherInfo)) {
        $("#results").text(otherInfo + " is valid :)");
        $("#results").css("color", "green");
    } else {
        $("#results").text(otherInfo + " is not correct, please retry:(");
        $("#results").css("color", "red");
    }
    return results;
    }
    $("#validate").bind("click", validate);