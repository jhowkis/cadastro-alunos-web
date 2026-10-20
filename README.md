# 🎓 Cadastro de Alunos - Claretiano Web

Aplicação web responsiva desenvolvida para o cadastro de alunos, contando com validação de formulário em tempo real, tratamento dinâmico de entradas de texto, indicador de força de senha e estilização moderna baseada em componentes do Bootstrap e estilos CSS personalizados.

---

## 🚀 Funcionalidades

- **Validação de Formulário Customizada (`script.js`):**
  - **RA:** Aceita apenas dígitos numéricos em tempo real e exige exatamente 8 dígitos.
  - **Nome Completo:** Formatação automática no evento `blur` (ex: converte `mARIA da silva` para `Maria Da Silva`).
  - **E-mail:** Validação com Expressão Regular (Regex) e conversão automática para minúsculas.
  - **Senha:** Medidor visual de força da senha em tempo real com barra de progresso colorida e opção para mostrar/ocultar senha.
  - **Seleção de Curso e Turno:** Verificação de campos obrigatórios antes do envio.
  - **Reset do Formulário:** Confirmação antes de limpar e redefinição dos elementos dinâmicos do JavaScript.

- **Interface Moderna (`style.css` & `formulario.html`):**
  - Barra de navegação e rodapé com efeito gradiente (`linear-gradient`).
  - Uso de Variáveis CSS (`:root`) para padronização de cores e temas.
  - Layout totalmente responsivo utilizando **Bootstrap 5** e ícones do **Bootstrap Icons**.

---

## 🛠️ Tecnologias Utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

- **HTML5:** Estruturação semântica do formulário e acessibilidade básica (`aria-label`, `fieldset`, `legend`).
- **CSS3:** Customização visual, layout responsivo e transições.
- **JavaScript (ES6+):** Manipulação da DOM, eventos (`input`, `blur`, `submit`, `reset`) e validações de regras de negócio.
- **Bootstrap 5.3.8:** Sistema de grid, botões, barras de progresso e utilitários.
- **Bootstrap Icons:** Ícones para enriquecer a experiência do usuário.

---

## 📂 Estrutura do Projeto

```text
.
├── formulario.html  # Estrutura principal da página
├── script.js        # Lógica de validação e interatividade em JS
├── style.css        # Estilos personalizados e variáveis de cor
└── README.md        # Documentação do projeto
```

---

## 🔧 Como Executar o Projeto Localmente

1. Clone o repositório ou faça o download dos arquivos:
   ```bash
   git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   ```
2. Abra a pasta do projeto no seu editor de código (ex: VS Code).
3. Abra o arquivo `formulario.html` em qualquer navegador web moderno ou utilize a extensão **Live Server** do VS Code.

---

Desenvolvido para fins de aprendizado em desenvolvimento Web.