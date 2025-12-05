import { useState, useEffect } from "react";
import { getSizes, getIngredients } from "../services";
import useFormData from "../store/form";

export const useInitialData = () => {
  const [loading, setLoading] = useState(true);

  const setSizesDataStore = useFormData((state) => state.setSizesDataStore);
  const setIngredientsDataStore = useFormData(
    (state) => state.setIngredientsDataStore
  );

  useEffect(() => {
    const fetchData = async () => {
      const [sizesData, ingredientsData] = await Promise.all([
        getSizes(),
        getIngredients(),
      ]);

      setSizesDataStore(sizesData);
      setIngredientsDataStore(ingredientsData);

      setLoading(false);
    };
    fetchData();
  }, [setIngredientsDataStore, setSizesDataStore]);

  return {
    loading,
  };
};
