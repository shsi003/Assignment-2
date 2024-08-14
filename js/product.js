//Adapted from "Object-Oriented-Programming.pdf" 
//at https://kristiania.instructure.com/courses/11371/files/1308468?module_item_id=455784

export class Item {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}

export class Product extends Item {
    constructor(productName, productID, manufacturer, expirationDate, quantity) {
        super(productName, productID);
        this.manufacturer = manufacturer;
        this.expirationDate = expirationDate;
        this.quantity = quantity;
    }

    static getProducts() {
        return JSON.parse(localStorage.getItem('products')) || []; 
    }

    static addProduct(product) {
        const products = Product.getProducts(); 
        const exists = products.some(item => item.productID === product.productID);
        if (exists) {
            alert('Product ID must be unique');
            return;
        }
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
