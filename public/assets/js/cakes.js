$(function() {
    // on click listener for add
    $("#add").on("click", function(event) {
        // prevent button from doing normal stuff
        event.preventDefault();

        // post!
        $.ajax({
            url: "/api/cakes/",
            type: "POST",
            data: { cake_name: $("#cake").val().trim() }
        }).then(function() {
            // reload page
            location.reload();
        })
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