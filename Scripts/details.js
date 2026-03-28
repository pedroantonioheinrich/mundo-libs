// Variáveis globais para controle do estado da página
let currentLib = null;

/**
 * Inicializa a página: captura o ID da URL e busca os dados no JSON
 */
async function init() {
    const urlParams = new URLSearchParams(window.location.search);
    const idRequested = urlParams.get('id');

    // Se não houver ID na URL, volta para a home
    if (!idRequested) {
        window.location.href = "index.html";
        return;
    }

    try {
        const response = await fetch("./Data/data.json");
        if (!response.ok) throw new Error("Erro ao carregar o banco de dados.");
        
        const data = await response.json();
        currentLib = data.find(lib => lib.id === idRequested);

        if (currentLib) {
            setupPage(currentLib);
        } else {
            document.body.innerHTML = "<h1 style='color:white; padding:50px;'>Biblioteca não encontrada.</h1>";
        }
    } catch (error) {
        console.error("Erro crítico:", error);
    }
}

/**
 * Preenche os elementos fixos da Sidebar e gera o menu de comandos
 */
function setupPage(lib) {
    // Preenche informações da Biblioteca na Sidebar
    document.getElementById("lib-name").textContent = lib.name;
    document.getElementById("lib-icon").textContent = lib.icon;
    document.getElementById("install-cmd").textContent = lib.installCmd;
    
    // Preenche informações iniciais no cabeçalho do conteúdo
    document.getElementById("lib-description").textContent = lib.description;
    document.getElementById("import-cmd").textContent = lib.category.toUpperCase();

    const menu = document.getElementById("commands-menu");

    // Gera as LIs do menu lateral
    menu.innerHTML = lib.commands.map((cmd, index) => `
        <li class="command-item ${index === 0 ? 'active' : ''}" data-index="${index}">
            ${cmd.cmdName}
        </li>
    `).join('');

    // Adiciona evento de clique para cada item do menu
    document.querySelectorAll(".command-item").forEach(item => {
        item.addEventListener("click", (e) => {
            // Alterna classe active
            document.querySelectorAll(".command-item").forEach(i => i.classList.remove("active"));
            e.currentTarget.classList.add("active");

            // Renderiza o comando selecionado
            const index = e.currentTarget.getAttribute("data-index");
            renderCommand(lib.commands[index]);
        });
    });

    // Renderiza o primeiro comando por padrão ao carregar
    if (lib.commands.length > 0) {
        renderCommand(lib.commands[0]);
    }
}

/**
 * Renderiza a área principal de conteúdo com base no comando selecionado
 */
function renderCommand(cmd) {
    const display = document.getElementById("command-display");
    const title = document.getElementById("command-title");

    title.textContent = cmd.cmdName;

    // Gera a lista de números de linha
    const linesCount = cmd.cmdCode.split('\n').length;
    const lineNumbersHTML = Array.from({ length: linesCount }, (_, i) => `<div>${i + 1}</div>`).join('');

    display.innerHTML = `
        <div class="code-card">
            <div class="code-card-header">
                <div class="mac-dots">
                    <div class="dot red"></div>
                    <div class="dot yellow"></div>
                    <div class="dot green"></div>
                    <span style="margin-left: 15px; font-size: 0.8rem; color: var(--p2-color);">python</span>
                </div>
            </div>
            
            <div class="code-body">
                <div class="line-numbers">
                    ${lineNumbersHTML}
                </div>
                <pre><code class="language-python">${cmd.cmdCode}</code></pre>
            </div>
        </div>

        <div class="output-section">
            <span class="output-label">📥 Saída esperada:</span>
            <div class="output-box">
                <pre>${cmd.cmdOutput}</pre>
            </div>
        </div>
`;;

    // NOVO: Diz ao Prism para colorir o novo código injetado
    if (window.Prism) {
        Prism.highlightAll();
    }
}

init();