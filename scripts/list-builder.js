$(document).ready(function () {

    var delay = 300; // milliseconds
    var cookie_expire = 1; // days

    var cookie = localStorage.getItem("list-builder");
    if (cookie == undefined || cookie == null) {
        cookie = 0;
    }

    if (((new Date()).getTime() - cookie) / (1000 * 60 * 60 * 24) > cookie_expire) {
        $("#list-builder").delay(delay).fadeIn("fast", () => {
            $("#popup-box").fadeIn("fast", () => { });
        });


        $("#popup-close").click(() => {
            $("#list-builder, #popup-box").hide();
            localStorage.setItem("list-builder", (new Date()).getTime());
        });

        $("#thanks").click(() => {
            $("#list-builder, #popup-box").hide();
            localStorage.setItem("list-builder", (new Date()).getTime());
        });


    }

});