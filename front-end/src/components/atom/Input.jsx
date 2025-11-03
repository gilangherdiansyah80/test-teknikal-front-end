const Input = ({ type, style, name, value, onChange, placeholder, min }) => {
  return (
    <input
      type={type}
      className={style}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      min={min}
    />
  );
};

export default Input;
