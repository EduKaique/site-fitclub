document.addEventListener("scroll", function() {
    //Identificando onde fica as seções
    const programCardSection = document.getElementById("program-card-row");
    const aboutCardSection = document.getElementById("about-card");

    //Identificando a posição da tela do usuário
    const programSectionPosition = programCardSection.getBoundingClientRect().top;
    const aboutSectionPosition = aboutCardSection.getBoundingClientRect().top;

    const screenPosition = window.innerHeight / 1.2;
  

    //adicionando a classe "show" para fazer a animação
    if (programSectionPosition < screenPosition) {
        programCardSection.classList.add("show-program");
    }

    if (aboutSectionPosition < screenPosition) {
        aboutCardSection.classList.add("show-about");
    }
  });