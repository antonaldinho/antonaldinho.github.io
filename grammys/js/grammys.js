$.ajax({
    url: "./data/grammys.json",
    type: "GET",
    dataType: "json",
    success: function(data) {
        let new_html = "";
        for(let i = 0; i < data.length; i++) {
            new_html = `<option value="${data[i].field_id}">${data[i].field}</option>`;
        }
        $("#category_types").append(new_html);
    },
    error: function(error_msg) {
        console.log(error_msg);
    }
});