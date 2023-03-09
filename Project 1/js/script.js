function validateEmailAddress(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
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
    
    return results;
    }
    $("#validate").bind("click", validate);