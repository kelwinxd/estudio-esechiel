$('#toggle').click(function () {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
  if ($(this).hasClass('active')) {
    $('#icon-h').html('X'); // Mostra "X"
  } else {
    $('#icon-h').html('<i class="fas fa-bars"></i>'); // Mostra o ícone do menu
  }
});



//Evento acionado, quando o usuário clicar no link do overlay-menu
$('.overlay-menu li a').click(function(){
  //Checa, através da classe, se o overlay está aberto
  if($('#overlay').hasClass('open') == true) {
    //Remove a classe (e a estilização) do icone hamburguer
    $('#toggle').removeClass('active');
    //Remove a classe (e a estilização) da overlay
    $('#overlay').removeClass('open');
  }

  if ($(this).hasClass('active')) {
    $('#icon-h').html('X'); // Mostra "X"
  } else {
    $('#icon-h').html('<i class="fas fa-bars"></i>'); // Mostra o ícone do menu
  }
});

//Evento acionado, quando o usuário clicar no botão entrar em contato
$('.btn-contact').click(function(){
  $('.btn-contact').hide();
});
