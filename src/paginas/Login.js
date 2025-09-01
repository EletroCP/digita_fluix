import { useState } from 'react';
import { mockLoginSuccess } from '../mocks/mocks';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if(email === mockLoginSuccess.data.user.email && senha === mockLoginSuccess.data.user.password) {
      alert('Login successful!');
      window.location.href = '/home';
    } else {
      alert('Login failed. Check your credentials.');
    }
  };

  const handleCadastro = () => {
    window.location.href = '/cadastro'
  };

  return (
    <div className="bg-off-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[30rem] mx-auto mt-8 sm:mt-12 p-4 sm:p-6 border border-gray-300 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-6 text-center">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Email:</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Senha:</label>
          <input
            type="password"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 mb-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Logar
        </button>
      </form>
      <button
        onClick={handleCadastro}
        className="w-full py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
      >
        Cadastrar
      </button>
    </div>
  );
}

export default Login;