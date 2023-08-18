const products = document.querySelectorAll('.producto');
console.log(products);
const priceRange = document.getElementById('price-range');
const priceValue = document.getElementById('price-value');
const precioPro = []
Rango_slider();
function Rango_slider(){
    products.forEach(product =>{
        const productPrice = product.querySelector('#Precio').innerHTML.replace("$", "")
        precioPro.push(productPrice)
    });
    let maximo = Math.max(...precioPro);
    let minimo = Math.min(...precioPro);
    let rangoPrecio = document.querySelector('#price-range');
    rangoPrecio.min = minimo
    rangoPrecio.max = maximo
    rangoPrecio.value = maximo
}
priceRange.oninput = function() {
priceValue.innerHTML = "$" + this.value;  
products.forEach(product => {
    const productPrice = product.querySelector('#Precio').innerHTML.replace("$", "");
    precioPro.push(productPrice)
    if (productPrice <= priceRange.value) {
        product.style.display = "block";
    } else {
        product.style.display = "none";
    }
});
}  
priceValue.innerHTML = "$" + priceRange.value;    
