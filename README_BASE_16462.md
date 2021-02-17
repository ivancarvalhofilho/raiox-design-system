# RaioX Design System
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=guhcostan-equals_raiox-design-system&metric=alert_status)](https://sonarcloud.io/dashboard?id=guhcostan-equals_raiox-design-system)
## Web

### Instalação
A instalação do pacote deve ser feita via npm ou adicionado no package.json

npm
```
npm install github:guhcostan-equals/raiox-design-system
```

package.json
```
"raiox-design-system": "github:guhcostan-equals/raiox-design-system#main",
```

### Guia Utilização

Para que os tokens e temas funcionem corretamente, é nescessario importa-los ao projeto.

#### Tema

Caso deseje usar os tokens em javascript, o tema pode ser importado da seguinte forma.
```
import theme from 'raiox-design-system/tokens/js'
```
_Recomendo utilizar a lib 'styled-components' pois ela possui suporte a temas, facilitando o uso do mesmo_
```
<ThemeProvider theme={theme}>
    <App />
</ThemeProvider>
```

#### Componentes

Já para a utilização dos componentes, é nescessário importa-los pela pasta de componentes.

Por exemplo o Calendario

```
import Calendar from 'raiox-design-system/web/dist/components/Calendar/Calendar'
```

e isto se aplica para a maioria dos componentes, exeto os componentes de estilos como TextRow por exemplo.

```
import { TextRow } from 'raiox-design-system/web/dist/components/StyledComponents'
```

_As documentações dos componentes podem ser encontradas no storybook._

https://raiox-design-system.web.app/

## Contribuições

Para contribuir adicionando novos componentes ou criando novos temas.

Favor abrir **Pull Request** contendo explicação do componente e conferir se o componente está nó storybook e se possui documentação.
