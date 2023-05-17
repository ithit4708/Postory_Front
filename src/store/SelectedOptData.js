import {create} from 'zustand';

export const useSelectedStore = create((set) => ({
    selectedOptData: [],
    totalAmountData: 0,

    setSelectedOptData: (input) =>
        set((state) => ({ selectedOptData: [...input] })),

    setTotalAmountData: (input) =>
        set((state) => ({ totalAmountData: input })),
}));
