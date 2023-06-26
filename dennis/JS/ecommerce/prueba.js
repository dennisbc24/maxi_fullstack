const e = require("express");

const students = [
    {
      "_id": "63b8f57edcc1c2296bcc7e3a",
      "name": "Ropero Armable 3 Cuerpos",
      "price": 80,
      "caracteristicas": [
        "Altura: 160 cm",
        "Ancho: 105 cm",
        "Profundidad: 45 cm",
        "Estructura: Tubos de Metal",
        "Funda: Tela"
      ],
      "imageUrl": "https://prueba1dennis.s3.sa-east-1.amazonaws.com/dibujos/20230106_232710.jpg",
      "category": "roperos",
      "__v": 0
    },
    {
      "_id": "63ba4182dcc1c2296bcc7e60",
      "name": "ROPERO 2 CUERPOS",
      "price": 75,
      "caracteristicas": [
        "Altura: 160cm",
        "Ancho: 80cm",
        "Profundidad: 45cm",
        "Estructura: Tubos de metal",
        "Funda: Tela"
      ],
      "imageUrl": "https://prueba1dennis.s3.sa-east-1.amazonaws.com/dibujos/20230107_230516.png",
      "category": "roperos",
      "__v": 0
    },
    {
      "_id": "63be08f3dcc1c2296bcc7eb3",
      "name": "Organizador de Baño",
      "price": 69,
      "caracteristicas": [
        "Ancho: 50cm",
        "Material: Acero con pintura anticorrosiva",
        "Niveles: 3"
      ],
      "imageUrl": "https://prueba1dennis.s3.sa-east-1.amazonaws.com/dibujos/20230107_224600.jpg",
      "category": "roperos",
      "__v": 0
    },
    {
      "_id": "63be121edcc1c2296bcc7ed1",
      "name": "Perchero con Zapatera UNIONES CON TORNILLOS",
      "price": 75,
      "caracteristicas": [
        "Altura: 170cm",
        "Ancho: 80cm",
        "Capacidad: 20 pares de zapatos",
        "Material: Metal grueso con uniones de tornillos"
      ],
      "imageUrl": "https://prueba1dennis.s3.sa-east-1.amazonaws.com/dibujos/20230106_233845.png",
      "category": "roperos",
      "__v": 0
    },
    {
      "_id": "63be1848dcc1c2296bcc7eeb",
      "name": "HERVIDOR ELECTRICO",
      "price": 35,
      "caracteristicas": [
        "Capacidad: 2 litros",
        "Material: Acero Inoxidable",
        "Apagado: Automático 2 minutos aproximadamente"
      ],
      "imageUrl": "https://prueba1dennis.s3.sa-east-1.amazonaws.com/dibujos/20230110_205634.jpg",
      "category": "electro",
      "__v": 0
    },
    {
      "_id": "63be260ddcc1c2296bcc7f03",
      "name": "PERCHERO CON ZAPATERA BASICO",
      "price": 60,
      "caracteristicas": [
        "Altura: 170cm",
        "Ancho: 80cm",
        "Capacidad: 20 pares de zapatos",
        "Material: Metal con UNIONES PLASTICAS"
      ],
      "imageUrl": "https://prueba1dennis.s3.sa-east-1.amazonaws.com/dibujos/20230110_204300.jpg",
      "category": "roperos",
      "__v": 0
    },
    {
      "_id": "63be274bdcc1c2296bcc7f0a",
      "name": "ESQUINERO DE BAÑO",
      "price": 63,
      "caracteristicas": [
        "Altura: hasta 280cm",
        "Niveles: 4 bandejas",
        "Material: Acero Inoxidable"
      ],
      "imageUrl": "https://prueba1dennis.s3.sa-east-1.amazonaws.com/dibujos/20230110_220226.jpg",
      "category": "roperos",
      "__v": 0
    },
    {
      "_id": "63be2a1fdcc1c2296bcc7f11",
      "name": "AFEITADOR ELECTRICO",
      "price": 130,
      "caracteristicas": [
        "Autonomía: 50 minutos uso continuo",
        "Sistema de Corte: Double Track",
        "Cortapatillas: Desplegable"
      ],
      "imageUrl": "https://prueba1dennis.s3.sa-east-1.amazonaws.com/dibujos/20230110_221354.jpg",
      "category": "electro",
      "__v": 0
    },
    {
      "_id": "63be2abedcc1c2296bcc7f15",
      "name": "COMBO CORTADOR DE CABELLO",
      "price": 160,
      "caracteristicas": [
        "Equipos: 2 maquinas Wahl",
        "Accesorios: Peinetas, Tijera, etc",
        "Cuchilla: Inoxidable Autoafilables"
      ],
      "imageUrl": "https://prueba1dennis.s3.sa-east-1.amazonaws.com/dibujos/20230110_221243.jpg",
      "category": "electro",
      "__v": 0
    },
    {
      "_id": "63c3385f4de1b1fa640efd82",
      "name": "Termo Sifón Acero 2.5L",
      "price": 85,
      "caracteristicas": [
        "Acero inoxidable ",
        "2.5 Litros de capacidad ",
        "Palanca de bombeo"
      ],
      "imageUrl": "https://prueba1dennis.s3.sa-east-1.amazonaws.com/dibujos/images (2) (23)~2.jpeg",
      "category": "termos",
      "__v": 0
    },
    {
      "_id": "63c33b744de1b1fa640efd88",
      "name": "Termo Mega 2L",
      "price": 62,
      "caracteristicas": [
        "Mantiene 24 horas",
        "Cobertura Super Resistente",
        "Incluye 2 Tazas"
      ],
      "imageUrl": "https://prueba1dennis.s3.sa-east-1.amazonaws.com/dibujos/images (2) (24)~2.jpeg",
      "category": "termos",
      "__v": 0
    },
    {
      "_id": "63c33cd74de1b1fa640efd8d",
      "name": "Termo Acero 2L",
      "price": 50,
      "caracteristicas": [
        "Acero inoxidable ",
        "2 litros de capacidad ",
        "Correa para fácil transporte ",
        "Mango desacoplable"
      ],
      "imageUrl": "https://prueba1dennis.s3.sa-east-1.amazonaws.com/dibujos/images (2) (25)~2.jpeg",
      "category": "termos",
      "__v": 0
    },
    {
      "_id": "63c33e484de1b1fa640efd91",
      "name": "Termo Acero 1.2L",
      "price": 45,
      "caracteristicas": [
        "1.2 Litros de capacidad ",
        "Acero Inoxidable ",
        "Mango super resistente ",
        "Taza mediana "
      ],
      "imageUrl": "https://prueba1dennis.s3.sa-east-1.amazonaws.com/dibujos/Screenshot_2023-01-14-18-41-40-815_com.android.chrome.jpg",
      "category": "termos",
      "__v": 0
    },
    {
      "_id": "63c33f7d4de1b1fa640efd9a",
      "name": "Tomatodo de Policarbonato ",
      "price": 25,
      "caracteristicas": [
        "1 litro de capacidad ",
        "Resiste agua caliente ",
        "Tapa con seguro ",
        "Libre de materiales tóxicos ",
        "Colores variados "
      ],
      "imageUrl": "https://prueba1dennis.s3.sa-east-1.amazonaws.com/dibujos/images (2) (26).jpeg",
      "category": "termos",
      "__v": 0
    },
    {
      "_id": "63c342a94de1b1fa640efda1",
      "name": "Mochila Océano Navy",
      "price": 160,
      "caracteristicas": [
        "Porta-laptop para 17\"",
        "Poliéster ",
        "Muchísimos compartimentos ",
        "Correa para pecho y cintura ",
        "Fabricación de primera calidad ",
        "Pocas unidades "
      ],
      "imageUrl": "https://prueba1dennis.s3.sa-east-1.amazonaws.com/dibujos/FB_IMG_1673740584199.jpg",
      "category": "equipaje",
      "__v": 0
    },
    {
      "_id": "63c343fe4de1b1fa640efdaa",
      "name": "Plancha Alisadora GAMA",
      "price": 135,
      "caracteristicas": [
        "Modelo Matcha",
        "Patines recubierto con aceite de matcha",
        "Temperatura ideal ",
        "Plancha cerámica "
      ],
      "imageUrl": "https://prueba1dennis.s3.sa-east-1.amazonaws.com/dibujos/Screenshot_2023-01-14-19-05-10-958_com.android.chrome.jpg",
      "category": "belleza",
      "__v": 0
    },
    {
      "_id": "63c61d9ff7cce24cc7fbe5fd",
      "name": "Olla a presión clock 7L",
      "price": 150,
      "caracteristicas": [
        "Cocina tus alimentos más rápido ",
        "Made in Brazil ",
        "7 litros ",
        "Doble sistema de seguridad "
      ],
      "imageUrl": "https://prueba1dennis.s3.sa-east-1.amazonaws.com/dibujos/images (2) (27).jpeg",
      "category": "cocina",
      "__v": 0
    },
    {
      "_id": "63cb0891f7cce24cc7fbe63c",
      "name": "Sartén roca volcánica 28cm",
      "price": 70,
      "caracteristicas": [
        "100% Saludable ",
        "Antiadherente ",
        "Ahorra Aceite ",
        "Para todas las cocinas, incluso inducción",
        "Tapa de vidrio templado "
      ],
      "imageUrl": "https://prueba1dennis.s3.sa-east-1.amazonaws.com/dibujos/D_NQ_NP_722405-MPE49222600095_022022-V.jpg",
      "category": "cocina",
      "__v": 0
    },
    {
      "_id": "63cbfa58f7cce24cc7fbe65f",
      "name": "Juego de cuchillos tramontina ",
      "price": 90,
      "caracteristicas": [
        "9 piezas",
        "Mangos antimicrobianos",
        "Acero inoxidable ",
        "Hechos en Brasil "
      ],
      "imageUrl": "https://prueba1dennis.s3.sa-east-1.amazonaws.com/dibujos/images (2) (29).jpeg",
      "category": "cocina",
      "__v": 0
    },
    {
      "_id": "63d1c03af7cce24cc7fbe6b4",
      "name": "Cafetera de vidrio ",
      "price": 25,
      "caracteristicas": [
        "Vidrio templado ",
        "700ml",
        "Filtro de acero inoxidable "
      ],
      "imageUrl": "https://prueba1dennis.s3.sa-east-1.amazonaws.com/dibujos/Screenshot_2023-01-25-18-47-41-080_com.android.chrome.jpg",
      "category": "cocina",
      "__v": 0
    },
    {
      "_id": "63f43055f7cce24cc7fbe8a8",
      "name": "Batidora Oster N°2",
      "price": 139,
      "caracteristicas": [
        "Motor 300 watt",
        "5 Velocidades",
        "Boton de turbo"
      ],
      "imageUrl": "https://prueba1dennis.s3.sa-east-1.amazonaws.com/dibujos/20230220_205951.jpg",
      "category": "electro",
      "__v": 0
    },
    {
      "_id": "63f43241f7cce24cc7fbe8bb",
      "name": "Batidora Oster N°3",
      "price": 215,
      "caracteristicas": [
        "Motor 400 watt",
        "5 Velocidades",
        "Boton de Turbo",
        "Boton para Aire Caliente HEATSOFT"
      ],
      "imageUrl": "https://prueba1dennis.s3.sa-east-1.amazonaws.com/dibujos/20230220_210236.jpg",
      "category": "electro",
      "__v": 0
    },
    {
      "_id": "63f43a46f7cce24cc7fbe8c8",
      "name": "Batidora Oster N°1",
      "price": 105,
      "caracteristicas": [
        "Motor 250 watt",
        "6 Velocidades",
        "Boton de Turbo"
      ],
      "imageUrl": "https://prueba1dennis.s3.sa-east-1.amazonaws.com/dibujos/20230220_222255.jpg",
      "category": "electro",
      "__v": 0
    },
    {
      "_id": "63f43e22f7cce24cc7fbe8d5",
      "name": "Licuadora Oster Clásica ",
      "price": 390,
      "caracteristicas": [
        "Motor de 700 watt",
        "Acople Metálico",
        "3 Velocidades"
      ],
      "imageUrl": "https://prueba1dennis.s3.sa-east-1.amazonaws.com/dibujos/20230220_224218.jpg",
      "category": "electro",
      "__v": 0
    },
    {
      "_id": "63f4400af7cce24cc7fbe8e0",
      "name": "Waflera circular FINEZZA",
      "price": 160,
      "caracteristicas": [
        "Capacidad 4 porciones",
        "Temperatura Regulable",
        "Antiadherente Ultra Granito"
      ],
      "imageUrl": "https://prueba1dennis.s3.sa-east-1.amazonaws.com/dibujos/20230117_131128.jpg",
      "category": "electro",
      "__v": 0
    },
    {
      "_id": "63f445e2f7cce24cc7fbe8e8",
      "name": "Perchero Sacos Grueso N°1",
      "price": 83,
      "caracteristicas": [
        "Uniones de Tornillos",
        "Estructura Estable Gruesa",
        "Fácil de Armar"
      ],
      "imageUrl": "https://prueba1dennis.s3.sa-east-1.amazonaws.com/dibujos/20230220_231457.jpg",
      "category": "roperos",
      "__v": 0
    },
    {
      "_id": "63f57086f7cce24cc7fbe905",
      "name": "PICA TODO CON ENVASE ",
      "price": 39,
      "caracteristicas": [
        "Múltiples Cuchillas para Cortes",
        "Incluye Pelador",
        "Fácil de Guardar y Lavar"
      ],
      "imageUrl": "https://prueba1dennis.s3.sa-east-1.amazonaws.com/dibujos/20230220_230408.jpg",
      "category": "cocina",
      "__v": 0
    },
    {
      "_id": "63f5737df7cce24cc7fbe90e",
      "name": "OLLA PRESION ACERO QUIRÚRGICO",
      "price": 170,
      "caracteristicas": [
        "Acero Quirúrgico 18/10",
        "Cocina en pocos minutos.",
        "Fácil de Lavar",
        "Seguro y Durable"
      ],
      "imageUrl": "https://prueba1dennis.s3.sa-east-1.amazonaws.com/dibujos/20230220_204527.jpg",
      "category": "cocina",
      "__v": 0
    },
    {
      "_id": "63f5748af7cce24cc7fbe918",
      "name": "SECADOR GAMMA SEMI-PROFESIONAL",
      "price": 110,
      "caracteristicas": [
        "Potente motor de 2200 Watt.",
        "Tres niveles de Temperatura.",
        "Opcion de Aire Frio.",
        "Dos Velocidades.",
        "IONES de protección del cabello."
      ],
      "imageUrl": "https://prueba1dennis.s3.sa-east-1.amazonaws.com/dibujos/20230220_194804.jpg",
      "category": "belleza",
      "__v": 0
    },
    {
      "_id": "63f57583f7cce24cc7fbe91d",
      "name": "VASO TERMICO QUIRÚRGICO",
      "price": 45,
      "caracteristicas": [
        "Acero QUIRÚRGICO 18/10",
        "Tapa Hermética.",
        "Caliente 12 HORAS APROX.",
        "Tiene filtro para Hiervas."
      ],
      "imageUrl": "https://prueba1dennis.s3.sa-east-1.amazonaws.com/dibujos/20230107_224142.jpg",
      "category": "termos",
      "__v": 0
    },
    {
      "_id": "63f576aaf7cce24cc7fbe921",
      "name": "TAPER ACERO INOXIDABLE",
      "price": 45,
      "caracteristicas": [
        "Dos Envases térmicos.",
        "Cierre Hermético.",
        "Cubierto multiusos.",
        "Caliente 6 HORAS APROX."
      ],
      "imageUrl": "https://prueba1dennis.s3.sa-east-1.amazonaws.com/dibujos/20230220_195317.jpg",
      "category": "termos",
      "__v": 0
    },
    {
      "_id": "63f57becf7cce24cc7fbe929",
      "name": "LICUADORA BOSSKO",
      "price": 150,
      "caracteristicas": [
        "Pica HIELO",
        "Acople METALICO de Oster",
        "Vaso de 1.5 litros."
      ],
      "imageUrl": "https://prueba1dennis.s3.sa-east-1.amazonaws.com/dibujos/20230221_211818.jpg",
      "category": "electro",
      "__v": 0
    },
    {
      "_id": "63f57ca2f7cce24cc7fbe92c",
      "name": "LICUADORA OSTER",
      "price": 340,
      "caracteristicas": [
        "Pica HIELO.",
        "Acople METALICO de Oster.",
        "Vaso de 1.25 litros PIREX.",
        "1 AÑO DE GARANTÍA.",
        "Ideal para NEGOCIO."
      ],
      "imageUrl": "https://prueba1dennis.s3.sa-east-1.amazonaws.com/dibujos/20230220_195104.jpg",
      "category": "electro",
      "__v": 0
    },
    {
      "_id": "63f8f2ad2a9d99bf8e96a343",
      "name": "Zapatera 9 niveles",
      "price": 65,
      "caracteristicas": [
        "Capacidad 27 pares",
        "Forro completo",
        "Tubo Negro RESISTENTEc",
        "Colores Disponibles"
      ],
      "imageUrl": "https://prueba1dennis.s3.sa-east-1.amazonaws.com/dibujos/20230106_233231.jpg",
      "category": "roperos",
      "__v": 0
    },
    {
      "_id": "63f920862a9d99bf8e96a389",
      "name": "COCINA ELECTRICA 2 HORNILLAS",
      "price": 85,
      "caracteristicas": [
        "Plancha de Hierro Fundido",
        "Potencia 2000 Watt",
        "Cinco niveles de Temperatura"
      ],
      "imageUrl": "https://prueba1dennis.s3.sa-east-1.amazonaws.com/dibujos/20230110_204908.png",
      "category": "electro",
      "__v": 0
    },
    {
      "_id": "63f9219d2a9d99bf8e96a3a3",
      "name": "COCINA ELECTRICA 1 HORNILLA",
      "price": 53,
      "caracteristicas": [
        "1 Plancha de Hierro Fundido.",
        "Potencia 1000 watt.",
        "Cinco niveles de Temperatura."
      ],
      "imageUrl": "https://prueba1dennis.s3.sa-east-1.amazonaws.com/dibujos/20230224_154056.jpg",
      "category": "electro",
      "__v": 0
    },
    {
      "_id": "63fa939d2a9d99bf8e96a3d9",
      "name": "MOLEDOR DE CARNE",
      "price": 290,
      "caracteristicas": [
        "Potencia: 1800 watt",
        "Molido: Grande, Mediano y Menudo",
        "Accesorios: Para Embutidos.",
        "Estructura: Acero Inoxidable."
      ],
      "imageUrl": "https://prueba1dennis.s3.sa-east-1.amazonaws.com/dibujos/20230225_175844.jpg",
      "category": "electro",
      "__v": 0
    },
    {
      "_id": "641f71de2a9d99bf8e96a55a",
      "name": "BALDE ACERO INOX",
      "price": 85,
      "caracteristicas": [
        "MATERIAL: ACERO INOXIDABLE",
        "CAPACIDAD: 15 LITROS",
        "DESCUENTO: X DOCENA"
      ],
      "imageUrl": "https://prueba1dennis.s3.sa-east-1.amazonaws.com/dibujos/20230325_171020.jpg",
      "category": "cocina",
      "__v": 0
    },
    {
      "_id": "641f72dd2a9d99bf8e96a56c",
      "name": "TAZA ACERO INOX",
      "price": 10,
      "caracteristicas": [
        "MATERIAL: ACERO INOXIDABLE",
        "TAMAÑO: 11 ONZAS",
        "DESCUENTO: X DOCENA"
      ],
      "imageUrl": "https://prueba1dennis.s3.sa-east-1.amazonaws.com/dibujos/20230325_170951.jpg",
      "category": "cocina",
      "__v": 0
    },
    {
      "_id": "641f74852a9d99bf8e96a583",
      "name": "POCILLO ACERO INOXIDABLE ",
      "price": 11,
      "caracteristicas": [
        "MATERIAL: ACERO INOXIDABLE GRUESO",
        "TAMAÑO: 14 CM DIÁMETRO",
        "DESCUENTO: X DOCENA"
      ],
      "imageUrl": "https://prueba1dennis.s3.sa-east-1.amazonaws.com/dibujos/20230325_171954.jpg",
      "category": "cocina",
      "__v": 0
    },
    {
      "_id": "644dedf400d96299854f04bb",
      "name": "tetera acero inoxidable 3L",
      "price": 22,
      "caracteristicas": [
        "Acero inoxidable ",
        "Asa movible ",
        "También en presentación de 5L"
      ],
      "imageUrl": "https://prueba1dennis.s3.sa-east-1.amazonaws.com/dibujos/teteradelgada.jpeg",
      "category": "cocina",
      "__v": 0
    }
  ]

  let nuevo = [];

for (let index = 0; index < students.length; index++) {
    
}

console.log(nuevo);
