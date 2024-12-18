const camisetas = [
    {
        nombre: "Boca Juniors 24/25",
        precio: "$100000",
        cuotas: "3 sin interes de $33.333",
        imagen: "/img/bocajuniros.webp",
        promocion: false
    },
    {
        nombre: "River Plate 24/25",
        precio: "$40000",
        cuotas: "3 sin interes de $13.333",
        imagen: "/img/riverplate.jpg",
        promocion: true
    }, 
    {
        nombre: "Independiente 24/25",
        precio: "$99000",
        cuotas: "3 sin interes de $33.000",
        imagen: "/img/review-camiseta-titular-puma-de-independiente-2022-2023-1.jpg",
        promocion: false
    },
    {
        nombre: "Racing 24/25",
        precio: "$85000",
        cuotas: "3 sin interes de $28.333",
        imagen: "/img/review-camiseta-titular-kappa-de-racing-club-2021-1.jpg",
        promocion: false
    },
    {
        nombre: "Velez 24/25",
        precio: "$95000",
        cuotas: "3 sin interes de $31.666",
        imagen: "/img/velez-camiseta.jpg",
        promocion: false
    },
    {
        nombre: "Ind. Rivadavia 24/25",
        precio: "$50000",
        cuotas: "3 sin interes de $16.666",
        imagen: "/img/indeprivadavia.jpg",
        promocion: false
    },
    {
        nombre: "Lanus 24/25",
        precio: "$80000",
        cuotas: "3 sin interes de $26.666",
        imagen: "/img/lanus.jpeg",
        promocion: false
    },
    {
        nombre: "San Lorenzo 24/25",
        precio: "$95000",
        cuotas: "3 sin interes de $31.666",
        imagen: "/img/sanlorenzo.jpg",
        promocion: false
    },
    {
        nombre: "Huracán 24/25",
        precio: "$75000",
        cuotas: "3 sin interes de $25.000",
        imagen: "/img/huracan.jpg",
        promocion: false
    },
    {
        nombre: "Arsenal Sarandí 24/25",
        precio: "$40000",
        cuotas: "3 sin interes de $13.333",
        imagen: "/img/arsenal.jpg",
        promocion: false
    },
    {
        nombre: "Talleres de Córdoba 24/25",
        precio: "$90000",
        cuotas: "3 sin interes de $30.000",
        imagen: "/img/talleres.jpg",
        promocion: false
    },
    {
        nombre: "Banfield 24/25",
        precio: "$65000",
        cuotas: "3 sin interes de $21.666",
        imagen: "/img/banfield.jpg",
        promocion: false
    },
    {
        nombre: "Newell's Old Boys 24/25",
        precio: "$80000",
        cuotas: "3 sin interes de $26.666",
        imagen: "/img/newells.jpg",
        promocion: false
    },
    {
        nombre: "Rosario Central 24/25",
        precio: "$85000",
        cuotas: "3 sin interes de $28.333",
        imagen: "/img/rosariocentral.jpg",
        promocion: false
    },
    {
        nombre: "Godoy Cruz 24/25",
        precio: "$55000",
        cuotas: "3 sin interes de $18.333",
        imagen: "/img/godoycruz.jpeg",
        promocion: false
    },
    {
        nombre: "Atlético Tucumán 24/25",
        precio: "$60000",
        cuotas: "3 sin interes de $20.000",
        imagen: "/img/atleticotucuman.jpg",
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