import "dotenv/config.js"
import "../../config/database.js"
import Property from "../Property.js"


const properties = [
    //6732c868ec77ef6364351803
    {
        name: "Samsung Galaxy S23",
        type: "Electrónica",
        price: 799,
        user: "6732c868ec77ef6364351803"
      },
      {
        name: "Sony Bravia 55' 4K",
        type: "Electrónica",
        price: 1200,
        user: "6732c868ec77ef6364351803"
      },
      {
        name: "Nike Air Max 270",
        type: "Ropa y calzado",
        price: 150,
        user: "6732c868ec77ef6364351803"
      },
      {
        name: "Muebles Dico Sillón",
        type: "Casa",
        price: 300,
        user: "6732c868ec77ef6364351803"
      },
      {
        name: "Cafetera Nespresso",
        type: "Electrodomésticos",
        price: 180,
        user: "6732c868ec77ef6364351803"
      },
      //6732c868ec77ef6364351804
      {
        name: "Apple MacBook Pro 14",
        type: "Electrónica",
        price: 2200,
        user: "6732c868ec77ef6364351804"
      },
      {
        name: "Samsung QLED 65'",
        type: "Electrónica",
        price: 1500,
        user: "6732c868ec77ef6364351804"
      },
      {
        name: "Adidas Ultraboost 22",
        type: "Ropa y calzado",
        price: 180,
        user: "6732c868ec77ef6364351804"
      },
      {
        name: "Sofá Tres Plazas",
        type: "Casa",
        price: 400,
        user: "6732c868ec77ef6364351804"
      },
      {
        name: "Cafetera Delonghi Magnifica",
        type: "Electrodomésticos",
        price: 250,
        user: "6732c868ec77ef6364351804"
      },
      //6732c868ec77ef6364351805
      {
        name: "Bose QuietComfort 45",
        type: "Electrónica",
        price: 329,
        user: "6732c868ec77ef6364351805"
      },
      {
        name: "Canon EOS 90D",
        type: "Electrónica",
        price: 1200,
        user: "6732c868ec77ef6364351805"
      },
      {
        name: "Nike Air Force 1",
        type: "Ropa y calzado",
        price: 120,
        user: "6732c868ec77ef6364351805"
      },
      {
        name: "Mesa de comedor Extensible",
        type: "Casa",
        price: 350,
        user: "6732c868ec77ef6364351805"
      },
      {
        name: "Vaporera Philips",
        type: "Electrodomésticos",
        price: 60,
        user: "6732c868ec77ef6364351805"
      },
      //6732c868ec77ef6364351806
      {
        name: "LG OLED C1 55",
        type: "Electrónica",
        price: 1800,
        user: "6732c868ec77ef6364351806"
      },
      {
        name: "iPhone 14 Pro",
        type: "Electrónica",
        price: 999,
        user: "6732c868ec77ef6364351806"
      },
      {
        name: "Reebok Nano X1",
        type: "Ropa y calzado",
        price: 130,
        user: "6732c868ec77ef6364351806"
      },
      {
        name: "Lámpara de mesa moderna",
        type: "Casa",
        price: 75,
        user: "6732c868ec77ef6364351806"
      },
      {
        name: "Tostadora Breville",
        type: "Electrodomésticos",
        price: 150,
        user: "6732c868ec77ef6364351806"
      },
      //6732c868ec77ef6364351807
      {
        name: "Xbox Series X",
        type: "Electrónica",
        price: 499,
        user: "6732c868ec77ef6364351807"
      },
      {
        name: "Sony PlayStation 5",
        type: "Electrónica",
        price: 499,
        user: "6732c868ec77ef6364351807"
      },
      {
        name: "Puma RS-X",
        type: "Ropa y calzado",
        price: 110,
        user: "6732c868ec77ef6364351807"
      },
      {
        name: "Librero de madera",
        type: "Casa",
        price: 200,
        user: "6732c868ec77ef6364351807"
      },
      {
        name: "Batidora KitchenAid",
        type: "Electrodomésticos",
        price: 350,
        user: "6732c868ec77ef6364351807"
      },
      //6732c868ec77ef6364351808
      {
        name: "MacBook Air M2",
        type: "Electrónica",
        price: 1200,
        user: "6732c868ec77ef6364351808"
      },
      {
        name: "Samsung Galaxy Tab S8",
        type: "Electrónica",
        price: 650,
        user: "6732c868ec77ef6364351808"
      },
      {
        name: "New Balance 990v5",
        type: "Ropa y calzado",
        price: 175,
        user: "6732c868ec77ef6364351808"
      },
      {
        name: "Silla de oficina ergonómica",
        type: "Casa",
        price: 250,
        user: "6732c868ec77ef6364351808"
      },
      {
        name: "Freidora sin aceite Philips",
        type: "Electrodomésticos",
        price: 120,
        user: "6732c868ec77ef6364351808"
      },
      //6732c868ec77ef6364351809
      {
        name: "Sony WH-1000XM5",
        type: "Electrónica",
        price: 350,
        user: "6732c868ec77ef6364351809"
      },
      {
        name: "LG NanoCell 75 Series 55\"",
        type: "Electrónica",
        price: 750,
        user: "6732c868ec77ef6364351809"
      },
      {
        name: "Asics Gel Kayano 28",
        type: "Ropa y calzado",
        price: 160,
        user: "6732c868ec77ef6364351809"
      },
      {
        name: "Estantería de esquina",
        type: "Casa",
        price: 100,
        user: "6732c868ec77ef6364351809"
      },
      {
        name: "Procesador KitchenAid Artisan",
        type: "Electrodomésticos",
        price: 250,
        user: "6732c868ec77ef6364351809"
      },
      //6732c868ec77ef636435180a
      {
        name: "Dell XPS 13",
        type: "Electrónica",
        price: 1500,
        user: "6732c868ec77ef636435180a"
      },
      {
        name: "Apple Watch Series 8",
        type: "Electrónica",
        price: 400,
        user: "6732c868ec77ef636435180a"
      },
      {
        name: "Nike Pegasus 39",
        type: "Ropa y calzado",
        price: 120,
        user: "6732c868ec77ef636435180a"
      },
      {
        name: "Sofá Seccional",
        type: "Casa",
        price: 600,
        user: "6732c868ec77ef636435180a"
      },
      {
        name: "Robot aspirador Roomba",
        type: "Electrodomésticos",
        price: 350,
        user: "6732c868ec77ef636435180a"
      },
      //6732c868ec77ef636435180b
      {
        name: "Google Pixel 8 Pro",
        type: "Electrónica",
        price: 900,
        user: "6732c868ec77ef636435180b"
      },
      {
        name: "Samsung Galaxy Watch 6",
        type: "Electrónica",
        price: 350,
        user: "6732c868ec77ef636435180b"
      },
      {
        name: "Adidas Supernova 2.0",
        type: "Ropa y calzado",
        price: 100,
        user: "6732c868ec77ef636435180b"
      },
      {
        name: "Mesa de comedor de madera",
        type: "Casa",
        price: 450,
        user: "6732c868ec77ef636435180b"
      },
      {
        name: "Licuadora Vitamix",
        type: "Electrodomésticos",
        price: 500,
        user: "6732c868ec77ef636435180b"
      },
      //6732c868ec77ef636435180c
      {
        name: "HP Spectre x360",
        type: "Electrónica",
        price: 1300,
        user: "6732c868ec77ef636435180c"
      },
      {
        name: "Sony Xperia 1 IV",
        type: "Electrónica",
        price: 1200,
        user: "6732c868ec77ef636435180c"
      },
      {
        name: "Vans Old Skool",
        type: "Ropa y calzado",
        price: 80,
        user: "6732c868ec77ef636435180c"
      },
      {
        name: "Estufa de gas",
        type: "Casa",
        price: 250,
        user: "6732c868ec77ef636435180c"
      },
      {
        name: "Cafetera Nespresso",
        type: "Electrodomésticos",
        price: 150,
        user: "6732c868ec77ef636435180c"
      }
]



Property.insertMany(properties)