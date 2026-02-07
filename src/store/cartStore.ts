import { defineStore } from 'pinia'

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as Product[]
  }),
  actions: {
    addToCart(product: Product) {
      this.items.push(product);
    },
    removeFromCart(productId: string) {
      this.items = this.items.filter(item => item.id !== productId);
    },
    clearCart() {
      this.items = [];
    }
  },
  getters: {
    itemCount(state): number {
      return state.items.length;
    },
    totalPrice(state): string {
      return state.items
      .reduce((sum, item) => sum + item.price, 0)
      .toFixed(2);
    }
  }
})