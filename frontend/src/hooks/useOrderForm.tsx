import { useState, type FormEvent } from "react";
import { createOrder } from "../services";

import useFormData from "../store/form";

export const useOrderForm = () => {
  const sizeData = useFormData((state) => state.sizesData);
  const ingredientsData = useFormData((state) => state.ingredientsData);
  const setPreviewData = useFormData((state) => state.setPreviewDataStore);

  const [formData, setFormData] = useState({
    customerName: "",
    sizeId: "",
    ingredientIds: [] as string[],
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();

      const payload = new FormData();

      payload.append("customerName", formData.customerName);
      payload.append("sizeId", formData.sizeId);
      formData.ingredientIds.forEach((id) => {
        payload.append("ingredientIds[]", id);
      });

      const response = await createOrder(formData);
      setPreviewData(response);
      alert("Created order success");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checkbox = e.target as HTMLInputElement;
      const id = checkbox.value;

      setFormData((prevData) => {
        const currentIds = prevData.ingredientIds;
        if (checkbox.checked) {
          return { ...prevData, ingredientIds: [...currentIds, id] };
        } else {
          return {
            ...prevData,
            ingredientIds: currentIds.filter((itemId) => itemId !== id),
          };
        }
      });
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  return {
    sizeData,
    ingredientsData,
    handleSubmit,
    handleChange,
    formData,
  };
};
