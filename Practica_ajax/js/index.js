$.ajax({
    url: "./data/mexicanStates.json",
    type: "GET",
    dataType: "json",
    success: function(data) {
        let new_html = "";
        for(let i = 0; i < data.length; i++) {
            new_html += `
            <option value="${data[i].identifier}">
            ${data[i].state}
            </option>`;
        }
        $("#mexicanStates").append(new_html);
        loadCapitalJSON();
    },
    error: function(error_msg) {
        console.log(error_msg);
    }
});

function loadCapitalJSON () {
    $.ajax({
        url: "./data/mexicanStatesCapitals.json",
        type: "GET",
        dataType: "json",
        success: function(data) {
            $("mexicanStates").on('change', function(event) {
                let id = $(this).val();
                for(let i = 0; i < data.length; i++) {
                    if(id == data[i].id) {
                        $("#stateCapital").val(data[i].capital);
                    }
                }
            });
        },
        error: function(error_msg) {
            console.log(error_msg);
        }
    })
}

$.ajax({
    url: "data/nutrition.xml",
    type: "GET",
    dataType: "xml",
    success: function(data) {
        let new_html = "";
        $(data).find("food").each(function(event) {
            new_html += `
            <tr>
                <td>${$(this).find("name").text()}</td>
                <td>${$(this).find("serving").text()}</td>
                <td>${$(this).find("calories").text()}</td>
                <td>${$(this).find("cholesterol").text()}</td>
                <td>${$(this).find("sodium").text()}</td>
                <td>${$(this).find("carb").text()}</td>
                <td>${$(this).find("fiber").text()}</td>
                <td>${$(this).find("protein").text()}</td>
            </tr>
            `;
        });
        $("#foodTable").append(new_html);
    },
    error: function(error_msg) {
        console.log(error_msg);
    }
});