import React from "react";
import type { Metadata } from "next";
import { PokemonClient, Pokemon } from "pokenode-ts";
import Image from "next/image"; // Import Image component

const Page = async () => {
  const api = new PokemonClient();

  const getPokemonData = async () =>
    await api.getPokemonByName("bulbasaur").then((data) => data); // You can change 'bulbasaur' to any Pokémon name or ID

  const pokemon: Pokemon = await getPokemonData();

  return (
    <section className="About flex min-h-screen w-full items-center justify-center">
      <h1 className="Homepage-text text-center text-8xl font-bold">
        {pokemon && (
          <Image
            src={pokemon.sprites.other.home.front_shiny}
            alt={pokemon.name}
            width={513}
            height={512}
            quality={100}
            layout="responsive"
          />
        )}
      </h1>
    </section>
  );
};

export default Page;
