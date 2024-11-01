import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useContext } from 'react';
import { ThemeContext } from '../context/theme-context';
import styled from 'styled-components';
import { Test } from '../header/Header';

export function Card() {

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
    const [limit, setLimit] = useState(10);

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
                            <p>{pokemon.types}</p>
                        </Li>
                    ))}
                </Ul>
                <Button onClick={loadMorePokemons}>
                    <Plus />
                </Button>
            </Section>
        </>
    );
}

const H3 = styled.h3`
    cursor: pointer;
    margin: 10px;
`

const Li = styled.li`
    background-color: #31c4ab;
    border-radius: 8px;
    width: 280px;
    height: 354px;
    justify-items: center;
    align-content: center;
    margin: 30px;
`

const Ul = styled.ul`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`

const Section = styled.section`
    height: 100%;
    width: 100%;
    background-color: #FFF7FC;
    justify-items: center;
`

const Button = styled.button`
    border-radius: 10px;
    width: 70px;
    height: 40px;
    color: white;
    background-color: rgb(39, 19, 150);
    margin: 22px 0px 23px 0px;
    border: none;
    cursor: pointer;
`

const Div = styled.div`
    width: 200px;
    height: 200px;
    background-color: blueviolet;
    align-content: center;
    border-radius: 10px;
    text-align: center;
`

function Pagina() {
    return (
        <>
            <Card />
        </>
    );
}

export default Pagina;
