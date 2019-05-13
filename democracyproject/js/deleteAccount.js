const base = 'http://127.0.0.1:5500/frontEnd/html/';
const userData = JSON.parse($.session.get("userData"));
const token = $.session.get("token");

$( document ).ready(function() {
    $("#button_delete").click(function() {
        alert(userData.id);
        if($("#registerEmail").val() == userData.email) {
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": urls.signup,
                "method": "DELETE",
                "headers": {
                  "Content-Type": "application/json",
                  "Authorization": "Bearer " + token,
                  "cache-control": "no-cache"
                },
                "processData": false,
                "data": ""
            }
            $.ajax(settings).done(function (response) {
                $.session.set("userData", "");
                $.session.set("token", "");
            });
        }
    })
})