import reactIniciante from '../assets/reactIniciante.png';
import hooks from '../assets/hooks.png';
import deploy from '../assets/deploy.png';
import rotas from '../assets/rotas.jpg';
import api from '../assets/react.svg';
export const artigosDestaque = [
  {
    id: 'iniciando-react',
    title: "React para Iniciantes",
    excerpt: "Comece sua jornada com ReactJS!",
    image: reactIniciante,
  },
  {
    id: 'hooks-react',
    title: "Hooks Essenciais",
    excerpt: "Entenda useState, useEffect e mais.",
    image: hooks,
  },
  {
    id: 'rotas-react',
    title: "Configurando Rotas no React",
    excerpt: "Coloque seu projeto no ar em minutos.",
    image: deploy,
  }
];

export const artigosRecentes = [
    {
      id: 'r1',
      title: "React para Iniciantes",
      excerpt: "Comece sua jornada com ReactJS!",
      image: "https://source.unsplash.com/600x400/?reactjs,code",
    },
    {
       id: 'r2',
      title: "Styled Components",
      excerpt: "Estilização com JavaScript!",
      image: "https://source.unsplash.com/600x400/?css,style",
    },
    {
       id: 'r3',
      title: "Deploy com Vercel",
      excerpt: "Coloque seu projeto no ar em minutos.",
      image: "https://source.unsplash.com/600x400/?cloud,web",
    },
    {
       id: 'r4',
      title: "React Router",
      excerpt: "Crie navegação em SPA.",
      image: "https://source.unsplash.com/600x400/?navigation,app",
    },
  ];
export const artigos = [
  {
     id: 'iniciando-react',
    title: 'Como iniciar um projeto React',
    excerpt: 'Aprenda os primeiros passos para criar um projeto React do zero com Vite ou Create React App.',
    image: reactIniciante,
    link: '/posts/iniciando-react',
  },
  {
     id: 'hooks-react',
    title: 'Entendendo os Hooks do React',
    excerpt: 'Uma introdução clara aos principais hooks como useState, useEffect e useContext.',
    image: hooks,
    link: '/posts/hooks-react',
  },
  {
     id: 'rotas-react',
    title: 'Configurando rotas no React com React Router',
    excerpt: 'Navegação entre páginas em aplicações SPA com React Router v6.',
    image: rotas,
    link: '/posts/rotas-react',
  },
   {
    id: 'api-react',
    title: 'Consumindo APIs no React',
    excerpt: 'Aprenda a buscar e enviar dados usando Fetch e Axios no React.',
    image: api,
    link: '/posts/api-react',
  },
];
