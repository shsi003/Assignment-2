document.addEventListener("DOMContentLoaded", () => {
	const products = JSON.parse(localStorage.getItem('products')) || [];
	const productRegistry = document.querySelector(".Product-registry");
	const productName = document.querySelector(".Product-name");
	const productID = document.querySelector(".Product-ID");
	const manufacturer = document.querySelector(".Manufacturer");
	const expirationDate = document.querySelector(".Expiration-date");
	const quantity = document.querySelector(".Quantity");
	const productListUl = document.querySelector(".product-list-ul");

	class Product {
		constructor(productName, productID, manufacturer, expirationDate, quantity){
			this.productName = productName;
			this.productID = productID;
			this.manufacturer = manufacturer;
			this.expirationDate = expirationDate;
			this.quantity = quantity;
		}

		static addProduct(product){
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

	class UL {
		static renderProducts(products) {
			productListUl.textContent = '';
			products.forEach((product) => {
				const liRow = document.createElement('li');
				const renderedProductName = document.createElement('span');
				const renderedProductID = document.createElement('span');
				const renderedManufacturer = document.createElement('span');
				const renderedExpirationDate = document.createElement('span');
				const renderedQuantity = document.createElement('span');
				const deleteButtonContainer = document.createElement('span');
				const deleteButton = document.createElement('button');

				renderedProductName.textContent = product.productName;
				renderedProductID.textContent = product.productID;
				renderedManufacturer.textContent = product.manufacturer;
				renderedExpirationDate.textContent = product.expirationDate;
				renderedQuantity.textContent = product.quantity;
				deleteButton.textContent = 'DELETE';

				liRow.classList.add('products-row');
				deleteButton.classList.add('delete-button');

				liRow.dataset.id = product.productID;
				productListUl.append(liRow);
				liRow.append(renderedProductName, renderedProductID, renderedManufacturer,
					renderedExpirationDate, renderedQuantity, deleteButtonContainer);
				deleteButtonContainer.append(deleteButton);
				
				deleteButton.addEventListener('click', (e) => {
					const rowID = e.currentTarget.parentElement.parentElement.dataset.id
					Product.deleteProduct(rowID, products);
					UL.renderProducts(products);
				})
			})
		}
	}

	UL.renderProducts(products);

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