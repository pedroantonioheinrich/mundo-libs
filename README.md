# 🐍 PyLibs - O Manual de Sobrevivência Python

![Vercel Deploy](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)
![Python](https://img.shields.io/badge/Python-3.x-blue?style=for-the-badge&logo=python)

**PyLibs** é uma enciclopédia interativa e minimalista focada em documentar as bibliotecas mais essenciais do ecossistema Python. Desenvolvido para ser rápido, visual e direto ao ponto.

🌐 **Acesse agora:** [pylibs.com.br](https://pylibs.com.br)

---

## 🚀 Funcionalidades

* **Busca Inteligente:** Filtre bibliotecas por nome ou categoria em tempo real.
* **Code Playground Visual:** Visualização de código com syntax highlighting (Prism.js) no estilo Dark Mode.
* **Interface Responsiva:** Otimizado para desktop e dispositivos móveis.
* **Performance:** Feito com Vanilla JS para carregamento instantâneo.

## 🛠️ Tecnologias Utilizadas

O projeto preza pela simplicidade e performance, utilizando tecnologias web puras:

* **HTML5 / CSS3:** Layout customizado com variáveis CSS e animações fluidas.
* **JavaScript (ES6+):** Manipulação de DOM e lógica de filtragem dinâmica via JSON.
* **Prism.js:** Motor de realce de sintaxe para os blocos de código.
* **Google Fonts:** Inter e Fira Code para uma tipografia legível e técnica.

## 📂 Estrutura do Projeto

```text
.
├── index.html          # Página principal (Search & Tags)
├── details.html        # Página de visualização da biblioteca
├── data.json           # Banco de dados das bibliotecas
├── Styles/
│   ├── section.css     # Estilos da Home
│   ├── details.css     # Estilos da página de detalhes
│   └── Images/         # Assets, ícones e OG Images
└── Scripts/
    ├── script.js       # Lógica da Home
    └── details.js      # Lógica de renderização de comandos
