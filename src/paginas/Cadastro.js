import { useState } from 'react';

export default function Cadastro() {
  const [form, setForm] = useState({ nome: '', email: '', senha: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Cadastro realizado!');
  };

  return (
    <div className="bg-off-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[30rem] mx-auto mt-8 sm:mt-12 p-4 sm:p-6 border border-gray-300 rounded-lg shadow">
      <form onSubmit={handleSubmit}>
        <div className="text-center mb-6 text-blue-900 font-bold text-2xl">
          Cadastro
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700" htmlFor="nome">Nome:</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded text-base outline-none focus:outline-none focus:ring focus:border-blue-400"
            type="text"
            name="nome"
            id="nome"
            value={form.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700" htmlFor="email">E-mail:</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded text-base outline-none focus:outline-none focus:ring focus:border-blue-400"
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700" htmlFor="senha">Senha:</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded text-base outline-none focus:outline-none focus:ring focus:border-blue-400"
            type="password"
            name="senha"
            id="senha"
            value={form.senha}
            onChange={handleChange}
            required
          />
        </div>
        <button
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-bold text-base cursor-pointer mt-2"
          type="submit"
        >
          Cadastrar
        </button>
        <button
          type="button"
          onClick={() => window.location.href = '/login'}
          className="w-full py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
        >
          Voltar para Login
        </button>
      </form>
    </div>
  );
}
