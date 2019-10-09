$(function() {
    // on click listener for add
    $("#add").on("click", function(event) {
        // prevent button from doing normal stuff
        event.preventDefault();
        // grab text
        var cake_name = $("#cake").val().trim();
        // validate text
        if (validateText(cake_name)) {
            // escape the apostrophes!
            cake_name = escapeQuote(cake_name);
            // post!
            $.ajax({
                url: "/api/cakes/",
                type: "POST",
                data: { cake_name: cake_name }
            }).then(function() {
                // reload page
                location.reload();
            })
        } else {
            $("#cake").val("");
            $("#cake").attr("placeholder", "This field cannot be empty and only accepts alphanumerical and ' characters.");
        }
    });

    // on click listener for eat
    $(".eat").on("click", function(event) {
        // prevent button from doing normal stuff
        event.preventDefault();
        
        // put!
        $.ajax({
            url: "/api/cakes/" + $(this).data("id"),
            type: "PUT"
        }).then(function() {
            // reload page
            location.reload();
        })
    });

    // on click listener for delete
    $(".delete").on("click", function(event) {
        // prevent button from doing normal stuff
        event.preventDefault();

        // delete!
        $.ajax({
            url: "/api/cakes/" + $(this).data("id"),
            type: "DELETE"
        }).then(function() {
            // reload page
            location.reload();
        })
    });
})

// validate text
function validateText(string) {
    var alphanum = "'0123456789abcdefghijklmnopqrstuvwxyz "
    var stringlower = string.toLowerCase();

    // no empty string
    if (string.length === 0) return false;
    // string only contains characters in alphanum
    for (var i = 0; i < stringlower.length; i++) {
        for (var j = 0; j < alphanum.length; j++) {
            if (alphanum.indexOf(stringlower[i]) === -1) {
                return false;
            }
        }
    }
    return true;
}

// escape that quote mess
function escapeQuote(string) {
    var newString = "";
    for (var i = 0; i < string.length; i++) {
        if (string[i] === "'") {
            newString += "'" + "'";
        } else {
            newString += string[i]
        }
    }
    return newString;
}