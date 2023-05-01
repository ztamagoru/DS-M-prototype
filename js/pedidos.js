//#region 

let menu = [
    {
        id: "combos",
        titulo: "Combos",
        opciones: [
            {
                nombre: "Combo Mega Dibu Smoked BBQ",
                descripcion: "Mega hamburguesa de carne con muzarella y barbacoa ahumada, bacon, cebollita crispy, tomate y pan brioche.",
                precio: "$2400",
                imagen: "./images/pedidos/1-1.png",
            },
            {
                nombre: "Combo Mega Dibu Doble Smoked BBQ",
                descripcion: "Mega hamburguesa de carne con muzarella y barbacoa ahumada, bacon, cebollita crispy, tomate y pan brioche.",
                precio: "$2900",
                imagen: "./images/pedidos/1-2.png",
            },
            {
                nombre: "Combo Mega Dibu Pollo Crispy Smoked BBQ",
                descripcion: "Hamburguesa de pollo rebozado con muzarella y barbacoa ahumada, bacon, cebollita crispy, tomate y pan brioche.",
                precio: "$2200",
                imagen: "./images/pedidos/1-3.png",
            },
            {
                nombre: "Combo Mega Pampeano",
                descripcion: "Mega hamburguesa con jamón y cheddar.",
                precio: "$2050",
                imagen: "./images/pedidos/1-4.png",
            },
            {
                nombre: "Combo Mega Cuarto XL",
                descripcion: "Mega hamburguesa con mucho cheddar.",
                precio: "$1950",
                imagen: "./images/pedidos/1-5.png",
            },
            {
                nombre: "Combo Mega Cuarto Deluxe",
                descripcion: "Mega hamburguesa con queso cheddar, lechuga y tomate.",
                precio: "$1950",
                imagen: "./images/pedidos/1-6.png",
            },
            {
                nombre: "Combo Mega Evolution Bacon",
                descripcion: "Mega hamburguesa con bacon, cheddar, lechuga y tomate.",
                precio: "$2250",
                imagen: "./images/pedidos/1-7.png",
            },
            {
                nombre: "Combo Mega Bacon",
                descripcion: "Mega hamburguesa con cheddar y mucho bacon.",
                precio: "$2250",
                imagen: "./images/pedidos/1-8.png",
            },
            {
                nombre: "Combo Mega Premium Boom",
                descripcion: "Mega hamburguesa con queso cheddar, bacon y baño de salsa cheddar.",
                precio: "2400",
                imagen: "./images/pedidos/1-9.png",
            },
            {
                nombre: "Combo Mega Cuarto Doble XL",
                descripcion: "Doble mega hamburguesa con mucho cheddar.",
                precio: "$2450",
                imagen: "./images/pedidos/1-10.png",
            },
            {
                nombre: "Combo Mega Doble Pampeano",
                descripcion: "Doble mega hamburguesa con jamón y cheddar.",
                precio: "$2550",
                imagen: "./images/pedidos/1-11.png",
            },
            {
                nombre: "Combo Mega Cuarto Deluxe Doble",
                descripcion: "Doble mega hamburguesa con queso cheddar, lechuga y tomate.",
                precio: "$2450",
                imagen: "./images/pedidos/1-12.png",
            },
            {
                nombre: "Combo Mega Evolution Bacon Doble",
                descripcion: "Doble mega hamburguesa con bacon crocante, cheddar, lechuga y tomate.",
                precio: "$2750",
                imagen: "./images/pedidos/1-13.png",
            },
            {
                nombre: "Combo Mega Doble Bacon",
                descripcion: "Doble mega hamburguesa con cheddar y mucho bacon.",
                precio: "$2750",
                imagen: "./images/pedidos/1-14.png",
            },
            {
                nombre: "Combo Mega Doble Premium Boom",
                descripcion: "Doble mega hamburguesa con queso cheddar, bacon y baño de salsa cheddar.",
                precio: "$2900",
                imagen: "./images/pedidos/1-15.png",
            },
            {
                nombre: "Combo Pampeano Junior",
                descripcion: "Hamburguesa Junior con jamón y queso cheddar.",
                precio: "$1950",
                imagen: "./images/pedidos/1-16.png",
            },
            {
                nombre: "Combo Cheddar Junior",
                descripcion: "Hamburguesa con mucho queso cheddar.",
                precio: "$1800",
                imagen: "./images/pedidos/1-17.png",
            },
            {
                nombre: "Combo Full Junior",
                descripcion: "Hamburguesa con Jamón, Queso, Kechuga y Tomate.",
                precio: "$2225",
                imagen: "./images/pedidos/1-18.png",
            },
            {
                nombre: "Combo Doble Carne Junior",
                descripcion: "Doble hamburguesa con queso cheddar.",
                precio: "$2050",
                imagen: "./images/pedidos/1-19.png",
            },
            {
                nombre: "Combo Doble Cheddar Junior",
                descripcion: "Doble hamburguesa con mucho queso cheddar.",
                precio: "$990",
                imagen: "./images/pedidos/1-20.png",
            },
            {
                nombre: "Combo Doble Full Junior",
                descripcion: "Doble hamburguesa jr con jamón, queso lechuga y tomate.",
                precio: "$1798",
                imagen: "./images/pedidos/1-21.png",
            },
            {
                nombre: "Combo Doble Deluxe Junior",
                descripcion: "Doble hamburguesa con lechuga, tomate y quso cheddar.",
                precio: "$2050",
                imagen: "./images/pedidos/1-22.png",
            },
            {
                nombre: "Combo Doble Bacon Junior",
                descripcion: "Doble Hamburgues con bacon y queso cheddar.",
                precio: "$2475",
                imagen: "./images/pedidos/1-23.png",
            },
            {
                nombre: "Combo Triple Cheddar Junior",
                descripcion: "Triple hamburguesa con mucho queso cheddar.",
                precio: "$2575",
                imagen: "./images/pedidos/1-24.png",
            },
            {
                nombre: "Combo Mega Cero Carne Clásica con Cheddar",
                descripcion: "Mega hamburguesa cero carne con cheddar, lechuga y tomate.",
                precio: "$2050",
                imagen: "./images/pedidos/1-25.png",
            },
            {
                nombre: "Combo mega Veggie Cero Carne",
                descripcion: "Mega hamburguesa cero carne con lechuga y tomate.",
                precio: "$1900",
                imagen: "./images/pedidos/1-26.png",
            },
        ],
    },
    {
        id: "pollos",
        titulo: "Pollos y Ensaladas",
        opciones: [
            
            {
                nombre: "Wraps Clásico Pollo LTC + Bebida",
                descripcion: "wrap Deluxe + Bebida.",
                precio: "$1600",
                imagen: "./images/pedidos/2-1.png",
            },
            {
                nombre: "Wraps Cheddar Pollo LTC + Bebida",
                descripcion: "Wraps Deluxe Queso + Bebida.",
                precio: "$1700",
                imagen: "./images/pedidos/2-2.png",
            },
            {
                nombre: "Wraps Evolution Cheddar Pollo LTC + Bebida",
                descripcion: "Wraps Evolution Cheddar Pollo LTC + Bebida.",
                precio: "$1750",
                imagen: "./images/pedidos/2-3.png",
            },
            {
                nombre: "Wraps Veggie Cero Carne LTC + Bebida",
                descripcion: "Wraps Veggie Cero Carne LTC + Bebida.",
                precio: "$1950",
                imagen: "./images/pedidos/2-4.png",
            },
            {
                nombre: "Combo Mega Pollo Deluxe",
                descripcion: "Hamburguesa de pollo rebozado con doble cheddar, lehcuga y tomate.",
                precio: "$",
                imagen: "./images/pedidos/2-5.png",
            },
            {
                nombre: "Combo Mega Pollo Deluxe Bacon Crispy",
                descripcion: "Hamburguesa de pollo con bacon, cheddar, lechuga y tomate.",
                precio: "$2250",
                imagen: "./images/pedidos/2-6.png",
            },
            {
                nombre: "Combo Nuggets x10",
                descripcion: "Bocadas de pollo crujientes.",
                precio: "$2200",
                imagen: "./images/pedidos/2-7.png",
            },
            {
                nombre: "Combo Nuggets Bacon & Cheddar x10",
                descripcion: "Bocadas de pollo crujientes bañados de bacon y cheddar.",
                precio: "$2450",
                imagen: "./images/pedidos/2-8.png",
            },
            {
                nombre: "Ensalada Yamani Veggie + Gaseosa",
                descripcion: "Ensalada de arroz yamaní, lechuga, tomate y croutons.",
                precio: "$1600",
                imagen: "./images/pedidos/2-9.png",
            },
            {
                nombre: "Ensalada Yamani Pollo Crispy + Gaseosa",
                descripcion: "Ensalada de arroz yamaní con pollo crispy, lechuga y tomate.",
                precio: "$1850",
                imagen: "./images/pedidos/2-10.png",
            },
            {
                nombre: "Ensalada Yamani Pollo Grill + gaseosa",
                descripcion: "Ensalada de arroz yamaní con pollo grill, lechuga y tomate.",
                precio: "$1950",
                imagen: "./images/pedidos/2-11.png",
            },
            {
                nombre: "Ensalada Yamani CARNE + Gaseosa",
                descripcion: "Ensalada de arroz yamaní, lechuga, tomate y un medallón de carne.",
                precio: "$1950",
                imagen: "./images/pedidos/2-12.png",
            },
            {
                nombre: "Ensalada Yamani Not Co + Gaseosa",
                descripcion: "Ensalada de Arroz yamani, lechuga, tomate y una hamburguesa Not Co.",
                precio: "$1950",
                imagen: "./images/pedidos/2-13.png",
            },
            {
                nombre: "Ensalada Caesar Veggie + Gaseosa",
                descripcion: "Ensalada Caesar con lechuga, queso en hebras y croutons.",
                precio: "$1600",
                imagen: "./images/pedidos/2-14.png",
            },
            {
                nombre: "Ensalada Caesar Pollo Crispy + Gaseosa",
                descripcion: "Ensalada Caesar con pollo crispy, lechuga, queso en hebras y croutons.",
                precio: "$1850",
                imagen: "./images/pedidos/2-15.png",
            },
            {
                nombre: "Ensalada Caesar Pollo Grill + Gaseosa",
                descripcion: "Ensalada Caesar con pollo grill, lechuga y croutons.",
                precio: "$1950",
                imagen: "./images/pedidos/2-16.png",
            },
            {
                nombre: "Ensalada Caesar CARNE + Gaseosa",
                descripcion: "Ensalada de lechuga, croutons y un medallon de carne.",
                precio: "$1950",
                imagen: "./images/pedidos/2-17.png",
            },
            {
                nombre: "Ensalada Yamani Veggie",
                descripcion: "Ensalada de arroz yamaní, lechuga, croutons y tomate.",
                precio: "$1350",
                imagen: "./images/pedidos/2-18.png",
            },
            {
                nombre: "Ensalada Yamani Pollo Grill",
                descripcion: "Ensalada de arroz yamaní con pollo grill, lechuga y tomate.",
                precio: "$1800",
                imagen: "./images/pedidos/2-19.png",
            },
            {
                nombre: "Ensalada Yamani Pollo Crispy",
                descripcion: "Ensalada de arroz yamaní con pollo crispy, lechuga, queso en hebras y tomate.",
                precio: "$1800",
                imagen: "./images/pedidos/2-20.png",
            },
            {
                nombre: "Ensalada Yamani CARNE",
                descripcion: "Ensalada de arroz yamani, lechuga, tomate y un medallon de carne.",
                precio: "$1800",
                imagen: "./images/pedidos/2-21.png",
            },
            {
                nombre: "Ensalada Caesar Veggie",
                descripcion: "Ensalada Caesar con lechuga, queso en hebras y croutons.",
                precio: "$1350",
                imagen: "./images/pedidos/2-22.png",
            },
            {
                nombre: "Ensalada Caesar Pollo Grill",
                descripcion: "Ensalada Caesar con pollo grill, lechuga y croutons.",
                precio: "$1800",
                imagen: "./images/pedidos/2-23.png",
            },
            {
                nombre: "Ensalada Caesar Pollo Crispy",
                descripcion: "Ensalada Caesar con pollo cripsy, lechuga y croutons.",
                precio: "$1800",
                imagen: "./images/pedidos/2-24.png",
            },
            {
                nombre: "Ensalada Caesar CARNE",
                descripcion: "Ensalada de lechuga, croutons y un medallon de carne.",
                precio: "$1800",
                imagen: "./images/pedidos/2-25.png",
            },
            {
                nombre: "Ensalada Caesar CERO CARNE",
                descripcion: "Ensalada de lechuga, croutons y un medallon de carne.",
                precio: "$1800",
                imagen: "./images/pedidos/2-26.png",
            },
            {
                nombre: "Wraps Clásico Pollo LTC",
                descripcion: "Wraps Clásico Pollo LTC.",
                precio: "$1450",
                imagen: "./images/pedidos/2-27.png",
            },
            {
                nombre: "Wraps Cheddar Pollo LTC",
                descripcion: "Wraps Deluxe Queso.",
                precio: "$1450",
                imagen: "./images/pedidos/2-28.png",
            },
            {
                nombre: "Wraps Evolution Cheddar Pollo LTC",
                descripcion: "Wraps Evolution.",
                precio: "$1450",
                imagen: "./images/pedidos/2-29.png",
            },
            {
                nombre: "Wraps Veggie Cero Carne LTC",
                descripcion: "Wraps Veggie Cero Carne LTC.",
                precio: "$1450",
                imagen: "./images/pedidos/2-30.png",
            },
        ],
    },
    {
        id: "snacks",
        titulo: "Snacks",
        opciones: [
            {
                nombre: "Combo Mega Dibu Smoked BBQ",
                descripcion: "Mega hamburguesa de carne con muzarella y barbacoa ahumada, bacon, cebollita crispy, tomate y pan brioche.",
                precio: "$2400",
                imagen: "./images/pedidos/1-1.png",
            },
            {
                nombre: "Combo Mega Dibu Smoked BBQ",
                descripcion: "Mega hamburguesa de carne con muzarella y barbacoa ahumada, bacon, cebollita crispy, tomate y pan brioche.",
                precio: "$2400",
                imagen: "./images/pedidos/1-1.png",
            },
            {
                nombre: "Combo Mega Dibu Smoked BBQ",
                descripcion: "Mega hamburguesa de carne con muzarella y barbacoa ahumada, bacon, cebollita crispy, tomate y pan brioche.",
                precio: "$2400",
                imagen: "./images/pedidos/1-1.png",
            },
            {
                nombre: "Combo Mega Dibu Smoked BBQ",
                descripcion: "Mega hamburguesa de carne con muzarella y barbacoa ahumada, bacon, cebollita crispy, tomate y pan brioche.",
                precio: "$2400",
                imagen: "./images/pedidos/1-1.png",
            },
        ],
    },
    {
        id: "cafeteria",
        titulo: "Cafetería",
        opciones: [
            {
                nombre: "Combo Mega Dibu Smoked BBQ",
                descripcion: "Mega hamburguesa de carne con muzarella y barbacoa ahumada, bacon, cebollita crispy, tomate y pan brioche.",
                precio: "$2400",
                imagen: "./images/pedidos/1-1.png",
            },
            {
                nombre: "Combo Mega Dibu Smoked BBQ",
                descripcion: "Mega hamburguesa de carne con muzarella y barbacoa ahumada, bacon, cebollita crispy, tomate y pan brioche.",
                precio: "$2400",
                imagen: "./images/pedidos/1-1.png",
            },
            {
                nombre: "Combo Mega Dibu Smoked BBQ",
                descripcion: "Mega hamburguesa de carne con muzarella y barbacoa ahumada, bacon, cebollita crispy, tomate y pan brioche.",
                precio: "$2400",
                imagen: "./images/pedidos/1-1.png",
            },
            {
                nombre: "Combo Mega Dibu Smoked BBQ",
                descripcion: "Mega hamburguesa de carne con muzarella y barbacoa ahumada, bacon, cebollita crispy, tomate y pan brioche.",
                precio: "$2400",
                imagen: "./images/pedidos/1-1.png",
            },
        ],
    },
    {
        id: "postres",
        titulo: "Postres",
        opciones: [
            {
                nombre: "Combo Mega Dibu Smoked BBQ",
                descripcion: "Mega hamburguesa de carne con muzarella y barbacoa ahumada, bacon, cebollita crispy, tomate y pan brioche.",
                precio: "$2400",
                imagen: "./images/pedidos/1-1.png",
            },
            {
                nombre: "Combo Mega Dibu Smoked BBQ",
                descripcion: "Mega hamburguesa de carne con muzarella y barbacoa ahumada, bacon, cebollita crispy, tomate y pan brioche.",
                precio: "$2400",
                imagen: "./images/pedidos/1-1.png",
            },
            {
                nombre: "Combo Mega Dibu Smoked BBQ",
                descripcion: "Mega hamburguesa de carne con muzarella y barbacoa ahumada, bacon, cebollita crispy, tomate y pan brioche.",
                precio: "$2400",
                imagen: "./images/pedidos/1-1.png",
            },
            {
                nombre: "Combo Mega Dibu Smoked BBQ",
                descripcion: "Mega hamburguesa de carne con muzarella y barbacoa ahumada, bacon, cebollita crispy, tomate y pan brioche.",
                precio: "$2400",
                imagen: "./images/pedidos/1-1.png",
            },
        ],
    },
    {
        id: "hamburguesas",
        titulo: "Hamburguesas",
        opciones: [
            {
                nombre: "Combo Mega Dibu Smoked BBQ",
                descripcion: "Mega hamburguesa de carne con muzarella y barbacoa ahumada, bacon, cebollita crispy, tomate y pan brioche.",
                precio: "$2400",
                imagen: "./images/pedidos/1-1.png",
            },
            {
                nombre: "Combo Mega Dibu Smoked BBQ",
                descripcion: "Mega hamburguesa de carne con muzarella y barbacoa ahumada, bacon, cebollita crispy, tomate y pan brioche.",
                precio: "$2400",
                imagen: "./images/pedidos/1-1.png",
            },
            {
                nombre: "Combo Mega Dibu Smoked BBQ",
                descripcion: "Mega hamburguesa de carne con muzarella y barbacoa ahumada, bacon, cebollita crispy, tomate y pan brioche.",
                precio: "$2400",
                imagen: "./images/pedidos/1-1.png",
            },
            {
                nombre: "Combo Mega Dibu Smoked BBQ",
                descripcion: "Mega hamburguesa de carne con muzarella y barbacoa ahumada, bacon, cebollita crispy, tomate y pan brioche.",
                precio: "$2400",
                imagen: "./images/pedidos/1-1.png",
            },
        ],
    },
    {
        id: "cajita",
        titulo: "La Cajita de Mostaza",
        opciones: [
            {
                nombre: "Combo Mega Dibu Smoked BBQ",
                descripcion: "Mega hamburguesa de carne con muzarella y barbacoa ahumada, bacon, cebollita crispy, tomate y pan brioche.",
                precio: "$2400",
                imagen: "./images/pedidos/1-1.png",
            },
            {
                nombre: "Combo Mega Dibu Smoked BBQ",
                descripcion: "Mega hamburguesa de carne con muzarella y barbacoa ahumada, bacon, cebollita crispy, tomate y pan brioche.",
                precio: "$2400",
                imagen: "./images/pedidos/1-1.png",
            },
            {
                nombre: "Combo Mega Dibu Smoked BBQ",
                descripcion: "Mega hamburguesa de carne con muzarella y barbacoa ahumada, bacon, cebollita crispy, tomate y pan brioche.",
                precio: "$2400",
                imagen: "./images/pedidos/1-1.png",
            },
            {
                nombre: "Combo Mega Dibu Smoked BBQ",
                descripcion: "Mega hamburguesa de carne con muzarella y barbacoa ahumada, bacon, cebollita crispy, tomate y pan brioche.",
                precio: "$2400",
                imagen: "./images/pedidos/1-1.png",
            },
        ],
    },
    {
        id: "bebidas",
        titulo: "Bebidas",
        opciones: [
            {
                nombre: "Combo Mega Dibu Smoked BBQ",
                descripcion: "Mega hamburguesa de carne con muzarella y barbacoa ahumada, bacon, cebollita crispy, tomate y pan brioche.",
                precio: "$2400",
                imagen: "./images/pedidos/1-1.png",
            },
            {
                nombre: "Combo Mega Dibu Smoked BBQ",
                descripcion: "Mega hamburguesa de carne con muzarella y barbacoa ahumada, bacon, cebollita crispy, tomate y pan brioche.",
                precio: "$2400",
                imagen: "./images/pedidos/1-1.png",
            },
            {
                nombre: "Combo Mega Dibu Smoked BBQ",
                descripcion: "It was me! Mega hamburguesa de carne con muzarella y barbacoa ahumada, bacon, cebollita crispy, tomate y pan brioche.",
                precio: "$2400",
                imagen: "https://i.kym-cdn.com/photos/images/newsfeed/000/754/604/d67.jpg",
            },
            {
                nombre: "Combo Mega Dibu Smoked BBQ",
                descripcion: "Mega hamburguesa de carne con muzarella y barbacoa ahumada, bacon, cebollita crispy, tomate y pan brioche.",
                precio: "$2400",
                imagen: "./images/pedidos/1-1.png",
            },
        ],
    }
];

