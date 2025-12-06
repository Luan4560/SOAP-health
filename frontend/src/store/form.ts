import { create } from "zustand";

const usePreviewData = create<UsePreviewDataProps>()((set) => ({
  previewData: null,
  sizesData: null,
  ingredientsData: null,
  setIngredientsDataStore: (ingredientsData) =>
    set(() => ({ ingredientsData })),

  setPreviewDataStore: (data) => set({ previewData: data }),

  setSizesDataStore: (sizesData) => set(() => ({ sizesData })),
}));

export default usePreviewData;
