// Validação de formulário de agendamento
const formAgendamento = document.getElementById('form-agendamento');
formAgendamento.addEventListener('submit', function(e) {
    e.preventDefault();

    const data = document.getElementById('data').value;
    const horario = document.getElementById('horario').value;
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    // Validação básica
    if (!data || !horario || !nome || !email || !telefone) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Validação de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    // Exemplo de exibição dos dados na console
    console.log('Dados do Agendamento:', { data, horario, nome, email, telefone });

    // Submit do formulário
    formAgendamento.submit();
});

// Validação de formulário de login
const formLogin = document.getElementById('form-login');
formLogin.addEventListener('submit', function(e) {
    e.preventDefault();

    const emailLogin = document.getElementById('email-login').value;
    const senhaLogin = document.getElementById('senha-login').value;

    // Validação básica
    if (!emailLogin || !senhaLogin) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Validação de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailLogin)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    // Submit do formulário
    formLogin.submit();
});
