export const Input = ({
  id,
  type,
  name,
  placeholder,
  value,
  onChange,
  label,
  ...rest
}: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        {...rest}
      />
    </>
  );
};
