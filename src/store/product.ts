import { Product } from 'types/types';
import { create } from 'zustand';

interface Actions {
  setProduct: (newProducts: Product) => void;
  updateOnSale: (status: string) => void;
}

interface ProductsStore {
  product: Product | null;
  actions: Actions;
}

export const useProductStore = create<ProductsStore>((set) => ({
  product: null,
  actions: {
    setProduct: (newProduct) => set(() => ({ product: newProduct })),
    updateOnSale: (status) =>
      set((state) => ({
        product: state.product ? { ...state.product, post_status: status } : null,
      })),
  },
}));

export const useProduct = () => useProductStore((state) => state.product);
export const useProductActions = () => useProductStore((state) => state.actions);
