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
                nombre: "Papas Regular",
                descripcion: "Papas fritas crujientes.",
                precio: "$560",
                imagen: "./images/pedidos/3-1.png",
            },
            {
                nombre: "Papas Mediana",
                descripcion: "Papas fritas crujientes.",
                precio: "$570",
                imagen: "./images/pedidos/3-2.png",
            },
            {
                nombre: "Papas Grandes",
                descripcion: "Papas fritas crujientes.",
                precio: "$580",
                imagen: "./images/pedidos/3-3.png",
            },
            {
                nombre: "Papas Bacon y Cheddar",
                descripcion: "Papas fritas bañadas en salsa cheddar y bacon.",
                precio: "$780",
                imagen: "./images/pedidos/3-4.png",
            },
            {
                nombre: "Nuggets x6",
                descripcion: "Bucaditos de pollo x6.",
                precio: "$1040",
                imagen: "./images/pedidos/3-5.png",
            },
            {
                nombre: "Nuggets x10",
                descripcion: "Bocados de pollo crujientes.",
                precio: "$1600",
                imagen: "./images/pedidos/3-6.png",
            },
            {
                nombre: "Nuggets Bacon y Cheddar x10",
                descripcion: "Bocados de pollo crujientes con bacon y cheddar.",
                precio: "$1850",
                imagen: "./images/pedidos/3-7.png",
            },
        ],
    },
    {
        id: "cafeteria",
        titulo: "Cafetería",
        opciones: [
            {
                nombre: "Muffin + Café",
                descripcion: "Muffin + Café",
                precio: "$510",
                imagen: "./images/pedidos/4-1.png",
            },
            {
                nombre: "2 Medialunas + Café Regular",
                descripcion: "2 Medialunas acompañadas de un café a elección.",
                precio: "$450",
                imagen: "./images/pedidos/4-2.png",
            },
            {
                nombre: "2 Medialunas + Café Mediano",
                descripcion: "2 Medialunas + Café Mediano.",
                precio: "$540",
                imagen: "./images/pedidos/4-3.png",
            },
            {
                nombre: "1 Medialuna + Café o Jugo",
                descripcion: "1 Medialuna acompañada de un café elección.",
                precio: "$390",
                imagen: "./images/pedidos/4-4.png",
            },
            {
                nombre: "2 Medialunas Jamón y Cheddar + Café o Jugo",
                descripcion: "2 Medialunas con jamón y queso acompañada de un café a eelección.",
                precio: "$910",
                imagen: "./images/pedidos/4-5.png",
            },
            {
                nombre: "3 Medialunas + Café o Jugo",
                descripcion: "3 Medialunas acompañadas de un café a elección.",
                precio: "$630",
                imagen: "./images/pedidos/4-6.png",
            },
            {
                nombre: "Alfajor + Café o Jugo",
                descripcion: "Alfajor acompañado de café a elección.",
                precio: "$630",
                imagen: "./images/pedidos/4-7.png",
            },
            {
                nombre: "Tostado Cheddar + Café Regular",
                descripcion: "Tostado de jamón y queso cheddar.",
                precio: "$670",
                imagen: "./images/pedidos/4-8.png",
            },
            {
                nombre: "Tostado Jamón y Cheddar + Café Mediano",
                descripcion: "Tostado Jamón y Cheddar + Café Mediano.",
                precio: "$760",
                imagen: "./images/pedidos/4-9.png",
            },
            {
                nombre: "Tostado Big Jamón y Queso + Café o Jugo",
                descripcion: "Tostado Bigg de jamón y queso con café a elección.",
                precio: "$890",
                imagen: "./images/pedidos/4-10.png",
            },
            {
                nombre: "Tostado Large Jamón y Cheddar + Café o Jugo",
                descripcion: "Panini de jamón y queso cheddar con café a elección.",
                precio: "$1130",
                imagen: "./images/pedidos/4-11.png",
            },
            {
                nombre: "Tostado Large Matambre de Pollo + Café o Jugo",
                descripcion: "Panini de matambrito de pollo y queso con café a elección.",
                precio: "$1010",
                imagen: "./images/pedidos/4-12.png",
            },
            {
                nombre: "Café a elección Regular",
                descripcion: "Café, Cortado, Latte, Capuccino, Lágrima, Chocolate, Té.",
                precio: "$350",
                imagen: "./images/pedidos/4-13.png",
            },
            {
                nombre: "Café a elección Mediano",
                descripcion: "Café, Cortado, Latte, Capuccino, Lágrima, Chocolate, Té.",
                precio: "$430",
                imagen: "./images/pedidos/4-14.png",
            },
            {
                nombre: "Café a elección Grande",
                descripcion: "Café, Cortado, Latte, Capuccino, Lágrima, Chocolate, Té.",
                precio: "$510",
                imagen: "./images/pedidos/4-15.png",
            },
            {
                nombre: "Medialuna",
                descripcion: "Medialuna de Manteca.",
                precio: "$180",
                imagen: "./images/pedidos/4-16.png",
            },
            {
                nombre: "Medialuna Jamón y Cheddar",
                descripcion: "Deliciosa medialuna con jamón y cheddar.",
                precio: "$320",
                imagen: "./images/pedidos/4-17.png",
            },
            {
                nombre: "Alfajor",
                descripcion: "Alfajor de chocolate.",
                precio: "$400",
                imagen: "./images/pedidos/4-18.png",
            },
            {
                nombre: "Tostado Big Extra Cheddar",
                descripcion: "Tostado big de queso cheddar.",
                precio: "$600",
                imagen: "./images/pedidos/4-19.png",
            },
            {
                nombre: "Tostadao Big Jamón y Queso",
                descripcion: "Tostado big de jamón y queso.",
                precio: "$600",
                imagen: "./images/pedidos/4-20.png",
            },
            {
                nombre: "Tostado Large Jamón y Cheddar",
                descripcion: "Panini de Jamón y queso Cheddar.",
                precio: "$790",
                imagen: "./images/pedidos/4-21.png",
            },
            {
                nombre: "Tostado Large de Matambre de Pollo",
                descripcion: "Panini de matambrito de pollo y queso.",
                precio: "$720",
                imagen: "./images/pedidos/4-22.png",
            },
            {
                nombre: "Muffin",
                descripcion: "Muffin.",
                precio: "$270",
                imagen: "./images/pedidos/4-23.png",
            },
        ],
    },
    {
        id: "postres",
        titulo: "Postres",
        opciones: [
            {
                nombre: "Cono Clásico",
                descripcion: "Helado de crema americana, dulce de leche o combinado.",
                precio: "$250",
                imagen: "./images/pedidos/5-1.png",
            },
            {
                nombre: "Cono MAX",
                descripcion: "Helado de crema americana, dulce de leche o combinado.",
                precio: "$320",
                imagen: "./images/pedidos/5-2.png",
            },
            {
                nombre: "Cono Relleno",
                descripcion: "Helado crema americana, ddl o combinado, con salsa de chocolate.",
                precio: "$340",
                imagen: "./images/pedidos/5-3.png",
            },
            {
                nombre: "2 Conos",
                descripcion: "Helado de crema americana, dulce de leche o combinado.",
                precio: "$460",
                imagen: "./images/pedidos/5-4.png",
            },
            {
                nombre: "Sundae Choconut",
                descripcion: "Helado de crema americana con salsa.",
                precio: "$590",
                imagen: "./images/pedidos/5-5.png",
            },
            {
                nombre: "Sundae Banana Split",
                descripcion: "Helado de crema americana con salsa.",
                precio: "$590",
                imagen: "./images/pedidos/5-6.png",
            },
            {
                nombre: "Sundae DDL Banana Split",
                descripcion: "Heelado de crema americana con salsa.",
                precio: "$590",
                imagen: "./images/pedidos/5-7.png",
            },
            {
                nombre: "Sundae Dulce de Leche",
                descripcion: "Helado de crema americana con salsa de dulce de leche.",
                precio: "$590",
                imagen: "./images/pedidos/5-8.png",
            },
            {
                nombre: "Sundae Pulpa Frutilla",
                descripcion: "Helado de crema americana con salsa de super frutilla.",
                precio: "$590",
                imagen: "./images/pedidos/5-9.png",
            },
            {
                nombre: "Twist Banana Split Choco Aguila",
                descripcion: "Helado de crema americana con salsa.",
                precio: "$780",
                imagen: "./images/pedidos/5-10.png",
            },
            {
                nombre: "Twist Banana Split Choco Aguila",
                descripcion: "Twist DDL Banana Split Choco Aguila.",
                precio: "$780",
                imagen: "./images/pedidos/5-11.png",
            },
            {
                nombre: "Twist Frutilla",
                descripcion: "Helado de crema americana con salsa de super frutilla.",
                precio: "$780",
                imagen: "./images/pedidos/5-12.png",
            },
            {
                nombre: "Twist Milka Cookie",
                descripcion: "Delicioso helado de americana con pequeños trozos de Milka Mousse.",
                precio: "$840",
                imagen: "./images/pedidos/5-13.png",
            },
        ],
    },
    {
        id: "hamburguesas",
        titulo: "Hamburguesas",
        opciones: [
            {
                nombre: "Mega Dibu Smoked BBQ",
                descripcion: "Mega hamburguesa de carne con muzarella y barbacoa ahumada, bacon, cebollitacrispy, tomate y pan brioche.",
                precio: "$2300",
                imagen: "./images/pedidos/6-1.png",
            },
            {
                nombre: "Mega Dibu Doble Smoked BBQ",
                descripcion: "Doble Mega hamburguesa de carne con muzarella y barbacoa ahumada, bacon, cebollitacrispy, tomate y pan brioche.",
                precio: "$2800",
                imagen: "./images/pedidos/6-2.png",
            },
            {
                nombre: "Mega Dibu Pollo Crispy Smoked BBQ",
                descripcion: "Pollo crispy con muzarella y barbacoa ahumada, bacon, cebollita crispy, tomate y pan Brioche.",
                precio: "$2050",
                imagen: "./images/pedidos/6-3.png",
            },
            {
                nombre: "Mega Cuarto XL",
                descripcion: "Mega hamburguesa con mucho cheddar.",
                precio: "$1800",
                imagen: "./images/pedidos/6-4.png",
            },
            {
                nombre: "Mega Pampeano",
                descripcion: "Mega hamburguesa con jamón y cheddar.",
                precio: "$1900",
                imagen: "./images/pedidos/6-5.png",
            },
            {
                nombre: "Mega Cuarto Deluxe",
                descripcion: "Mega hamburguesa con queso cheddar, lechuga y tomamte.",
                precio: "$1800",
                imagen: "./images/pedidos/6-6.png",
            },
            {
                nombre: "Mega Evolution Bacon",
                descripcion: "Mega hamburguesa con queso cheddar, lechuga y tomate.",
                precio: "$2100",
                imagen: "./images/pedidos/6-7.png",
            },
            {
                nombre: "Mega Bacon",
                descripcion: "Mega hamburguesa con cheddar y mmucho bacon.",
                precio: "$2100",
                imagen: "./images/pedidos/6-8.png",
            },
            {
                nombre: "Mega Premium Boom",
                descripcion: "Mega hamburguesa con queso cheddar, bacon y baño de salsa cheddar.",
                precio: "$2300",
                imagen: "./images/pedidos/6-9.png",
            },
            {
                nombre: "Mega Doble Cuarto XL",
                descripcion: "Doble mega hamburguesa con mucho cheddar.",
                precio: "$2300",
                imagen: "./images/pedidos/6-10.png",
            },
            {
                nombre: "Mega Doble Pampeano",
                descripcion: "Doble meg ahamburguesa con jamón y cheddar.",
                precio: "$2400",
                imagen: "./images/pedidos/6-11.png",
            },
            {
                nombre: "Mega Cuarto Doble Deluxe",
                descripcion: "Doble mega hamburguesa con queso cheddar, lechuga y tomate.",
                precio: "$2300",
                imagen: "./images/pedidos/6-12.png",
            },
            {
                nombre: "Mega Doble Bacon",
                descripcion: "Doble mega hamburguesa con cheddar y mucho bacon.",
                precio: "$2600",
                imagen: "./images/pedidos/6-13.png",
            },
            {
                nombre: "Mega Doble Premium Boom",
                descripcion: "Doble mega hamburguesa con queso cheddar, bacon y baño de salsa cheddar.",
                precio: "$2800",
                imagen: "./images/pedidos/6-14.png",
            },
            {
                nombre: "Cheddar Junior",
                descripcion: "Hamburguesa junior con queso cheddar.",
                precio: "$600",
                imagen: "./images/pedidos/6-15.png",
            },
            {
                nombre: "Doble Cheddar Junior",
                descripcion: "Hamburguesa con doble carne Junior con queso cheddar.",
                precio: "$1630",
                imagen: "./images/pedidos/6-16.png",
            },
            {
                nombre: "Doble Pampeano Junior",
                descripcion: "Doble hamburguesa con jamón y cheddar.",
                precio: "$2375",
                imagen: "./images/pedidos/6-17.png",
            },
            {
                nombre: "Mega Pollo Deluxe Crispy",
                descripcion: "Hamburguesa de popllo con doble cheddar, lechuga y tomate.",
                precio: "$1750",
                imagen: "./images/pedidos/6-18.png",
            },
            {
                nombre: "Mega Pollo Deluxe Bacon Crispy",
                descripcion: "Medallón de pollo crispy con queso cheddar, mucho bacon cebollita y saksa barbacoa.",
                precio: "$2000",
                imagen: "./images/pedidos/6-19.png",
            },
            {
                nombre: "Mega Veggie Cero Carne",
                descripcion: "Mega hamburguesa cero carne con lechuga y tomate.",
                precio: "$1750",
                imagen: "./images/pedidos/6-20.png",
            },
            {
                nombre: "Mega Cero Carne Clásica con Cheddar",
                descripcion: "Mega hamburguesa SIN CARNE con cheddar, lechuga y tomate.",
                precio: "$1900",
                imagen: "./images/pedidos/6-21.png",
            },
            {
                nombre: "Mega Doble Cero Carne",
                descripcion: "Doble Mega hamburguesa cero carne con queso cheddar, ketchup y mostaza.",
                precio: "$2350",
                imagen: "./images/pedidos/6-22.png",
            },
        ],
    },
    {
        id: "cajita",
        titulo: "La Cajita de Mostaza",
        opciones: [
            {
                nombre: "Cajita Cheddar Junior",
                descripcion: "Cajita de Mostaza con hamburguesa con cheddar.",
                precio: "$1860",
                imagen: "./images/pedidos/7-1.png",
            },
            {
                nombre: "Cajita Hamburguesa Junior",
                descripcion: "Cajita de Mostaza con hamburguesa.",
                precio: "$1760",
                imagen: "./images/pedidos/7-2.png",
            },
            {
                nombre: "Cajita Nuggets x5",
                descripcion: "Cajita de Mostaza con nuggets de pollo.",
                precio: "$1760",
                imagen: "./images/pedidos/7-3.png",
            },
            {
                nombre: "Cajita Tostado",
                descripcion: "Cajita de Mostaza con tostado de jamón y queso.",
                precio: "$1760",
                imagen: "./images/pedidos/7-4.png",
            },
        ],
    },
    {
        id: "bebidas",
        titulo: "Bebidas",
        opciones: [
            {
                nombre: "Gaseosa Promo",
                descripcion: "Coca, Coca Zero, Sprite Zero, Fanta Zero.",
                precio: "$510",
                imagen: "./images/pedidos/8-1.png",
            },
            {
                nombre: "Gaseosa Regular",
                descripcion: "Coca, Coca Zero, Sprite Zero, Fanta Zero.",
                precio: "$520",
                imagen: "./images/pedidos/8-2.png",
            },
            {
                nombre: "Gaseosa Mediana",
                descripcion: "Coca, Coca Zero, Sprite Zero, Fanta Zero.",
                precio: "$530",
                imagen: "./images/pedidos/8-3.png",
            },
            {
                nombre: "Gaseosa Grande",
                descripcion: "Coca, Coca Zero, Sprite Zero, Fanta Zero.",
                precio: "$550",
                imagen: "./images/pedidos/8-4.png",
            },
            {
                nombre: "Agua",
                descripcion: "Agua mineral.",
                precio: "$440",
                imagen: "./images/pedidos/8-5.png",
            },
            {
                nombre: "Quilmes 473 c.c",
                descripcion: "Cerveza Quilmes 473 c.c.",
                precio: "$740",
                imagen: "./images/pedidos/8-6.png",
            },
            {
                nombre: "Stella Artois 473 c.c",
                descripcion: "Cerveza Stella Artois 473 c.c.",
                precio: "$810",
                imagen: "./images/pedidos/8-7.png",
            },
            {
                nombre: "Jugo de Naranja",
                descripcion: "Jugo de Naranja",
                precio: "$350",
                imagen: "./images/pedidos/8-8.png",
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
    window.location.hash = null;
}
