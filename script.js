// Capturando os formulários
const loginForm = document.getElementById('loginForm');
const cadastroForm = document.getElementById('cadastroForm');

// Ação de login
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = loginForm.querySelector('input[type="email"]').value;
    const senha = loginForm.querySelector('input[type="password"]').value;

    // Lógica de autenticação (você pode adicionar sua própria lógica aqui)
    // Exemplo básico apenas para demonstração
    if (email === 'usuario@example.com' && senha === 'senha123') {
        alert('Login bem-sucedido!');
    } else {
        alert('Credenciais inválidas. Tente novamente.');
    }
});

// Ação de cadastro
cadastroForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const nome = cadastroForm.querySelector('input[type="text"]').value;
    const email = cadastroForm.querySelector('input[type="email"]').value;
    const senha = cadastroForm.querySelector('input[type="password"]').value;
    const telefone = cadastroForm.querySelector('input[type="tel"]').value;

    // Lógica de armazenamento dos dados (você pode adicionar sua própria lógica aqui)
    // Exemplo básico apenas para demonstração
    const pessoa = {
        nome: nome,
        email: email,
        senha: senha,
        telefone: telefone
    };

    console.log(pessoa); // Exibe os dados no console (apenas para fins de demonstração)
    alert('Cadastro realizado com sucesso!');
});
