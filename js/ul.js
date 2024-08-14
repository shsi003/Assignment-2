//Adapted from "Object-Oriented-Programming.pdf" 
//at https://kristiania.instructure.com/courses/11371/files/1308468?module_item_id=455784

export class UL {
	static renderProducts(products) {
		const productListUl = document.querySelector('.product-list-ul'); 

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
				const rowID = e.currentTarget.parentElement.parentElement.dataset.id;
				Product.deleteProduct(rowID);
				UL.renderProducts(Product.getProducts()); 
			});
		});
	}
}
