// =====================================================
// Aula de JavaScript (live coding): formulário de cadastro
// Ponto de partida: validação do RA no submit (aula anterior)
// =====================================================

// ETAPA 1: Elementos que o JS vai usar (ids do HTML)
const formAluno = document.getElementById("formAluno");
const mensagemAlerta = document.getElementById("mensagemAlerta");
const ra = document.getElementById("ra");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const curso = document.getElementById("curso");
const verSenha = document.getElementById("verSenha");
const barraForca = document.getElementById("forcaSenha");
const textoForca = document.getElementById("textoForca");

// ETAPA 2: Expressão regular do e-mail: algo + @ + algo + . + algo, sem espaços
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ETAPA 3: Mostra uma mensagem no topo do formulário (evita repetir o innerHTML em cada if)
function mostrar(tipo, texto) {
  mensagemAlerta.className = `alert alert-${tipo}`;
  mensagemAlerta.textContent = texto; // textContent trata o texto como texto puro (sem injetar HTML)
  mensagemAlerta.scrollIntoView({ behavior: "smooth" });
}

// ETAPAS 1 a 3: Validação no submit
formAluno.addEventListener("submit", function (event) {
  event.preventDefault();

  const valorRa = ra.value.trim();
  const valorNome = nome.value.trim();
  const valorEmail = email.value.trim();
  const valorSenha = senha.value; // senha sem trim(): espaço pode fazer parte dela

  if (valorRa === "") {
    mostrar("danger", "Preencha o RA!");
  } else if (!/^\d{8}$/.test(valorRa)) {
    mostrar("danger", "O RA deve conter exatamente 8 números!");
  } else if (!valorNome.includes(" ")) {
    mostrar("danger", "Digite seu nome completo!");
  } else if (!regexEmail.test(valorEmail)) {
    mostrar("danger", "Digite um E-mail válido!");
  } else if (valorSenha.length < 6) {
    mostrar("danger", "A senha deve ter pelo menos 6 caracteres!");
  } else if (curso.value === "") {
    mostrar("danger", "Selecione um curso da lista!");
  } else {
    const turno = formAluno.elements.turno.value === "manha" ? "Matutino" : "Noturno";
    const notificacoes = formAluno.elements.notificacoes.checked ? "Notificações ativadas." : "Sem notificações.";
    const nomeCurso = curso.options[curso.selectedIndex].text;

    mostrar("success", `Aluno ${valorNome} (RA ${valorRa}, ${valorEmail}) cadastrado em ${nomeCurso}, turno ${turno}. ${notificacoes}`);
  }
});

// ETAPA 4: Eventos em tempo real
ra.addEventListener("input", function () {
  ra.value = ra.value.replace(/\D/g, ""); // só deixa dígitos
});

nome.addEventListener("blur", function () {
  // "  mARIA   da silva " vira "Maria Da Silva"
  nome.value = nome.value
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .map(function (palavra) {
      return palavra.charAt(0).toUpperCase() + palavra.slice(1);
    })
    .join(" ");
});

email.addEventListener("blur", function () {
  email.value = email.value.trim().toLowerCase();
});

// ETAPA 5: Mostrar/ocultar senha e medidor de força
verSenha.addEventListener("change", function () {
  senha.type = verSenha.checked ? "text" : "password";
});

const niveis = [
  { texto: "", cor: "bg-secondary" },
  { texto: "Senha fraca", cor: "bg-danger" },
  { texto: "Senha razoável", cor: "bg-warning" },
  { texto: "Senha boa", cor: "bg-info" },
  { texto: "Senha forte", cor: "bg-success" },
];

function atualizarForca() {
  const v = senha.value;
  let pontos = 0;
  if (v.length >= 8) pontos++;
  if (/[a-z]/.test(v) && /[A-Z]/.test(v)) pontos++;
  if (/\d/.test(v)) pontos++;
  if (/[^A-Za-z0-9]/.test(v)) pontos++;
  if (v !== "" && pontos === 0) pontos = 1; // senha curta (mas não vazia) é "fraca"

  barraForca.style.width = pontos * 25 + "%";
  barraForca.className = "progress-bar " + niveis[pontos].cor;
  textoForca.textContent = niveis[pontos].texto;
}

senha.addEventListener("input", atualizarForca);

// ETAPA 6: Evento reset
formAluno.addEventListener("reset", function (event) {
  if (!confirm("Deseja limpar todo o formulário?")) {
    event.preventDefault(); // cancela o reset
    return;
  }
  // o reset limpa os valores, mas não desfaz o que o JS desenhou
  mensagemAlerta.className = "";
  mensagemAlerta.textContent = "";
  senha.type = "password";
  barraForca.style.width = "0%";
  textoForca.textContent = "";
  ra.focus();
});
