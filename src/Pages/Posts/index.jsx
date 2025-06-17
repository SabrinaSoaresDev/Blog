import React from "react";
import { useParams } from "react-router-dom";
import { artigos } from "../../Dados/articles";
import PostLayout from "../../Components/PostLayout";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

const Posts = () => {
  const { id } = useParams();
  const artigo = artigos.find((artigo) => artigo.id === id);

  if (!artigo) {
    return <div className="text-center p-20 text-red-500">Artigo não encontrado.</div>;
  }

  return (
    <>
    <Header/>
    <PostLayout title={artigo.title}>
      <img src={artigo.image} alt={artigo.title} className="w-full h-64 object-cover rounded mb-6" />
      <p className="text-lg mb-4">{artigo.excerpt}</p>

      {/* Conteúdo específico conforme o ID (simulação) */}
      {id === "iniciando-react" && (
  <>
    <h2 className="text-2xl font-semibold mt-6 mb-2">Como começar no React?</h2>

    <p className="mb-4 text-lg">
      O React é uma biblioteca JavaScript para construir interfaces de usuário. Para começar, siga este guia básico:
    </p>

    <ol className="list-decimal ml-6 mb-6 space-y-4 text-lg">
      <li>
        <strong>Conhecimentos básicos:</strong> Tenha familiaridade com HTML, CSS e JavaScript moderno (ES6+).
      </li>

      <li>
        <strong>Instale as ferramentas:</strong> Baixe e instale o <a href="https://nodejs.org/"  target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Node.js</a> (que inclui o npm).
      </li>

      <li>
        <strong>Crie seu projeto com Vite:</strong> Abra o terminal e execute os comandos abaixo substituindo <code>meu-projeto-react</code> pelo nome desejado.
        <pre className="bg-gray-400 p-3 rounded-md overflow-x-auto text-black mt-2">
          {`npm create vite@latest meu-projeto-react\n# ou\nnpm create vite@latest .`}
        </pre>
        <p className="mt-1">
          Responda às perguntas no prompt para configurar seu projeto (escolha React + JavaScript ou TypeScript).
        </p>
      </li>

      <li>
        <strong>Acesse a pasta e instale dependências:</strong>
        <pre className="bg-gray-400 p-3 rounded-md overflow-x-auto text-black mt-2">
          {`cd meu-projeto-react\nnpm install`}
        </pre>
      </li>

      <li>
        <strong>Inicie o servidor de desenvolvimento:</strong>
        <pre className="bg-gray-400 p-3 rounded-md overflow-x-auto text-black mt-2">
          {`npm run dev`}
        </pre>
        <p className="mt-1">
          Acesse <a href="http://localhost:5173" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">http://localhost:5173</a> para ver seu app rodando.
        </p>
      </li>

      <li>
        <strong>Exemplo básico de "Hello World":</strong> Dentro do arquivo <code>src/main.jsx</code> ou <code>App.jsx</code>, você pode escrever:
        <pre className="bg-gray-400 p-3 rounded-md overflow-x-auto text-black mt-2">
{`import React from 'react';

function App() {
  return (
    <div>
      <h1>Olá, mundo!</h1>
      <p>Bem-vindo ao seu primeiro app React com Vite.</p>
    </div>
  );
}

export default App;`}
        </pre>
      </li>
    </ol>
  </>
)}

    {id === "hooks-react" && (
  <>
    <h2 className="text-2xl font-semibold mt-6 mb-2">Principais Hooks no React</h2>

    <p className="mb-4 text-lg">
      Os <strong>Hooks</strong> são funções especiais do React que permitem que você "ligue" estados e ciclo de vida a componentes funcionais. Confira todos os principais abaixo:
    </p>

    {/* useState */}
    <div className="mt-6">
      <h3 className="text-xl font-medium mb-2">
        <code className="bg-gray-400 px-1 rounded">useState</code>
      </h3>
      <p className="mb-2">
        Armazena e atualiza estados locais dentro de um componente. Útil para inputs, contadores etc.
      </p>
      <pre className="bg-gray-400 p-3 rounded-md overflow-x-auto text-black">
{`import { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Você clicou {contador} vezes</p>
      <button onClick={() => setContador(contador + 1)}>
        Clique aqui
      </button>
    </div>
  );
}`}
      </pre>
    </div>

    {/* useEffect */}
    <div className="mt-6">
      <h3 className="text-xl font-medium mb-2">
        <code className="bg-gray-400 px-1 rounded">useEffect</code>
      </h3>
      <p className="mb-2">
        Executa efeitos colaterais como chamadas à API, manipulação do DOM ou assinaturas.
      </p>
      <pre className="bg-gray-400 p-3 rounded-md overflow-x-auto text-black">
{`import { useEffect, useState } from 'react';

function DadosUsuario() {
  const [nome, setNome] = useState('');

  useEffect(() => {
    fetch('https://api.exemplo.com/usuario') 
      .then(res => res.json())
      .then(data => setNome(data.nome));
  }, []);

  return <p>Bem-vindo, {nome || 'usuário'}!</p>;
}`}
      </pre>
    </div>

    {/* useContext */}
    <div className="mt-6">
      <h3 className="text-xl font-medium mb-2">
        <code className="bg-gray-400 px-1 rounded">useContext</code>
      </h3>
      <p className="mb-2">
        Acessa valores de contexto global sem passar props manualmente entre níveis.
      </p>
      <pre className="bg-gray-400 p-3 rounded-md overflow-x-auto text-black">
{`import { createContext, useContext } from 'react';

const TemaContext = createContext('claro');

function BotaoTema() {
  const tema = useContext(TemaContext);
  return <p>O tema atual é: {tema}</p>;
}`}
      </pre>
    </div>

    {/* useReducer */}
    <div className="mt-6">
      <h3 className="text-xl font-medium mb-2">
        <code className="bg-gray-400 px-1 rounded">useReducer</code>
      </h3>
      <p className="mb-2">
        Gerencia estados complexos com lógica centralizada via função redutora.
      </p>
      <pre className="bg-gray-400 p-3 rounded-md overflow-x-auto text-black">
{`import { useReducer } from 'react';

const contadorReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
};

function ContadorAvancado() {
  const [contador, dispatch] = useReducer(contadorReducer, 0);

  return (
    <div>
      <p>Contagem: {contador}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>−</button>
    </div>
  );
}`}
      </pre>
    </div>

    {/* useCallback */}
    <div className="mt-6">
      <h3 className="text-xl font-medium mb-2">
        <code className="bg-gray-400 px-1 rounded">useCallback</code>
      </h3>
      <p className="mb-2">
        Memoriza funções para evitar recriações desnecessárias (útil com React.memo).
      </p>
      <pre className="bg-gray-400 p-3 rounded-md overflow-x-auto text-black">
{`import { useCallback, useState } from 'react';

function App() {
  const [contador, setContador] = useState(0);

  const handleClick = useCallback(() => {
    setContador(prev => prev + 1);
  }, []);

  return <BotaoIncrementar onClick={handleClick} />;
}`}
      </pre>
    </div>

    {/* useMemo */}
    <div className="mt-6">
      <h3 className="text-xl font-medium mb-2">
        <code className="bg-gray-400 px-1 rounded">useMemo</code>
      </h3>
      <p className="mb-2">
        Memoriza valores calculados para evitar recálculos em cada renderização.
      </p>
      <pre className="bg-gray-400 p-3 rounded-md overflow-x-auto text-black">
{`import { useMemo, useState } from 'react';

function ListaFiltrada({ itens }) {
  const [filtro, setFiltro] = useState('');

  const filtrados = useMemo(() => {
    return itens.filter(item => item.includes(filtro));
  }, [itens, filtro]);

  return (
    <div>
      <input value={filtro} onChange={(e) => setFiltro(e.target.value)} />
      <ul>{filtrados.map(item => <li key={item}>{item}</li>)}</ul>
    </div>
  );
}`}
      </pre>
    </div>

    {/* useRef */}
    <div className="mt-6">
      <h3 className="text-xl font-medium mb-2">
        <code className="bg-gray-400 px-1 rounded">useRef</code>
      </h3>
      <p className="mb-2">
        Armazena valores persistentes ou acessa elementos DOM diretamente.
      </p>
      <pre className="bg-gray-400 p-3 rounded-md overflow-x-auto text-black">
{`import { useRef, useEffect } from 'react';

function InputFocus() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} placeholder="Digite algo..." />;
}`}
      </pre>
    </div>

    {/* useImperativeHandle */}
    <div className="mt-6">
      <h3 className="text-xl font-medium mb-2">
        <code className="bg-gray-400 px-1 rounded">useImperativeHandle</code>
      </h3>
      <p className="mb-2">
        Personaliza o valor exposto ao usar <code>ref</code> em componentes filhos.
      </p>
      <pre className="bg-gray-400 p-3 rounded-md overflow-x-auto text-black">
{`import { forwardRef, useImperativeHandle, useRef } from 'react';

const MeuInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
    value: () => inputRef.current.value,
  }));

  return <input ref={inputRef} />;
});`}
      </pre>
    </div>

    {/* useLayoutEffect */}
    <div className="mt-6">
      <h3 className="text-xl font-medium mb-2">
        <code className="bg-gray-400 px-1 rounded">useLayoutEffect</code>
      </h3>
      <p className="mb-2">
        Similar ao useEffect, mas roda sincronamente após mutações DOM (útil para medição de layout).
      </p>
      <pre className="bg-gray-400 p-3 rounded-md overflow-x-auto text-black">
{`import { useLayoutEffect, useState } from 'react';

function MedirElemento() {
  const [tamanho, setTamanho] = useState(0);
  const ref = useRef();

  useLayoutEffect(() => {
    setTamanho(ref.current.offsetWidth);
  }, []);

  return <div ref={ref}>Largura: {tamanho}px</div>;
}`}
      </pre>
    </div>

    {/* useDebugValue */}
    <div className="mt-6">
      <h3 className="text-xl font-medium mb-2">
        <code className="bg-gray-400 px-1 rounded">useDebugValue</code>
      </h3>
      <p className="mb-2">
        Exibe informações personalizadas sobre hooks customizados no DevTools.
      </p>
      <pre className="bg-gray-400 p-3 rounded-md overflow-x-auto text-black">
{`import { useState, useDebugValue } from 'react';

function useMeuHookCustomizado() {
  const [valor] = useState(true);
  useDebugValue(valor ? 'Ativo' : 'Inativo');
  return valor;
}`}
      </pre>
    </div>
  </>
)}

     {id === "rotas-react" && (
  <>
    <h2 className="text-2xl font-semibold mt-6 mb-2">Configurando Rotas no React com React Router</h2>

    <p className="mb-4 text-lg">
      O <strong>React Router</strong> é a biblioteca mais popular para gerenciar navegação em aplicações React de página única (SPA). Veja como configurar suas rotas:
    </p>

    <h3 className="text-xl font-medium mt-6 mb-2">1. Instale o React Router</h3>
    <p className="mb-2 text-lg">Abra o terminal na pasta do seu projeto e execute:</p>
    <pre className="bg-gray-800 text-white p-4 rounded mb-4 overflow-x-auto">
      npm install react-router-dom
    </pre>

    <h3 className="text-xl font-medium mt-6 mb-2">2. Estruture suas páginas/componentes</h3>
    <p className="mb-2 text-lg">Crie componentes para cada rota, por exemplo:</p>

    <pre className="bg-gray-400 p-3 rounded-md overflow-x-auto text-black mb-4">
{`// src/pages/Home.jsx
function Home() {
  return <h1>Bem-vindo à Página Inicial</h1>;
}
export default Home;

// src/pages/Sobre.jsx
function Sobre() {
  return <h1>Saiba mais sobre nós</h1>;
}
export default Sobre;`}
    </pre>

    <h3 className="text-xl font-medium mt-6 mb-2">3. Configure as rotas no App.js</h3>
    <p className="mb-2 text-lg">Use os componentes <code>Routers</code>, <code>Route</code> e <code>Link</code> para definir navegação:</p>

    <pre className="bg-gray-400 p-3 rounded-md overflow-x-auto text-black mb-4">
{`// src/App.jsx ou src/main.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';

function App() {
  return (
    <Router>
      <nav>
        <ul className="flex gap-4 mb-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </Router>
  );
}

export default App;`}
    </pre>

    <h3 className="text-xl font-medium mt-6 mb-2">4. Teste sua aplicação</h3>
    <p className="mb-2 text-lg">Inicie o servidor de desenvolvimento:</p>
    <pre className="bg-gray-800 text-white p-4 rounded mb-4 overflow-x-auto">
      npm run dev
    </pre>
    <p className="text-lg">
      Acesse <a href="http://localhost:5173" className="text-blue-500 underline">http://localhost:5173</a> (ou outra porta, dependendo do seu setup) e navegue entre as rotas.
    </p>

    <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 text-blue-700 p-4 rounded-md">
      <p className="font-semibold">💡 Dica:</p>
      <p>Você pode usar rotas aninhadas, layouts compartilhados e até carregamento condicional com lazy loading (<code>React.lazy</code> + <code>Suspense</code>) para melhorar performance.</p>
    </div>
  </>
)}
    </PostLayout>
    <Footer/>
    </>
  );
};

export default Posts;
