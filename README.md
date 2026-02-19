# News Explorer

Aplicação web para busca e leitura de notícias em tempo real, desenvolvida como projeto final do bootcamp de Desenvolvimento Web da TripleTen.

## Funcionalidades

- Busca de artigos por palavra-chave via News API
- Exibição de resultados em cards com paginação ("Mostrar mais")
- Salvamento de artigos no navegador (localStorage)
- Página de artigos salvos
- Design responsivo (320px, 768px, 1280px)

## Tecnologias

- React 18 + Vite
- React Router v5
- CSS com metodologia BEM
- News API

## Como rodar localmente

```bash
npm install
```

Crie um arquivo `.env` na raiz do projeto (veja `.env.example`):

```
VITE_NEWS_API_KEY=sua_chave_aqui
```

```bash
npm run dev
```

## Deploy

[https://borgesenioc.github.io/news-explorer-frontend/](https://borgesenioc.github.io/news-explorer-frontend/)
