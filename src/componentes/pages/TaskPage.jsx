import { useSearchParams } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/theme-context";
import { Test } from "../header/Header";
import styled from "styled-components";
import { Slide } from "../slides/slide";

function TaskPage() {

    const [searchParams] = useSearchParams();
    const name = searchParams.get("name");
    const image = searchParams.get("image");
    const types = searchParams.get("types").split(','); // Divide a string em um array
    const moves = searchParams.get("moves").split(','); // Divide a string em um array

    const abilitiesData = searchParams.get("abilities");
    const abilities = abilitiesData ? JSON.parse(decodeURIComponent(abilitiesData)) : [];

    const { theme } = useContext(ThemeContext);

    return (
        <>
            <Test />
            <Section style={{ color: theme.color, backgroundColor: theme.background }}>
                <div>
                    <Img src={image} alt={name}></Img>
                </div>

                <Div>
                    <h2>{name}</h2>
                    <p><Span>Moves: </Span>{moves.join(', ')}</p>
                    <p><Span>Type: </Span>{types.join(', ')}</p>
                </Div>

                <div>
                    <h4>Abilities:</h4>
                    <ul>
                        {abilities.map((ability, index) => (
                            <li key={index}>
                                <strong>{ability.name}</strong>: {ability.description}
                            </li>
                        ))}
                    </ul>
                </div>
                <Slide />
            </Section>
        </>
    );
}

const Img = styled.img`
    margin-left: 30px;
    max-width: 100%;

    @media (max-width: 768px) {
        margin-left: 15px;
    }

    @media (max-width: 480px) {
        margin-left: 0;
    }
`;

const Section = styled.section`
    height: calc(100vh - 50px);
    padding: 20px;

    @media (max-width: 768px) {
        padding: 10px;
    }
`;

const Span = styled.span`
    font-weight: 700;
    font-size: 1.2rem;

    @media (max-width: 768px) {
        font-size: 1rem;
    }

    @media (max-width: 480px) {
        font-size: 0.9rem;
    }
`;

const Div = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
    margin-left: 30px;

    @media (max-width: 768px) {
        margin-left: 15px;
        gap: 8px;
    }

    @media (max-width: 480px) {
        margin-left: 0;
        gap: 5px;
    }
`;


export default TaskPage