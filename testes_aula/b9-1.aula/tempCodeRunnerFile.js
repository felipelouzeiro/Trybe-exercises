console.log(fetch('https://pokeapi.co/api/v2/pokemon/jigglypuff')
.then((response) => response.json())
.then((pokemon) => pokemon))
};