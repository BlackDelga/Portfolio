/*jshint esversion: 6 */

//when click at MyApp this message appers
$('#app').click(function () {
  alert('Not Avalable At This Time Sorry!');
});

// this code allow the Background and Goals paragraph to come foward whit big letters
$('.card p').on('mouseover mouseout', function () {
  $(this).toggleClass('intro');
});
