# SPMEDICALGROUP - Sistema de Gestão de Consultas Médicas

Um aplicativo web desenvolvido com React para gerenciar consultas médicas, pacientes e médicos. O sistema fornece uma visão geral centralizada com estatísticas em tempo real e funcionalidades para administração de dados clínicos.

## 📋 Sobre o Projeto

SPMEDICALGROUP é uma aplicação frontend construída com [Create React App](https://github.com/facebook/create-react-app) que oferece:

- **Dashboard com Visão Geral**: Estatísticas de médicos, pacientes e consultas agendadas
- **Gestão de Consultas**: Interface para visualizar e gerenciar consultas
- **Cadastro de Pacientes**: Administração de dados de pacientes
- **Informações da Equipe**: Detalhes dos médicos disponíveis
- **Contato**: Página para entrar em contato
- **Design Responsivo**: Interface adaptada para diferentes dispositivos

## 🚀 Como Começar

### Pré-requisitos

- Node.js (v14 ou superior)
- npm (v6 ou superior)

### Instalação

\`\`\`\`\`\`bash
# Clone o repositório
git clone <repository-url>

# Acesse o diretório do projeto
cd SPODWEB2_Pivot

# Instale as dependências
npm install
\`\`\`\`\`\`

## 📦 Scripts Disponíveis

### `npm start`

Inicia o servidor de desenvolvimento.
Acesse [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

A página será recarregada quando você fazer alterações, e erros de lint aparecerão no console.

\`\`\`\`\`\`bash
npm start
\`\`\`\`\`\`

### `npm test`

Executa os testes no modo interativo de observação.

\`\`\`\`\`\`bash
npm test
\`\`\`\`\`\`

### `npm run build`

Cria um build otimizado para produção na pasta `build`.
O build é minificado e os nomes dos arquivos incluem hashes.

\`\`\`\`\`\`bash
npm run build
\`\`\`\`\`\`

### `npm run eject`

**Nota: esta é uma operação irreversível!**

Remove a única dependência de build do projeto e copia todas as configurações e dependências para o seu projeto.

\`\`\`\`\`\`bash
npm run eject
\`\`\`\`\`\`

## 🛠️ Tecnologias Utilizadas

- **React** 17.0.2 - Biblioteca para construção de interfaces
- **React Router DOM** 5.2.0 - Roteamento de páginas
- **Axios** 0.24.0 - Cliente HTTP para requisições
- **CSS Modules** - Estilização modular e escopo local
- **React Scripts** 4.0.3 - Ferramentas de build e desenvolvimento

## 📁 Estrutura do Projeto

\`\`\`\`\`\`
SPODWEB2_Pivot/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   ├── consultasAdm.css
│   │   │   ├── contatenos.module.css
│   │   │   ├── home.module.css
│   │   │   ├── login.css
│   │   │   └── style.css
│   │   └── img/
│   ├── components/
│   │   ├── Footer/
│   │   │   └── footer.jsx
│   │   └── Header/
│   │       └── header.jsx
│   ├── data/
│   │   ├── consultas.json
│   │   ├── medicos.json
│   │   └── pacientes.json
│   ├── pages/
│   │   ├── consultas.jsx
│   │   ├── contatenos.jsx
│   │   ├── equipe.jsx
│   │   └── home.jsx
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   └── reportWebVitals.js
├── package.json
└── README.md
\`\`\`\`\`\`

## 📄 Páginas Principais

- **Home** - Dashboard com visão geral do sistema (médicos, pacientes e consultas agendadas)
- **Consultas** - Administração e consulta de agendamentos
- **Equipe** - Informações sobre os médicos disponíveis
- **Contato** - Formulário de contato e informações

## 🔧 Configuração

O projeto utiliza `--openssl-legacy-provider` nos scripts de start e build para compatibilidade com versões antigas de dependências.

## 📚 Aprendizado Adicional

- [Documentação do Create React App](https://facebook.github.io/create-react-app/docs/getting-started)
- [Documentação do React](https://reactjs.org/)
- [Documentação do React Router](https://reactrouter.com/)
- [Documentação do Axios](https://axios-http.com/)

## 📝 Licença

Este projeto é privado e foi desenvolvido para fins educacionais.

## 👤 Desenvolvedor

SPODWEB2_Pivot - Projeto de Estudo Pessoal
- Gustavo Gouvea Andrade - SP3076725
- Luciano Ricardo Paim de Araujo - SP3153827
- Murillo Andrade Assis - SP3217043