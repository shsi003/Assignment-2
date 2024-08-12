document.addEventListener("DOMContentLoaded", () => {
	const products = [];

	const productRegistry = document.querySelector(".Product-registry");
	const productName = document.querySelector(".Product-name");
	const productID = document.querySelector(".Product-ID");
	const manufacturer = document.querySelector(".manufacturer");
	const expirationDate = document.querySelector(".Expiration-date");
	const quantity = document.querySelector(".Quantity");
	const productListUl = document.querySelector(".product-list-ul");

	productRegistry.addEventListener("submit", (e) => {
		e.preventDefault();
		
		Product.addProduct(newProduct);
		productRegistry.reset();
		console.log(newProduct);
		console.log(products);
	})

	class Product {
		constructor(productName, productID, manufacturer, expirationDate, quanity){
			this.productName = productName;
			this.productID = productID;
			this.manufacturer = manufacturer;
			this.expiraitonDate = expirationDate;
			this.quantity = qunatity;
		}

		static deleteProduct(id, productsArray){
			const index = productsArray.findIndex(product => product.ID.toString() === id.toString());
			if(index !== -1){
				productsArray.splice(index, 1);
			}
		}
	}

	
});