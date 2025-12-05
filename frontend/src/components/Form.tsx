import { useOrderForm } from "../hooks/useOrderForm";
import { Checkbox } from "./form/CheckBox";
import { Input } from "./form/Input";
import { Select } from "./form/Select";

export const Form = () => {
  const { formData, sizeData, ingredientsData, handleChange, handleSubmit } =
    useOrderForm();

  return (
    <>
      <form className="card" onSubmit={handleSubmit}>
        <div className="form-content">
          <div className="form-item">
            <Input
              id="customerName"
              type="text"
              name="customerName"
              placeholder="Customer name"
              label="Customer Name"
              onChange={handleChange}
              value={formData.customerName}
            />
          </div>

          <div className="form-item">
            <Select
              id="sizeId"
              name="sizeId"
              value={formData.sizeId}
              onChange={handleChange}
              options={sizeData}
            />
          </div>

          <div className="form-item-checkbox">
            {ingredientsData?.map((item: IngredientsProps) => (
              <div key={item.id} className="form-item-checkbox-select">
                <Checkbox
                  type="checkbox"
                  id={`ingredient-${item.id}`}
                  name="ingredientIds"
                  label={item.name}
                  value={item.id}
                  checked={formData.ingredientIds.includes(item.id)}
                  price={item.extraPrice}
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>

          <button type="submit">Create Pizza</button>
        </div>
      </form>
    </>
  );
};
