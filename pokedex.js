const fetchPokemon = () => {
    const search = document.getElementById("search");
    let pokeint = search.value;
    pokeint = pokeint.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeint}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./error.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.other.home.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);
            let pokeName = data.name;
            let pokeId = data.id;
            let pokeType = data.types[0].type.name;
            let pokeHeight = data.height;
            let pokeWeight = data.weight;
            let pokeAbilities = data.abilities[0].ability.name;
            let pokeStats = data.stats[0].base_stat;
            let pokeMove = data.moves[0].move.name;
            console.log(pokeName);
            console.log(pokeId);
            console.log(pokeType);
            console.log(pokeHeight);
            console.log(pokeWeight);
            console.log(pokeAbilities);
            document.getElementById("pokeName").innerHTML ="Nombre: "+ pokeName;
            document.getElementById("pokeId").innerHTML ="ID: "+ pokeId;
            document.getElementById("pokeType").innerHTML ="Tipo: " + pokeType;
            document.getElementById("pokeHeight").innerHTML ="Altura: " +pokeHeight;
            document.getElementById("pokeWeight").innerHTML ="Peso: " +pokeWeight;
            document.getElementById("pokeAbilities").innerHTML ="Habilidad: " +pokeAbilities;
            document.getElementById("pokeStats").innerHTML ="Estadisticas: " +pokeStats;
            document.getElementById("pokeMoves").innerHTML ="Movimiento: " +pokeMove;

        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");

    pokePhoto.src = url;

}
