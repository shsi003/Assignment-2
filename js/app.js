import { Product } from "./product.js";
import { UL } from "./UL.js"; 

document.addEventListener("DOMContentLoaded", () => {
    /*
    Code format adapted from/inspired by Reza Dianat´s "Object-oriented-project ",
    available at https://kristiania.instructure.com/courses/11371/files/1311555?module_item_id=457059
    */ 	

    const products = Product.getProducts(); 
    const productRegistry = document.querySelector(".Product-registry");
    const productName = document.querySelector(".Product-name");
    const productID = document.querySelector(".Product-ID");
    const manufacturer = document.querySelector(".Manufacturer");
    const expirationDate = document.querySelector(".Expiration-date");
    const quantity = document.querySelector(".Quantity");
    const productListUl = document.querySelector(".product-list-ul");


    UL.renderProducts(products);

    productRegistry.addEventListener("submit", (e) => {
        e.preventDefault();

        let newProduct = new Product(
            productName.value,
            productID.value,
            manufacturer.value,
            expirationDate.value,
            quantity.value
        );

        Product.addProduct(newProduct);
        UL.renderProducts(Product.getProducts()); 
        productRegistry.reset();
        console.log(newProduct);
        console.log(Product.getProducts()); 
    });

    console.log(Product.getProducts()); 
});
