console.log('*************unir dos objetos en java script******************');

const product = {
    productoName: 'portatil Dell',
    price:6465465,
    available: true
}
const measurement = {
    weight:'10 kg',
    length:'1 meter',
}
//unir los dos objetos

const newProduct= { ...product, ...measurement};
console.log(product);
console.log(newProduct);