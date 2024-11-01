import { useSearchParams } from "react-router-dom"
import { ArrowLeft } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../context/theme-context";
import { Test } from "../header/Header"
import styled from "styled-components";

function TaskPage() {

    const [searchParams] = useSearchParams();
    const name = searchParams.get("name")
    const image = searchParams.get("image")
    const types = searchParams.get("types")
    const moves = searchParams.get("moves")
    const abilities = searchParams.get("abilities")

    const movesFormatadas = moves.split(",").join(", ");
    const habilidadesFormatadas = abilities.split(",").join(", ");
    const typesFormatados = types.split(",").join(", ");

    const { theme } = useContext(ThemeContext)

    return (
        <>
            <Test />
            <Section style={{ color: theme.color, backgroundColor: theme.background }}>
                <div>
                    <Img src={image} alt={name}></Img>
                </div>

                <Div>
                    <h2>{name}</h2>
                    <p><Span>Moves: </Span>{movesFormatadas}</p>
                    <p><Span>Abilidades: </Span>{habilidadesFormatadas}</p>
                    <p><Span>Type: </Span>{typesFormatados}</p>
                </Div>
            </Section>
        </>
    )
}

const Img = styled.img`
    margin-left: 30px;
`

const Section = styled.section`
    height: calc(100vh - 50px);
`

const Span = styled.span`
    font-weight: 700;
`

const Div = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
    margin-left: 30px;
`

export default TaskPage