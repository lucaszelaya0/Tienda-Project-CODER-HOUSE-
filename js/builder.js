const Container = document.getElementById('products-ctn');

//Si el JSON tiene productos creo la card, en caso no haber productos disponibles no creo la card y muestro un mensaje
function CardBuilder(){    
    if(products.length > 0){
        for(var i in products){
        const HTMLCard = 
        `<div id="card" class="card">
            <div class="image">
                <img src="../img/${products[i].img}" alt="">
            </div>
            <hr>
            <div class="description"> 
                <p>${products[i].nombre}</p>
                <p class ="price">$${products[i].precio}</p>
            </div>
            <div class="button">
                <button class="btn btn-dark add-to-cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-plus-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"/>
                </svg>
                </button>
            </div>
    </div>`;
            Container.innerHTML += HTMLCard
    }
    }
    else{
        const noProducts =
        `
        <div class="noproducts-ctn">
            <h2>No hay productos disponibles</h2>
            <p>Por favor intentelo mas tarde</p>
        </div>
        `;
        Container.innerHTML = noProducts;
    }
}
CardBuilder();