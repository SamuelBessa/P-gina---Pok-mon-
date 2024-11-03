import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export function Slide() {

    const navigate = useNavigate();

    function onSeeDetailsClick(pokemon) {
        const query = new URLSearchParams();

        query.set("name", pokemon.name);
        query.set("image", pokemon.image);
        query.set("moves", pokemon.moves);
        query.set("abilities", pokemon.abilities);
        query.set("types", pokemon.types);

        navigate(`/task?${query.toString()}`);
    }

    const [pokemons, setPokemons] = useState([]);
    const [limit] = useState(100);

    useEffect(() => {
        async function fetchData() {
            const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
            const data = await resposta.json();
            const pokemonDetails = await Promise.all(
                data.results.map(async (pokemon) => {
                    const response = await fetch(pokemon.url);
                    const details = await response.json();
                    const image = details.sprites.front_default

                    const moves = details.moves.map(move => move.move.name)

                    const abilities = details.abilities.map(ability => ability.ability.name)

                    const types = details.types.map(type => type.type.name)

                    return {
                        image: image,


                        name: details.name,
                        moves: moves,
                        abilities: abilities,
                        types: types
                    }
                })
            );
            setPokemons(pokemonDetails);
        }
        fetchData();
    }, [limit]);


    return (
        <Section>
            <Swiper
                style={{ width: '100%', flexShrink: 0 }}
                slidesPerView={10}
                pagination={{ clickable: true }}
                navigation
                modules={[Navigation]}
            >
                {pokemons.map((pokemon, index) => (
                    <SwiperSlide key={index}>
                        <img
                            onClick={() => onSeeDetailsClick(pokemon)}
                            src={pokemon.image}
                            alt={`Slide ${index + 1}`}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Section>
    )
}

const Section = styled.section`
    display: flex;
    flex-direction: column; 
    justify-content: flex-end;
    height: 68%;
`