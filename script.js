// Dados da Linha do Tempo
const timelineData = [
    { year: "1972", title: "O Patinho Feio", desc: "Primeiro computador projetado e construído no Brasil (USP), marco inicial da engenharia de hardware e software nacional." },
    { year: "1984", title: "Lei de Informática", desc: "Instituiu a reserva de mercado, impulsionando a criação de cursos de computação e o desenvolvimento de softwares locais." },
    { year: "1990s", title: "Celepar no Paraná", desc: "A Companhia de Tecnologia da Informação e Comunicação do Paraná consolida o estado como polo de modernização administrativa." },
    { year: "2018", title: "BNCC e Computação", desc: "A Base Nacional Comum Curricular integra o Pensamento Computacional como competência transversal em todo o Brasil." },
    { year: "2021", title: "Educação Digital no PR", desc: "Implementação massiva do ensino de Programação (Edutech) na rede estadual do Paraná, tornando-se referência nacional." }
];

// Documentos Oficiais
const docsData = [
    { title: "BNCC - Computação", content: "Complemento à BNCC que define as competências de pensamento computacional, mundo digital e cultura digital para Educação Básica." },
    { title: "Referencial Curricular do Paraná (RCP)", content: "Documento que estrutura como a programação e a robótica são aplicadas nas escolas estaduais paranaenses." },
    { title: "Lei 14.533/2023", content: "Institui a Política Nacional de Educação Digital (PNED), focando em letramento e conectividade." }
];

// Renderização de Componentes
function renderTimeline() {
    const container = document.getElementById('timeline-container');
    container.innerHTML = timelineData.map(item => `
        <div class="timeline-item">
            <span class="timeline-year">${item.year}</span>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
        </div>
    `).join('');
}

function renderAccordion() {
    const container = document.getElementById('accordion-docs');
    container.innerHTML = docsData.map((doc, index) => `
        <div class="accordion-item">
            <button class="accordion-header" onclick="toggleAccordion(${index})">
                ${doc.title} <i class="fas fa-chevron-down"></i>
            </button>
            <div class="accordion-content" id="acc-${index}">
                <p>${doc.content}</p>
            </div>
        </div>
    `).join('');
}

// Lógica de Estado
let fontSize = 16;
function alterarFonte(delta) {
    fontSize += delta;
    if (fontSize >= 12 && fontSize <= 24) {
        document.documentElement.style.setProperty('--base-font-size', fontSize + 'px');
    }
}

function toggleContraste() {
    document.body.classList.toggle('high-contrast');
}

function toggleAccordion(index) {
    const content = document.getElementById(`acc-${index}`);
    const isVisible = content.style.display === 'block';
    document.querySelectorAll('.accordion-content').forEach(c => c.style.display = 'none');
    content.style.display = isVisible ? 'none' : 'block';
}

// Inicialização
window.onload = () => {
    renderTimeline();
    renderAccordion();
};