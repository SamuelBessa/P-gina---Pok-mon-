import Pagina from './componentes/card-pokemons/cards';
import { ThemeProvider } from './componentes/context/theme-context';
import { createGlobalStyle } from 'styled-components';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TaskPage from './componentes/pages/TaskPage.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: "/Pokedex",
      element: <Pagina />,
    },
    {
      path: "/task",
      element: <TaskPage />,
    },
  ]);

  return (
    <ThemeProvider>
      <GlobalStyle />
      <RouterProvider router={router} basename={process.env.PUBLIC_URL}/>
    </ThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style-type: none;
    box-sizing: border-box;
  }
`;

export default App;

