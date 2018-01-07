export interface Product {
  id: number,
  price: number,
  name: string
}

// New interface for client cart
export interface Item {
  product_id: number,
  quantity: number
}
