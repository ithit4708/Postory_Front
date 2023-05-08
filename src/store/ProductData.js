import {create} from "zustand";

export const useProductStore = create((set) => ( {
    product: {},
    setProduct: (input) => set((state) => ({product: {...state.product, ...input}})),
}))