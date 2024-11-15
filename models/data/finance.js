import "dotenv/config.js"
import "../../config/database.js"
import Finace from "../Finance.js"

const finances = [
    //6732c868ec77ef6364351803
    {
    date: new Date('2024-01-01'),
    description: "Ingreso de salario",
    value: 5000,
    active: true,
    user: "6732c868ec77ef6364351803"
  },
  {
    date: new Date('2024-01-05'),
    description: "Compra de supermercado",
    value: -150,
    active: false,
    user: "6732c868ec77ef6364351803"
  },
  {
    date: new Date('2024-01-10'),
    description: "Pago de renta",
    value: -800,
    active: false,
    user: "6732c868ec77ef6364351803"
  },
  {
    date: new Date('2024-01-15'),
    description: "Ingreso por proyecto freelance",
    value: 1200,
    active: true,
    user: "6732c868ec77ef6364351803"
  },
  {
    date: new Date('2024-01-20'),
    description: "Compra de ropa",
    value: -200,
    active: false,
    user: "6732c868ec77ef6364351803"
  },
  {
    date: new Date('2024-01-25'),
    description: "Pago de servicios",
    value: -100,
    active: false,
    user: "6732c868ec77ef6364351803"
  },
  {
    date: new Date('2024-01-28'),
    description: "Ingreso de bono",
    value: 600,
    active: true,
    user: "6732c868ec77ef6364351803"
  },
  {
    date: new Date('2024-02-01'),
    description: "Compra de regalos",
    value: -300,
    active: false,
    user: "6732c868ec77ef6364351803"
  },
  {
    date: new Date('2024-02-05'),
    description: "Ingreso de venta de artículos",
    value: 250,
    active: true,
    user: "6732c868ec77ef6364351803"
  },
  {
    date: new Date('2024-02-10'),
    description: "Cena en restaurante",
    value: -100,
    active: false,
    user: "6732c868ec77ef6364351803"
  },
  {
    date: new Date('2024-02-15'),
    description: "Ingreso de devolución de impuestos",
    value: 400,
    active: true,
    user: "6732c868ec77ef6364351803"
  },
  {
    date: new Date('2024-02-20'),
    description: "Pago de gimnasio",
    value: -50,
    active: false,
    user: "6732c868ec77ef6364351803"
  },
  {
    date: new Date('2024-02-25'),
    description: "Ingreso de intereses bancarios",
    value: 100,
    active: true,
    user: "6732c868ec77ef6364351803"
  },
  {
    date: new Date('2024-03-01'),
    description: "Compra de libros",
    value: -70,
    active: false,
    user: "6732c868ec77ef6364351803"
  },
  {
    date: new Date('2024-03-05'),
    description: "Ingreso por alquiler",
    value: 800,
    active: true,
    user: "6732c868ec77ef6364351803"
  },
  {
    date: new Date('2024-03-10'),
    description: "Pago de gasolina",
    value: -60,
    active: false,
    user: "6732c868ec77ef6364351803"
  },
  {
    date: new Date('2024-03-15'),
    description: "Ingreso de reembolso",
    value: 150,
    active: true,
    user: "6732c868ec77ef6364351803"
  },
  {
    date: new Date('2024-03-20'),
    description: "Pago de seguro",
    value: -100,
    active: false,
    user: "6732c868ec77ef6364351803"
  },
  {
    date: new Date('2024-03-25'),
    description: "Ingreso de comisión",
    value: 300,
    active: true,
    user: "6732c868ec77ef6364351803"
  },
  {
    date: new Date('2024-03-30'),
    description: "Compra de equipo deportivo",
    value: -250,
    active: false,
    user: "6732c868ec77ef6364351803"
  },
  //6732c868ec77ef6364351804
  {
    date: new Date('2024-04-01'),
    description: "Ingreso de salario",
    value: 4800,
    active: true,
    user: "6732c868ec77ef6364351804"
  },
  {
    date: new Date('2024-04-05'),
    description: "Compra de supermercado",
    value: -160,
    active: false,
    user: "6732c868ec77ef6364351804"
  },
  {
    date: new Date('2024-04-10'),
    description: "Pago de renta",
    value: -850,
    active: false,
    user: "6732c868ec77ef6364351804"
  },
  {
    date: new Date('2024-04-15'),
    description: "Ingreso por proyecto freelance",
    value: 1300,
    active: true,
    user: "6732c868ec77ef6364351804"
  },
  {
    date: new Date('2024-04-20'),
    description: "Compra de ropa",
    value: -220,
    active: false,
    user: "6732c868ec77ef6364351804"
  },
  {
    date: new Date('2024-04-25'),
    description: "Pago de servicios",
    value: -120,
    active: false,
    user: "6732c868ec77ef6364351804"
  },
  {
    date: new Date('2024-04-28'),
    description: "Ingreso de bono",
    value: 650,
    active: true,
    user: "6732c868ec77ef6364351804"
  },
  {
    date: new Date('2024-05-01'),
    description: "Compra de regalos",
    value: -280,
    active: false,
    user: "6732c868ec77ef6364351804"
  },
  {
    date: new Date('2024-05-05'),
    description: "Ingreso de venta de artículos",
    value: 270,
    active: true,
    user: "6732c868ec77ef6364351804"
  },
  {
    date: new Date('2024-05-10'),
    description: "Cena en restaurante",
    value: -110,
    active: false,
    user: "6732c868ec77ef6364351804"
  },
  {
    date: new Date('2024-05-15'),
    description: "Ingreso de devolución de impuestos",
    value: 420,
    active: true,
    user: "6732c868ec77ef6364351804"
  },
  {
    date: new Date('2024-05-20'),
    description: "Pago de gimnasio",
    value: -55,
    active: false,
    user: "6732c868ec77ef6364351804"
  },
  {
    date: new Date('2024-05-25'),
    description: "Ingreso de intereses bancarios",
    value: 110,
    active: true,
    user: "6732c868ec77ef6364351804"
  },
  {
    date: new Date('2024-06-01'),
    description: "Compra de libros",
    value: -75,
    active: false,
    user: "6732c868ec77ef6364351804"
  },
  {
    date: new Date('2024-06-05'),
    description: "Ingreso por alquiler",
    value: 820,
    active: true,
    user: "6732c868ec77ef6364351804"
  },
  {
    date: new Date('2024-06-10'),
    description: "Pago de gasolina",
    value: -65,
    active: false,
    user: "6732c868ec77ef6364351804"
  },
  {
    date: new Date('2024-06-15'),
    description: "Ingreso de reembolso",
    value: 160,
    active: true,
    user: "6732c868ec77ef6364351804"
  },
  {
    date: new Date('2024-06-20'),
    description: "Pago de seguro",
    value: -110,
    active: false,
    user: "6732c868ec77ef6364351804"
  },
  {
    date: new Date('2024-06-25'),
    description: "Ingreso de comisión",
    value: 310,
    active: true,
    user: "6732c868ec77ef6364351804"
  },
  {
    date: new Date('2024-06-30'),
    description: "Compra de equipo deportivo",
    value: -260,
    active: false,
    user: "6732c868ec77ef6364351804"
  },
  //6732c868ec77ef6364351805
  {
    date: new Date('2024-07-01'),
    description: "Ingreso de salario",
    value: 4700,
    active: true,
    user: "6732c868ec77ef6364351805"
  },
  {
    date: new Date('2024-07-05'),
    description: "Compra de supermercado",
    value: -170,
    active: false,
    user: "6732c868ec77ef6364351805"
  },
  {
    date: new Date('2024-07-10'),
    description: "Pago de renta",
    value: -900,
    active: false,
    user: "6732c868ec77ef6364351805"
  },
  {
    date: new Date('2024-07-15'),
    description: "Ingreso por proyecto freelance",
    value: 1250,
    active: true,
    user: "6732c868ec77ef6364351805"
  },
  {
    date: new Date('2024-07-20'),
    description: "Compra de ropa",
    value: -240,
    active: false,
    user: "6732c868ec77ef6364351805"
  },
  {
    date: new Date('2024-07-25'),
    description: "Pago de servicios",
    value: -130,
    active: false,
    user: "6732c868ec77ef6364351805"
  },
  {
    date: new Date('2024-07-28'),
    description: "Ingreso de bono",
    value: 620,
    active: true,
    user: "6732c868ec77ef6364351805"
  },
  {
    date: new Date('2024-08-01'),
    description: "Compra de regalos",
    value: -310,
    active: false,
    user: "6732c868ec77ef6364351805"
  },
  {
    date: new Date('2024-08-05'),
    description: "Ingreso de venta de artículos",
    value: 260,
    active: true,
    user: "6732c868ec77ef6364351805"
  },
  {
    date: new Date('2024-08-10'),
    description: "Cena en restaurante",
    value: -90,
    active: false,
    user: "6732c868ec77ef6364351805"
  },
  {
    date: new Date('2024-08-15'),
    description: "Ingreso de devolución de impuestos",
    value: 440,
    active: true,
    user: "6732c868ec77ef6364351805"
  },
  {
    date: new Date('2024-08-20'),
    description: "Pago de gimnasio",
    value: -60,
    active: false,
    user: "6732c868ec77ef6364351805"
  },
  {
    date: new Date('2024-08-25'),
    description: "Ingreso de intereses bancarios",
    value: 115,
    active: true,
    user: "6732c868ec77ef6364351805"
  },
  {
    date: new Date('2024-09-01'),
    description: "Compra de libros",
    value: -80,
    active: false,
    user: "6732c868ec77ef6364351805"
  },
  {
    date: new Date('2024-09-05'),
    description: "Ingreso por alquiler",
    value: 790,
    active: true,
    user: "6732c868ec77ef6364351805"
  },
  {
    date: new Date('2024-09-10'),
    description: "Pago de gasolina",
    value: -70,
    active: false,
    user: "6732c868ec77ef6364351805"
  },
  {
    date: new Date('2024-09-15'),
    description: "Ingreso de reembolso",
    value: 170,
    active: true,
    user: "6732c868ec77ef6364351805"
  },
  {
    date: new Date('2024-09-20'),
    description: "Pago de seguro",
    value: -115,
    active: false,
    user: "6732c868ec77ef6364351805"
  },
  {
    date: new Date('2024-09-25'),
    description: "Ingreso de comisión",
    value: 320,
    active: true,
    user: "6732c868ec77ef6364351805"
  },
  {
    date: new Date('2024-09-30'),
    description: "Compra de equipo deportivo",
    value: -230,
    active: false,
    user: "6732c868ec77ef6364351805"
  },
  //6732c868ec77ef6364351806
  {
    date: new Date('2024-10-01'),
    description: "Pago por consultoría",
    value: 5000,
    active: true,
    user: "6732c868ec77ef6364351806"
  },
  {
    date: new Date('2024-10-03'),
    description: "Compra de tecnología",
    value: -400,
    active: false,
    user: "6732c868ec77ef6364351806"
  },
  {
    date: new Date('2024-10-07'),
    description: "Pago de hipoteca",
    value: -1200,
    active: false,
    user: "6732c868ec77ef6364351806"
  },
  {
    date: new Date('2024-10-11'),
    description: "Ingreso por curso online",
    value: 1500,
    active: true,
    user: "6732c868ec77ef6364351806"
  },
  {
    date: new Date('2024-10-15'),
    description: "Compra de mobiliario",
    value: -350,
    active: false,
    user: "6732c868ec77ef6364351806"
  },
  {
    date: new Date('2024-10-18'),
    description: "Pago de facturas",
    value: -150,
    active: false,
    user: "6732c868ec77ef6364351806"
  },
  {
    date: new Date('2024-10-22'),
    description: "Ingreso de regalías",
    value: 750,
    active: true,
    user: "6732c868ec77ef6364351806"
  },
  {
    date: new Date('2024-10-25'),
    description: "Compra de herramientas",
    value: -290,
    active: false,
    user: "6732c868ec77ef6364351806"
  },
  {
    date: new Date('2024-10-28'),
    description: "Ingreso por venta de software",
    value: 2000,
    active: true,
    user: "6732c868ec77ef6364351806"
  },
  {
    date: new Date('2024-11-01'),
    description: "Pago de transporte",
    value: -80,
    active: false,
    user: "6732c868ec77ef6364351806"
  },
  {
    date: new Date('2024-11-05'),
    description: "Ingreso por diseño gráfico",
    value: 1250,
    active: true,
    user: "6732c868ec77ef6364351806"
  },
  {
    date: new Date('2024-11-08'),
    description: "Pago de servicios públicos",
    value: -110,
    active: false,
    user: "6732c868ec77ef6364351806"
  },
  {
    date: new Date('2024-11-12'),
    description: "Ingreso por asesoría financiera",
    value: 1800,
    active: true,
    user: "6732c868ec77ef6364351806"
  },
  {
    date: new Date('2024-11-15'),
    description: "Compra de materiales de oficina",
    value: -75,
    active: false,
    user: "6732c868ec77ef6364351806"
  },
  {
    date: new Date('2024-11-18'),
    description: "Pago de seguro médico",
    value: -200,
    active: false,
    user: "6732c868ec77ef6364351806"
  },
  {
    date: new Date('2024-11-21'),
    description: "Ingreso por desarrollo web",
    value: 2200,
    active: true,
    user: "6732c868ec77ef6364351806"
  },
  {
    date: new Date('2024-11-24'),
    description: "Compra de libros profesionales",
    value: -130,
    active: false,
    user: "6732c868ec77ef6364351806"
  },
  {
    date: new Date('2024-11-27'),
    description: "Ingreso por publicidad",
    value: 900,
    active: true,
    user: "6732c868ec77ef6364351806"
  },
  {
    date: new Date('2024-11-30'),
    description: "Pago de mantenimiento de vehículo",
    value: -210,
    active: false,
    user: "6732c868ec77ef6364351806"
  },
  {
    date: new Date('2024-12-01'),
    description: "Ingreso por mentoría",
    value: 1600,
    active: true,
    user: "6732c868ec77ef6364351806"
  },
  //6732c868ec77ef6364351807
  {
    date: new Date('2024-10-02'),
    description: "Pago por consultoría técnica",
    value: 4500,
    active: true,
    user: "6732c868ec77ef6364351807"
  },
  {
    date: new Date('2024-10-04'),
    description: "Compra de dispositivos electrónicos",
    value: -370,
    active: false,
    user: "6732c868ec77ef6364351807"
  },
  {
    date: new Date('2024-10-08'),
    description: "Pago de préstamo personal",
    value: -1300,
    active: false,
    user: "6732c868ec77ef6364351807"
  },
  {
    date: new Date('2024-10-12'),
    description: "Ingreso por proyecto freelance",
    value: 1400,
    active: true,
    user: "6732c868ec77ef6364351807"
  },
  {
    date: new Date('2024-10-16'),
    description: "Compra de muebles de oficina",
    value: -320,
    active: false,
    user: "6732c868ec77ef6364351807"
  },
  {
    date: new Date('2024-10-19'),
    description: "Pago de servicios básicos",
    value: -160,
    active: false,
    user: "6732c868ec77ef6364351807"
  },
  {
    date: new Date('2024-10-23'),
    description: "Ingreso por venta de producto digital",
    value: 700,
    active: true,
    user: "6732c868ec77ef6364351807"
  },
  {
    date: new Date('2024-10-26'),
    description: "Compra de accesorios para computadora",
    value: -280,
    active: false,
    user: "6732c868ec77ef6364351807"
  },
  {
    date: new Date('2024-10-29'),
    description: "Ingreso por suscripciones",
    value: 2300,
    active: true,
    user: "6732c868ec77ef6364351807"
  },
  {
    date: new Date('2024-11-02'),
    description: "Pago de transporte público",
    value: -70,
    active: false,
    user: "6732c868ec77ef6364351807"
  },
  {
    date: new Date('2024-11-06'),
    description: "Ingreso por diseño UX/UI",
    value: 1300,
    active: true,
    user: "6732c868ec77ef6364351807"
  },
  {
    date: new Date('2024-11-09'),
    description: "Pago de electricidad",
    value: -100,
    active: false,
    user: "6732c868ec77ef6364351807"
  },
  {
    date: new Date('2024-11-13'),
    description: "Ingreso por asesoría técnica",
    value: 1700,
    active: true,
    user: "6732c868ec77ef6364351807"
  },
  {
    date: new Date('2024-11-16'),
    description: "Compra de suministros de oficina",
    value: -85,
    active: false,
    user: "6732c868ec77ef6364351807"
  },
  {
    date: new Date('2024-11-19'),
    description: "Pago de seguro de vida",
    value: -210,
    active: false,
    user: "6732c868ec77ef6364351807"
  },
  {
    date: new Date('2024-11-22'),
    description: "Ingreso por desarrollo de app",
    value: 2500,
    active: true,
    user: "6732c868ec77ef6364351807"
  },
  {
    date: new Date('2024-11-25'),
    description: "Compra de libros técnicos",
    value: -120,
    active: false,
    user: "6732c868ec77ef6364351807"
  },
  {
    date: new Date('2024-11-28'),
    description: "Ingreso por marketing digital",
    value: 950,
    active: true,
    user: "6732c868ec77ef6364351807"
  },
  {
    date: new Date('2024-11-30'),
    description: "Pago de reparación de auto",
    value: -190,
    active: false,
    user: "6732c868ec77ef6364351807"
  },
  {
    date: new Date('2024-12-02'),
    description: "Ingreso por consultoría",
    value: 1800,
    active: true,
    user: "6732c868ec77ef6364351807"
  },
  //6732c868ec77ef6364351808
  {
    date: new Date('2024-10-02'),
    description: "Pago por traducción de documentos",
    value: 3000,
    active: true,
    user: "6732c868ec77ef6364351808"
  },
  {
    date: new Date('2024-10-04'),
    description: "Compra de libros de referencia",
    value: -250,
    active: false,
    user: "6732c868ec77ef6364351808"
  },
  {
    date: new Date('2024-10-08'),
    description: "Pago de seguro de salud",
    value: -800,
    active: false,
    user: "6732c868ec77ef6364351808"
  },
  {
    date: new Date('2024-10-12'),
    description: "Ingreso por interpretación simultánea",
    value: 1800,
    active: true,
    user: "6732c868ec77ef6364351808"
  },
  {
    date: new Date('2024-10-16'),
    description: "Compra de software de traducción",
    value: -400,
    active: false,
    user: "6732c868ec77ef6364351808"
  },
  {
    date: new Date('2024-10-19'),
    description: "Pago de servicios públicos",
    value: -150,
    active: false,
    user: "6732c868ec77ef6364351808"
  },
  {
    date: new Date('2024-10-23'),
    description: "Ingreso por proyecto de localización",
    value: 2500,
    active: true,
    user: "6732c868ec77ef6364351808"
  },
  {
    date: new Date('2024-10-26'),
    description: "Compra de hardware de oficina",
    value: -380,
    active: false,
    user: "6732c868ec77ef6364351808"
  },
  {
    date: new Date('2024-10-29'),
    description: "Ingreso por clases de idiomas",
    value: 1200,
    active: true,
    user: "6732c868ec77ef6364351808"
  },
  {
    date: new Date('2024-11-02'),
    description: "Pago de transporte público",
    value: -100,
    active: false,
    user: "6732c868ec77ef6364351808"
  },
  {
    date: new Date('2024-11-06'),
    description: "Ingreso por redacción técnica",
    value: 1700,
    active: true,
    user: "6732c868ec77ef6364351808"
  },
  {
    date: new Date('2024-11-09'),
    description: "Pago de electricidad",
    value: -120,
    active: false,
    user: "6732c868ec77ef6364351808"
  },
  {
    date: new Date('2024-11-13'),
    description: "Ingreso por corrección de estilo",
    value: 2100,
    active: true,
    user: "6732c868ec77ef6364351808"
  },
  {
    date: new Date('2024-11-16'),
    description: "Compra de papelería",
    value: -90,
    active: false,
    user: "6732c868ec77ef6364351808"
  },
  {
    date: new Date('2024-11-19'),
    description: "Pago de seguro de vida",
    value: -300,
    active: false,
    user: "6732c868ec77ef6364351808"
  },
  {
    date: new Date('2024-11-22'),
    description: "Ingreso por revisión de documentos",
    value: 2000,
    active: true,
    user: "6732c868ec77ef6364351808"
  },
  {
    date: new Date('2024-11-25'),
    description: "Compra de equipo de oficina",
    value: -150,
    active: false,
    user: "6732c868ec77ef6364351808"
  },
  {
    date: new Date('2024-11-28'),
    description: "Ingreso por servicios de consultoría",
    value: 2700,
    active: true,
    user: "6732c868ec77ef6364351808"
  },
  {
    date: new Date('2024-11-30'),
    description: "Pago de reparación de vehículo",
    value: -250,
    active: false,
    user: "6732c868ec77ef6364351808"
  },
  {
    date: new Date('2024-12-02'),
    description: "Ingreso por edición de video",
    value: 2300,
    active: true,
    user: "6732c868ec77ef6364351808"
  },
  //6732c868ec77ef6364351809
  {
    date: new Date('2024-10-02'),
    description: "Pago por clases particulares de matemáticas",
    value: 3200,
    active: true,
    user: "6732c868ec77ef6364351809"
  },
  {
    date: new Date('2024-10-04'),
    description: "Compra de materiales educativos",
    value: -200,
    active: false,
    user: "6732c868ec77ef6364351809"
  },
  {
    date: new Date('2024-10-08'),
    description: "Pago de suscripción a software educativo",
    value: -150,
    active: false,
    user: "6732c868ec77ef6364351809"
  },
  {
    date: new Date('2024-10-12'),
    description: "Ingreso por taller de ciencia",
    value: 1900,
    active: true,
    user: "6732c868ec77ef6364351809"
  },
  {
    date: new Date('2024-10-16'),
    description: "Compra de libros de texto",
    value: -320,
    active: false,
    user: "6732c868ec77ef6364351809"
  },
  {
    date: new Date('2024-10-19'),
    description: "Pago de servicios públicos",
    value: -130,
    active: false,
    user: "6732c868ec77ef6364351809"
  },
  {
    date: new Date('2024-10-23'),
    description: "Ingreso por clases de tutoría",
    value: 2200,
    active: true,
    user: "6732c868ec77ef6364351809"
  },
  {
    date: new Date('2024-10-26'),
    description: "Compra de equipo de laboratorio",
    value: -400,
    active: false,
    user: "6732c868ec77ef6364351809"
  },
  {
    date: new Date('2024-10-29'),
    description: "Ingreso por consultoría educativa",
    value: 1500,
    active: true,
    user: "6732c868ec77ef6364351809"
  },
  {
    date: new Date('2024-11-02'),
    description: "Pago de transporte escolar",
    value: -90,
    active: false,
    user: "6732c868ec77ef6364351809"
  },
  {
    date: new Date('2024-11-06'),
    description: "Ingreso por seminario de biología",
    value: 1800,
    active: true,
    user: "6732c868ec77ef6364351809"
  },
  {
    date: new Date('2024-11-09'),
    description: "Pago de electricidad",
    value: -140,
    active: false,
    user: "6732c868ec77ef6364351809"
  },
  {
    date: new Date('2024-11-13'),
    description: "Ingreso por proyecto de investigación",
    value: 2400,
    active: true,
    user: "6732c868ec77ef6364351809"
  },
  {
    date: new Date('2024-11-16'),
    description: "Compra de software de análisis de datos",
    value: -350,
    active: false,
    user: "6732c868ec77ef6364351809"
  },
  {
    date: new Date('2024-11-19'),
    description: "Pago de seguro médico",
    value: -270,
    active: false,
    user: "6732c868ec77ef6364351809"
  },
  {
    date: new Date('2024-11-22'),
    description: "Ingreso por conferencia educativa",
    value: 2000,
    active: true,
    user: "6732c868ec77ef6364351809"
  },
  {
    date: new Date('2024-11-25'),
    description: "Compra de equipos de computación",
    value: -430,
    active: false,
    user: "6732c868ec77ef6364351809"
  },
  {
    date: new Date('2024-11-28'),
    description: "Ingreso por publicación de artículo científico",
    value: 2700,
    active: true,
    user: "6732c868ec77ef6364351809"
  },
  {
    date: new Date('2024-11-30'),
    description: "Pago de reparación de vehículo",
    value: -260,
    active: false,
    user: "6732c868ec77ef6364351809"
  },
  {
    date: new Date('2024-12-02'),
    description: "Ingreso por asesoría académica",
    value: 2300,
    active: true,
    user: "6732c868ec77ef6364351809"
  },
  //6732c868ec77ef636435180a
  {
    date: new Date('2024-10-02'),
    description: "Pago por clases de piano",
    value: 3500,
    active: true,
    user: "6732c868ec77ef636435180a"
  },
  {
    date: new Date('2024-10-04'),
    description: "Compra de partituras",
    value: -200,
    active: false,
    user: "6732c868ec77ef636435180a"
  },
  {
    date: new Date('2024-10-08'),
    description: "Pago de suscripción a plataforma de música",
    value: -120,
    active: false,
    user: "6732c868ec77ef636435180a"
  },
  {
    date: new Date('2024-10-12'),
    description: "Ingreso por concierto privado",
    value: 2200,
    active: true,
    user: "6732c868ec77ef636435180a"
  },
  {
    date: new Date('2024-10-16'),
    description: "Compra de equipo de audio",
    value: -400,
    active: false,
    user: "6732c868ec77ef636435180a"
  },
  {
    date: new Date('2024-10-19'),
    description: "Pago de servicios públicos",
    value: -150,
    active: false,
    user: "6732c868ec77ef636435180a"
  },
  {
    date: new Date('2024-10-23'),
    description: "Ingreso por clases de música",
    value: 2400,
    active: true,
    user: "6732c868ec77ef636435180a"
  },
  {
    date: new Date('2024-10-26'),
    description: "Compra de micrófono profesional",
    value: -380,
    active: false,
    user: "6732c868ec77ef636435180a"
  },
  {
    date: new Date('2024-10-29'),
    description: "Ingreso por producción musical",
    value: 2600,
    active: true,
    user: "6732c868ec77ef636435180a"
  },
  {
    date: new Date('2024-11-02'),
    description: "Pago de transporte público",
    value: -100,
    active: false,
    user: "6732c868ec77ef636435180a"
  },
  {
    date: new Date('2024-11-06'),
    description: "Ingreso por composición musical",
    value: 2000,
    active: true,
    user: "6732c868ec77ef636435180a"
  },
  {
    date: new Date('2024-11-09'),
    description: "Pago de electricidad",
    value: -130,
    active: false,
    user: "6732c868ec77ef636435180a"
  },
  {
    date: new Date('2024-11-13'),
    description: "Ingreso por arreglo musical",
    value: 2500,
    active: true,
    user: "6732c868ec77ef636435180a"
  },
  {
    date: new Date('2024-11-16'),
    description: "Compra de cables y accesorios",
    value: -90,
    active: false,
    user: "6732c868ec77ef636435180a"
  },
  {
    date: new Date('2024-11-19'),
    description: "Pago de seguro de vida",
    value: -300,
    active: false,
    user: "6732c868ec77ef636435180a"
  },
  {
    date: new Date('2024-11-22'),
    description: "Ingreso por grabación de álbum",
    value: 2800,
    active: true,
    user: "6732c868ec77ef636435180a"
  },
  {
    date: new Date('2024-11-25'),
    description: "Compra de instrumentos musicales",
    value: -450,
    active: false,
    user: "6732c868ec77ef636435180a"
  },
  {
    date: new Date('2024-11-28'),
    description: "Ingreso por sesión de estudio",
    value: 2600,
    active: true,
    user: "6732c868ec77ef636435180a"
  },
  {
    date: new Date('2024-11-30'),
    description: "Pago de reparación de vehículo",
    value: -250,
    active: false,
    user: "6732c868ec77ef636435180a"
  },
  {
    date: new Date('2024-12-02'),
    description: "Ingreso por enseñanza musical",
    value: 2700,
    active: true,
    user: "6732c868ec77ef636435180a"
  },
  //6732c868ec77ef636435180b
  {
    date: new Date('2024-10-02'),
    description: "Pago por servicio de diseño gráfico",
    value: 3000,
    active: true,
    user: "6732c868ec77ef636435180b"
  },
  {
    date: new Date('2024-10-04'),
    description: "Compra de equipo para diseño",
    value: -250,
    active: false,
    user: "6732c868ec77ef636435180b"
  },
  {
    date: new Date('2024-10-08'),
    description: "Pago de suscripción a software de diseño",
    value: -150,
    active: false,
    user: "6732c868ec77ef636435180b"
  },
  {
    date: new Date('2024-10-12'),
    description: "Ingreso por trabajo freelance de diseño",
    value: 2200,
    active: true,
    user: "6732c868ec77ef636435180b"
  },
  {
    date: new Date('2024-10-16'),
    description: "Compra de libros de diseño gráfico",
    value: -180,
    active: false,
    user: "6732c868ec77ef636435180b"
  },
  {
    date: new Date('2024-10-19'),
    description: "Pago de servicios de internet",
    value: -120,
    active: false,
    user: "6732c868ec77ef636435180b"
  },
  {
    date: new Date('2024-10-23'),
    description: "Ingreso por curso online de diseño",
    value: 2500,
    active: true,
    user: "6732c868ec77ef636435180b"
  },
  {
    date: new Date('2024-10-26'),
    description: "Compra de cámara fotográfica",
    value: -450,
    active: false,
    user: "6732c868ec77ef636435180b"
  },
  {
    date: new Date('2024-10-29'),
    description: "Ingreso por proyecto de branding",
    value: 2700,
    active: true,
    user: "6732c868ec77ef636435180b"
  },
  {
    date: new Date('2024-11-02'),
    description: "Pago de transporte para sesión fotográfica",
    value: -80,
    active: false,
    user: "6732c868ec77ef636435180b"
  },
  {
    date: new Date('2024-11-06'),
    description: "Ingreso por trabajo de ilustración",
    value: 1900,
    active: true,
    user: "6732c868ec77ef636435180b"
  },
  {
    date: new Date('2024-11-09'),
    description: "Pago de electricidad",
    value: -100,
    active: false,
    user: "6732c868ec77ef636435180b"
  },
  {
    date: new Date('2024-11-13'),
    description: "Ingreso por diseño de logo",
    value: 2300,
    active: true,
    user: "6732c868ec77ef636435180b"
  },
  {
    date: new Date('2024-11-16'),
    description: "Compra de software de edición gráfica",
    value: -300,
    active: false,
    user: "6732c868ec77ef636435180b"
  },
  {
    date: new Date('2024-11-19'),
    description: "Pago de suscripción a servicio de almacenamiento en la nube",
    value: -200,
    active: false,
    user: "6732c868ec77ef636435180b"
  },
  {
    date: new Date('2024-11-22'),
    description: "Ingreso por asesoría en branding",
    value: 2600,
    active: true,
    user: "6732c868ec77ef636435180b"
  },
  {
    date: new Date('2024-11-25'),
    description: "Compra de materiales para sesiones fotográficas",
    value: -350,
    active: false,
    user: "6732c868ec77ef636435180b"
  },
  {
    date: new Date('2024-11-28'),
    description: "Ingreso por diseño de campaña publicitaria",
    value: 2800,
    active: true,
    user: "6732c868ec77ef636435180b"
  },
  {
    date: new Date('2024-11-30'),
    description: "Pago de reparación de computadora",
    value: -250,
    active: false,
    user: "6732c868ec77ef636435180b"
  },
  {
    date: new Date('2024-12-02'),
    description: "Ingreso por diseño web",
    value: 3000,
    active: true,
    user: "6732c868ec77ef636435180b"
  },
  //6732c868ec77ef636435180c
  {
    date: new Date('2024-10-02'),
    description: "Pago por consultoría financiera",
    value: 4000,
    active: true,
    user: "6732c868ec77ef636435180c"
  },
  {
    date: new Date('2024-10-04'),
    description: "Compra de libros de economía",
    value: -200,
    active: false,
    user: "6732c868ec77ef636435180c"
  },
  {
    date: new Date('2024-10-08'),
    description: "Pago de suscripción a plataforma de análisis",
    value: -150,
    active: false,
    user: "6732c868ec77ef636435180c"
  },
  {
    date: new Date('2024-10-12'),
    description: "Ingreso por asesoría a empresas",
    value: 5000,
    active: true,
    user: "6732c868ec77ef636435180c"
  },
  {
    date: new Date('2024-10-16'),
    description: "Compra de material educativo sobre inversiones",
    value: -300,
    active: false,
    user: "6732c868ec77ef636435180c"
  },
  {
    date: new Date('2024-10-19'),
    description: "Pago de servicios de internet",
    value: -120,
    active: false,
    user: "6732c868ec77ef636435180c"
  },
  {
    date: new Date('2024-10-23'),
    description: "Ingreso por charla sobre finanzas personales",
    value: 3500,
    active: true,
    user: "6732c868ec77ef636435180c"
  },
  {
    date: new Date('2024-10-26'),
    description: "Compra de software de análisis financiero",
    value: -500,
    active: false,
    user: "6732c868ec77ef636435180c"
  },
  {
    date: new Date('2024-10-29'),
    description: "Ingreso por auditoría contable",
    value: 4200,
    active: true,
    user: "6732c868ec77ef636435180c"
  },
  {
    date: new Date('2024-11-02'),
    description: "Pago de transporte para reuniones",
    value: -80,
    active: false,
    user: "6732c868ec77ef636435180c"
  },
  {
    date: new Date('2024-11-06'),
    description: "Ingreso por consultoría para startup",
    value: 4800,
    active: true,
    user: "6732c868ec77ef636435180c"
  },
  {
    date: new Date('2024-11-09'),
    description: "Pago de electricidad",
    value: -100,
    active: false,
    user: "6732c868ec77ef636435180c"
  },
  {
    date: new Date('2024-11-13'),
    description: "Ingreso por curso de inversiones online",
    value: 3900,
    active: true,
    user: "6732c868ec77ef636435180c"
  },
  {
    date: new Date('2024-11-16'),
    description: "Compra de equipo para videoconferencias",
    value: -350,
    active: false,
    user: "6732c868ec77ef636435180c"
  },
  {
    date: new Date('2024-11-19'),
    description: "Pago de seguro médico",
    value: -200,
    active: false,
    user: "6732c868ec77ef636435180c"
  },
  {
    date: new Date('2024-11-22'),
    description: "Ingreso por asesoría en finanzas corporativas",
    value: 4600,
    active: true,
    user: "6732c868ec77ef636435180c"
  },
  {
    date: new Date('2024-11-25'),
    description: "Compra de equipo de oficina",
    value: -400,
    active: false,
    user: "6732c868ec77ef636435180c"
  },
  {
    date: new Date('2024-11-28'),
    description: "Ingreso por conferencias sobre gestión financiera",
    value: 5000,
    active: true,
    user: "6732c868ec77ef636435180c"
  },
  {
    date: new Date('2024-11-30'),
    description: "Pago de reparación de vehículo",
    value: -300,
    active: false,
    user: "6732c868ec77ef636435180c"
  },
  {
    date: new Date('2024-12-02'),
    description: "Ingreso por asesoría financiera a empresas",
    value: 5500,
    active: true,
    user: "6732c868ec77ef636435180c"
  }

]


Finace.insertMany(finances)