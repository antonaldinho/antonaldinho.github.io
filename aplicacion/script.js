console.log('ayy lmao');
/*
let searchBtn = document.getElementById("searchButton");
searchBtn.addEventListener("click", function() {
    let searchTerm = document.getElementById("searchTerm").value;
    $.ajax({
        url: 'http://localhost:3000/omdb?search=' + searchTerm,
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            if(data.error) {
                console.log(data.error);
            }
            else {
                console.log(data);
                console.log(data.title);
                console.log(data.plot);
            }
        }
    })
})
*/

$("#searchButton").click(function() {
    let searchTerm = document.getElementById("searchTerm").value;
    $.ajax({
        url: 'http://localhost:3000/omdb?search=' + searchTerm,
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            if(data.error) {
                console.log(data.error);
            }
            else {
                console.log(data);
                console.log(data.title);
                console.log(data.plot);
            }
        }
    })
})
/*
fetch('http://localhost:3000/omdb?search=Bandersnatch').then(function(response) {
    response.json().then(function(data) {
        if(data.error) {
            console.log(error);
        }
        else {
            console.log(data);
            console.log(data.title);
            console.log(data.plot);
        }
    })
})
*/
