Aqui está o README formatado para que você possa copiar e colar diretamente no seu projeto.

---

# Pokédex React SPA

## 📜 Descrição do Projeto

Esta aplicação é uma Pokédex interativa desenvolvida em **React.js**, que utiliza a **API PokeAPI** para buscar dados de Pokémon em tempo real. A aplicação exibe uma lista de Pokémon que o usuário pode explorar e acessar detalhes específicos. O projeto implementa funcionalidades como alternância de temas (claro e escuro), carregamento dinâmico de dados e navegação entre páginas, proporcionando uma experiência fluida e moderna para os usuários.

## 🔍 Funcionalidades

- **Página Inicial (Home)**:
  - Exibe uma lista de 10 Pokémon com suas imagens e nomes.
  - Botão "Carregar mais" para adicionar 10 novos Pokémon à listagem atual, sem recarregar a página.
  - Alternância de tema entre claro e escuro, usando o botão de troca de tema.

- **Página de Detalhes do Pokémon**:
  - Exibe a imagem, nome, lista de movimentos, habilidades e tipos do Pokémon selecionado.
  - Cada habilidade apresenta o nome e uma descrição detalhada.

- **Tema Claro/Escuro**:
  - O tema pode ser alterado utilizando um botão na página inicial.
  - Utilização de **Context API** e **styled-components** para gerenciar o tema de forma centralizada e estilizar os componentes dinamicamente.

## 🛠 Ferramentas Utilizadas

- **React.js**: Principal framework para o desenvolvimento da SPA.
- **PokeAPI**: API pública usada para obter dados dos Pokémon.
- **Context API**: Gerenciamento global do tema para alternância entre claro e escuro.
- **styled-components**: Biblioteca para estilização dos componentes, com suporte dinâmico ao tema.
- **React Router DOM**: Navegação entre páginas da SPA.
  
Escolhemos essas ferramentas por serem robustas e amplamente utilizadas para construção de SPAs com funcionalidades interativas e temas dinâmicos. Elas permitiram uma implementação eficiente e escalável, além de facilitar a manutenção e a personalização de estilos.

## 📐 Estrutura do Projeto

```plaintext
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── PokemonCard.js
│   │   └── LoadMoreButton.js
│   ├── contexts/
│   │   └── ThemeContext.js
│   ├── pages/
│   │   ├── Home.js
│   │   └── PokemonDetails.js
│   ├── styles/
│   │   └── GlobalStyles.js
│   ├── App.js
│   └── index.js
└── README.md
```

## 📋 Decisões de Implementação

- **SPA e Carregamento Dinâmico**: Optamos por uma SPA para garantir uma experiência mais fluida ao usuário, sem recarregamentos de página ao navegar entre detalhes de Pokémon e a página inicial.
- **Context API para Tema**: Escolhemos a Context API para gerenciar o tema, pois permitiu a troca de tema de forma global e o acesso simplificado a essa informação em qualquer componente.
- **Styled-components**: Usamos styled-components para estilização dos componentes, o que facilita a implementação do tema dinâmico, uma vez que o estilo pode ser modificado em tempo real com base no contexto de tema.

## 🚀 Instalação e Execução do Projeto

Siga os passos abaixo para rodar o projeto no seu ambiente local.

### Pré-requisitos

- **Node.js** (v14 ou superior)
- **npm** ou **yarn**

### Passo a Passo

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/pokedex-react.git
   cd pokedex-react
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

   ou, se preferir o yarn:

   ```bash
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento**:

   ```bash
   npm start
   ```

   ou com yarn:

   ```bash
   yarn start
   ```

4. **Abra no navegador**:

   A aplicação estará disponível em `http://localhost:3000`.

## 📝 Observações Adicionais

- **Tema Claro/Escuro**: A aplicação inicia com o tema claro, mas você pode alternar entre os temas usando o botão no cabeçalho da página inicial.
- **Carregamento de Dados**: Para otimizar o tempo de resposta, os detalhes do Pokémon são buscados sob demanda ao acessar a página de detalhes.
  
## 🎉 Agradecimentos

Agradecemos à equipe da [PokeAPI](https://pokeapi.co/) por disponibilizar uma API tão completa e de fácil uso para desenvolvedores.

--- 

Espero que aproveitem o projeto!
