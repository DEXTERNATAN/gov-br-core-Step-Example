/**
 * Este evento é acionado quando o DOM (Document Object Model) da página foi totalmente carregado.
 * Ele seleciona o último botão da classe .step-progress-btn e define sua altura como zero pixels,
 * tornando-o visualmente oculto.
 */
document.addEventListener("DOMContentLoaded", function() {
  // Seleciona todos os elementos com a classe step-progress-btn
  const stepButtons = document.querySelectorAll('.step-progress-btn');

  // Verifica se existem elementos com a classe step-progress-btn
  if (stepButtons.length > 0) {
    // Seleciona o último elemento da lista de botões
    const lastStepButton = stepButtons[stepButtons.length - 1];
    
    // Define a altura do último botão como zero pixels, ocultando-o visualmente
    lastStepButton.style.height = 0;
  }
});

/**
 * Este trecho de código é responsável por configurar o comportamento de um componente de 
 * acordeão (Accordion) em elementos que possuem o atributo data-toggle="accordion".
 * Ele percorre todos os elementos com esse atributo e configura o acordeão conforme necessário.
 */
document.querySelectorAll('[data-toggle="accordion"]').forEach((trigger) => {
  const config = {
    trigger,
  };
  const accordion = new core.Accordion(config);
  accordion.setBehavior();
});
