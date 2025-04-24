import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Meu Blog Moderno. Todos os direitos reservados.</p>
        <div className="mt-2 text-sm text-gray-400">
          Feito com 💻 por você.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
