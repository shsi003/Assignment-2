import { Product } from "./product";

document.addEventListener("DOMContentLoaded", () => {

/*
Code format adapted from/inspired  by Reza Dianat´s "Object-oriented-project ",
availabe at https://kristiania.instructure.com/courses/11371/files/1308468?module_item_id=455784

*/ 	

	const products = JSON.parse(localStorage.getItem('products')) || [];
	const productRegistry = document.querySelector(".Product-registry");
	const productName = document.querySelector(".Product-name");
	const productID = document.querySelector(".Product-ID");
	const manufacturer = document.querySelector(".Manufacturer");
	const expirationDate = document.querySelector(".Expiration-date");
	const quantity = document.querySelector(".Quantity");
	const productListUl = document.querySelector(".product-list-ul");

	

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