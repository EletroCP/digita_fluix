import { useState } from 'react';

function Login() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [loginTouched, setLoginTouched] = useState(false);
  const [senhaTouched, setSenhaTouched] = useState(false);

  const usuarioCorreto = 'usuario';
  const senhaCorreta = '123456';

  const handleLogin = (e) => {
    e.preventDefault();
    if (!login || !senha) {
      return;
    }
    if (login === usuarioCorreto && senha === senhaCorreta) {
      window.location.href = '/home';
    } else {
      setMensagem('login ou senha incorretos');
    }
  };

  const handleCadastro = () => {
    setMensagem('cadastro realizado com sucesso!');
    window.location.href = '/cadastro'
  };

  return (
    <div className="bg-off-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[30rem] mx-auto mt-8 sm:mt-12 p-4 sm:p-6 border border-gray-300 rounded-lg shadow">
      <h2 className="text-center mb-6 text-blue-900 font-bold text-2xl">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700" htmlFor="login">Login:</label>
          <input
            id="login"
            type="text"
            value={login}
            onChange={e => setLogin(e.target.value)}
            onBlur={() => setLoginTouched(true)}
            onFocus={() => setLoginTouched(true)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>
        {loginTouched && login === '' && (
          <div className="mb-4 text-red-600 text-sm">
            <p>Preencha o login</p>
          </div>
        )}
        <div className="mb-4">
          <label className="block mb-1 text-gray-700" htmlFor="senha">Senha:</label>
          <input
            id="senha"
            type="password"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            onBlur={() => setSenhaTouched(true)}
            onFocus={() => setSenhaTouched(true)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>
        {senhaTouched && senha === '' && (
          <div className="mb-4 text-red-600 text-sm">
            <p>Preencha a senha</p>
          </div>
        )}
        <button
          type="submit"
          className="w-full py-2 mb-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          disabled={!login || !senha}
        >
          Entrar
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