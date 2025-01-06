if(window.SimpleAnime) {
	new SimpleAnime();
}


if(window.SimpleForm) {
	new SimpleForm({
	  form: ".formphp", // seletor do formulário
	  button: "#enviar", // seletor do botão
	  erro: "<div id='form-erro'><h2>Erro no envio!</h2><p>Um erro ocorreu, tente para o email contato@pincinatodollo.com</p></div>", // mensagem de erro
	  sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve entraremos em contato com você.</p></div>", // mensagem de sucesso
	});
}

document.addEventListener('DOMContentLoaded', () => {
	const cards = document.querySelectorAll('.acting .cards .card');
	const container = document.querySelector('.acting .cards');  // Seleciona a div principal (ou primeiro card)
  
	const observer = new IntersectionObserver((entries, observer) => {
	  entries.forEach((entry) => {
		if (entry.isIntersecting) {
		  // Quando a div principal (container) estiver visível, aplica as animações aos cards
		  cards.forEach((card, index) => {
			card.style.transitionDelay = `${index * 0.2}s`;  // Delay progressivo
			card.classList.add('visible');  // Adiciona a classe de animação
		  });
  
		  // Desativa o observador após disparar a animação para os cards
		  observer.unobserve(entry.target);
		}
	  });
	}, {
	  threshold: 0.2,  // Quando 20% da div principal for visível
	});
  
	// Observe a div principal (container)
	observer.observe(container);
  });
  

  // Seleciona o model-viewer
const modelViewer = document.querySelector("#model");

// Variáveis de controle
let isVisible = false;

// Configura o IntersectionObserver para monitorar visibilidade do model-viewer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    isVisible = entry.isIntersecting; // Atualiza a visibilidade
  });
}, { threshold: 0.1 }); // 10% do elemento visível já ativa o observer

observer.observe(modelViewer);

document.addEventListener("mousemove", (event) => {
	const { clientX, clientY } = event; // Posição do mouse
	const { innerWidth, innerHeight } = window; // Dimensões da janela
  
	// Calcula valores proporcionais ao movimento do mouse
	const rotationY = 80 - (((clientX / innerWidth) * 300) ) / 2; // Horizontal: de -180 a 180 graus
	const rotationX = 180 - ((clientY / innerHeight) * 120); // Vertical: inverte o cálculo para corrigir o movimento
  
    
	
	// Ajusta o cameraOrbit do model-viewer
	modelViewer.cameraOrbit = `${rotationY}deg ${rotationX}deg`;
  });

////////////////////////////////////////////////////
  //slide 
  const slider = document.querySelector(".cards-quem");
const cards = document.querySelectorAll(".card-quem");
let currentIndex = 0;
let sliderWidth = slider.parentElement.offsetWidth;

// Atualizar tamanho dos cards dinamicamente e centralizá-los
function updateCardSize() {
  sliderWidth = slider.parentElement.offsetWidth; // Obtém a largura do container
  const cardWidth = sliderWidth * 0.8; // Cards ocupam 80% da largura do slider
  cards.forEach((card) => {
	const screenWidth = window.innerWidth;
	if (screenWidth >= 800) {
		card.style.minWidth = '80%'; // Exemplo de ajuste para desktop
	  } else if ( screenWidth > 500 && screenWidth < 800) {
		card.style.minWidth = '60%';
		sliderWidth = slider.parentElement.offsetWidth - 150;
	  } else {
		card.style.minWidth = '40%';
		sliderWidth = slider.parentElement.offsetWidth - 300;
	  }
  });

  // Centraliza o slider no primeiro card
  slider.style.transform = `translateX(0)`;
}
updateCardSize();

// Lógica do movimento do slider
function moveSlider() {
  const cardWidth = sliderWidth * 0.7; 

  currentIndex++;
  if (currentIndex < cards.length) {
    slider.style.transition = "transform 0.5s ease-in-out";
    slider.style.transform = `translateX(-${(currentIndex * cardWidth)}px)`;
  } else {
    // Quando atingir o último card, volta suavemente para o primeiro
    setTimeout(() => {
   
      slider.style.transform = `translateX(0)`;
      currentIndex = 0;
    }, 500); // Tempo da transição antes de resetar
  }
}

// Adicionar um delay maior para o primeiro card
function startSlider() {
  setTimeout(() => {
    setInterval(moveSlider, 3000); // Muda a cada 3 segundos
  }, 2000); // Delay inicial de 2 segundos para o primeiro card
}

// Adicionar um observador para redimensionamento
window.addEventListener("resize", updateCardSize);

// Iniciar o slider
startSlider();


/////////////////////////////////
