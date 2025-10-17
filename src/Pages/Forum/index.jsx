import React, { useState, useEffect } from 'react';
import { db } from '../../../firebase';
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  updateDoc,
  where,
  doc
} from 'firebase/firestore';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import BackButton from '../../Components/Backbutton';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

function Forum() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [enviando, setEnviando] = useState(false);
  const [expandedPost, setExpandedPost] = useState(null);
  const [respostas, setRespostas] = useState({});
  const [replyForm, setReplyForm] = useState({ nome: '', texto: '' });
  const [form, setForm] = useState({
    nome: '',
    cidade: '',
    texto: '',
    categoria: 'Geral',
  });
  const [searchTerm, setSearchTerm] = useState('');

  // Carregar perguntas
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const q = query(collection(db, 'forum'), orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);
        const lista = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(lista);
      } catch (error) {
        console.error('Erro ao carregar o fórum:', error);
        toast.error('Erro ao carregar as perguntas.');
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // Filtro de busca
  const filteredPosts = posts.filter((post) => {
    const term = searchTerm.toLowerCase();
    return (
      post.texto.toLowerCase().includes(term) ||
      post.nome.toLowerCase().includes(term) ||
      post.categoria.toLowerCase().includes(term)
    );
  });

  const toggleRespostas = async (postId) => {
    if (expandedPost === postId) {
      setExpandedPost(null);
      return;
    }

    setExpandedPost(postId);

    try {
      const q = query(
        collection(db, 'respostas'),
        where('perguntaId', '==', postId),
        orderBy('createdAt', 'asc')
      );
      const snap = await getDocs(q);
      const lista = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setRespostas(prev => ({ ...prev, [postId]: lista }));
    } catch (err) {
      console.error('Erro ao carregar respostas', err);
      toast.error('Erro ao carregar respostas.');
    }
  };

  const handleVote = async (postId, currentVotes) => {
    try {
      const postRef = doc(db, 'forum', postId);
      await updateDoc(postRef, { votos: (currentVotes || 0) + 1 });
      setPosts(posts.map(p => p.id === postId ? { ...p, votos: (p.votos || 0) + 1 } : p));
    } catch (err) {
      console.error('Erro ao votar:', err);
      toast.error('Erro ao votar.');
    }
  };

  const handleVoteResposta = async (respId, currentVotes) => {
    try {
      const respRef = doc(db, 'respostas', respId);
      await updateDoc(respRef, { votos: (currentVotes || 0) + 1 });
    } catch (err) {
      console.error('Erro ao votar na resposta:', err);
      toast.error('Erro ao votar na resposta.');
    }
  };

  const handleResponder = async (e, postId) => {
    e.preventDefault();
    if (!replyForm.nome.trim() || !replyForm.texto.trim()) {
      toast.error('Preencha nome e resposta.');
      return;
    }

    try {
      await addDoc(collection(db, 'respostas'), {
        perguntaId: postId,
        nome: replyForm.nome.trim(),
        texto: replyForm.texto.trim(),
        votos: 0,
        createdAt: new Date(),
      });

      toast.success('Resposta publicada!');
      setReplyForm({ nome: '', texto: '' });
      toggleRespostas(postId);
    } catch (err) {
      console.error('Erro ao responder:', err);
      toast.error('Erro ao enviar resposta.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.texto.trim()) {
      toast.error('Preencha nome e pergunta.');
      return;
    }

    setEnviando(true);
    try {
      await addDoc(collection(db, 'forum'), {
        nome: form.nome.trim(),
        cidade: form.cidade.trim() || '',
        texto: form.texto.trim(),
        categoria: form.categoria,
        votos: 0,
        createdAt: new Date(),
      });

      toast.success('Sua pergunta foi publicada!');
      setForm({ nome: '', cidade: '', texto: '', categoria: 'Geral' });
    } catch (error) {
      console.error('Erro ao publicar pergunta:', error);
      toast.error('Erro ao enviar. Tente novamente.');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <BackButton />

          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">Fórum de Dúvidas</h1>
            <p className="text-gray-600">Pergunte, responda e ajude a comunidade!</p>
          </div>

          {/* Campo de busca */}
          <div className="mb-8 relative">
            <input
              type="text"
              placeholder="Buscar perguntas por texto, nome ou categoria..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            )}
          </div>

          {/* Formulário para nova pergunta */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Faça sua Pergunta</h2>
            <p className="text-gray-600 mb-6">Sua dúvida pode ajudar outras pessoas!</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Seu Nome *
                </label>
                <input
                  type="text"
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cidade (opcional)
                </label>
                <input
                  type="text"
                  name="cidade"
                  value={form.cidade}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Categoria
                </label>
                <select
                  name="categoria"
                  value={form.categoria}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Geral">Geral</option>
                  <option value="React">React</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="Firebase">Firebase</option>
                  <option value="CSS">CSS</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sua Pergunta *
                </label>
                <textarea
                  name="texto"
                  value={form.texto}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Descreva sua dúvida..."
                  required
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2.5 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
                disabled={enviando}
              >
                {enviando ? 'Publicando...' : 'Publicar Pergunta'}
              </button>
            </form>
          </div>

          {/* Lista de perguntas */}
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
              <p className="mt-4 text-gray-600">Carregando perguntas...</p>
            </div>
          ) : filteredPosts.length > 0 ? (
            <div className="space-y-6">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                >
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded mb-4">
                    {post.categoria}
                  </span>

                  <div className="flex items-start space-x-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-lg font-bold text-gray-700">
                      {post.nome.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{post.nome}</h3>
                      <p className="text-sm text-gray-500">{post.cidade || 'Anônimo'}</p>
                    </div>
                  </div>

                  <p className="text-gray-800 mb-5 leading-relaxed">{post.texto}</p>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <button
                      onClick={() => handleVote(post.id, post.votos)}
                      className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <span>👍</span>
                      <span>{post.votos || 0}</span>
                    </button>

                    <button
                      onClick={() => toggleRespostas(post.id)}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      Ver respostas ({respostas[post.id]?.length || 0})
                    </button>
                  </div>

                  {expandedPost === post.id && (
                    <div className="mt-6 pl-4 border-l-2 border-gray-200 space-y-4">
                      {respostas[post.id]?.map((resp) => (
                        <div
                          key={resp.id}
                          className="bg-gray-50 p-4 rounded-lg"
                        >
                          <p className="text-gray-800">
                            <strong>{resp.nome}:</strong> {resp.texto}
                          </p>
                          <button
                            onClick={() => handleVoteResposta(resp.id, resp.votos)}
                            className="mt-2 text-xs text-gray-500 hover:text-blue-600"
                          >
                            👍 {resp.votos || 0}
                          </button>
                        </div>
                      ))}

                      <form
                        onSubmit={(e) => handleResponder(e, post.id)}
                        className="mt-4 space-y-3 pt-4 border-t border-gray-200"
                      >
                        <input
                          type="text"
                          placeholder="Seu nome"
                          value={replyForm.nome}
                          onChange={(e) =>
                            setReplyForm({ ...replyForm, nome: e.target.value })
                          }
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <textarea
                          placeholder="Sua resposta..."
                          value={replyForm.texto}
                          onChange={(e) =>
                            setReplyForm({ ...replyForm, texto: e.target.value })
                          }
                          required
                          rows="3"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                          type="submit"
                          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 text-sm"
                        >
                          Responder
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">
                Nenhuma pergunta encontrada. Tente outra busca ou seja o(a) primeiro(a) a postar!
              </p>
            </div>
          )}
        </div>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
      <Footer />
    </>
  );
}

export default Forum;