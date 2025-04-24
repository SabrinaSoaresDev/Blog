import React from "react";

const PostReactIniciantes = () => {
  return (
    <main className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-indigo-600">React para Iniciantes</h1>
      <p className="mb-4 text-lg">
        Está começando no mundo do React? Ótimo! O React é uma das bibliotecas JavaScript mais utilizadas para construção de interfaces modernas e interativas.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Como começar no React?</h2>
      <ul className="list-disc ml-6 mb-6 text-lg space-y-2">
        <li>Tenha conhecimentos básicos de HTML, CSS e JavaScript ES6.</li>
        <li>Instale o Node.js e configure seu ambiente com o <code>create-react-app</code> ou Vite.</li>
        <li>Estude os principais conceitos: componentes, props, state, useEffect, JSX, etc.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Onde estudar?</h2>
      <p className="mb-4 text-lg">Aqui estão algumas plataformas excelentes para você iniciar sua jornada:</p>
      <ul className="list-disc ml-6 text-blue-600 underline text-lg space-y-2">
        <li><a href="https://react.dev/learn" target="_blank">Documentação Oficial do React</a></li>
        <li><a href="https://www.youtube.com/@MatheusBattisti" target="_blank">Canal Hora de Codar (YouTube)</a></li>
        <li><a href="https://www.freecodecamp.org/learn/front-end-development-libraries/#react" target="_blank">FreeCodeCamp (React Course)</a></li>
        <li><a href="https://rocketseat.com.br" target="_blank">Rocketseat - Trilha ReactJS</a></li>
      </ul>

      <p className="mt-6 text-lg">
        Comece aos poucos, crie pequenos projetos como uma calculadora ou uma lista de tarefas, e evolua seu aprendizado com projetos maiores!
      </p>
    </main>
  );
};

export default PostReactIniciantes;
