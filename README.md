# Portal de Serviços

Este é o repositório do meu projeto de portal de serviços, desenvolvido utilizando Vite/React.js. Inspirado no projeto desenvolvido durante o meu estágio.

Este README fornece uma visão geral da estrutura do projeto, suas dependências e arquivos importantes. Para mais informações sobre como executar o projeto localmente, consulte as seções relevantes neste arquivo ou entre em contato comigo.

Desenvolvido por: Rickson Reis

## Sumário
#### [Descrição do projeto](#descricao)
#### [Linguagem/framework utilizado](#linguagem)
#### [Dependências do projeto](#dependencias)
#### [Como executar o projeto?](#executar)
#### [Estrutura de pastas](#pastas)
#### [Como publicar uma módulo de serviço do Portal de Serviços como um pacote NPM](#npm)

## Descrição do projeto: <a name="descricao"></a>

Sistema web base para um portal de serviços utilizado para solicitar serviços para uma faculdade hipotética. O sistma é modular, ou seja, cada serviço disponível no portal é um módulo a ser importado de seu respectivo pacote npm que tem que ser instalado.

### Funcionamento

No portal os usuários solicitam serviços para a coordenaria da faculdade, que recebe e responde a solicitação através de um sistema interno (não coberto nesse projeto - por enquanto).
- Na página 'Operador', os administradores do sistema podem adicionar e excluir módulos de serviço. A página só pode ser acessada por quem tem papel (role) de 'operador' atrelado ao seu usuário.

## Linguagem/Framework utilizado: <a name="linguagem"></a>
### Vite React.js

### Outras Ferramentas Utilizadas

- Node.js: Ambiente de execução JavaScript server-side que permite a construção de aplicações escaláveis.
- Express: Framework web minimalista e flexível para Node.js, utilizado para construir APIs e aplicações web.
- Bootstrap: Framework de front-end para desenvolvimento ágil de sites e aplicativos web responsivos.
- SASS: Pré-processador CSS que estende a funcionalidade do CSS convencional.
- React Icons: Biblioteca que fornece ícones populares para uso em aplicativos React.

## Dependências do Projeto <a name="dependencias"></a>

## backend

### Dependencies

- cors: Middleware para Express que habilita CORS (Cross-Origin Resource Sharing), permitindo o acesso a recursos de diferentes origens.
- dotenv: Biblioteca que carrega variáveis de ambiente de um arquivo .env para process.env, facilitando a configuração da aplicação..
- express: Framework web minimalista e flexível para Node.js, utilizado para construir APIs e aplicações web.

## frontend

### Dependencies

- bootstrap: Framework de front-end para desenvolvimento ágil de sites e aplicativos web responsivos.
- react-bootstrap: Versão do bootsrap otimizada para aplicações react.
- react: Biblioteca JavaScript para criar interfaces de usuário.
- react-bootstrap: Componentes Bootstrap reutilizáveis para React.
- react-dom: Biblioteca JavaScript para manipulação do DOM em React.
- react-icons: Biblioteca de ícones para React.
- react-tooltip: Biblioteca react para implementar tooltips, ou "dicas de ferramentas" (pop up que abre quando o mouse fica sobre algum elemento da interface).

Como não consegui acessar diretamente o repositório do GitHub, aqui está um guia genérico para executar o projeto Vite React que está localizado na pasta `frontend` da raiz do repositório. Você pode adaptar este guia conforme necessário para o seu repositório específico.

## Como executar o projeto? <a name="executar"></a>

### Pré-requisitos

Certifique-se de que você tem os seguintes softwares instalados em sua máquina:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (normalmente instalado junto com o Node.js)

## Passos para Executar o Projeto

### 1. Clonar o Repositório

Primeiro, clone o repositório em sua máquina local. Abra um terminal e execute o seguinte comando:

```sh
git clone https://github.com/rickreisme/PortalServicos.git
cd PortalServicos
```

## Para o projeto do frontend Vite React localizado na pasta `frontend` da raiz do repositório:

  ### 2. Navegar até a Pasta `frontend`

  Mude para o diretório `frontend` onde está localizado o projeto Vite React:

  ```sh
  cd frontend
  ```

  ### 3. Instalar Dependências

  Instale as dependências do projeto usando npm:

  ```sh
  npm install
  ```

  ### 4. Executar o Servidor de Desenvolvimento

  Depois de instalar as dependências, inicie o servidor de desenvolvimento do Vite:

  ```sh
  npm run dev
  ```

  Isso iniciará o servidor de desenvolvimento e você verá uma saída similar a esta:

  ```
    VITE v2.0.0  ready in 300ms

    ➜  Local:   http://localhost:5173/
    ➜  Network: use --host to expose
  ```

  Abra seu navegador e acesse `http://localhost:5173` para ver a aplicação em execução.

  Para finalizar a execução aperta Ctrl+C no terminal.

