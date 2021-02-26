let priceTotal = document.getElementById('price-total');
function mostrarPrecioFinal(){
        priceTotal.textContent =`$${localStorage.getItem('precioFinal')}`;
}
mostrarPrecioFinal();
$(document).ready(function(){
    $(".pay-btn").click(function(){
        alert('Gracias por su compra!!');
        localStorage.clear();
        location.href='index.html';
    })
})