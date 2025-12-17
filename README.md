# Github Blog 📃

Um aplicativo web moderno que transforma repositórios do GitHub em um blog interativo. Busque por usuários do GitHub e explore seus repositórios como posts de blog, com suporte completo a markdown e metadados enriquecidos.

## 🎯 Sobre o Projeto

O GitHub Blog permite que você:

- 🔍 Procure por qualquer usuário do GitHub
- 📚 Veja seus repositórios formatados como posts de blog
- 📖 Leia o conteúdo completo de cada repositório (quando disponível)
- 🔗 Acesse links e conteúdo markdown renderizado
- 💾 Visualize informações detalhadas como data, estrelas e linguagem

## 🛠️ Stack Tecnológico

Este projeto foi construído com as melhores tecnologias modernas:

### Frontend

- **React 19** - Library para construção de interfaces
- **TypeScript** - Tipagem estática para maior segurança
- **Vite** - Build tool rápido e moderno
- **React Router v7** - Roteamento de páginas
- **Tailwind CSS v4** - Estilização com utility-first CSS
- **Zustand** - Gerenciamento de estado leve e simples
- **React Hook Form** - Gerenciamento de formulários
- **Axios** - Client HTTP para requisições
- **React Markdown** - Renderização de markdown
- **Lucide React** - Ícones modernos
- **ESLint** - Linting de código
- **Prettier** - Formatação automática
- **TypeScript 5.9** - Versão estável do TypeScript

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado:

- **Node.js** (versão 18 ou superior) - [Download](https://nodejs.org/)
- **npm** ou **yarn** (gerenciadores de pacotes)
- **Git** (para clonar o repositório)

## 🚀 Como Rodar Localmente

### 1. Clone o Repositório

```bash
git clone https://github.com/seu-usuario/github-blog.git
cd github-blog
```

### 2. Instale as Dependências

```bash
npm install
```

### 3. Configure as Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_GITHUB_TOKEN=seu_token_aqui
```

**Como obter um GitHub Token:**

1. Acesse [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. Clique em "Generate new token (classic)"
3. Dê um nome descritivo (ex: "github-blog-dev")
4. Selecione os escopos necessários (recomendado: `public_repo`, `read:user`)
5. Clique em "Generate token" e copie o token
6. Cole o token no arquivo `.env`

> ⚠️ **Importante:** Nunca committe seu token. O arquivo `.env.local` já está no `.gitignore`

### 4. Inicie o Servidor de Desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

O aplicativo abrirá automaticamente em `http://localhost:3000`

## 🔄 Fluxo da Aplicação

1. **Home Page** (`/`)
   - Busca por usuário do GitHub
   - Valida se o usuário existe

2. **Blog do Usuário** (`/:user`)
   - Exibe lista de repositórios como posts
   - Permite buscar e filtrar posts
   - Paginação opcional

3. **Detalhes do Post** (`/:user/:issue`)
   - Exibe conteúdo completo do repositório
   - Renderiza markdown
   - Mostra metadados (data, estrelas, linguagem, etc)

## 🎨 Personalização

- [Design no Figma](https://www.figma.com/community/file/1138814951106121051)
- [Desafio Original](https://efficient-sloth-d85.notion.site/Desafio-03-Github-Blog-13593953670346908462ddc648d42cf1#308a51ba725c4be19bc3fa565f378d04)

<a href="https://github-blog-six-omega.vercel.app/"> Deploy 🚀 </a>

## 📝 Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

Se você tiver alguma dúvida ou sugestão, entre em contato e sinta-se à vontade para contribuir !

<img align="left" src="https://avatars.githubusercontent.com/renyzeraa?size=100">

Feito por [Renan L. Silva](https://github.com/renyzeraa)! <br>
🛠 Dev. Frontend <br>
📍 Santa Catarina - Brasil <br>

<a href="https://www.linkedin.com/in/renyzeraa" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white" alt="LinkedIn Badge" height="20"></a>&nbsp;
<a href="mailto:renansilvaytb@gmail.com" target="_blank"><img src="https://img.shields.io/badge/Gmail-D14836?style=flat&logo=gmail&logoColor=white" alt="Gmail Badge" height="20"></a>&nbsp;
<a href="#"><img src="https://img.shields.io/badge/Discord-%237289DA.svg?logo=discord&logoColor=white" title="renan_s#7826" alt="Discord Badge" height="20"></a>&nbsp;
<a href="https://www.github.com/renyzeraa" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white" alt="GitHub Badge" height="20"></a>&nbsp;

<br clear="left"/>
