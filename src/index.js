//css
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import './css/style.css';

//js
import 'jquery/dist/jquery';  // 1
import 'popper.js/dist/popper.min'; // 2
import 'bootstrap/dist/js/bootstrap.min.js'; // 3

// font fortawesome
import '@fortawesome/fontawesome-free/js/all.min';


$(function() {

    $('[data-toggle="tooltip"]').tooltip();
  
    $('.add-to-cart-btn').on( "click",function() {
        alert('أضيف المُنتج إلى عربة الشراء');
    });
})