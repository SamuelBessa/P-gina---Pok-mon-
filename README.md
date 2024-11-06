---
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
  - Exibe um carrossel com 100 Pokémon, onde, ao clicar em qualquer um deles, você será redirecionado à página de detalhes do respectivo Pokémon.

- **Tema Claro/Escuro**:
  - O tema pode ser alterado utilizando um botão na página inicial.
  - Utilização de **Context API** e **styled-components** para gerenciar o tema de forma centralizada e estilizar os componentes dinamicamente.

## 🛠 Ferramentas Utilizadas

- **React.js**: Principal framework para o desenvolvimento da SPA.
- **PokeAPI**: API pública usada para obter dados dos Pokémon.
- **Context API**: Gerenciamento global do tema para alternância entre claro e escuro.
- **styled-components**: Biblioteca para estilização dos componentes, com suporte dinâmico ao tema.
- **React Router DOM**: Navegação entre páginas da SPA.
- **Lucide-react**: Biblioteca de ícones para React, usada para adicionar ícones personalizados e modernos ao projeto com facilidade de configuração e estilização.
- **Swiper**: Biblioteca de sliders que permite exibir elementos de forma interativa e com rolagem suave, proporcionando uma experiência de usuário mais fluida.
  
Escolhir essas ferramentas por serem robustas e amplamente utilizadas para construção de SPAs com funcionalidades interativas e temas dinâmicos, e por ser as ferramentas que foi abordadas no curso DevQuest. Elas permitiram uma implementação eficiente e escalável, além de facilitar a manutenção e a personalização de estilos.

## 📐 Estrutura do Projeto

```plaintext
├── index.html/
│   
├── src/
│   ├── components/
│   │   ├── buttons/
│   │   │   └── button.jsx
│   │   │
│   │   ├──card-pokemons/
│   │   │   └── cards.jsx
│   │   │
│   │   ├──context/
│   │   │   └── theme-context.jsx
│   │   │
│   │   ├──header/
│   │   │   └── Header.jsx
│   │   │
│   │   ├── pages/
│   │   │    └── TaskPage.jsx
│   │   │
│   │   ├── slides/
│   │   │    └── slide.jsx
│   │   │
│   │   └── theme-toggler-button/
│   │       └── theme-toggler-button.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
└── README.md
```

## 📋 Decisões de Implementação

- **SPA e Carregamento Dinâmico**: Optei por uma SPA para garantir uma experiência mais fluida ao usuário, sem recarregamentos de página ao navegar entre detalhes de Pokémon e a página inicial.
- **Context API para Tema**: Escolhir a Context API para gerenciar o tema, pois permitiu a troca de tema de forma global e o acesso simplificado a essa informação em qualquer componente.
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
   npm run dev
   ```

   ou com yarn:

   ```bash
   yarn run dev
   ```

4. **Abra no navegador**:

   A aplicação estará disponível em `http://localhost:5173`.

## 📝 Observações Adicionais

- **Tema Claro/Escuro**: A aplicação inicia com o tema claro, mas você pode alternar entre os temas usando o botão no cabeçalho da página inicial.
- **Carregamento de Dados**: Para otimizar o tempo de resposta, os detalhes do Pokémon são buscados sob demanda ao acessar a página de detalhes.
  
## 🎉 Agradecimentos

Agradecemos à equipe da [PokeAPI](https://pokeapi.co/) por disponibilizar uma API tão completa e de fácil uso para desenvolvedores, e a equipe do DevQuest pelas aulas, monitorias e suporte que me ajudou muito no meu desenvolvimento com programador para que hoje eu possa entregar esse projeto, e pelas aulas com explicações de facil entedimento.

## 🤯 Desafios Durante o Projeto

Durante o desenvolvimento do projeto, enfrentei dois grandes desafios:

1. **Nomeação de Componentes**:
   Encontrar nomes apropriados e descritivos para os componentes foi um ponto de dificuldade. Ao longo do projeto, percebi que alguns nomes não representavam claramente a função do componente, o que dificultava a manutenção e o entendimento do código.

2. **Estruturação e Separação de Componentes**:
   Outro desafio foi entender o momento certo e a melhor forma de separar os componentes. Definir limites claros entre eles para garantir modularidade e reutilização exigiu um estudo mais aprofundado e experimentação prática.

Esses desafios contribuíram para aprimorar minhas habilidades em arquitetura de componentes e em organização de código, essenciais para o desenvolvimento de interfaces escaláveis e de fácil manutenção, sei que ainda não estar 100% mais foi um bom desafio para entender como funciona e com devo reagir quando encontrar esses desafios nos próximo projeto ou ate mesmo em uma nova versâo desse projeto.

--- 

Espero que aproveitem o projeto!
