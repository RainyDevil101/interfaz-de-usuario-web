const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(document).ready(function () {
  // Smooth-scroll
  $('.smooth-scroll').on('click', function (event) {
    event.preventDefault();

    const target = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 300);
  });

  // Agregar clase a nav al hacer scroll 👍
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('.navbar').addClass('bg-opacity');
    } else {
      $('.navbar').removeClass('bg-opacity');
    }
  });

  $(document).ready(function() {
    $('form').submit(function(event) {
        event.preventDefault();

        // Mostrar alerta
        alert('Mensaje enviado');
    });
});

})

