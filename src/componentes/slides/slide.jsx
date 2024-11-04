import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Slide() {
    const navigate = useNavigate();
    const [pokemons, setPokemons] = useState([]);
    const [limit] = useState(100);

    function onSeeDetailsClick(pokemon) {
        const query = new URLSearchParams();
    
        query.set("name", pokemon.name);
        query.set("image", pokemon.image);
        query.set("moves", pokemon.moves.join(','));
        query.set("types", pokemon.types.join(','));
    
        const abilitiesData = encodeURIComponent(JSON.stringify(pokemon.abilities));
        query.set("abilities", abilitiesData);
    
        navigate(`/task?${query.toString()}`);
    }


    useEffect(() => {
        async function fetchData() {
            const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
            const data = await resposta.json();
            const pokemonDetails = await Promise.all(
                data.results.map(async (pokemon) => {
                    const response = await fetch(pokemon.url);
                    const details = await response.json();

                    const image = details.sprites.front_default;
                    const moves = details.moves.map(move => move.move.name);
                    
                    const abilities = await Promise.all(details.abilities.map(async (ability) => {
                        const abilityResponse = await fetch(ability.ability.url);
                        const abilityDetails = await abilityResponse.json();
                        const effectEntry = abilityDetails.effect_entries.find(entry => entry.language.name === 'en');
                        return {
                            name: ability.ability.name,
                            description: effectEntry ? effectEntry.effect : 'Description not available'
                        };
                    }));

                    const types = details.types.map(type => type.type.name);

                    return {
                        name: details.name,
                        image: image,
                        moves: moves,
                        abilities: abilities,
                        types: types
                    };
                })
            );
            setPokemons(pokemonDetails);
        }

        fetchData();
    }, [limit]);

    return (
        <section>
            <Swiper
                style={{ width: '100%', flexShrink: 0 }}
                pagination={{ clickable: true }}
                navigation
                modules={[Navigation, Pagination]}
                breakpoints={{
                    300: { slidesPerView: 3 },
                    480: { slidesPerView: 4 },
                    640: { slidesPerView: 5 },
                    768: { slidesPerView: 6 },
                    1024: { slidesPerView: 7 },
                    1025: { slidesPerView: 10 },
                }}
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
        </section>
    );
}