import { create } from 'zustand';

const useUserStore = create((set) => ({
  user: null,
  isLoggedIn: false,
  setUser: (newUser) => {
    set((state) => ({ ...state, user: newUser, isLoggedIn: !!newUser }));
  },
}));

export default useUserStore;
