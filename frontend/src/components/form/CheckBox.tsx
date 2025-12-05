import type { ChangeEvent } from "react";

interface CheckBoxProps {
  id: string;
  type: string;
  name: string;
  checked: boolean | null;
  value: string;
  label: string;
  price: number | string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export const Checkbox = ({
  id,
  type,
  name,
  value,
  onChange,
  label,
  checked,
  price,
  ...rest
}: CheckBoxProps) => {
  return (
    <>
      <input
        id={`ingredient-${id}`}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        checked={checked ?? false}
        {...rest}
      />
      <div className="form-label-content">
        <label>{label}</label>
        <p>${Number(price).toFixed(2)}</p>
      </div>
    </>
  );
};
