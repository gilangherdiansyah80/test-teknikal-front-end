const Label = ({ id, name, style, children }) => {
  return (
    <label id={id} name={name} className={style}>
      {children}
    </label>
  );
};

export default Label;
