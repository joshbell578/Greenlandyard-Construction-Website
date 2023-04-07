function validateName(name) {
    var name = $("#name").val();
    if (validate(name)) {
        $("#results").text(name);
        $("#results").css("color", "green");
    } else {
        $("#results").text(name + " is not correct, please retry:(");
        $("#results").css("color", "red");
    }
}

function validateEmailAddress(email) {
    var emailAddress = $("#email").val();
    if (validate(email)) {
        $("#results").text(emailAddress);
        $("#results").css("color", "green");
    } else {
        $("#results").text(emailAddress + " is not correct, please retry:(");
        $("#results").css("color", "red");
    }
}

function postToUrl(url, params, newWindow) {
    var form = $('<form>');
    form.attr('action', url);
    form.attr('method', 'POST');
    if(newWindow){ form.attr('target', '_blank'); 
  }

  var addParam = function(paramName, paramValue) {
      var input = $('<input type="hidden">');
      input.attr({ 'id':     paramName,
                 'name':   paramName,
                 'value':  paramValue });
      form.append(input);
    };

    // Params is an Array.
    if(params instanceof Array){
        for(var i=0; i<params.length; i++) {
            addParam(i, params[i]);
        }
    }

    // Params is an Associative array or Object.
    if(params instanceof Object) {
        for(var key in params){
            addParam(key, params[key]);
        }
    }

    // Submit the form, then remove it from the page
    form.appendTo(document.body);
    form.submit();
    form.remove();
}