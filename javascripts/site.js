$( document ).ready(function() {
  console.log( "Got ya! What are you doing here, Sneaky Inspector?" );
  console.log( "Hit me up at: hey@walrey.es" );

  $('div#go-to-some-of-me').click(() => {
    $('html, body').animate({
        scrollTop: $("section#some-of-me").offset().top
    }, 500);
  })

  $('div#back-arrow').click(() => {
    $('div#back-arrow').parent().css("display","none");
  })

  $('a#happy-development-experience').click(() => {
    $('div#happy-development-experience').css("display","flex");
  })
});
