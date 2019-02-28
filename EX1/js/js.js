
/*
1. Función que muestra y esconde la sección para hacer comentarios 
   al hacer click el botón "Escribe una reseña". 
   on click!
   (10 puntos)
*/
$("#escribe_reseña").click(function() {
  $("#seccion_comentario").css("visibility", "visible");
});

/*
2. Cargar los comentarios de el archivo comentarios.xml o bien de 
  https://barbaragabriela.github.io/misc/ 
  (función ajax, 30 puntos)
*/
$.ajax({
  url: "https://barbaragabriela.github.io/misc/",
  type: "GET",
  dataType: "xml",
  success: function(data) {
    let new_html = "";
    $(data).find("comment").each(function(event) {
      new_html += `
      <div class="review">
        <div>${$(this).find("name").text()}</div>
        <div class="stars">${getStarsSpans($(this).find("stars").text())}</div>
        <div>${$(this).find("text").text()}</div>
      </div>`;
    })
    $("#seccion_reviews").append(new_html);
  }
});

/*
3. Funcion que apendiza el nuevo comentario al darle click a PUBLICAR
  on click!
  (función, 35 puntos)
*/

$("#btn-publicar").click(function() {
  //checamos que los valores de nombre y comentario contengan texto
  //si hay texto, hacer append
  if ($("#nombre").val() != "" || $("#comentario").text() != "") {
    let estrella = 0;
    if ($("#star5").is(":checked")) {
      estrella = 5;
    }
    else if ($("#star4").is(":checked")) {
      estrella = 4;
    }
    else if ($("#star3").is(":checked")) {
      estrella = 3;
    }
    else if ($("#star2").is(":checked")) {
      estrella = 1;
    }
    else if ($("#star1").is(":checked")) {
      estrella = 1;
    }
    let new_html = `
    <div class="review">
        <h3>${$("#nombre").val()}</h3>
        <div class="stars">${getStarsSpans(estrella)}</div>
        <div>${$("#comentario").text()}</div>
    </div>`;
    $("#seccion_reviews").append(new_html); 
  }
  //si no hay texto, muestra el mensaje de error
  else {
    $(".error").css("visibility", "visible");
  }
});


/*
4. Funcion que limpia el nombre, el email y el div "#comentarios" al darle
   click en "btn-limpiar" con leyenda de "CANCELAR"
   on click!
  (5 puntos)
*/
$("#btn-limpiar").click(function() {
  $("#nombre").val("");
  $("#email").val("");
  $("#comentario").text("");
})


/*
Funcion que recibe un numero de stars y regresa los 5 spans 
que simbolizan las estrellas del rating. por ejemplo:
let stars = 3;
let html = getStarsSpans(stars);

html = "
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
"
*/
function getStarsSpans(stars) {
  let new_html = "";
  for( let i = 0; i < stars; i++) {
    new_html += `
      <span class="fa fa-star checked"></span>
    `;
  }

  for ( let i = 0; i < 5 - stars; i++ ) {
    new_html += `
      <span class="fa fa-star"></span>
    `;
  }

  return new_html;
}
