function getPokemonURL (num){
    return `https://pokeapi.co/api/v2/pokemon/${num}/`;
}

function getPokemonImage (num){
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${num}.png`;
}

$(document).ready(function() {
    for (let i=1; i<=150;i++) {
      let image = `<img src='${getPokemonImage(i)}' data-pokenum= '${i}'></img>`;
      let frame = `<div class='frame'>${image}</div>`;
      $(".wrapper").append(frame);
    }

    $(".wrapper img").click(function(){
     let pokenum = $(this).data("pokenum");
     let url = getPokemonURL($(this).data("pokenum"));
     $.ajax(url).done(function(data){
        $("#poke_image").attr("src", getPokemonImage(pokenum));
        $("#poke_name").html(data.name);
        $("#poke_types").html("");
        $("#poke_height").html(data.height);
        $("#poke_weight").html(data.weight);

        $(".popup").show();
     })
    });

    $(".popup button").click(function(){
        $(".popup").hide();
    });

});

