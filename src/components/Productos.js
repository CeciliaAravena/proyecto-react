export const products = [

    {
      "id": 1,
      "name": "PAQUETE STARTED",
      "category": "publicidad",
      "description": "6 Contenidos Mensuales",
      "price": "800",
      "img": "https://res.cloudinary.com/dmvryasce/image/upload/v1640261555/cm_os7phk.png",
      "stock": 1
    },
    {
      "id": 2,
      "name": "PAQUETE PLUS",
      "category": "publicidad",
      "description": "12 CONTENIDOS MENSUALES",
      "price": "1500",
      "img": "https://res.cloudinary.com/dmvryasce/image/upload/v1640261555/cm_os7phk.png",
      "stock": 1
    },
    {
      "id": 3,
      "name": "PAQUETE PREMIUM ",
      "category": "publicidad",
      "description": "20 Contenidos Mensuales",
      "price": "1200",
      "img": "https://res.cloudinary.com/dmvryasce/image/upload/v1640261555/cm_os7phk.png",
      "stock": 1
    },
    {
      "id": 4,
      "name": "Fotografia Starter",
      "category": "Fotografia",
      "description": "15 fotografias de producto editadas no incluye etilismo",
      "price": "3500",
      "img": "https://res.cloudinary.com/dmvryasce/image/upload/v1640261565/media_w7uvjo.png",
      "stock": 1
    },
    {
      "id": 5,
      "name": "fotografia Gold",
      "category": "Fotografia",
      "description": "15 fotografias de producto editadas, incluye etilismo",
      "price": "4000",
      "img": "https://res.cloudinary.com/dmvryasce/image/upload/v1640261565/media_w7uvjo.png",
      "stock": 1
    }
]

export const traerProductos = new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve(products);
  }, 2000);
});