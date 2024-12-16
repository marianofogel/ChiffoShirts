const camisetas = [
    {
        nombre: "Real Madrid 24/25",
        precio: "$120000",
        cuotas: "3 sin interes de $40.000",
        imagen: "/img/internacional/real-madrid.jpg",
        promocion: false
    },
    {
        nombre: "FC Barcelona 24/25",
        precio: "$110000",
        cuotas: "3 sin interes de $36.666",
        imagen: "/img/internacional/barcelona.jpg",
        promocion: true
    },
    {
        nombre: "Manchester United 24/25",
        precio: "$105000",
        cuotas: "3 sin interes de $35.000",
        imagen: "/img/internacional/manchesterunited.jpg",
        promocion: false
    },
    {
        nombre: "Liverpool 24/25",
        precio: "$95000",
        cuotas: "3 sin interes de $31.666",
        imagen: "/img/internacional/liverpool.jpg",
        promocion: false
    },
    {
        nombre: "Bayern Munich 24/25",
        precio: "$115000",
        cuotas: "3 sin interes de $38.333",
        imagen: "/img/internacional/bayernmunich.jpg",
        promocion: false
    },
    {
        nombre: "Paris Saint-Germain 24/25",
        precio: "$120000",
        cuotas: "3 sin interes de $40.000",
        imagen: "/img/internacional/psg.jpg",
        promocion: false
    },
    {
        nombre: "Juventus 24/25",
        precio: "$100000",
        cuotas: "3 sin interes de $33.333",
        imagen: "/img/internacional/juventus.jpg",
        promocion: false
    },
    {
        nombre: "Chelsea 24/25",
        precio: "$110000",
        cuotas: "3 sin interes de $36.666",
        imagen: "/img/internacional/chelsea.jpg",
        promocion: false
    },
    {
        nombre: "Arsenal 24/25",
        precio: "$95000",
        cuotas: "3 sin interes de $31.666",
        imagen: "/img/internacional/arsenallondres.jpg",
        promocion: false
    },
    {
        nombre: "AC Milan 24/25",
        precio: "$90000",
        cuotas: "3 sin interes de $30.000",
        imagen: "/img/internacional/acmilan.jpg",
        promocion: false
    },
    {
        nombre: "Inter Milan 24/25",
        precio: "$85000",
        cuotas: "3 sin interes de $28.333",
        imagen: "/img/internacional/intermilan.jpg",
        promocion: false
    },
    {
        nombre: "Tottenham Hotspur 24/25",
        precio: "$100000",
        cuotas: "3 sin interes de $33.333",
        imagen: "/img/internacional/tottenham.jpg",
        promocion: false
    },
    {
        nombre: "Atletico Madrid 24/25",
        precio: "$95000",
        cuotas: "3 sin interes de $31.666",
        imagen: "/img/internacional/atleticomadrid.jpg",
        promocion: false
    },
    {
        nombre: "Borussia Dortmund 24/25",
        precio: "$85000",
        cuotas: "3 sin interes de $28.333",
        imagen: "/img/internacional/borussiadortmund.jpg",
        promocion: false
    },
    {
        nombre: "Lazio 24/25",
        precio: "$75000",
        cuotas: "3 sin interes de $25.000",
        imagen: "/img/internacional/lazio.jpg",
        promocion: false
    }
];


const contenedorCamisetasNacional = document.querySelector('.contenedor-nacional-chiffo');
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

    if (!todosLosProductos || !todosLosProductos.length) {
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

// Recorre el array de camisetas y genera el HTML
camisetas.forEach(camiseta => {
    // Crea un contenedor para cada camiseta
    const divCamiseta = document.createElement('div');
    divCamiseta.classList.add('contenedor-remeras-nacional'); // Clase para estilizar la camiseta

    // Crea el artículo para la camiseta
    const articulo = document.createElement('article');
    articulo.classList.add('card-remera-nacional');

    // Crea el contenido HTML de la camiseta
    articulo.innerHTML = `
        <img src="${camiseta.imagen}" alt="${camiseta.nombre}" width="280" class="imagenes-remeras-nacional">
        <h4 class="nombre-nacional-chiffo">${camiseta.nombre}</h4>
        <p class="precio-nacional-chiffo"><span>${camiseta.precio}</span></p>
        <p class="cuotas-nacional-chiffo">${camiseta.cuotas}</p>
        <button class="btn-agregar-carrito" data-nombre="${camiseta.nombre}" data-precio="${camiseta.precio}">
            Agregar al carrito
        </button>
    `;

    // Si la camiseta tiene promoción, agrega el texto de promoción
    if (camiseta.promocion) {
        const promocion = document.createElement('p');
        promocion.classList.add('promocion-river');
        promocion.textContent = 'Promoción';
        articulo.appendChild(promocion);
    }

    // Agrega el artículo al contenedor de la camiseta
    divCamiseta.appendChild(articulo);

    // Agrega el div al contenedor principal
    contenedorCamisetasNacional.appendChild(divCamiseta);
});