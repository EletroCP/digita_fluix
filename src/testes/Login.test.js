import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../pages/Login";

test("Verifica se os componentes são visíveis.", () => {
	render(<Login />);

	const loginInput = screen.getByLabelText("Login");
	const passwordInput = screen.getByLabelText("Senha");
	const buttonLogin = screen.getByRole("button", { name: /entrar/i });
	const buttonRegister = screen.getByRole("button", { name: /cadastrar/i });

	expect(loginInput).toBeInTheDocument();
	expect(passwordInput).toBeInTheDocument();
	expect(buttonLogin).toBeInTheDocument();
	expect(buttonRegister).toBeInTheDocument();
});

test("Verifica se é possível escrever nos inputs.", () => {
	render(<Login />);

	const loginInput = screen.getByLabelText("Login");
	const passwordInput = screen.getByLabelText("Senha");

	fireEvent.change(loginInput, { target: { value: "tryber" } });
	fireEvent.change(passwordInput, { target: { value: "123456" } });

	expect(loginInput.value).toBe("tryber");
	expect(passwordInput.value).toBe("123456");
});

test("Verifica se o botão de entrar está desabilitado quando os campos estão vazios.", () => {
	  render(<Login />);

	const buttonLogin = screen.getByRole("button", { name: /entrar/i });
	expect(buttonLogin).toBeDisabled();
});

test("Verifica se o botão de entrar está habilitado quando os campos estão preenchidos.", () => {
	  render(<Login />);

	const loginInput = screen.getByLabelText("Login");
	const passwordInput = screen.getByLabelText("Senha");
	const buttonLogin = screen.getByRole("button", { name: /entrar/i });

	fireEvent.change(loginInput, { target: { value: "tryber" } });
	fireEvent.change(passwordInput, { target: { value: "123456" } });

	expect(buttonLogin).toBeEnabled();
});

test("Verifica se ao clicar no botão de entrar, a mensagem de boas vindas é exibida.", () => {
	  render(<Login />);

	const loginInput = screen.getByLabelText("Login");
	const passwordInput = screen.getByLabelText("Senha");
	const buttonLogin = screen.getByRole("button", { name: /entrar/i });

	fireEvent.change(loginInput, { target: { value: "tryber" } });
	fireEvent.change(passwordInput, { target: { value: "123456" } });
	fireEvent.click(buttonLogin);

	const welcomeMessage = screen.getByText(/olá, tryber!/i);
	expect(welcomeMessage).toBeInTheDocument();
});

test("Verifica se ao clicar no botão de cadastrar, a mensagem de cadastro é exibida.", () => {
	  render(<Login />);

	const buttonRegister = screen.getByRole("button", { name: /cadastrar/i });
	fireEvent.click(buttonRegister);

	const registerMessage = screen.getByText(/cadastro realizado com sucesso!/i);
	expect(registerMessage).toBeInTheDocument();
});

test("Verifica se ao clicar no botão de entrar sem preencher os campos, a mensagem de erro é exibida.", () => {
	  render(<Login />);

	const buttonLogin = screen.getByRole("button", { name: /entrar/i });
	fireEvent.click(buttonLogin);

	const errorMessage = screen.getByText(/preencha todos os campos/i);
	expect(errorMessage).toBeInTheDocument();
});

test("Verifica se ao clicar no botão de entrar com dados incorretos, a mensagem de erro é exibida.", () => {
	  render(<Login />);

	const loginInput = screen.getByLabelText("Login");
	const passwordInput = screen.getByLabelText("Senha");
	const buttonLogin = screen.getByRole("button", { name: /entrar/i });

	fireEvent.change(loginInput, { target: { value: "wrong" } });
	fireEvent.change(passwordInput, { target: { value: "credentials" } });
	fireEvent.click(buttonLogin);

	const errorMessage = screen.getByText(/login ou senha incorretos/i);
	expect(errorMessage).toBeInTheDocument();
});

test("Verifica se ao clicar no botão de entrar com dados corretos, a mensagem de boas vindas é exibida.", () => {
	  render(<Login />);

	const loginInput = screen.getByLabelText("Login");
	const passwordInput = screen.getByLabelText("Senha");
	const buttonLogin = screen.getByRole("button", { name: /entrar/i });

	fireEvent.change(loginInput, { target: { value: "tryber" } });
	fireEvent.change(passwordInput, { target: { value: "123456" } });
	fireEvent.click(buttonLogin);

	const welcomeMessage = screen.getByText(/olá, tryber!/i);
	expect(welcomeMessage).toBeInTheDocument();
});