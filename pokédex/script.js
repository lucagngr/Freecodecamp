const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

document.getElementById("search-button").addEventListener("click", async () => {
    const searchInput = document.getElementById("search-input").value.trim().toLowerCase();

    const nameElement = document.getElementById("pokemon-name");
    const idElement = document.getElementById("pokemon-id");
    const weightElement = document.getElementById("weight");
    const heightElement = document.getElementById("height");
    const typesElement = document.getElementById("types");
    const hpElement = document.getElementById("hp");
    const attackElement = document.getElementById("attack");
    const defenseElement = document.getElementById("defense");
    const specialAttackElement = document.getElementById("special-attack");
    const specialDefenseElement = document.getElementById("special-defense");
    const speedElement = document.getElementById("speed");
    const spriteContainer = document.getElementById("sprite-container");

    try {
        const response = await fetch(`${apiUrl}${searchInput}`);
        if (!response.ok) {
            throw new Error("Pokémon not found");
        }

        const data = await response.json();

        // Mettre à jour les informations
        document.getElementById("pokemon-name").textContent = data.name.toUpperCase();
        document.getElementById("pokemon-id").textContent = `#${data.id}`;
        document.getElementById("weight").textContent = `Weight: ${data.weight}`;
        document.getElementById("height").textContent = `Height: ${data.height}`;

        // Mettre à jour les types
        typesElement.innerHTML = ""; // Réinitialiser les types
        data.types.forEach(type => {
            const typeElement = document.createElement("p");
            typeElement.textContent = type.type.name.toUpperCase();
            typesElement.appendChild(typeElement);
        });

        // Mettre à jour les statistiques
        document.getElementById("hp").textContent = data.stats[0].base_stat;
        document.getElementById("attack").textContent = data.stats[1].base_stat;
        document.getElementById("defense").textContent = data.stats[2].base_stat;
        document.getElementById("special-attack").textContent = data.stats[3].base_stat;
        document.getElementById("special-defense").textContent = data.stats[4].base_stat;
        document.getElementById("speed").textContent = data.stats[5].base_stat;

        // Ajouter l'image
        spriteContainer.innerHTML = ""; // Réinitialiser l'image
        const sprite = document.createElement("img");
        sprite.id = "sprite";
        sprite.src = data.sprites.front_default;
        sprite.alt = `${data.name} sprite`;
        spriteContainer.appendChild(sprite);

    } catch (error) {
        alert("Pokémon not found");

        // Réinitialiser les informations
        document.getElementById("pokemon-name").textContent = "";
        document.getElementById("pokemon-id").textContent = "";
        document.getElementById("weight").textContent = "";
        document.getElementById("height").textContent = "";
        document.getElementById("types").innerHTML = "";
        document.getElementById("hp").textContent = "";
        document.getElementById("attack").textContent = "";
        document.getElementById("defense").textContent = "";
        document.getElementById("special-attack").textContent = "";
        document.getElementById("special-defense").textContent = "";
        document.getElementById("speed").textContent = "";
        document.getElementById("sprite-container").innerHTML = "";
    }
});
