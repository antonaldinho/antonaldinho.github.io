const base = 'https://antonaldinho.github.io/democracyproject/html/';
const userData = JSON.parse($.session.get("userData"));
const token = $.session.get("token");

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

function fillFields() {
    const userId = getUrlParameter('id');
    const nombre = $("#registerName");
    const email = $("#registerEmail");
    const password = $("#registerPassword");
    const passwordConfirmation = $("#registerPasswordConfirmation");
    const ine = $("#registerIne");

    nombre.val(userData.name);
    email.val(userData.email);
    ine.val(userData.ine_id);
}

function actualizar () {
    const button = $("#registerButton");
    button.click(function() {
        const nombre = $("#registerName").val();
        const email = $("#registerEmail").val();
        const password = $("#registerPassword").val();
        const passwordConfirmation = $("#registerPasswordConfirmation").val();
        const ine = $("#registerIne").val();
        if(password == "" || passwordConfirmation == "") {
            const data = {
                name: nombre,
                email: email,
                ine_id: ine
            }
            console.log(data)
            // console.log(password)
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": urls.signup,
                "method": "PATCH",
                "headers": {
                  "Content-Type": "application/json",
                  "Authorization": "Bearer " + token,
                  "cache-control": "no-cache"
                },
                "processData": false,
                "data": JSON.stringify(data)
            }
            
            $.ajax(settings).done(function (response) {
                console.log(response);
                $.ajax(settings).done(function (response2) {
                    alert("Datos actualizados")
                    $.session.set("userData", JSON.stringify(response2.user));
                    location.href = base + 'profile.html';
                })
            });
        }
        else {
            if(password != passwordConfirmation) {
                alert("Passwords diferentes");
            }
            else {
                const data = {
                    name: nombre,
                    email: email,
                    ine_id: ine,
                    password: password
                }
                console.log(data)
                // console.log(password)
                var settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": urls.signup,
                    "method": "PATCH",
                    "headers": {
                      "Content-Type": "application/json",
                      "Authorization": "Bearer " + token,
                      "cache-control": "no-cache"
                    },
                    "processData": false,
                    "data": JSON.stringify(data)
                }
                
                $.ajax(settings).done(function (response) {
                    console.log(response);
                    $.ajax(settings).done(function (response2) {
                        alert("Datos actualizados");
                        $.session.set("userData", JSON.stringify(response2.user));
                        location.href = base + 'profile.html';
                    })
                });
            }
        }
    })
}

$( document ).ready(function() {
    fillFields();
    actualizar();
});