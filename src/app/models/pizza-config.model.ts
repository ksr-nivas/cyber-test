export interface PizzaConfig {
    availableSizes: string[],
    prices: Price[],
    toppings: string[]
}

interface Price {
    size: string,
    price: number
}