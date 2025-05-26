import React from 'react';
import { Link } from 'react-router-dom';
import { artigos } from '../../Dados/articles';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

function Artigos() {
  return (
    <>
    <Header/>
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 py-16 px-6">
      <h1 className="text-4xl font-bold mb-12 text-center dark:text-white">Todos os Artigos</h1>
      
      <div className="grid gap-10 md:grid-cols-2">
        {artigos.map((artigo) => (
          <Link
            to={`/posts/${artigo.id}`}
            key={artigo.id}
            className="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition p-4 group"
          >
            <img
              src={artigo.image}
              alt={artigo.title}
              className="w-full md:w-48 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
            />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white group-hover:text-accent transition">
                {artigo.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{artigo.excerpt}</p>
              <span className="text-accent mt-4 inline-block">Ler artigo →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
    <Footer />
    </>
  );
}

export default Artigos;
