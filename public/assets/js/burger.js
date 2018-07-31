$(function () {
    $(".devour-button").on("click", function (event) {
        var id = $(this).data("id");
        var devoured = $(this).data("devoured");

        var newEatState = {
            devoured: devoured
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatState
        }).then(
            function () {

                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        console.log("I Clicked!!!");
        var newBurger = {
            name: $("#new_burger").val().trim(),
            devoured: false
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {

                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});
