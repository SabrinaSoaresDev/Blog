import React from "react";
import Header from "../../Components/Header";
import Carousel from "../../Components/Carousel";
import ArticleCard from "../../Components/ArticleCard";
import Footer from "../../Components/Footer";
import { artigosDestaque, artigosRecentes } from "../../Dados/articles";
import AnimatedSection from "../../Components/AnimatedSection";
import ThemeProvider from "../../Components/Dark";
import codigo from '../../assets/codigo.jpg'
import computador from '../../assets/computador.jpg'
import eletronico from '../../assets/eletronico.jpg'

function Home() {
    const bannerImages = [
    eletronico,
    computador,
    codigo,
  ];
  return (
    <ThemeProvider>
      <Header />
      <main>
       <Carousel images={bannerImages} />
                {/* Hero Section */}
<AnimatedSection className="h-96 flex items-center justify-center bg-gray-900 px-4">
  <div className="text-center max-w-2xl">
    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
      Aprenda React em 2025
    </h1>
    <p className="text-lg md:text-xl text-gray-300 mb-6">
      Tutoriais práticos e objetivos para desenvolvedores modernos
    </p>
    <button className="bg-accent hover:bg-accent/90 transition-colors duration-300 text-white px-8 py-3 rounded-xl font-semibold shadow-lg">
    <a href="https://react.dev/learn" target="_blank">
        Começar a Ler
    </a>
      
    </button>
  </div>
</AnimatedSection>

        {/* Artigos em Destaque */}
       <AnimatedSection className="py-20 px-4 bg-gray-300 dark:bg-gray-900">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-12">
      Artigos em Destaque
    </h2>
    
    <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {artigosDestaque.map((artigo, index) => (
        <ArticleCard key={artigo.id || index} article={artigo} />
      ))}
    </div>
  </div>
</AnimatedSection>

      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default Home;