## Para o projeto do backend localizado na pasta `backend` da raiz do repositório:

  ### 5. Navegar até a Pasta `backend`

  Mude para o diretório `backend` onde está localizado o projeto Vite React:

  ```sh
  cd backend
  ```
  ### 6. Instalar Dependências

  Instale as dependências do projeto usando npm:

  ```sh
  npm install
  ```

  ### 7. Executar o Servidor de Desenvolvimento

  Depois de instalar as dependências, inicie o servidor node:

  ```sh
  node index.js
  ```

  Isso iniciará o servidor e você verá uma saída similar a esta:

  ```
  Servidor rodando na porta 5000
  ```
  Para finalizar a execução aperte Ctrl+C no terminal.

## Estrutura de Pastas <a name="pastas"></a>

- `portal-servicos`
  - `backend`
  - `frontend`
  - `modulo-teste`
  - `projeto`

### Expansão de portal-servicos:

- `backend` (não possui subpastas)

- `frontend`
  - `./public`
  - `./src`
    - `api`
      - `services`
    - `assets`
      - `icons`
      - `imgs`
      - `styles`
        - `mediaQuery`
    - `components`
    - `contexts`
    - `hooks`
    - `routes`
- `projeto` (não possui subpastas)

## Conteúdo das Pastas

### portal-servicos

- `frontend`: Toda a estrutura front-end do projeto, feita em Vite React.
- `backend`: Estrutura de comunicação com APIs.
- `projeto`: Outros arquivos importantes do projeto.

### frontend

- `public`: Arquivos estáticos que serão servidos diretamente pelo servidor web, sem processamento pelo sistema de construção.
- `src`: Código fonte da aplicação.
- `src/assets`, `assets/icons`, `assets/imgs`: Ícones e imagens, arquivos de mídia que compõem as páginas e componentes.
- `assets/styles`: Arquivos das folhas de estilo que estilizam as páginas e componentes.
- `styles/mediaQuery`: Arquivos de folhas de estilo que estilizam as páginas em diferentes tamanhos de tela para ter responsividade.
- `components`: Códigos fonte de componentes das páginas principais do site, componentização diminui as linhas de código nas páginas principais.
- `contexts`: Contém os contextos, que compartilham os estados da aplicação entre os componentes.
- `hooks`: Contém os hooks, que permitem utilizar uma funcionalidade ou contexto no componente.
- `routes`: Contém as rotas, ou seja, as páginas do site.
  Atualmente, as rotas são:
    - `/`: Rota principal, página inicial do Portal.
    - `/portal`: Página que exibe todos os serviços disponíveis no Portal.
    - `/operador`: Página de gerenciamento que somente usuários com papel de operador poderão acessar.
    - `/service/agendamento`: Página do módulo teste de Agendamento do Portal, seguir esse padrão para definir as demais rotas de módulos (/service/nome-modulo).

## Arquivos em Cada Pasta

## portal-servicos

- `.gitignore`: Arquivo que define os arquivos e pastas a serem ignorados pelo Git.
- `README.md` (este arquivo): Arquivo com informações e visão geral mais compreensível sobre o projeto, forma de documentação do código.

## backend

- `index.js`: Arquivo com as rotas e configurações da API do projeto.
    Atualmente, as rotas são:
    - `/services`: `GET` - Obtém os serviços registrados no db.json na API.
    - `/services`: `POST` - Adiciona um novo serviço no db.json da API (usado no código dos módulos para passar as informações deles para o backend).
    - `/install`: `POST` - instala um módulo novo no sistema base.
    - `/uninstall`: `POST` - desinstala um módulo do sistema base.

- `package-lock.json`: Arquivo de bloqueio gerado automaticamente pelo npm após uma instalação de pacotes.
- `package.json`: Arquivo de manifesto do projeto, contém metadados sobre o projeto e onde as dependências são definidas.

## frontend

### `raiz`

- `.eslintrc.cjs`: Arquivo de configuração do ESLint.
- `index.html`: Arquivo HTML base para o site, onde é definido o favicon, linguagem e outros metadados do site.
- `package-lock.json`: Arquivo de bloqueio gerado automaticamente pelo npm após uma instalação de pacotes.
- `package.json`: Arquivo de manifesto do projeto, contém metadados sobre o projeto e onde as dependências são definidas.
- `vite.config.js`: Arquivo de configuração do Vite.

### `./public`

- `favicon-80x80.png` e `favicon.png`: Favicons do site.

### `./src`

- `App.jsx`: Principal componente do do site, contém importações globais de arquivos e estilos, de onde todos os componentes recebem o cabeçalho e o rodapé.
- `main.jsx`: Renderiza o componente raiz (ReactDOM.render()), ponto de entrada da aplicação. Também possui importações globais e

### `./src/api/services`

