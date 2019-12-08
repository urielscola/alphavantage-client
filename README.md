# URL Alpha Vantage Client

Demonstração do exercício [aqui](http://topazio-teste.surge.sh/).

# Tech Stack

- React.js
- Styled-components
- Jest

# Instalação e como rodar o projeto

`yarn && yarn start`


# Para rodar os testes

```
yarn test
```

Testes unitários feitos com as ferramentas Jest e react-testing-library.

# Para verificar a cobertura de testes

```
yarn coverage
```

# Para realizar deploy

```
yarn deploy
```

É necessário realizar login no surge pelo CLI antes, com o comando `surge login`.
É possível alterar o domínio no package.json.

# CD/CI

Pipeline realizada antes de cada `push`, utilizando git hooks.
Primeiro rodarão os testes, caso todos estejam passando, será realizado o processo de deploy automaticamente.
