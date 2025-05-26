import React from "react";

function Footer() {
  return (
<footer className="bg-gray-900 text-gray-400 py-16">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
      
      {/* Coluna 1: Logo e Descrição */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-4">DevBlog</h3>
        <p>Compartilhando conhecimento sobre desenvolvimento web, front-end e boas práticas.</p>
      </div>

      {/* Coluna 2: Links */}
      <div>
        <h4 className="text-white text-lg font-semibold mb-4">Navegação</h4>
        <ul className="space-y-2">
          <li><a href="/" className="hover:text-white transition">Home</a></li>
          <li><a href="/artigos"  className="hover:text-white transition">Artigos</a></li>
          <li><a href="/sobre" className="hover:text-white transition">Sobre</a></li>
          <li><a href="/contato" className="hover:text-white transition">Contato</a></li>
        </ul>
      </div>

      {/* Coluna 3: Recursos */}
      <div>
        <h4 className="text-white text-lg font-semibold mb-4">Recursos</h4>
        <ul className="space-y-2">
          <li><a href="/artigos" className="hover:text-white transition" target="_blank" >Docs</a></li>
          <li><a href="/artigos" className="hover:text-white transition" target="_blank" >Tutoriais</a></li>
          <li><a href="https://github.com/SabrinaSoaresDev?tab=repositories" target="_blank"  className="hover:text-white transition">Repositórios</a></li>
        </ul>
      </div>

      {/* Coluna 4: Redes Sociais */}
      <div>
        <h4 className="text-white text-lg font-semibold mb-4">Siga-nos</h4>
        <ul className="space-y-2">
          <li><a href="https://www.linkedin.com/in/sabrinacaires/" target="_blank" 
              rel="noopener noreferrer"  className="hover:text-white transition">LinkedIn</a></li>
          <li><a href="https://github.com/SabrinaSoaresDev" target="_blank" 
              rel="noopener noreferrer"  className="hover:text-white transition">GitHub</a></li>
          <li>
            <a 
              href="https://www.instagram.com/sabrinams.9/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition">Instagra </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} DevBlog. Todos os direitos reservados.
    </div>
  </div>
</footer>

  )
}
export default Footer;