- `services.json`: Estrutura json da API que retorna os serviços disponíveis do site para serem renderizados na página Portal.jsx (**atualmente desativado** - por hora essa estrutura está disponível em api feita no Glicth baseada em um servidor feito com server.json - [Link da API no Glitch](https://glitch.com/edit/#!/sheer-oceanic-lightyear?path=db.json%3A31%3A14), [Link do repositório do servidor no GitHub](https://github.com/rickreisme/api-teste-servicos))

### `./src/assets/imgs`


### `./src/assets/styles`

- `App.scss`: Estilos da página principal em SASS.
- `Footer.scss`: Estilos da seção footer da página principal em SASS.
- `global.scss`: Estilos globais do site em SASS.
- `sidebar.scss`: Estilo da barra lateral do menu (atualmente desativada).
- `vars.scss`: Variáveis em SASS de estilos pré-definidos (cores em sua maioria).

### `./src/styles/mediaQuery`

- `min375px.scss`: Estilos do site aplicados quando a largura de tela tem no mínimo 375px.
- `max1015px.scss`: Estilos do site aplicados quando a largura de tela tem no máximo 1015px.

### `./src/components`

- `Footer.jsx`: Componente rodapé do site.
- `Header.jsx`: Componente do cabeçalho do site.
- `Sidebar.jsx`: Componente da barra lateral do menu **(atualmente desativado)**.
- `SidebarItems.jsx`: Componente dos itens presentes dentro da barra lateral do menu **(atualmente desativado)**.

### `./src/contexts`

- `auth.jsx`: Contexto que configura a lógica de autenticação interna do site.

### `./src/hooks`

- `useAuth.jsx`: Hook que permite a aplicação do AuthContext do auth.jsx em componentes do site.

# Como publicar uma módulo de serviço do Portal de Serviços como um pacote NPM <a name="npm"></a>

O projeto do Portal de Serviços prevê que cada serviço disponível seja um módulo a ser instalado no sistema base, dessa forma a estratégia escolhida foi desenvolver cada módulo como uma aplicação Vite React da mesma forma que o sistema base foi feito e publicá-la em forma de pacote NPM para ser importada no código do sistema base. Este guia irá orientá-lo nesse processo.

## Pré-requisitos

- Node.js e npm instalados na sua máquina.
- Conta no npm (você pode se registrar em https://www.npmjs.com/signup).

## Passos para Publicação

### 1. Configuração do Projeto

Primeiro, crie um projeto Vite com React:

```sh
npm create vite@latest meu-app-vite --template react
cd meu-app-vite
npm install
```

### 2. Estrutura do Projeto

A estrutura do seu projeto deve se parecer com isso:

```
meu-app-vite/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── README.md
├── vite.config.js
└── yarn.lock
```

### 3. Ajustar `package.json`

Adicione os campos necessários no `package.json` para a publicação:

```json
{
  "name": "meu-app-vite",
  "version": "0.0.1", //importante manter o controle das versões quando for publicar o pacote no NPM
  "description": "Uma aplicação Vite React publicada como um pacote NPM",
  "main": "dist/index.js",
  "module": "dist/index.js",
  "files": [
    "dist"
  ],
  "scripts": {
    "build": "vite build",
    "prepublishOnly": "npm run build"
  },
  "keywords": [
    "vite",
    "react",
    "npm",
    "package"
  ],
  "author": "Seu Nome <seu-email@example.com>",
  "license": "MIT",
  "devDependencies": {
    "vite": "^2.0.0",
    "react": "^17.0.0",
    "react-dom": "^17.0.0"
  },
  "peerDependencies": {
    "react": "^17.0.0",
    "react-dom": "^17.0.0"
  }
}
```

### 4. Configurar o Vite para Exportar como um Pacote

Altere o `vite.config.js` para garantir que o Vite está configurado para gerar uma build adequada para um pacote NPM:

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    lib: {
      entry: './src/main.jsx',
      name: 'MeuAppVite',
      fileName: (format) => `meu-app-vite.${format}.js`
    },
    rollupOptions: {
      // Certifique-se de externalizar dependências que você não quer incluir no seu pacote
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  },
  plugins: [react()]
});
```

### 5. Construir a Aplicação

Execute o comando de build:

```sh
npm run build
```

Isso gerará a pasta `dist` com os arquivos necessários para distribuição.

### 6. Publicar no NPM

Faça login no npm (se ainda não estiver logado):

```sh
npm login
```

Depois, publique seu pacote:

```sh
npm publish
```

Se tudo estiver configurado corretamente, seu pacote será publicado no NPM e estará disponível para instalação no sistema base via comando `npm install meu-app-vite`.

Se for necessário, verifique o módulo de teste `modulo-agendamento` (que está na pasta de mesmo nome na raiz do repositório) para entender melhor na prática.