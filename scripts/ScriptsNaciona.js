const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector(
    '.container-cart-products'
);

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart');
});

const cartInfo = document.querySelector('.cart-product')
const rowProduct = document.querySelector('.row-product')

const productsList = document.querySelector('.contenedor-nacional-chiffo')

let todosLosProductos = []

const valorTotal = document.querySelector('.total-pagar')
const contadorProductos = document.querySelector('#contador-productos')

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

productsList.addEventListener('click', e => {

    if (e.target.classList.contains('btn-agregar-carrito')) {
        const remera = (e.target.parentElement)

        const infoRemera = {
            quantity: 1,
            title: remera.querySelector('h4').textContent,
            price: remera.querySelector('p').textContent
        }

        const siRepite = todosLosProductos.some(remera => remera.title === infoRemera.title)

        if (siRepite) {
            const remeras = todosLosProductos.map(remera => {
                if (remera.title === infoRemera.title) {
                    remera.quantity++;
                    return remera
                } else {
                    return remera
                }
            })
            todosLosProductos = [...remeras]
        } else {
            todosLosProductos = [...todosLosProductos, infoRemera]
        }
        mostrarHTML()
    }
})

rowProduct.addEventListener('click', (e) => {
    if (e.target.classList.contains('icon-close')) {
        const remera = e.target.parentElement
        const title = remera.querySelector('p').textContent

        todosLosProductos = todosLosProductos.filter(remera => remera.title !== title)

        console.log(todosLosProductos)

        mostrarHTML()
    }

})

const mostrarHTML = () => {

    if (!todosLosProductos.length) {
        cartEmpty.classList.remove('hidden');
        rowProduct.classList.add('hidden');
        cartTotal.classList.add('hidden');
    } else {
        cartEmpty.classList.add('hidden');
        rowProduct.classList.remove('hidden');
        cartTotal.classList.remove('hidden');
    }
    
    rowProduct.innerHTML = '';

    let total = 0;
    let totalDeProductos = 0;


    todosLosProductos.forEach(remera => {
        const contenedorRemerasCarrito = document.createElement('div')
        contenedorRemerasCarrito.classList.add('cart-product')

        contenedorRemerasCarrito.innerHTML = `
                                            <div class="info-cart-product">
                                                <span class="cantidad-producto-carrito">${remera.quantity}</span>
                                                <p class="titulo-producto-carrito">${remera.title}</p>
                                                <span class="precio-producto-carrito">${remera.price}</span>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="icon-close">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M6 18L18 6M6 6l12 12" />
                                            </svg>
        `

        rowProduct.append(contenedorRemerasCarrito)

        total = total + parseInt(remera.quantity * remera.price.slice(1))
        totalDeProductos = totalDeProductos + remera.quantity
    })

    valorTotal.innerText = `$${total}`
    contadorProductos.innerText = totalDeProductos
}