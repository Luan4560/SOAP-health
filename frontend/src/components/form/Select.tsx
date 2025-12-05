export const Select = ({
  id,
  name,
  value,
  onChange,
  options,
  ...rest
}: SelectProps) => {
  return (
    <select id={id} name={name} value={value} onChange={onChange} {...rest}>
      <option value="" disabled>
        Select a size
      </option>

      {options?.map((item: SizeProps) => (
        <option key={item.id} value={item.id}>
          {item.name} - ${item.basePrice}
        </option>
      ))}
    </select>
  );
};
