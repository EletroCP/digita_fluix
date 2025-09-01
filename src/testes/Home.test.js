import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../pages/Home';


const mockTransactions = [
  { id: 1, type: 'entrada', value: 100 },
  { id: 2, type: 'despesa', value: -50 },
  { id: 3, type: 'entrada', value: 200 },
  { id: 4, type: 'despesa', value: -30 },
];


test('Verifica se os componentes são visíveis.', () => {
  render(<Home />);

  const logo = screen.getByRole('img', { name: /logo digital fluix/i });
  const nomePrincipal = screen.getByText(/digital fluix/i);
  const tituloPrincipal = screen.getByText(/Balanço/i);
  const valorPrincipal = screen.getByText(/R\$ 0,00/i);
  const tituloSaida = screen.getByText(/Saídas/i);
  const tituloEntrada = screen.getByText(/Entradas/i);
  const valorSaida = screen.getByText(/R\$ 0,00/i);
  const valorEntrada = screen.getByText(/R\$ 0,00/i);
  const tituloTransação = screen.getByText(/Transações/i);
  const transaçãoVazia = screen.getByText(/nenhuma transação ainda/i);
  const grafico = screen.getByLabelText(/Gráfico de pizza/i);
  const gastoComida = screen.getByText(/Comida/i);
  const gastoLazer = screen.getByText(/Lazer/i);
  const gastoSaude = screen.getByText(/Saúde/i);
  const gastoTransporte = screen.getByText(/Transporte/i);
  const gastoOutros = screen.getByText(/Outros/i);
  const botaoNovaTransação = screen.getByRole('button', { name: /nova transação/i });  

  expect(logo).toBeInTheDocument();
  expect(nomePrincipal).toBeInTheDocument();
  expect(tituloPrincipal).toBeInTheDocument();
  expect(valorPrincipal).toBeInTheDocument();
  expect(tituloSaida).toBeInTheDocument();
  expect(tituloEntrada).toBeInTheDocument();
  expect(valorSaida).toBeInTheDocument();
  expect(valorEntrada).toBeInTheDocument();
  expect(tituloTransação).toBeInTheDocument();
  expect(transaçãoVazia).toBeInTheDocument();
  expect(grafico).toBeInTheDocument();
  expect(gastoComida).toBeInTheDocument();
  expect(gastoLazer).toBeInTheDocument();
  expect(gastoSaude).toBeInTheDocument();
  expect(gastoTransporte).toBeInTheDocument();
  expect(gastoOutros).toBeInTheDocument();
  expect(botaoNovaTransação).toBeInTheDocument();
});

test('Verifica se o balanço, entradas e saídas são calculados corretamente.', () => {
  render(<Home transactions={mockTransactions} />);

  const valorPrincipal = screen.getByText(/R\$ 220,00/i);
  const valorEntrada = screen.getByText(/R\$ 300,00/i);
  const valorSaida = screen.getByText(/R\$ -80,00/i);

  expect(valorPrincipal).toBeInTheDocument();
  expect(valorEntrada).toBeInTheDocument();
  expect(valorSaida).toBeInTheDocument();
});

test('Verifica se as transações são exibidas corretamente.', () => {
  render(<Home transactions={mockTransactions} />);

  const transaction1 = screen.getByText(/100/i);
  const transaction2 = screen.getByText(/-50/i);
  const transaction3 = screen.getByText(/200/i);
  const transaction4 = screen.getByText(/-30/i);

  expect(transaction1).toBeInTheDocument();
  expect(transaction2).toBeInTheDocument();
  expect(transaction3).toBeInTheDocument();
  expect(transaction4).toBeInTheDocument();
});

test('Verifica ser o grafico de pizza é exibido corretamente.', () => {
  render(<Home transactions={mockTransactions} />);
  const grafico = screen.getByLabelText(/Gráfico de pizza/i);
  expect(grafico).toBeInTheDocument();
});

test('Verifica se a lista de categorias é exibida corretamente.', () => {
  render(<Home transactions={mockTransactions} />);

  const gastoComida = screen.getByText(/Comida/i);
  const gastoLazer = screen.getByText(/Lazer/i);
  const gastoSaude = screen.getByText(/Saúde/i);
  const gastoTransporte = screen.getByText(/Transporte/i);
  const gastoOutros = screen.getByText(/Outros/i);
  expect(gastoComida).toBeInTheDocument();
  expect(gastoLazer).toBeInTheDocument();
  expect(gastoSaude).toBeInTheDocument();
  expect(gastoTransporte).toBeInTheDocument();
  expect(gastoOutros).toBeInTheDocument();
});
