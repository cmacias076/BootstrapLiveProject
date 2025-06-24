import getDateString from './date.js';
import '../styles/styles.scss';
import image from '../images/image.jpeg';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all';
$(document).ready(function() {
//Print the current time
$('.js-content').html(`<i class="fas fa-clock"></i> ${ getDateString() }`)
//Display the image
$('<img />')
    .attr('src', image)
    .attr('alt', 'Peaceful image')
    .appendTo('body');
});
//Display the Bootstrap modal window
$('.js-modal').modal({
    show: true,
    keyboard: true
});