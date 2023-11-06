
const products =[
    {
        id: '1',
        nombre: 'Cabaña 1',
        precio:2000,
        categoria: 'Familiar',
        img:'https://mundocabanias.com.ar/upload/cabanas-tronco-4.jpg',
        disponibilidad: 'Disponible'
    },

    {
        id:'2',
        nombre: 'Cabaña 2',
        precio:1000,
        categoria: 'Parejas',
        img:'https://mundocabanias.com.ar/upload/cabanas-tronco-4.jpg',
        disponibilidad: 'Disponibe'

    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsId = (productId) =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}
