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
          <ul className="list-disc ml-6 mb-6 text-lg space-y-2">
            <li>Tenha conhecimentos básicos de HTML, CSS e JavaScript ES6.</li>
            <li>Instale o Node.js e configure seu ambiente com o <code>create-react-app</code> ou Vite.</li>
            <li>Estude os principais conceitos: componentes, props, state, useEffect, JSX, etc.</li>
          </ul>
        </>
      )}

      {id === "hooks-react" && (
        <>
          <h2 className="text-2xl font-semibold mt-6 mb-2">Principais Hooks</h2>
          <ul className="list-disc ml-6 mb-6 text-lg space-y-2">
            <li><code>useState</code> para estados locais.</li>
            <li><code>useEffect</code> para efeitos colaterais como chamadas de API.</li>
            <li><code>useContext</code> para contexto global.</li>
          </ul>
        </>
      )}

      {id === "rotas-react" && (
        <>
          <h2 className="text-2xl font-semibold mt-6 mb-2">Configurando React Router</h2>
          <p className="mb-4 text-lg">Instale o React Router com:</p>
          <pre className="bg-gray-800 text-white p-4 rounded mb-4">
            npm install react-router-dom
          </pre>
          <p>Depois, configure rotas com o componente <code>&lt;Routes&gt;</code> e <code>&lt;Route&gt;</code>.</p>
        </>
      )}
    </PostLayout>
    <Footer/>
    </>
  );
};

export default Posts;
