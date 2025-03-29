import { Product } from "@/app/products/types/products.type"

export interface CarRes {
  message: string
  numOfCartItems: number
  cart: Cart
}

export interface Cart {
  _id: string
  user: string
  cartItems: CartItem[]
  discount: number
  totalPrice: number
  totalPriceAfterDiscount: number
  createdAt: string
  updatedAt: string
  __v: number
}

export interface CartItem {
  product: Product
  price: number
  quantity: number
  _id: string
}
