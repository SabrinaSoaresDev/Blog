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
<<<<<<< HEAD
import sabrina from '../../assets/sabrina.jpeg'
=======
>>>>>>> 5d32bc1e76cee27699901aef832400fa43b35e62

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
<<<<<<< HEAD
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
       <AnimatedSection className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-extrabold text-center text-gray-800 dark:text-black mb-12">
              Artigos em Destaque
            </h2>
            
            <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {artigosDestaque.map((artigo, index) => (
                <ArticleCard key={artigo.id || index} article={artigo} />
              ))}
            </div>
          </div>
        </AnimatedSection>
              
              {/* Sobre a Sabrina — Home com foto */}
        <div className="max-w-4xl mx-auto py-12 px-4 flex flex-col md:flex-row items-center gap-8 bg-white rounded-xl shadow-sm p-8">
          {/* Foto */}
          <div className="flex-shrink-0">
            <img
              src={sabrina}
              alt="Sabrina Soares - Desenvolvedora de Software"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-blue-100 shadow-lg"
            />
          </div>

          {/* Texto */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Olá, eu sou a Sabrina Soares </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Desenvolvedora de software formada em Sistemas de Informação, com experiência em análise de sistemas, suporte técnico e desenvolvimento front-end usando <strong>HTML, CSS, JavaScript e React</strong>.
            </p>
            <p className="text-gray-600 mb-6">
              Aqui no blog, compartilho tutoriais práticos, dicas diretas e projetos reais para quem quer aprender tecnologia sem enrolação — do zero à entrega.
            </p>
            <a
              href="https://portifolio-sabrina.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              🚀 Veja meus projetos no portfólio
            </a>
          </div>
        </div>
        {/* Por que confiar em mim? */}
        <div className="max-w-4xl mx-auto py-12 px-4">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Por que confiar em mim?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-5 bg-blue-50 rounded-lg">
              <div className="text-blue-600 font-bold text-xl mb-2">🎓</div>
              <h3 className="font-semibold text-gray-900">Formação Sólida</h3>
              <p className="text-sm text-gray-600 mt-2">
                Formada em <strong>Sistemas de Informação</strong>, com base teórica e prática em desenvolvimento de software.
              </p>
            </div>

            <div className="text-center p-5 bg-indigo-50 rounded-lg">
              <div className="text-indigo-600 font-bold text-xl mb-2">💼</div>
              <h3 className="font-semibold text-gray-900">Experiência Real</h3>
              <p className="text-sm text-gray-600 mt-2">
                Atuação em <strong>análise de sistemas e suporte técnico</strong>, resolvendo problemas reais com eficiência.
              </p>
            </div>

            <div className="text-center p-5 bg-purple-50 rounded-lg">
              <div className="text-purple-600 font-bold text-xl mb-2">🛠️</div>
              <h3 className="font-semibold text-gray-900">Tecnologias Atuais</h3>
              <p className="text-sm text-gray-600 mt-2">
                Domínio em <strong>HTML, CSS, JavaScript e React</strong> — as ferramentas que os devs usam hoje.
              </p>
            </div>

            <div className="text-center p-5 bg-emerald-50 rounded-lg">
              <div className="text-emerald-600 font-bold text-xl mb-2">✅</div>
              <h3 className="font-semibold text-gray-900">Código que Funciona</h3>
              <p className="text-sm text-gray-600 mt-2">
                Todos os tutoriais são <strong>testados, práticos e sem enrolação</strong> — do zero à entrega.
              </p>
            </div>
          </div>
        </div>
        {/* Call-to-Action Final */}
        <div className="max-w-4xl mx-auto py-16 px-4 text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Pronto para aprender com quem faz?
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Meus tutoriais são baseados em projetos reais, testados em produção e explicados passo a passo — sem teorias vazias, só o que funciona de verdade.
          </p>
          <a
            href="/artigos"
            className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-black transition-colors shadow-md hover:shadow-lg"
          >
            Explore os tutoriais
          </a>
        </div>
=======
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
       <AnimatedSection className="py-20 px-4 bg-gray-100 dark:bg-gray-200">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-extrabold text-center text-gray-800 dark:text-black mb-12">
      Artigos em Destaque
    </h2>
    
    <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {artigosDestaque.map((artigo, index) => (
        <ArticleCard key={artigo.id || index} article={artigo} />
      ))}
    </div>
  </div>
</AnimatedSection>

>>>>>>> 5d32bc1e76cee27699901aef832400fa43b35e62
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default Home;