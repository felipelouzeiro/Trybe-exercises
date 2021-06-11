const createPokemon = (pokemon) => {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  li.innerHTML = pokemon.name;
  ul.appendChild(li);
  const img = document.createElement('img');
  img.src = pokemon.sprites.front_default;
  li.appendChild(img);
}

// const requestPokemon = (callback) => {
//   setTimeout(() => {
//     callback('ditto');
//   }, 3000);
// };


const fetchPokemon = () => {

// requestPokemon((pokemon) => {
  
  // })
  
  
  
  fetch('https://pokeapi.co/api/v2/pokemon/togepi')
  .then((response) => response.json()).then((pokemon) => {
    createPokemon(pokemon)

    fetch('https://pokeapi.co/api/v2/pokemon/gengar')
    .then((response) => response.json()).then((pokemon) => {
      createPokemon(pokemon)

      fetch('https://pokeapi.co/api/v2/pokemon/salamence')
      .then((response) => response.json()).then((pokemon) => {
        createPokemon(pokemon)

        fetch('https://pokeapi.co/api/v2/pokemon/bellsprout')
        .then((response) => response.json()).then((pokemon) => {
          createPokemon(pokemon)

          fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
          .then((response) => response.json()).then((pokemon) => {
            createPokemon(pokemon)
          
            fetch('https://pokeapi.co/api/v2/pokemon/milotic')
            .then((response) => response.json()).then((pokemon) => {
              createPokemon(pokemon)
            
              fetch('https://pokeapi.co/api/v2/pokemon/audino')
              .then((response) => response.json()).then((pokemon) => {
                createPokemon(pokemon)
              });
            });
          });
        });
      });
    });
  });






};


 window.onload = () => {
  fetchPokemon();
};