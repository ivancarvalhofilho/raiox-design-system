# RaioX Design System
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=guhcostan-equals_raiox-design-system&metric=alert_status)](https://sonarcloud.io/dashboard?id=guhcostan-equals_raiox-design-system)
## Web

### Instalação
A instalação do pacote deve ser feita via npm ou adicionado no package.json

npm
```
npm install github:ivancarvalhofilho/raiox-design-system
```

package.json
```
"raiox-design-system": "github:ivancarvalhofilho/raiox-design-system#master",
```
Ficar atento a versão do projeto a ser utilizada, no exemplo está a branch master. Mas deve procurar a tag mais recente e usar ela. Exemplo: #1.1.2


Listagem de tags:
https://github.com/ivancarvalhofilho/raiox-design-system/tags

### Guia Utilização

Para que o Design System funcione corretamente, é nescessario importa-lo ao projeto.

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

Para atualizar a versão do DS hospedada no link, é necessário 
- Ter acesso ao firebase do design system
- Instalar a CLI do firebase: https://firebase.google.com/docs/cli#mac-linux-npm
- Fazer o login usando o comando: firebase login
- E por fim rodar: npm deploy

## Contribuições

Para contribuir adicionando novos componentes ou criando novos temas.

Favor abrir **Pull Request** contendo explicação do componente e conferir se o componente está nó storybook e se possui documentação.
