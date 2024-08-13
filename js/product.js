export class Product {
	constructor(productName, productID, manufacturer, expirationDate, quantity){
		this.productName = productName;
		this.productID = productID;
		this.manufacturer = manufacturer;
		this.expirationDate = expirationDate;
		this.quantity = quantity;
	}

	static addProduct(product, products){
		products.push(product);
		localStorage.setItem('products', JSON.stringify(products));
	}

	static deleteProduct(productID, productsArray){
		const index = productsArray.findIndex(Product => Product.productID.toString() === productID.toString());
		if(index !== -1){
			productsArray.splice(index, 1);
			localStorage.setItem('products', JSON.stringify(productsArray));
		}


	}
}