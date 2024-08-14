export class Product {
	constructor(productName, productID, manufacturer, expirationDate, quantity) {
		this.productName = productName;
		this.productID = productID;
		this.manufacturer = manufacturer;
		this.expirationDate = expirationDate;
		this.quantity = quantity;
	}

	static getProducts() {
		return JSON.parse(localStorage.getItem('products')) || []; 
	}

	static addProduct(product) {
		const products = Product.getProducts(); 
		products.push(product); 
		localStorage.setItem('products', JSON.stringify(products)); 
	}

	static deleteProduct(productID) {
		const products = Product.getProducts(); 
		const index = products.findIndex(item => item.productID.toString() === productID.toString());
		if (index !== -1) {
			products.splice(index, 1); 
			localStorage.setItem('products', JSON.stringify(products)); 
		}
	}
}
