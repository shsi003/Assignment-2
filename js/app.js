import { Product } from "./product.js";
import { Ul } from "./UL.js";

document.addEventListener("DOMContentLoaded", () => {

/*
Code format adapted from/inspired  by Reza Dianat´s "Object-oriented-project ",
availabe at https://kristiania.instructure.com/courses/11371/files/1311555?module_item_id=457059

*/ 	

	const products = JSON.parse(localStorage.getItem('products')) || [];
	const productRegistry = document.querySelector(".Product-registry");
	const productName = document.querySelector(".Product-name");
	const productID = document.querySelector(".Product-ID");
	const manufacturer = document.querySelector(".Manufacturer");
	const expirationDate = document.querySelector(".Expiration-date");
	const quantity = document.querySelector(".Quantity");
	const productListUl = document.querySelector(".product-list-ul");

	
	Ul.renderProducts(products, productListUl);

	

	

	productRegistry.addEventListener("submit", (e) => {
		e.preventDefault();

	

		let newProduct;
		newProduct = new Product(
			productName.value,
			productID.value,
			manufacturer.value,
			expirationDate.value,
			quantity.value
		)


	

	
		Product.addProduct(newProduct);
		localStorage.setItem('products', JSON.stringify(products));
		UL.renderProducts(products);
		productRegistry.reset();
		console.log(newProduct);
		console.log(products);


	});

	

	


console.log(products);
});