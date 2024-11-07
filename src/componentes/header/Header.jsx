import styled from "styled-components"
import { ThemeToggleerButton } from "../theme-toggler-button/theme-toggler-button"
import { useLocation, useNavigate } from "react-router-dom"
import LogoPokeball from '../img/logo-pokeball.png';
import LogoPokemon from '../img/logo-pokemon.png';

export function Test() {

    const navigate = useNavigate();
    const location = useLocation();

    const handleBack = () => {
        if (location.pathname !== '/Pokedex') {
            navigate("/Pokedex")
        }
    }

    return (
        <Header>
            <Button onClick={handleBack}>
                <Img src={ LogoPokeball} alt="logo-pokeball"></Img>
            </Button>
            <Button onClick={handleBack}>
                <Img src={LogoPokemon} alt="logo-pokemon"></Img>                
            </Button>
            <ThemeToggleerButton />
        </Header>
    )
}

const Button = styled.button`
    border: none;
    height: 50px;
`

const Img = styled.img`
    height: 50px;
    background-size: cover;
    cursor: pointer;
`

const Header = styled.header`
    display: flex;
    height: 50px;
    width: 100%;
    justify-content: space-between;
    background-color: #EEEEEE;
    align-items: center;
`