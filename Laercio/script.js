// Texto a ser exibido
const text = `
A formação em Desenvolvimento de Sistemas varia dependendo do tipo de curso escolhido. 
Um curso técnico dura em média 1,5 a 2 anos e foca em habilidades práticas, como programação, 
banco de dados e lógica de programação, preparando o aluno para ingressar rapidamente no mercado de trabalho. 
Já uma graduação tecnológica (tecnólogo) tem duração de 2 a 3 anos e oferece uma formação mais completa 
e direcionada, com diploma de nível superior. Por outro lado, um bacharelado em áreas relacionadas, 
como Ciência da Computação, Engenharia de Software ou Sistemas de Informação, costuma durar 4 a 5 anos 
e aborda de forma mais ampla os fundamentos teóricos, computacionais e matemáticos. O tempo de formação pode 
variar dependendo da instituição e do formato do curso, seja ele presencial ou a distância (EAD).
`;

// Selecionar o elemento onde o texto será digitado
const typedTextElement = document.getElementById("typed-text");

// Configuração de digitação
let index = 0;
const speed = 10; // Velocidade de digitação (ms)
let hasStartedTyping = false; // Para garantir que o texto será digitado apenas uma vez

function typeEffect() {
    if (index < text.length) {
        typedTextElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    }
}

// Função para detectar se o elemento está visível na tela
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Adicionar evento de rolagem para iniciar a animação
window.addEventListener("scroll", () => {
    if (isInViewport(typedTextElement) && !hasStartedTyping) {
        hasStartedTyping = true; // Evita que a digitação reinicie em múltiplos scrolls
        typeEffect();
    }
});