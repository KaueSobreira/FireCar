document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("changing-text");
  const services = [
    "Manutenção Preventiva",
    "Diagnóstico Preciso",
    "Reparo de Qualidade",
    "Atendimento Premium",
    "Garantia de Serviço",
  ];

  let currentIndex = 0;

  function changeText() {
    textElement.style.opacity = "0";
    textElement.style.transform = "translateY(20px)";

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % services.length;
      textElement.textContent = services[currentIndex];
      textElement.style.opacity = "1";
      textElement.style.transform = "translateY(0)";
    }, 500);
  }

  // Inicia a animação após 2 segundos e repete a cada 4 segundos
  setTimeout(() => {
    setInterval(changeText, 4000);
  }, 2000);
});
