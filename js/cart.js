let cart = document.getElementsByClassName('add-to-cart');
let cartIcon = document.querySelector('.cart-icon span');

/* Una vez creada la variable cart a traves de un ciclo for verifico si hay mas de un elemento 
con la clase add-to-cart . Les asigno el evento click el cual llama a la funcion cantidadDeProductos 
*/
for (let i = 0; i < cart.length; i++){
    cart[i].addEventListener('click',() =>{
        cantidadDeProductos(products[i]);
        precioFinal(products[i]);
    })
}

/* La funcion cantidadDeProductos se encarga ir añadiendo la cantidad de productos al carrito.Si agregamos un producto
este se guarda en el local storage. A medida que agreguemos mas, el valor de la key ira aumentando
*/
function cantidadDeProductos(product){
    let productNumbers = localStorage.getItem('cantidadDeProductos');
    productNumbers = parseInt(productNumbers);
    if(productNumbers){
        localStorage.setItem('cantidadDeProductos', productNumbers+1);
        cartIcon.textContent = productNumbers + 1;
    }
    else{
        localStorage.setItem('cantidadDeProductos',1);
        cartIcon.textContent = 1;
    }
    setItems(product);
}

/* Guardo los productos (cantidad y nombre) en la key productosEnElCarrito   */
function setItems(product) {
    let cartItems = localStorage.getItem('productosEnElCarrito');
    cartItems= JSON.parse(cartItems);
    
    if(cartItems != null){
        if(cartItems[product.nombre] == undefined){
            cartItems = {
                ...cartItems,
                [product.nombre] : product
            }
        }
        cartItems[product.nombre].inCart +=1;
    }
    else{
        product.inCart = 1;
        cartItems = {
            [product.nombre]:product
        }
    }
    
    localStorage.setItem("productosEnElCarrito",JSON.stringify(cartItems));
}
/* Guardo el precio de los productos en la key precioFinal y si hay mas de uno los sumo*/

function precioFinal(product) {
    let cartCost = localStorage.getItem('precioFinal');
    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem('precioFinal', cartCost + product.precio);
    }
    else{
        localStorage.setItem("precioFinal", product.precio);
    }
}

/* Guardo la cantidad de productos totales que tengo en el carrito */
function guardarCantidadDeProductos() {
    let productNumbers = localStorage.getItem('cantidadDeProductos');
    if(productNumbers){
        cartIcon.textContent = productNumbers;
    }
}
/* Muetsro el carrito */
function mostrarCarrito(params) {
    let cartItems = localStorage.getItem('productosEnElCarrito');
    cartItems = JSON.parse(cartItems);
    console.log(cartItems);
    let cartContainer = document.getElementById('cart-ctn')
    let totalContainer = document.getElementById('total-ctn');
    if(cartItems && cartContainer){
        cartContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            cartContainer.innerHTML += 
            `
            <tr>
                        <th scope="row">${item.productId}</th>
                        <td>${item.nombre}</td>
                        <td>${item.inCart}</td>
                        <td>$${item.precio}</td>
                    </tr>
            `;
        });
        totalContainer.innerHTML= 
        `
        <tr>
        <th></th>
        <th></th>
        <th>Total</th>
        <th>$${localStorage.getItem('precioFinal')}</th>
        </tr>
        `;
    }
}
$(document).ready(function(){
    $(".clear-btn").click(function(){
        localStorage.clear();
        location.reload();
        window.location='tienda.html';
    });
});
$(document).ready(function(){
    $(".finish-btn").click(function(){
        localStorage.clear();
        location.reload();
        window.location='index.html';
        alert('Gracias por finalizar su compra!')
    });
});
guardarCantidadDeProductos();
mostrarCarrito();
