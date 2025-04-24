import React from "react";
import Header from "../../Components/Header";
import Carousel from "../../Components/Carousel";
import ArticleGrid from "../../Components/ArticleGrid";
import Footer from "../../Components/Footer";
import { motion } from "framer-motion";

const artigosDestaque = [
  {
    title: "React para Iniciantes",
    excerpt: "Comece sua jornada com ReactJS!",
    image: "https://source.unsplash.com/600x400/?reactjs,code",
  },
  {
    title: "Hooks Essenciais",
    excerpt: "Entenda useState, useEffect e mais.",
    image: "https://source.unsplash.com/600x400/?javascript,developer",
  },
];

const artigosRecentes = [
    {
      title: "React para Iniciantes",
      excerpt: "Comece sua jornada com ReactJS!",
      image: "https://source.unsplash.com/600x400/?reactjs,code",
    },
    {
      title: "Styled Components",
      excerpt: "Estilização com JavaScript!",
      image: "https://source.unsplash.com/600x400/?css,style",
    },
    {
      title: "Deploy com Vercel",
      excerpt: "Coloque seu projeto no ar em minutos.",
      image: "https://source.unsplash.com/600x400/?cloud,web",
    },
    {
      title: "React Router",
      excerpt: "Crie navegação em SPA.",
      image: "https://source.unsplash.com/600x400/?navigation,app",
    },
  ];

function Home() {
  return (
    <>
      <Header />
      <main className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-extrabold mb-6">🚀 Destaques</h2>
          <Carousel items={artigosDestaque} />
        </motion.section>

        <motion.section
          id="artigos"
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-extrabold mb-6">📚 Últimos Artigos</h2>
          <ArticleGrid articles={artigosRecentes} />
        </motion.section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
