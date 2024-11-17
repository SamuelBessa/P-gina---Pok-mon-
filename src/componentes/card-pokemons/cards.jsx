import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { ThemeContext } from '../context/theme-context';
import styled from 'styled-components';
import { Test } from '../header/Header';

export function Card() {

    const navigate = useNavigate();

    function onSeeDetailsClick(pokemon) {
        const query = new URLSearchParams();
    
        query.set("name", pokemon.name);
        query.set("image", pokemon.image);
        query.set("moves", pokemon.moves.join(','));  // Passa moves como string separada por vírgulas
        query.set("types", pokemon.types.join(','));  // Passa types como string separada por vírgulas
        query.set("abilities", encodeURIComponent(JSON.stringify(pokemon.abilities)));  // Codifica abilities
    
        navigate(`/task?${query.toString()}`);
    }
    
    
    
    


    const [pokemons, setPokemons] = useState([]);
    const [limit, setLimit] = useState(10);

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
                    
                    // Busca detalhes das habilidades com nome e descrição
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

    function loadMorePokemons() {
        setLimit((prevLimit) => prevLimit + 10);
    }

    const { theme } = useContext(ThemeContext);

    return (
        <>
            <Test />
            <Section
                style={{ color: theme.color, backgroundColor: theme.background }}>
                <Ul>
                    {pokemons.map((pokemon, index) => (
                        <Li key={index}>
                            <Div>
                                <img src={pokemon.image} alt={pokemon.name} />
                            </Div>
                            <H3 onClick={() => onSeeDetailsClick(pokemon)}>{pokemon.name}</H3>
                            <p>Types: {pokemon.types.join(', ')}</p>
                        </Li>
                    ))}
                </Ul>
                <DivButton>
                <Button onClick={loadMorePokemons}>
                    <Plus />
                </Button>
                </DivButton>
            </Section>
        </>
    );
}

const H3 = styled.h3`
    cursor: pointer;
    margin: 10px;
`;

const Li = styled.li`
    background-color: #31c4ab;
    border-radius: 8px;
    width: 280px;
    height: 354px;
    margin: 30px;
    justify-items: center;
    align-content: center;
`;

const Ul = styled.ul`
    display: grid;        
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 30px;
    justify-items: center;
    text-align: center;
`;

const DivButton = styled.div`
  width: 100%;
  text-align: center;
`;

const Section = styled.section`
    height: 100%;
    width: 100%;
    background-color: #FFF7FC;
    padding: 20px;

    @media (max-width: 768px) {
        padding: 10px;
    }
`;

const Button = styled.button`
    border-radius: 10px;
    width: 70px;
    height: 40px;
    color: white;
    background-color: rgb(39, 19, 150);
    margin: 22px 0px 23px 0px;
    border: none;
    cursor: pointer;

    @media (max-width: 768px) {
        width: 60px;
        height: 35px;
    }
`;

const Div = styled.div`
    width: 200px;
    height: 200px;
    background-color: blueviolet;
    align-content: center;
    border-radius: 10px;
    text-align: center;

    @media (max-width: 768px) {
        width: 100px;
        height: 100px;
    }
`;


function Pagina() {
    return (
        <>
            <Card />
        </>
    );
}

export default Pagina;