//#endregion



// VISTA

function vistaOpcion(opcion) {
    return document
    .getElementById("menu-opcion-template")
    .innerHTML
    .replace("{{NOMBRE_OPCION}}", opcion.nombre)
    .replace("{{DESCRIPCION_OPCION}}", opcion.descripcion)
    .replace("{{PRECIO_OPCION}}", opcion.precio)
    .replace("{{IMAGEN_OPCION}}", opcion.imagen);
}

function vistaCategoria(categoria) {
    let htmlOpciones = categoria.opciones.map(vistaOpcion).join('');
    
    let templateCategoria = document.getElementById("menu-categoria-template");
    return templateCategoria.innerHTML
    .replace("{{ID_CATEGORIA}}", categoria.id)
    .replace("{{TITULO_CATEGORIA}}", categoria.titulo)
    .replace("{{OPCIONES_CATEGORIA}}", htmlOpciones);
}

function vistaTocItem(categoria) {
    let templateTocItem = document.getElementById("toc-item-template");
    return templateTocItem.innerHTML
        .replace("{{ID_CATEGORIA}}", categoria.id)
        .replace("{{TITULO_CATEGORIA}}", categoria.titulo);
}

function loadPage() {
    let htmlMenu = menu.map(vistaCategoria).join('');
    let htmlToc = menu.map(vistaTocItem).join('');

    document.getElementById("toc").innerHTML = htmlToc;
    document.getElementById("menu").innerHTML = htmlMenu;
}

document.addEventListener('DOMContentLoaded', loadPage)

function toctoc(id_categoria) {
    // who's there?

    window.location.hash = id_categoria;
}