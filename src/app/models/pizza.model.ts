export class Pizza {
    id: number = 0;
    name: string = 'Pizza 1';
    size: string = '';
    price: number = 0;
    toppings: Topping[] = [];

    constructor(id: number) {
        this.id = id;
        this.name = 'Pizza '+id;
    }
}

export class Topping {
    name: string;
    price: number;

    constructor(name: string = '', price: number = 0.99) {
        this.name = name;
        this.price = price;
    }
}