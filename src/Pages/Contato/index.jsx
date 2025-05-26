import React, { useRef, useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import emailjs from "@emailjs/browser";

function Contato() {
  const form = useRef();
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_pb3e1oa',
        'template_e53p8vl',
        form.current,
        'MzY5zVdAlZmnvCc5o'
      )
      .then(
        (result) => {
          console.log('Email enviado:', result.text);
          setEnviado(true);
          form.current.reset(); // limpa o formulário
        },
        (error) => {
          console.error('Erro ao enviar:', error.text);
        }
      );
  };

  return (
    <>
      <Header />
      <div className="min-h-screen px-6 py-16 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">Entre em Contato</h1>

          {enviado && (
            <p className="text-green-500 font-medium text-center mb-6">
              Mensagem enviada com sucesso!
            </p>
          )}

          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-1 font-medium">Nome</label>
              <input
                type="text"
                name="user_name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="user_email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Mensagem</label>
              <textarea
                name="message"
                rows="5"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-accent/90 transition"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contato;
