const Button = ({ children, style, type, onClick }) => {
  return (
    <button className={style} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
