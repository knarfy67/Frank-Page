import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAppState = create(
  persist(
    (set, get) => ({
      // State
      darkMode: false,
      open: false,
      scrolled: false,

      // Setters
      setOpen: (open) => set({ open }),
      setScrolled: (value) => set({ scrolled: value }),

      // Actions
      toggleDarkMode: () => {
        const newMode = !get().darkMode;
        set({ darkMode: newMode });

        if (newMode) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      },

      scrollToSection: (id) => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          set({ open: false }); // ✅ close mobile menu
        }
      },
    }),
    {
      name: "app-storage",
      partialize: (state) => ({ darkMode: state.darkMode }),
      onRehydrateStorage: () => (state) => {
        if (state?.darkMode) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      },
    }
  )
);

export default useAppState;
