import { Pizza } from "./pizza.model";

const OrderStatus = ['delivered', 'pending', 'cancelled'];

export class Order {
    id:  number = 1;
    pizzas: Pizza[] = [];
    address!: Address;
    status: string = 'pending';
    createdTime: number = new Date().getTime();

    constructor(id: number) {
        this.id = id;
        this.status =  OrderStatus[Math.floor(Math.random() * 3)];
    }
}

export class Address {
    name: string = '';
    email: string = '';
    contact: string = '';
    address: string = '';
}