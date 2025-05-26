import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

function Sobre() {
  return (
    <>
    <Header/>
    <div className="min-h-screen px-6 py-16 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Sobre o DevBlog</h1>
        <p className="text-lg mb-4">
          O DevBlog nasceu com o objetivo de compartilhar conhecimento de forma simples e direta. Aqui, você encontrará artigos sobre React, JavaScript, e tudo o que envolve o mundo do desenvolvimento web.
        </p>
        <p className="text-lg mb-4">
          Nosso foco é ajudar iniciantes e desenvolvedores em transição a entenderem conceitos fundamentais com exemplos práticos.
        </p>
        <p className="text-lg">
          Criado por Sabrina, entusiasta de tecnologia e apaixonada por ensinar.
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Sobre;
